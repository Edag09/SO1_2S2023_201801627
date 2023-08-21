package Entities

import (
	"gorm.io/gorm"
)

// Biblioteca is the struct of the table Biblioteca

type Canciones struct {
	gorm.Model
	Nombre  string //Nombre de la canción
	Artista string //Nombre del artista
	Genero  string //Genero de la canción
	Fecha   string //Fecha de lanzamiento
}
