package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	"net/smtp"
)

type ContactMe struct {
	Name    string
	Mail    string
	Message string
}

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

func contact(w http.ResponseWriter, r *http.Request) {
	log.Println("hello contact me")
	var c ContactMe
	err := json.NewDecoder(r.Body).Decode(&c)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	w.WriteHeader(http.StatusOK)

	auth := smtp.PlainAuth("", "thomas.grangeon9@gmail.com", "very secret pass", "smtp.gmail.com")

	smtp.SendMail("smtp.gmail.com:587", auth, "john.doe@gmail.com", []string{"thomas.grangeon9@gmail.com"}, []byte(c.Message))

}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/api/v1", hello).Methods("POST")
	router.HandleFunc("/api/v1/contact", contact).Methods("POST")
	router.HandleFunc("/api/v1/example", exampleHandler).Methods("GET")
	http.ListenAndServe(":8080", handlers.CORS()(router))
}
