FROM golang:1.18.1

WORKDIR /back_container

COPY main.go .
COPY Entities/Biblioteca.go Entities/
COPY Config/Conn.go Config/
COPY go.mod ./
COPY go.sum ./

RUN go mod download

EXPOSE 8080

CMD ["go", "run", "main.go"]