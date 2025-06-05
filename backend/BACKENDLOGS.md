# GymScribe Backend Journey

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


### Nodemailer Setup & Email Verification with JWT
- Set up Nodemailer to verify users' email addresses.
- Implemented two functions in `jwt.js`:
  - `createEmailToken` – creates a token upon registration.
  - `verifyEmailToken` – verifies the email token.
- Configured Brevo's SMTP service to send emails with the JWT token as a query parameter.
- Used Nodemailer's transport functions with Brevo's SMTP details.

### Verify Email Route & Controller
- Added a new `is_verified` boolean column to the users table (default: `false`).
- Created a new `POST` route to verify a user's email address.
- Implemented `verifyEmailService` to update the `is_verified` status if the query token is valid.

### Login/Register Updates & Email Verification Middleware
- Updated the login service to prevent unverified users from logging in.
- Updated the register service to:
  - Generate an email verification JWT.
  - Send a verification link to the user's email.
- Created `verifyEmailMiddleware.js` to restrict access to the workout and PR routes for unverified users.

### Resend Verification Route & Model Setup
- The verification token expires in 1 hour.
- Implemented `resendVerificationEmail` to issue a new token if the original expired.
- Created the `/resend-verification` auth route.

### Custom Error Handler Middleware & Joi Validation
- Implemented a custom error handler middleware to handle errors thrown by the `CustomAPIError` class.
- Created `userSchema`, `workoutSchema`, and `prSchema` using Joi to validate user input and return appropriate error messages.


### Rate Limeter
- Set up a Rate Limiter to limit user request
  - 100 requests in 15 mins
- Implemented it using express-late-limit library

### Google sign-in using passport.js
- Implemented google sign-in using `passport.js` lib.
- Had to implement two new routes for google sign-in, `/google` and `/google/callback`.
- For now storing a random string for password when the user sign-in using google

### New route to group workouts by weeks
- Implemented a new workout route, `/by-weeks` to group all the workouts by weeks, reducing frontend complexity
- A service modle and a controller set up to manage the functionality of this new route

### Forgot-Password and Reset-Password routes set up
- Implemented two new routes to allow user to change their password

### Error-testing complete
- Tested all the routes for any potential errors 


## Future goals
- Implement facebook login
