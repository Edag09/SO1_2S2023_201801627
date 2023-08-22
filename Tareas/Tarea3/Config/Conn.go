package Config

import (
	"Tarea3/Entities"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Database *gorm.DB                                                                        //Creamos una variable global para la base de datos
var Uri = "root:090799@tcp(database_container)/player?charset=utf8&parseTime=True&loc=Local" //Aqui es donde conectamos a la base de datos

func Connect() error {
	var err error

	Database, err = gorm.Open(mysql.Open(Uri), &gorm.Config{
		SkipDefaultTransaction: true,
		PrepareStmt:            true,
	})
	if err != nil {
		panic(err)
	}

	err = Database.AutoMigrate(&Entities.Canciones{}) //Aqui es donde enviamos la información al strut para que la ordene
	if err != nil {
		return err
	}
	return nil
}
