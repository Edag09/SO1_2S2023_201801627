package Connection

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Database *gorm.DB
var Uri = "root:090799@tcp(localhost)/proyecto1?charset=utf8mb4&parseTime=True&loc=Local"

func Connect() error {
	var err error

	Database, err = gorm.Open(mysql.Open(Uri), &gorm.Config{
		SkipDefaultTransaction: true,
		PrepareStmt:            true,
	})

	if err != nil {
		panic(err)
	}

	return nil
}
