# Frontend Documentation

## Overview

This is the frontend part of the Pokémon application built using Angular. The application fetches data from a Node.js backend and displays Pokémon information in a user-friendly interface.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd pokemon-app/frontend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then, run the following command to install the necessary packages:
   ```bash
   npm install
   ```

3. **Run the Application**
   Start the Angular development server:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200`.

## Features

- Displays a title fetched from the backend: "Ricerca pokemn".
- Shows Pokémon cards with images and names.
- A button to load more Pokémon cards.

## Structure

The frontend application consists of the following main components:

- **app.component.ts**: The main component that handles fetching the title and Pokémon data.
- **app.component.html**: The template for the main component, including the title and Pokémon cards.
- **pokemon-card.component.ts**: A component for displaying individual Pokémon cards.
- **pokemon-card.component.html**: The template for the Pokémon card component.

## Dependencies

This project uses the following key dependencies:

- Angular framework
- Bootstrap for styling

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.