# Next.js App Router with TypeScript & Mongoose Template

This project serves as a boilerplate for building modern web applications using the **Next.js App Router**, **TypeScript**, and **Mongoose** for MongoDB integration. It provides a ready-to-use structure for rapid development.

---

## Features

- **TypeScript** for static typing and better developer experience.
- **Next.js App Router** for building server and client components efficiently.
- **Mongoose** for MongoDB integration, making database management seamless.
- **Environment Variable Configuration** for flexible development and deployment.

---

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/) (optional for MongoDB setup)
- [Git](https://git-scm.com/)

---

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-typescript-mongoose-template.git
   cd nextjs-typescript-mongoose-template 

2. Install the dependencies:

    ```bash
    npm install

3. Create a .env.local file
    Create a .env.local file in the root directory and add the following variables:

    ```env
    # MongoDB connection URI
    MONGODB_URI=mongodb://<host>:<port>

    # MongoDB database name
    MONGO_DATABASE=your_database_name

    Replace <host>, and <port> with your MongoDB connection details.

4. Running Project
    The included docker-compose.yml file sets up MongoDB and runs the development server. Use the following command to start the project:

    ```bash
    docker-compose up -d
   
   This will:
	•	Spin up a MongoDB instance on localhost:27017.
	•	Start the Next.js development server on http://localhost:3000.


## Explanation of Folders

### `app/`
- **Purpose:** The main folder for Next.js pages and API routes using the App Router.
- **Subfolders:**
  - **`about/`:** Contains the static "About" page.
  - **`api/`:** Contains API routes for server-side operations.
    - **`posts/`:** Contains API routes to manage posts (e.g., CRUD operations).
      - **`[id]/`:** Dynamic route for handling a specific post.
      - **`route.ts`:** Contains API logic for handling posts.
  - **`blog/`:** Contains pages related to the blog.
    - **`layout.tsx`:** Shared layout for all blog pages.
    - **`loading.tsx`:** Component to handle loading states.
    - **`page.tsx`:** Main page for displaying all blog posts.

### `components/`
- **Purpose:** Contains reusable components like buttons, headers, footers, or navigation bars.
- **Example File:**
  - **`navigation.tsx`:** A reusable navigation bar component.

### `lib/`
- **Purpose:** Contains utility files and services to handle business logic and external integrations.
- **Subfolders/Files:**
  - **`api/posts.ts`:** Contains helper functions to interact with the Post API.
  - **`constants/config.ts`:** Configuration values like API URLs or environment-specific variables.
  - **`mongoose.ts`:** Handles MongoDB connection using Mongoose.

### `models/`
- **Purpose:** Contains Mongoose schemas and models for the application.
- **Example File:**
  - **`Post.ts`:** Mongoose schema for the `Post` entity.

### `types/`
- **Purpose:** Contains TypeScript type definitions for the project.
- **Files:**
  - **`general.ts`:** General types (e.g., Post, User, etc.).
  - **`mongoose.d.ts`:** Type definitions specific to Mongoose.

### `public/`
- **Purpose:** Static files like images, icons, or fonts that can be served directly to the client.

---

## Benefits of This Structure

1. **Scalability:** Clear separation of concerns allows for easier expansion.
2. **Maintainability:** Each folder has a distinct purpose, making it easier to locate and manage files.
3. **Reusability:** Components and utility functions are reusable across the project.
4. **Flexibility:** Supports both server-side (API routes) and client-side (React components) development.

This structure is ideal for medium to large-scale applications.


Example API Usage

API Endpoints

	•	GET /api/posts: Fetch all blog posts.
	•	POST /api/posts: Add a new blog post.