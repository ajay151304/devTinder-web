# DevTinder-web

- Create a Vite + React project application
- npm install
- initialize a git repository -> git init

- Remove unnecessary code and create a Hello World app
- Install Tailwind css
- install daisyUI => npm i -D daisyui@latest
- Add NavBar component to src/app.jsx
- Create a NavBar.jsx separate Component file
- Install react-router (V7+)

- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet Component in your Body Component
- Create a Footer Component

- Create a Login Page
- Install axios
- CORS - install cors on backend => add middleware to with configurations: {origin:"FrontEndDomain" , credentials: ture}
- Whenever making API call so pass ( axios call, {withCredentails:true} )
  Body

- Instal react-redux + @reduxjs/tookilt - https://redux-toolkit.js.org/tutorials/quick-start

- Create a configureStore => Provider => createSlice => add reducer to store

- Add Redux tool in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder

- You should not be access other routes without login
- If token is not preset, redirects to login page
- Logout feature
- Profile Page

- NavBar
- Route=/ =>Feed
- Route=/login => Login
- Route=/connections =>Connections
- Route=/profile => Profile
