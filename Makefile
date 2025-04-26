# Makefile

IMAGE_NAME=my-fastapi-app
CONTAINER_NAME=my-fastapi-container
PORT=8000

.PHONY: build run stop

build:
	docker build -t $(IMAGE_NAME) .

run:
	docker run --name $(CONTAINER_NAME) -p $(PORT):8000 $(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

reset:
	docker rm $(CONTAINER_NAME) || true
	docker rmi $(IMAGE_NAME) || true

rm:
	docker rm $(CONTAINER_NAME) || true