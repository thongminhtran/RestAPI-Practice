# Job Management Application

This project is a web application that allows users to manage job data. It consists of a backend REST API and a frontend user interface built with Material-UI.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [API Documentation](#api-documentation)
- [Architecture and Libraries](#architecture-and-libraries)
- [Usage](#usage)

## Setup Instructions

### Backend Setup
1. Clone the repository and go to backend directory:
     ```bash
    cd backend/
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend/
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

The backend server will be running on `http://localhost:3001` and the frontend on `http://localhost:3000`.

## API Documentation

### GET /jobs
- **Description:** Fetch all jobs.
- **Response:**
    ```json
    [
        {
            "id": "1",
            "customerName": "John Doe",
            "jobType": "Plumbing",
            "status": "Scheduled",
            "appointmentDate": "2024-06-15T09:00:00Z",
            "technician": "Jane Smith"
        }
    ]
    ```

### POST /jobs
- **Description:** Add a new job.
- **Request Body:**
    ```json
    {
        "customerName": "John Doe",
        "jobType": "Plumbing",
        "status": "Scheduled",
        "appointmentDate": "2024-06-15T09:00:00Z",
        "technician": "Jane Smith"
    }
    ```
- **Response:**
    ```json
    {
        "id": "2",
        "customerName": "John Doe",
        "jobType": "Plumbing",
        "status": "Scheduled",
        "appointmentDate": "2024-06-15T09:00:00Z",
        "technician": "Jane Smith"
    }
    ```

### PUT /jobs/:id
- **Description:** Update an existing job.
- **Request Body:**
    ```json
    {
        "customerName": "John Doe",
        "jobType": "Plumbing",
        "status": "Completed",
        "appointmentDate": "2024-06-15T09:00:00Z",
        "technician": "Jane Smith"
    }
    ```
- **Response:**
    ```json
    {
        "id": "2",
        "customerName": "John Doe",
        "jobType": "Plumbing",
        "status": "Completed",
        "appointmentDate": "2024-06-15T09:00:00Z",
        "technician": "Jane Smith"
    }
    ```

### DELETE /jobs/:id
- **Description:** Delete a job.
- **Response:** Status 204 No Content

## Architecture and Libraries

### Backend
- **Express:** A web framework for Node.js used to build the REST API.
- **CORS:** Enable Cross-Origin Resource Sharing. It allows the frontend to communicate with the backend.
- **Nodemon:** Utility to automatically restart the server during development.

### Frontend
- **React:** A JavaScript library.
- **Material-UI:** A popular React UI framework.
- **Axios:** A HTTP client used to make requests to the backend API.

### Architectural Choices
- **Separation of Back & Front End:** The project is divided into a backend and frontend to maintain a clear separation of concerns.
- **REST API:** The backend is designed as a RESTful API.
- **Material-UI:** I chose it for its rich component library and ease of use. It can ensure a consistent and modern look for the frontend.

## Usage
- **Add Job:** Use the form to add a new job by filling in the required fields, then submit.
- **Edit Job:** Click the "Edit" button next to a job to modify the data with its details.
- **Delete Job:** Click the "Delete" button next to a job to remove it from the list.

Feel free to explore and enhance the application further. Contributions are welcome!

