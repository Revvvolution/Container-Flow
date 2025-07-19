# Container-Flow

## Overview

Container-Flow is an ASP.NET Core Web API paired with a React + Vite front end. It uses Tailwind CSS for styling, TSQL for database scripts, and Swagger for API exploration.

---

## Features

- User authentication (login / register)  
- CRUD operations for Containers, Items, and Tags  
- Interactive API documentation via Swagger  
- Responsive UI built with Tailwind CSS  
- Fast development server powered by Vite  

---

## Prerequisites

- .NET 6 SDK (or later)  
- Visual Studio 2022  
- Node.js (v16+) and npm  
- SQL Server (local instance)  
- Chrome browser (recommended)  

---

## Database Setup

1. Open your SQL Server client.  
2. In the repository’s `SQL/` folder, run the two scripts in order:
   - [Schema](https://github.com/Revvvolution/Container-Flow/blob/main/SQL/01_ContainerFlow_Create_DB.sql)
   - [Seed Data](https://github.com/Revvvolution/Container-Flow/blob/main/SQL/02_ContainerFlow_Seed_Data.sql)  
3. Verify that the `ContainerFlowDb` database and sample users exist.  

---

## Configuration

1. Launch Visual Studio 2022 and open `ContainerFlow.sln`.  
2. In `appsettings.json`, update the connection string under `ConnectionStrings:DefaultConnection`:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost;Database=ContainerFlowDb;Trusted_Connection=True;MultipleActiveResultSets=true"
   }
3. Ensure your launch URL is set to `https://localhost:5001` in the project’s `launchSettings.json`.

---

## Running the Backend

1. In Visual Studio, set the `ContainerFlow` project as the startup project.

2. Press the Play ▶️ button (or F5).

3. Swagger UI will open automatically at: 
`https://localhost:5001/swagger/index.html`

---

## Running the Frontend

1. Open a terminal at the repository root.

2. Change into the client directory:

```bash
cd client/
```

3. Install Dependencies:

```bash
npm install
```
4. Start the Vite Dev Server:

```bash
npm run dev
```
5. Open Chrome and navigate to the URL displayed (usually http://localhost:5173).
6. You’ll land on the login / register page.

---

## Usage

- Sign in with one of the seeded user emails (check [Seed Data](https://github.com/Revvvolution/Container-Flow/blob/main/SQL/02_ContainerFlow_Seed_Data.sql)) or register a new account.
- Navigate to the Container, Item, or Tag pages in the UI.
- Perform create, read, update, and delete operations as needed.

---

## Project Structure

| Path               | Description                                                         |
|--------------------|---------------------------------------------------------------------|
| ContainerFlow.sln  | Visual Studio solution file                                         |
| SQL/               | Database [schema and seed data](https://github.com/Revvvolution/Container-Flow/tree/main/SQL)|                          |
| ContainerFlow/     | ASP.NET Core Web API project                                        |
| client/            | React + Vite + Tailwind CSS front-end                               |
| .gitignore         | Files and folders to ignore in Git                                  |
