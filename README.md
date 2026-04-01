# DIY Delight - BoltBucket Studio

A polished full-stack React + Express + PostgreSQL custom item builder inspired by the BoltBucket exemplar.

## Features

- React frontend with live customizer preview
- PostgreSQL database with a `custom_items` table
- Full CRUD: create, read, update, delete
- Dynamic price calculation
- Visual interface updates when options change
- Invalid combinations blocked with a clear error message
- Home page list of submitted custom items
- Detail page with edit and delete actions

## Stack

- Frontend: React, React Router, Vite, CSS
- Backend: Node.js, Express
- Database: PostgreSQL on Render

## Run the backend

```bash
cd server
npm install
cp .env.example .env
npm run reset-db
npm run dev
```

## Run the frontend

```bash
cd client
npm install
npm run dev
```

Create a `.env` file in `client/` if needed:

```bash
VITE_API_URL=http://localhost:3001/api
```

## Required table

```sql
CREATE TABLE IF NOT EXISTS custom_items (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  shell TEXT NOT NULL,
  core TEXT NOT NULL,
  power TEXT NOT NULL,
  storage TEXT NOT NULL,
  finish TEXT NOT NULL,
  price INTEGER NOT NULL,
  validation_error TEXT DEFAULT '',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
