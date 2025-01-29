# Next.js 15 Authentication Project

## Overview

This is an authentication system built with **Next.js 15** and **Auth.js (NextAuth v5)**. The project implements multiple authentication methods, including:

- **Credentials Authentication** (Email & Password)
- **Google Authentication**
- **GitHub Authentication**
- **Two-Factor Authentication (2FA)**

## Features

- User Signup & Login
- Secure Password Hashing
- OAuth Authentication (Google & GitHub)
- Two-Factor Authentication (Email OTP)
- Token-based Authentication
- Protected Routes
- Middleware for Authentication Handling

## Tech Stack

- **Next.js 15** (App Router)
- **Auth.js (NextAuth v5)**
- **Prisma** (ORM for database handling)
- **PostgreSQL** (Database)
- **Tailwind CSS** and Shadcn (Styling)
- **Next.js Middleware** (For route protection)

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- PostgreSQL (Set up a database instance)
- Environment variables for authentication providers

### Setup

Clone the repository:

```bash
git clone https://github.com/dibakarghosh03/auth-nextjs.git
cd auth-nextjs
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file and configure the necessary environment variables:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb?schema=public"
AUTH_SECRET="secret_key"

GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"

GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

MAIL_HOST="your_mail_host"
MAIL_USER="your_mail_user"
MAIL_PASS="your_mail_pass"
```

### Run the Project

Run the development server:

```bash
npm run dev
```

Your app will be available at `http://localhost:3000`.

## Usage

- Sign up or log in using email/password.
- Use Google or GitHub for authentication.
- Enable Two-Factor Authentication for added security.

## Project Structure

```
/
  ├── app
  │   ├── api
  │   ├── auth
  │   ├── (protected)
  │   ├── globals.css
  │   ├── layout.tsx
  │   ├── page.tsx
  ├── components
  ├── lib
  ├── prisma
  ├── data
  ├── hooks
  ├── actions
  ├── schemas
  ├── auth.config.ts
  ├── auth.ts
  ├── middleware.ts
  ├── routes.ts
```

## Contributing

Feel free to fork this repository and contribute! Open a pull request with your changes.

