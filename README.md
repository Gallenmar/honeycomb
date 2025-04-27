# HoneyComb Codebase

#### Story
Looking for a new home can feel like a full-time job. Endless scrolling through clunky listings, vague descriptions, low-quality photos, and an overwhelming amount of tabs open just to compare your top picks. And once something finally catches your eye? You still have to track down contact details, schedule a visit, and hope it lives up to the photos. We asked ourselves: Why hasn’t this process gotten smarter? What if we used AI to bring clarity and consistency to property listings—especially on widely used public marketplaces like SS.LV? What if finding your next home felt less like paperwork… and more like discovery?

#### What it does
We set out to redesign the property search experience by combining artificial intelligence with user-friendly design principles. Think: the convenience of a dating app meets the intelligence of a smart assistant.

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
