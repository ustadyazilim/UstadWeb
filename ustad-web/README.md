# Ustad Web Applications

This monorepo contains multiple web applications built with Nx, including Nextjs and Preact applications.

## Applications

- `ustad-web-esinav`: Preact-based exam application
- `ustad-web-yesildefter`:Nextjs based main application
- `ustad-web-chatbot`: Chat application
- `ustad-web-shell`: Shell application

## Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- Git

## Getting Started

## Database Setup

1. Create a PostgreSQL database using a cloud provider (Supabase, ElephantSQL, etc.)
2. Create a `.env` file in the root of the project with the following variables:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ustad-web
```

### 2. Install Dependencies and Build (Clean Install)

For a complete clean installation and build, run:

```bash
npm run build:clean
```

This command will:

1. Clean all existing dependencies and build artifacts
2. Install root project dependencies
3. Install application-specific dependencies
4. Build all projects with verbose output

### 3. Start Development Servers

To start both the Preact exam application and Nextjs main application:

```bash
npm run start:all
```

## Available Scripts

- `npm run clean`: Removes all node_modules and dist directories
- `npm run install:root`: Installs root project dependencies
- `npm run install:apps`: Installs dependencies for all applications
- `npm run build:verbose`: Builds all projects with verbose output
- `npm run build:clean`: Complete clean build process
- `npm run start:all`: Starts both Preact and Nextjs applications

## Application URLs

- Nextjs Main App (ustad-web-yesildefter): http://localhost:3002
- Preact Exam App (ustad-web-esinav): http://localhost:3003

## Development Notes

- The Preact exam application is mounted when accessing the `/exam` route in the Nextjs application
- All installations use `--legacy-peer-deps` to handle dependency conflicts
- Builds are executed sequentially to prevent memory issues

## Troubleshooting

If you encounter any issues:

1. Try a clean build:

```bash
npm run build:clean
```

2. If you get dependency errors, try removing the lock file and node_modules:

```bash
rm -rf package-lock.json node_modules
npm run build:clean
```

3. For application-specific issues, try cleaning and rebuilding individual apps:

```bash
cd apps/<app-name>
rm -rf node_modules
npm install --legacy-peer-deps
```
