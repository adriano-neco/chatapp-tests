# Chat App API - Express + TypeScript

A RESTful API built with Express.js and TypeScript for a chat application.

## Features

- 🚀 Express.js server with TypeScript
- 📝 Type-safe API endpoints
- 🔄 Hot-reload development with nodemon
- 🏗️ Production-ready build system
- 📦 Clean project structure

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chatapp-tests
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm test` - Run tests (not yet implemented)

## Development

To start the development server:

```bash
npm run dev
```

The server will start on `http://localhost:3000` with hot-reload enabled.

## Production

To build and run in production:

```bash
npm run build
npm start
```

## API Endpoints

### GET /
- Returns a welcome message
- Response: `{ "message": "Welcome to the Chat App API" }`

### GET /api/health
- Health check endpoint
- Response: `{ "status": "OK", "timestamp": "2025-12-03T09:50:26.556Z" }`

### GET /api/users
- Get list of users
- Response: `{ "users": [...] }`

### POST /api/users
- Create a new user
- Body: `{ "name": "string", "email": "string" }`
- Response: `{ "user": { "id": number, "name": "string", "email": "string" } }`

## Project Structure

```
chatapp-tests/
├── src/
│   └── index.ts       # Main application file
├── dist/              # Compiled JavaScript (generated)
├── node_modules/      # Dependencies
├── .gitignore
├── nodemon.json       # Nodemon configuration
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── README.md
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## License

ISC