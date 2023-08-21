package main

import (
	"Tarea3/Config"
	"Tarea3/Entities"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()      // Create a new Fiber instance
	err := Config.Connect() // Connect to the database

	if err != nil {
		log.Fatal("Error", err)
	}

	insertData()

	err = app.Listen(":8000") // Listen on port 8000
	if err != nil {
		log.Fatal("Error", err)
	}
}

func insertData() {
	songs := Entities.Canciones{
		Nombre_cancion: "New Divice",
		Nombre_artista: "Linkin Park",
		Genero_cancion: "Rock",
		Fecha:          "2009-06-12",
	}
	Config.Database.Create(&songs)
}
