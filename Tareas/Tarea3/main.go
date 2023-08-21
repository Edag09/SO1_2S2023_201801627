package main

import (
	"Tarea3/Config"
	"Tarea3/Entities"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()      // Create a new Fiber instance
	err := Config.Connect() // Connect to the database
	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	if err != nil {
		log.Fatal("Error", err)
	}

	app.Post("/", func(c *fiber.Ctx) error {
		var cancion Entities.Canciones
		if err := c.BodyParser(&cancion); err != nil {
			return err
		}
		insertData(cancion)

		return c.JSON(cancion)
	})

	err = app.Listen(":8080") // Listen on port 8080
	if err != nil {
		log.Fatal("Error", err)
	}
}

func insertData(cancion Entities.Canciones) {
	songs := Entities.Canciones{
		Nombre:  cancion.Nombre,
		Artista: cancion.Artista,
		Genero:  cancion.Genero,
		Fecha:   cancion.Fecha,
	}
	Config.Database.Create(&songs)
}
