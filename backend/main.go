package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
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
	var c ContactMe
	err := json.NewDecoder(r.Body).Decode(&c)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	auth := smtp.PlainAuth("", "thomas.grangeon9@gmail.com", os.Getenv("MAIL_PASS"), "smtp.gmail.com")
	res := fmt.Sprintf("\nFrom: %s\nname: %s\n\n%s", c.Mail, c.Name, c.Message)
	smtp.SendMail("smtp.gmail.com:587", auth, "Portofolio", []string{"thomas.grangeon9+portfolio@gmail.com"}, []byte(res))
	log.Println("mail sended")
	w.WriteHeader(http.StatusOK)
}

func main() {
	r := mux.NewRouter()

	corsMw := mux.CORSMethodMiddleware(r)
	r.Use(corsMw)

	headersOk := handlers.AllowedHeaders([]string{"Content-Type"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	r.HandleFunc("/api/v1", hello).Methods("POST")
	r.HandleFunc("/api/v1/contact", contact).Methods("POST")
	r.HandleFunc("/api/v1/example", exampleHandler).Methods("GET")
	http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(r))
}
