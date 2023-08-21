package Entities

import (
	"gorm.io/gorm"
)

// Biblioteca is the struct of the table Biblioteca

type Canciones struct {
	gorm.Model
	Nombre_cancion string //Nombre de la canción
	Nombre_artista string //Nombre del artista
	Genero_cancion string //Genero de la canción
	Fecha          string //Fecha de lanzamiento
}
