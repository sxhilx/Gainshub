# GymScribe Frontend Journey

### Initial project set up
- Installed react (via vite) and configured initial project set up:
    - Implemented Folder Structure (pages, components, controllers, assests)

### Axios controllers
- Implemented Axios controllers
    - `axios.js`, interceptor implemented to extact jwt token and set it in the Authorization header
    - `auth.js`, axios controller for all the auth based api calls
    - `workouts.js`, axios controller for all the workouts based api calls
    - `prs.js`, axios controller for all the PR based api calls

### Frontend routes and Initial components
- Implemented routes in `app.js` using react-router-dom
- Set up `ProtectedRoutes.js` component to protect access accross Dashboard pages
    - Returned `<Outlet/>` ( a wrapper for child elements )
- Set up `ScrollRestoration.js` component, since it's a SPA, need to scroll user back to top on new pages
- Set up `Layout.js` component to optimize efficiency by not re-redering Navbar/Sidebar and Footer
    - Implemented `<Outlet/>` to render all the child elements inside the layout.

### Started Working on Pages
- Created a Landing page first for users to get an idea of what the web app is about
- Moved to Auth pages:
    - Set up a Login page for users to be able to login in
        - Implemented `useActionState` to reduce boilerplate code like setting up useState for each field and loading states, improving code efficiency
        - Implemented `FormField` component to reuse each field across the app, improving efficiency
    - Set up a Register Page, followed the same steps from the login page
    - Made Google login button work
        - Implemented an Auth Route page for Google callback to extract the token and set it in the local storage.
    - Set up a Forgot Password page, Reset Password Page and Verify Email page with almost the same steps
