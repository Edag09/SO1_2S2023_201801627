FROM golang:1.18.1

WORKDIR /back_container/server

COPY main.go .
COPY Config/Connection.go Config/
COPY go.mod ./
COPY go.sum ./

RUN go mod download
RUN go get github.com/go-sql-driver/mysql

CMD [ "go", "run", "main.go" ]