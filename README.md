# GainHub Journey

## Backend

### Project Initialization
- Created the initial project folder structure
- Initial Setup of the index.js file 
- Spun up the docker porstgreSQL container to start the database server environment

### Database Set-up
- Created db.js to handle the postgreSQL connection using Pool from pg package.
- Set up a default route to query the database name, confirming that the db connection was successful

### Routing & Controllers Setup

- Set up Routes
    - Auth, Workouts and PRs
- Implemented initial contoller function for each route.

### Custom erros Set up
- Set up a custom error class which extends from the error class.
- Set up Bad request, Not found and Unauthenticated error extending from the custom erros class.

### JWT & Password hashing
- Set up the jwt create token and verify token functions to assing each user with a unique token.
- Password hashing function set up before storing the password into the database.

### Auth middleware
- Authentication middleware set up on workouts and prs route to make sure each user is authenticated before accesing these routes.