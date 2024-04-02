# Resume Backend

This repository contains the backend code for the Resume project. It provides the necessary APIs and services to manage and retrieve resume data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/afiqzudinhadi/resume-backend.git
```

2. Install the dependencies:

```bash
npm install
```

3. Copy the .env.example file to a new file named .env and fill in your environment variables.

## Usage

To start the server in development mode, run:

```bash
npm run dev
```

To build the project for production, run:

```bash
npm run build
```

To start the server in production mode, run:

```bash
npm run start
```

## API Reference

The server provides the following API endpoints:

- GET /api/users: Get all users
- GET /api/user/:user_id: Get user details
- GET /api/details: Get all details
- GET /api/social_contacts: Get all social contacts
- GET /api/educations: Get all educations
- GET /api/experiences: Get all experiences
