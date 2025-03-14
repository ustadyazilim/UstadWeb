package main

import (
	"log"
	"os"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/ustadyazilim/ustad-web-api/internal/auth"
	"github.com/ustadyazilim/ustad-web-api/internal/database"
)

func main() {
	db, err := database.Connect()
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3001", "http://localhost:3002", "http://localhost:3003"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))
	authService := auth.NewService(db)
	authHandler := auth.NewHandler(authService)
	// NOTE(@Janberk): API Routes here.
	api := r.Group("/api")
	{
		authRoutes := api.Group("/auth")
		{
			authRoutes.POST("/login", authHandler.Login)
			authRoutes.POST("/register", authHandler.Register)
			authRoutes.POST("/logout", authHandler.Logout)
			authRoutes.GET("/session", authHandler.GetSession)
		}
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	log.Printf("Server running on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}