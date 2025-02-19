# Task Manager Application

A **minimal** and **stylish** full-stack Task Manager application.  
Register, log in, and manage your tasks (create, update, mark as complete/incomplete, and delete) with ease.

---

## Overview

- **Backend (lumaa-api):**  
  Built with Node.js, Express, and TypeScript. Uses PostgreSQL as the database.

- **Frontend (lumaa-web):**  
  Built with React and TypeScript.

> **Note:** The PostgreSQL database is set up locally, so you need to create the database on your machine.

---

## Table of Contents

- [Local Database Setup](#local-database-setup)
- [Installation & Setup](#installation--setup)
  - [Backend (lumaa-api)](#backend-lumaa-api)
  - [Frontend (lumaa-web)](#frontend-lumaa-web)
  - [Environment Variables (.env)](#environment-variables-env)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Video Demo](#video-demo)
- [Additional Notes](#additional-notes)
- [Salary Expectation](#salary-expectation)

---

## Local Database Setup

1. **Install PostgreSQL:**

   - **macOS (Homebrew):**
     ```bash
     brew install postgresql
     brew services start postgresql
     ```
   - **Windows:**
     Download and install from the [official website](https://www.postgresql.org/download/windows/).
   - **Linux:**
     ```bash
     sudo apt install postgresql postgresql-contrib
     ```

2. **Create the Database:**

   ```bash
   createdb taskmanager
   ```

   _Or, using psql:_

   ```bash
   psql -U postgres
   CREATE DATABASE taskmanager;
   \q
   ```

3. **Run Migrations:**

   In `lumaa-api/src/migrations`, the file `001_create_tables.sql` sets up the required tables (`users` and `tasks`). Run:

   ```bash
   psql -h localhost -p 5432 -U postgres -d taskmanager -f migrations/001_create_tables.sql
   ```

   If prompted, set the password using:

   ```bash
   export PGPASSWORD='your_postgres_password'
   ```

---

## Installation & Setup

Clone the repository (it contains two main folders: `lumaa-api` and `lumaa-web`):

```bash
git clone https://github.com/pakj8/lumaa-spring-2025-swe.git
```

### Backend (lumaa-api)

1. Navigate to the backend directory:

   ```bash
   cd lumaa-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `lumaa-api` folder with:
   ```
   PORT=4000
   DATABASE_URL=postgres://postgres:your_postgres_password@localhost:5432/taskmanager
   JWT_SECRET=123456789
   ```

### Frontend (lumaa-web)

1. Navigate to the frontend directory:

   ```bash
   cd ../lumaa-web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `lumaa-web` folder with:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

---

## Running the Application

### Backend

- **Development Mode:**
  ```bash
  npm run dev
  ```
- **Production:**
  ```bash
  npm run build
  npm start
  ```
  The server runs on the port specified in `.env` (default: 5000).

### Frontend

Start the React application:

```bash
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Testing

- **Manual Testing:**

  - **Register & Login:** Use the UI to create an account and log in.
  - **Task Management:** Once logged in, create, update (mark complete/incomplete), and delete tasks.

- **API Testing:**
  - Use tools like [Postman](https://www.postman.com/) or `curl` to test endpoints:
    - `POST /auth/register` & `POST /auth/login`
    - `GET /tasks`, `POST /tasks`, `PUT /tasks/:id`, `DELETE /tasks/:id`
- **Logging:**  
  Check the console logs in both backend and frontend for error messages or debugging info.

---

## Video Demo

Watch the [Video Demo](https://drive.google.com/file/d/1fSasdTbMpu27Cd_4wObLjHze4_JPqXqO/view?usp=sharing) to see the application in action:

- User registration & login
- Task creation, update, and deletion

---

# Salary Expectation

I can work 40 hrs a week and $25 per hour. So, the total will $4,000 montly. I am open for negotiation.

## Additional Notes

- **Minimal & Readable:**  
  The code is intentionally minimal to ensure clarity and ease of maintenance.

- **Local Database:**  
  Ensure PostgreSQL is installed and the `taskmanager` database is created locally.

- **Environment Variables:**  
  Set up the `.env` files in both `lumaa-api` and `lumaa-web` with the appropriate values.

- **Security:**  
  Do not commit your `.env` files to public repositories. Use a `.gitignore` to keep them private.

---

Thank you for checking out the Task Manager Application! If you have any questions or suggestions, please open an issue or contact me.
