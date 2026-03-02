# cs465-fullstack
Repository for CS465 Fullstack Development


# Full Stack Web Application Portfolio Project

## Overview

This project represents the culmination of my full stack development coursework, where I built a working web application serving both customer-facing and administrative users. The final iteration focused on implementing secure authentication for the admin side using JWT-based login protection.

This repository is part of my professional portfolio and showcases my experience designing frontend interfaces, building RESTful APIs, integrating databases, and implementing security best practices. The project also reflects my growth in debugging, refactoring, and deploying scalable application features.

---

## Architecture

### Frontend Development Approaches

This project utilized multiple frontend development strategies:

- **Express HTML templates** provided server-rendered pages for basic routing and content delivery.
- **JavaScript** was used to manage dynamic behavior, form handling, and client-side logic.
- A **Single Page Application (SPA)** approach was implemented for the administrative interface using Angular, allowing dynamic content updates without full page reloads.

Traditional Express HTML pages reload on navigation, while the SPA maintains application state and communicates with the backend via APIs. The SPA offered a smoother user experience, faster interactions, and better separation of concerns between frontend and backend logic.

### Backend Database Choice

The backend uses **MongoDB**, a NoSQL database, because it stores data in flexible JSON-like documents. This structure works well with JavaScript-based applications and allows rapid schema changes during development. MongoDB also scales easily and integrates naturally with Node.js and Express, making it ideal for modern full stack applications.

---

## Functionality

### JSON and JavaScript

While JavaScript is a programming language used to implement application logic, **JSON (JavaScript Object Notation)** is a lightweight data format used to transfer data between systems.

JSON acts as the bridge between frontend and backend:

- The frontend sends requests as JSON payloads.
- The backend processes those requests and returns JSON responses.
- MongoDB stores data in BSON, which closely resembles JSON.

This shared format allows seamless communication across the entire stack.

### Refactoring and Reusable Components

Throughout development, I refactored code to improve efficiency and maintainability. Examples include:

- Extracting authentication logic into reusable services.
- Creating Angular UI components that could be shared across multiple views.
- Moving JWT handling into an HTTP interceptor for centralized security.

Reusable UI components reduce duplication, simplify updates, improve consistency, and make applications easier to scale and maintain.

---

## Testing

API testing was essential to validate CRUD operations and authentication workflows. Each endpoint was tested using appropriate HTTP methods:

- **GET** for retrieving data  
- **POST** for creating resources  
- **PUT** for updates  
- **DELETE** for removals  

With security layers added, testing became more complex. JWT authentication required validating headers, handling protected routes, and ensuring login endpoints remained publicly accessible. Testing confirmed:

- Tokens were properly issued and validated.
- Unauthorized requests were blocked.
- Admin-only routes were protected.

Understanding endpoints, methods, and middleware was critical to building a secure full stack application.

---

## Reflection

This course significantly advanced my professional development by giving me hands-on experience with real-world full stack technologies. I strengthened my skills in:

- Angular SPA development  
- RESTful API design  
- MongoDB data modeling  
- JWT authentication  
- HTTP interceptors  
- Debugging and refactoring  
- Secure application architecture  

Completing this project helped me understand how frontend and backend systems integrate in production environments. It also improved my confidence in building scalable, secure applications from scratch.

These skills make me a stronger and more marketable candidate for software development roles, and this project serves as a foundation for continued growth in full stack engineering.

---

## Author

**[Your Name]**
