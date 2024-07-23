# URL Shortener Project

This project consists of a URL shortening service with a React frontend and a Node.js backend. It allows users to enter a URL and receive a shortened version of it, which redirects to the original URL when accessed.

## Project Structure

The project is divided into two main parts:

- **Backend**: The server-side logic is implemented in Node.js, handling URL shortening and redirection.
- **Frontend**: A React application that provides a user interface for submitting URLs to be shortened and displaying the shortened result.

### Backend

The backend is located in the root directory and includes the following key files:

- `connect.js`: Establishes connection to the database.
- `controller/urlController.js`: Contains the logic for URL shortening and retrieval.
- `model/urlSchema.js`: Defines the schema for URLs in the database.
- `router/urlRouter.js`: Handles routing for URL shortening and redirection requests.
- `index.js`: The entry point for the backend server.

### Frontend

The frontend is located in the `short-url-frontend` directory and includes:

- `src/components/`: Contains React components, including `Home.js` for the main page and `Privacy.js` for the privacy policy.
- `src/assets/`: Stores static assets like images.
- `src/App.js`: The main React component that ties the application together.
- `public/index.html`: The HTML template for the React app.

## Getting Started

### Prerequisites

- Node.js
- npm

### Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.

### Running the Frontend

To run the frontend part of the URL Shortener project, follow these steps:

1. Ensure that you have navigated to the `short-url-frontend` directory within the project structure. If you're in the project root, you can do this by running:

```sh
npm install
npm start
```


### Additional Information
- The frontend application is built using React, a popular JavaScript library for building user interfaces.
- The development server provides live reloading. This means that any changes you make to the frontend code will automatically be reflected in the browser after saving the file, without the need to manually restart the server.
- For building the application for production, you can use the command npm run build. This will create a build directory with optimized production assets.
