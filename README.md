This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Run the server and client concurrently<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

- [x] Register
- [x] Login
- [x] Header
- [x] Add crypto row

## TODO

- [x] Session
- [x] Cookies
- [x] Component for displaying coin list
- [x] Component for showing total net value

## Dependencies

This project uses the following dependencies:

- `react` - v16.8 or above required for **react hooks**.
- `react-dom` - v16.8 or above.
- `mongoose` - ODM used for MongoDB to create models and CRUD.
- `bcryptjs` - To hash and compare passwords.
- `validator` - Utility when parsing user input on the server.
- `tailwindcss` - CSS library that I am testing out.

## Environmental variables

The environment variables will be inlined during build time.

Required environmental variables in this project include:

- `process.env.DB_USER` The MongoDB Atlas username.
- `process.env.DB_PASS` The MongoDB Atlas password.
- `process.env.DB_NAME` The MongoDB Atlas name **Default is test**.
- `process.env.DB_CLUSTER` The MongoDB Atlas cluster.
- `process.env.PORT` (optional, Cloudinary **only**) The server port.

#### `.env`

I use my own MongoDB Atlas environmental variables in [.env](.env) and they should be replaced with your own credentials.
