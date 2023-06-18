
FROM golang:1.18 as base
RUN go install github.com/cosmtrek/air@v1.42.0

COPY . ./src
WORKDIR /opt/app/api
CMD ["air"]