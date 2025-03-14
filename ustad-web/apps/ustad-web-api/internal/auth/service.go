package auth

import (
	"errors"
	"time"
    "github.com/dgrijalva/jwt-go"
    "github.com/ustadyazilim/ustad-web-api/internal/models"
    "golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type Service struct {
	db *gorm.DB
}

func NewService(db *gorm.DB) *Service {
	return &Service{db: db}
}

/** 
	* NOTE(@Janberk): 
	* In production, use environment variable
	* in here.
*/
var jwtSecret = []byte("your-secret-key") 

// NOTE(@Janberk): API Login Service.
func (s *Service) Login(email, password string) (*models.User, string, error) {
	var user models.User
	if err := s.db.Where("email = ?", email).First(&user).Error; err != nil {
		return nil, "", errors.New("Invalid email or password")
	}
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password)); err != nil {
		return nil, "", errors.New("Invalid email or password")
	}
	token, err := generateToken(user)
	if err != nil {
		return nil, "", err
	}
	// Don't return password
	user.Password = ""
	return &user, token, nil
}

// NOTE(@Janberk): API Register Service.
func (s *Service) Register(email, password, name string) (*models.User, string, error) {
	// Check if user already exists
	var existingUser models.User
	if err := s.db.Where("email = ?", email).First(&existingUser).Error; err == nil {
		return nil, "", errors.New("Email already in use")
	} else if !errors.Is(err, gorm.ErrRecordNotFound) {
		return nil, "", errors.New("Database error")
	}
	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return nil, "", errors.New("Failed to hash password")
	}
	// TODO(@Janberk): Move the global default user role, currently "student"
	// Create new user
	user := models.User{
		Email:    email,
		Password: string(hashedPassword),
		Name:     name,
		Role:     "student", // Default role
	}
	if err := s.db.Create(&user).Error; err != nil {
		return nil, "", errors.New("Failed to create user")
	}
	token, err := generateToken(user)
	if err != nil {
		return nil, "", err
	}
	// Don't return password
	user.Password = ""
	return &user, token, nil
}
// Helper Methods.
func (s *Service) ValidateToken(tokenString string) (*models.User, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return jwtSecret, nil
	})
	if err != nil || !token.Valid {
		return nil, errors.New("Invalid token")
	}
	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		return nil, errors.New("Invalid token claims")
	}
	userID, ok := claims["user_id"].(float64)
	if !ok {
		return nil, errors.New("Invalid user ID in token")
	}
	var user models.User
	if err := s.db.First(&user, uint(userID)).Error; err != nil {
		return nil, errors.New("User not found")
	}
	// Don't return password
	user.Password = ""
	return &user, nil
}
func generateToken(user models.User) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["user_id"] = user.ID
	claims["email"] = user.Email
	claims["exp"] = time.Now().Add(time.Hour * 24 * 30).Unix() // 30 days
	tokenString, err := token.SignedString(jwtSecret)
	if err != nil {
		return "", errors.New("Failed to generate token")
	}
	return tokenString, nil
}