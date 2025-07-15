# Backend README

# Pokémon App Backend

This is the backend part of the Pokémon App, which serves an Angular frontend and provides endpoints to fetch Pokémon data.

## Getting Started

These instructions will help you set up and run the backend server on your local machine.

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd pokemon-app/backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To start the server, run the following command:
```
npm start
```

The server will be running on `http://localhost:3000`.

### API Endpoints

- **GET /title**
  - Returns a JSON object with the title of the application.
  
- **GET /pokemon**
  - Fetches a list of Pokémon from the Poke API.

### Built With

- [Express](https://expressjs.com/) - The web framework used for building the server.

### Author

Your Name

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.