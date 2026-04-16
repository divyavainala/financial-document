# Financial Document Management System (Backend)

A backend application built using Spring Boot for managing financial documents with secure authentication, role-based access control, and integration with AI-based semantic search.

---

## Features

* JWT-based authentication and authorization
* Role-Based Access Control (Admin, Analyst, Auditor, Client)
* Upload, view, and delete financial documents
* Metadata-based document search
* Integration with AI (RAG pipeline) for semantic search

---

## Tech Stack

Backend:

* Java
* Spring Boot
* Spring Security
* Spring Data JPA

Database:

* PostgreSQL / MySQL

Authentication:

* JWT (JSON Web Token)

AI Integration:

* Python (LangChain)
* Qdrant (Vector Database)

---

## Project Structure

```
src/main/java/com/project
 ├── controller
 ├── service
 ├── repository
 ├── entity
 ├── dto
 ├── security
 └── config
```

---

## Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/your-username/financial-docs-backend.git
cd financial-docs-backend
```

### 2. Configure Database

Update application.properties:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/finance_db
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
```

### 3. Run the Application

```
mvn spring-boot:run
```

Or run using your IDE.

---

## API Endpoints

### Authentication

* POST /auth/register
* POST /auth/login

### Documents

* POST /documents/upload
* GET /documents
* GET /documents/{id}
* DELETE /documents/{id}
* GET /documents/search

### Roles

* POST /roles/create
* POST /users/assign-role
* GET /users/{id}/roles

### RAG APIs

* POST /rag/index-document
* POST /rag/search
* GET /rag/context/{id}

---

## Architecture

```
React Frontend
      ↓
Spring Boot Backend
      ↓
Database (PostgreSQL/MySQL)
      ↓
Python RAG Service
      ↓
Qdrant Vector Database
```

---

## Future Improvements

* Fine-grained permission system
* Document versioning
* Dashboard for financial insights
* Cloud deployment

---

## Contact

GitHub: https://github.com/divyavainala
