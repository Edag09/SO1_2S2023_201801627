package main

import (
	"Back/Config"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	Config.Connections()

	app.Post("/insert", Config.Inserts)

	err := app.Listen(":8000")
	if err != nil {
		return
	}
}
