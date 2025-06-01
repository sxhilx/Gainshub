# GainHub Journey

## Backend

### Project Initialization
- Created the initial project folder structure
- Initial Setup of the `index.js` file 
- Spun up the docker porstgreSQL container to start the database server environment

### Database Set-up
- Created db.js to handle the postgreSQL connection using Pool from pg package.
- Set up a default route to query the database name, confirming that the db connection was successful

### Routing & Controllers Setup

- Set up Routes
    - Auth, Workouts and PRs
- Implemented initial contoller function for each route.

### Custom Errors Setup
- Created a base `CustomError` class extending from the native `Error` class.
- Implemented specific error types:  
  - `BadRequestError`  
  - `NotFoundError`  
  - `UnauthenticatedError`  
- Enables consistent and descriptive error handling across the application.

### JWT & Password Hashing
- Implemented `createToken` and `verifyToken` utility functions using JWT to assign each user a secure, unique token.
- Integrated password hashing using bcrypt before storing passwords in the database for enhanced security.

### Authentication Middleware
- Developed a middleware that validates JWTs.
- This middleware extracts the token from headers and verifies it.
- Applied this middleware to the `/workouts` and `/pr` routes to restrict access to authenticated users only.

### Database Table Creation
- Created `users`, `workouts`, and `prs` tables.
- Both `workouts` and `prs` tables include `user_id` as a foreign key.
- Centralized all table creation logic in a single `createAllTables` file for clarity and maintainability.

### Models & Business Logic
- Developed model services for core features (`auth`, `workouts`, `prs`).
- Separated business logic from controller logic to follow clean architecture principles and ensure code scalability.

### Controllers Integration
- Connected all controllers with their respective model services.
- Maintained a clean, modular, and easy-to-maintain codebase by following to the MVC design pattern.