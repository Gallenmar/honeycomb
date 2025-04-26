# FastAPI Boilerplate

A boilerplate FastAPI application with Docker support.

## Features

- FastAPI application with basic endpoints
- Docker support
- CORS middleware configured
- Health check endpoint

## Running the Application

### Using Docker

1. Build the Docker image:
```bash
docker build -t fastapi-boilerplate .
```

2. Run the container:
```bash
docker run -p 8000:8000 fastapi-boilerplate
```

### Running Locally

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
uvicorn app.main:app --reload
```

## API Endpoints

- `GET /`: Welcome message
- `GET /health`: Health check endpoint

## Accessing the API

Once running, you can access:
- The API at: http://localhost:8000
- The API documentation at: http://localhost:8000/docs