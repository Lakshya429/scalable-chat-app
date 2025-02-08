# Scalable Chat Application

This scalable chat application is built with Next.js (frontend) and Socket.io (backend). It uses Prisma ORM with a PostgreSQL database and is containerized using Docker. The application is deployed with a CI/CD pipeline via GitHub Actions.

## Features
- **Real-time messaging** with Socket.io
- **Scalable architecture** using Docker and Docker Compose
- **Database management** with Prisma ORM and PostgreSQL
- **Automated deployment** using GitHub Actions
- **Next.js frontend** for a seamless user experience

## Tech Stack
- **Frontend:** Next.js, React
- **Backend:** Node.js, Express, Socket.io
- **Database:** PostgreSQL, Prisma ORM
- **Containerization:** Docker, Docker Compose
- **CI/CD:** GitHub Actions

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Docker & Docker Compose
- Node.js & npm
- PostgreSQL (if running locally)

### Clone the Repository
```sh
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

### Environment Variables
Create a `.env` file in the root directory and configure the following variables:
```
DATABASE_URL=postgresql://user:password@db:5432/chatdb
PORT=4000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### Run with Docker
```sh
docker-compose up --build
```
This will start the frontend, backend, and database containers.

### Run Locally (Without Docker)
#### Backend
```sh
cd server
npm install
npm run dev
```

#### Frontend
```sh
cd front
npm install
npm run dev
```

### Database Migrations
```sh
npx prisma migrate dev
```

## Deployment
The application is deployed automatically using GitHub Actions. Push to the `main` branch to trigger the workflow.

## Contributing
1. Fork the repository
2. Create a new branch (`feature-xyz`)
3. Commit your changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-xyz`)
5. Open a Pull Request
---
Feel free to modify the details as per your project structure!


