package main

import (
	"encoding/json"
	"net/http"
)

type Student struct {
	Carnet string `json:"Carnet"`
	Nombre string `json:"Nombre"`
}

func main() {
	http.HandleFunc("/data", data)
	http.ListenAndServe(":4200", nil)
}

func data(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, "Solo se puede hacer peticiones POST", http.StatusMethodNotAllowed)
		return
	}

	student := Student{"201801627", "Eduardo René Agustin Mendoza"}
	json, _ := json.Marshal(student)

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}
