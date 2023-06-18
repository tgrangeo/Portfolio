package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func hello(w http.ResponseWriter, r *http.Request) {
	log.Println("hello")
}
func exampleHandler(w http.ResponseWriter, r *http.Request) {
	person := "person{Name: \"Shashank\", LastName: \"Tiwari\", Age: 30}"

	jsonResponse, _ := json.Marshal(person)
	log.Println("hello")
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonResponse)
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/api/v1", hello).Methods("POST")
	router.HandleFunc("/api/v1/example", exampleHandler).Methods("GET")
	http.ListenAndServe(":8080", router)
}
