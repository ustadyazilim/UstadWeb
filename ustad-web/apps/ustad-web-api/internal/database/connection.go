package database

import (
	"fmt"
	"os"
    "github.com/ustadyazilim/ustad-web-api/internal/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// NOTE(@Janberk): Database Connection Method.
func Connect() (*gorm.DB, error) {
	// Get database connection details from environment variables
	host := getEnv("DB_HOST", "localhost")
	port := getEnv("DB_PORT", "5432")
	user := getEnv("DB_USER", "postgres")
	password := getEnv("DB_PASSWORD", "postgres")
	dbname := getEnv("DB_NAME", "ustad-web")
	dsn := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, err
	}
	// Auto migrate models
	err = db.AutoMigrate(&models.User{})
	if err != nil {
		return nil, err
	}
	return db, nil
}
// Helper Methods.
func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}