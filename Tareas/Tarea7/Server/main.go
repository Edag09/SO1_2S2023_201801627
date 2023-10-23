package main

import (
	"context"
	"fmt"
	pb "golangSocket/grpc-server"
	"google.golang.org/grpc"
	"log"
	"net"
)

var ctx = context.Background()

type server struct {
	pb.UnimplementedGetInfoServer
}

const (
	port = ":3001"
)

type Data struct {
	Carne    string
	Nombre   string
	Curso    string
	Nota     string
	Semestre string
	Year     string
}

func (s *server) ReturnInfo(ctx context.Context, in *pb.RequestId) (*pb.ReplyInfo, error) {
	fmt.Println("Recibí de cliente: ", in.GetArtist())
	data := Data{
		Nombre:   in.GetNombre(),
		Carne:    in.GetCarne(),
		Curso:    in.GetCurso(),
		Nota:     in.GetNota(),
		Semestre: in.GetSemestre(),
		Year:     in.GetYear(),
	}
	fmt.Println(data)
	return &pb.ReplyInfo{Info: "Hola cliente, recibí el comentario"}, nil
}

func main() {
	listen, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalln(err)
	}
	s := grpc.NewServer()
	pb.RegisterGetInfoServer(s, &server{})

	if err := s.Serve(listen); err != nil {
		log.Fatalln(err)
	}
}
