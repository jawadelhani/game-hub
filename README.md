# 🎮 Game Hub

A modern video game discovery web application built with React 18, TypeScript, and Chakra UI. Discover new and interesting games with advanced filtering options by platform, genre, and more.

![Game Hub Screenshot](https://via.placeholder.com/800x400/1a202c/ffffff?text=Game+Hub+Preview)

## ✨ Features

- **Game Discovery**: Browse through thousands of games with high-quality imagery
- **Advanced Filtering**: Filter games by:
  - Platforms (PC, PlayStation, Xbox, Nintendo, Mobile)
  - Genres (Action, Adventure, RPG, Strategy, Shooter, etc.)
  - Sort by relevance, rating, release date, and more
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Search**: Search for games with instant results
- **Game Details**: View comprehensive game information and ratings

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **UI Library**: Chakra UI
- **State Management**: React Query (TanStack Query)
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **API**: RAWG Video Games Database

## Getting Started

To get started, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Run `npm run dev` to start the web server.


## 📁 Project Structure

```
game-hub/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── GameCard.tsx
│   │   ├── GameGrid.tsx
│   │   ├── GenreList.tsx
│   │   ├── PlatformSelector.tsx
│   │   └── ...
│   ├── hooks/
│   │   ├── useGames.ts
│   │   ├── useGenres.ts
│   │   └── usePlatforms.ts
│   ├── services/
│   │   └── api-client.ts
│   ├── theme.ts
│   └── main.tsx
├── package.json
└── README.md
```

## 🎯 Key Components

### GameGrid
Displays a responsive grid of game cards with loading states and error handling.

### GenreList
Shows a list of game genres with filtering capabilities.

### PlatformSelector
Dropdown component for selecting gaming platforms.

### SearchInput
Real-time search functionality for finding specific games.

## 📱 Screenshots

### Desktop View
The application features a clean, modern interface optimized for desktop browsing.

### Mobile Responsive
Fully responsive design that works seamlessly on mobile devices.

### Dark Mode
Toggle between light and dark themes for comfortable viewing.

