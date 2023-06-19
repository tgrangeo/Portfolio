package main

import (
	"encoding/json"
	"fmt"
	"io"
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

func downloadCV(w http.ResponseWriter, r *http.Request) {
	nomFichier := "assets/Thomas_grangeon.pdf"
	fichier, err := http.Dir("./").Open(nomFichier)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer fichier.Close()
	w.Header().Set("Content-Type", "application/octet-stream")
	w.Header().Set("Content-Disposition", "attachment; filename="+nomFichier)
	_, err = io.Copy(w, fichier)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
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

	r.HandleFunc("/api/v1/contact", contact).Methods("POST")
	r.HandleFunc("/api/v1/donwloadCv", downloadCV).Methods("GET")
	http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(r))
}
