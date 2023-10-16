package Config

import (
	"context"
	"fmt"
	"log"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()
var rdb *redis.Client

type Data struct {
	Album  string
	Artist string
	Year   string
}

func Connections() {
	rdb = redis.NewClient(&redis.Options{
		Addr:     "172.17.0.2:6379",
		Password: "",
		DB:       12,
	})
	pong, err := rdb.Ping(ctx).Result()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(pong)
}

func Inserts(c *fiber.Ctx) error {
	var data map[string]string
	e := c.BodyParser(&data)

	if e != nil {
		return e
	}

	rank := Data{
		Album:  data["album"],
		Artist: data["artist"],
		Year:   data["year"],
	}

	array := rank.Artist

	year, err := strconv.Atoi(rank.Year)

	if err != nil {
		return err
	}

	rdb.ZAddArgs(ctx, array, redis.ZAddArgs{
		NX: true,
		Members: []redis.Z{{
			Score:  float64(year),
			Member: rank.Album,
		}},
	})

	return nil
}
