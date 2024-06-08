# RestAPI-Practice

# Take Home Assignment

Here is the JSON data and the task is to build a backend with the endpoints mentioned below:

### Sample JSON Data
A JSON structure representing a simple job management dashboard:

```json
[
    {
        "id": 1,
        "customerName": "John Doe",
        "jobType": "Plumbing",
        "status": "Scheduled",
        "appointmentDate": "2024-06-15T09:00:00Z",
        "technician": "Jane Smith"
    },
    {
        "id": 2,
        "customerName": "Alice Johnson",
        "jobType": "Electrical",
        "status": "Completed",
        "appointmentDate": "2024-05-20T14:00:00Z",
        "technician": "Bob Brown"
    }
]
```

### Backend Task
**Objective**: Develop REST API endpoints to manage the job data.

#### API Endpoints:
1. **GET /jobs** - Retrieves all jobs.
2. **GET /jobs/:id** - Retrieves a specific job by ID.
3. **POST /jobs** - Adds a new job record.
4. **PUT /jobs/:id** - Updates an existing job record.
5. **DELETE /jobs/:id** - Deletes a job record.

### Frontend Task
**Objective**: Create a web application that interacts with the backend to display and manage the job data.

#### Frontend Requirements:
- **Job List View**: Display all services in a list or table format.
- **Job Details View**: Allow users to click on a service to view its detailed information in a separate component or page.
[Optional]
- **Add Job Form**: Include a form to submit a new service.
[Bonus Points]
- **Update/Delete Options**: Provide options to update or delete jobs directly from the interface.

### Documentation:
- **README.md**: Include setup instructions, API documentation, and a brief explanation of choices made regarding architecture and libraries.
