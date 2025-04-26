# Makefile

IMAGE_NAME=my-fastapi-app
CONTAINER_NAME=my-fastapi-container
PORT=8000

.PHONY: build run stop

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run --name $(CONTAINER_NAME) -p $(PORT):8000 $(IMAGE_NAME)

