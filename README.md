# Scriblo – React + Vite Blogging Platform

A modern, full-featured blogging application built with React, Vite, Appwrite, and Tailwind CSS.

## Tech Stack

- **React** – For building the user interface and managing state
- **Vite** – For fast development and build tooling
- **Tailwind CSS** – For utility-first, responsive styling
- **Redux Toolkit** – For global authentication and app state
- **Appwrite** – For backend database, authentication, and file storage
- **TinyMCE** – For rich text editing in blog posts
- **React Router** – For client-side routing

## Features

- User authentication (signup, login, logout)
- Create, edit, and delete blog posts
- Rich text editor for post content (TinyMCE)
- Upload and display featured images for posts
- Responsive and modern UI with Tailwind CSS
- All posts and user data managed via Appwrite backend
- Route protection for authenticated actions

## How It Works

- **Authentication:**  
  Users can sign up, log in, and log out using Appwrite's authentication service. Auth state is managed globally with Redux.
- **Post Management:**  
  Authenticated users can create, edit, and delete their own blog posts. Each post includes a title, slug, content (rich text), status, and featured image.
- **Rich Text Editing:**  
  The post editor uses TinyMCE for a full WYSIWYG experience.
- **Image Uploads:**  
  Images are uploaded to Appwrite storage and linked to posts.
- **Routing:**  
  React Router handles navigation between pages (home, login, signup, post details, etc).

## Key React Concepts Used

- **Redux Toolkit:**  
  For global state management (auth, user data).
- **React Context & Hooks:**  
  For form state, editor integration, and UI logic.
- **React Hook Form:**  
  For robust form handling and validation.
- **Custom Components:**  
  Modular UI with reusable components (Input, Button, PostCard, etc).

## Usage

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ujjwal1207/Scriblo.git
     cd scriblo
     ```
  
  2. **Install dependencies:**
     ```sh
     npm install
     ```
  
  3. **Start the development server:**
     ```sh
     npm run dev
     ```
  
  4. Open [http://localhost:5173](http://localhost:5173) in your browser.
  
  ## License
  
  This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
  
