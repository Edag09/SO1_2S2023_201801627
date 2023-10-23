package main

import (
	pb "Client/gRCP-Client"
	"context"
	"fmt"
	"github.com/gofiber/fiber/v2"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"log"
)

var ctx = context.Background()

type Data struct {
	Carne    string
	Nombre   string
	Curso    string
	Nota     string
	Semestre string
	Year     string
}

func insertData(c *fiber.Ctx) error {
	var data map[string]string
	e := c.BodyParser(&data)
	if e != nil {
		return e
	}

	rank := Data{
		Carne:    data["album"],
		Nombre:   data["year"],
		Curso:    data["artist"],
		Nota:     data["ranked"],
		Semestre: data["semestre"],
		Year:     data["year"],
	}

	enviarServer(rank)
	return nil
}
s
func enviarServer(rank Data) {
	conn, err := grpc.Dial("localhost:3001", grpc.WithTransportCredentials(insecure.NewCredentials()),
		grpc.WithBlock())
	if err != nil {
		log.Fatalln(err)
	}

	cl := pb.NewGetInfoClient(conn)
	defer func(conn *grpc.ClientConn) {
		err := conn.Close()
		if err != nil {
			log.Fatalln(err)
		}
	}(conn)

	ret, err := cl.returnInfo(ctx, &pb.RequestId{
		Carne:    rank.Carne,
		Nombre:   rank.Nombre,
		Curso:    rank.Curso,
		Nota:     rank.Nota,
		Semestre: rank.Semestre,
		Year:     rank.Year,
	})
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println("Respuesta del server " + ret.GetInfo())
}

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"res": "todo bien",
		})
	})
	app.Post("/insert", insertData)

	err := app.Listen(":3000")
	if err != nil {
		return
	}
}
