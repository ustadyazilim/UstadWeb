package auth

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	service *Service
}

func NewHandler(service *Service) *Handler {
	return &Handler{service: service}
}

// NOTE(@Janberk): API Login Request Body.
type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

// NOTE(@Janberk): API Register Request Body.
type RegisterRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
	Name     string `json:"name" binding:"required"`
}

// NOTE(@Janberk): API Login Method.
func (h *Handler) Login(c *gin.Context) {
	var req LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid request"})
		return
	}
	user, token, err := h.service.Login(req.Email, req.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": err.Error()})
		return
	}
	// Set cookie with JWT token
	c.SetCookie("auth_token", token, 3600*24*30, "/", "", false, true)
	c.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}

// NOTE(@Janberk): API Register Method.
func (h *Handler) Register(c *gin.Context) {
	var req RegisterRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid request"})
		return
	}
	user, token, err := h.service.Register(req.Email, req.Password, req.Name)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
		return
	}
	// Set cookie with JWT token
	c.SetCookie("auth_token", token, 3600*24*30, "/", "", false, true)
	c.JSON(http.StatusCreated, gin.H{
		"user": user,
	})
}

// NOTE(@Janberk): API Logout Method.
func (h *Handler) Logout(c *gin.Context) {
	// Clear auth cookie
	c.SetCookie("auth_token", "", -1, "/", "", false, true)
	c.JSON(http.StatusOK, gin.H{"message": "Logged out successfully"})
}

// TODO(@UST-6): Implement a better GetSession Handler.
func (h *Handler) GetSession(c *gin.Context) {
	token, err := c.Cookie("auth_token")
	if err != nil {
		c.JSON(http.StatusOK, gin.H{"user": nil})
		return
	}
	user, err := h.service.ValidateToken(token)
	if err != nil {
		c.SetCookie("auth_token", "", -1, "/", "", false, true)
		c.JSON(http.StatusOK, gin.H{"user": nil})
		return
	}
	c.JSON(http.StatusOK, gin.H{"user": user})
}