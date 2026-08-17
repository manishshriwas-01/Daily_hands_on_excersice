# Daily Hands-on Exercise

# Day 1 – JavaScript Basics**

This hands-on project focuses on the fundamentals of JavaScript, including variables, data types, `let` and `const`, scope,
 comparison operators, truthy and falsy values, conditional statements, loops, and functions. As part of the exercises, I implemented 
 **FizzBuzz** and a **Temperature Converter** using pure functions with input validation and manual test cases. Through this project, 
 I built a strong foundation in JavaScript programming and problem-solving.

---

# Day 2 – Functions, Arrays & Objects (ES6)**

This hands-on project explores modern JavaScript (ES6) features, including arrow functions, the `this` keyword, 
destructuring, spread and rest operators, default parameters, and immutable programming techniques. It also demonstrates 
the use of array methods such as `map()`, `filter()`, and `reduce()` by solving multiple array-based problems without using loops.
 Through this project, I learned how to write clean, concise, and reusable JavaScript code using modern ES6 syntax.

---

# Day 3 – Async JavaScript**

This hands-on project demonstrates asynchronous programming in JavaScript using callbacks, Promises, `async/await`, error handling with `try...catch`, and the Fetch API. It includes consuming a public REST API, displaying loading states, handling errors gracefully, and executing multiple API requests concurrently using `Promise.all()`. Through this project, I gained a solid understanding of asynchronous workflows and modern JavaScript API handling.

---

# Day 4 – TypeScript Fundamentals**

This hands-on project introduces the fundamentals of TypeScript, including primitive types, interfaces, type aliases, union types, literal types, enums, generics, strict mode, and TypeScript compiler configuration (`tsconfig.json`). It also includes converting a JavaScript module into strict TypeScript by replacing `any` with appropriate types and adding type annotations to all parameters and return values. Through this project, I learned how TypeScript improves code safety, maintainability, and scalability.

---

# Day 5 – Node.js & npm Fundamentals**

This hands-on project demonstrates the fundamentals of Node.js and npm, including the Node.js runtime, npm packages, scripts, semantic versioning, CommonJS vs ES Modules, `package.json`, and JSON file operations. It includes building a Node.js CLI application that reads a JSON file, transforms the data, writes the output to a new file, and executes through an npm script. Through this project, I gained practical experience with backend JavaScript development and project configuration.

---

# Day 6 – Angular Setup & Components**

This hands-on project demonstrates Angular project setup using the Angular CLI and standalone components. It covers the Angular project structure, templates, component styling, and Angular Signals by building a simple dashboard card. Through this project, I learned how Angular applications are structured and how standalone components and reactive state management simplify frontend development.

---

# Day 7 – Templates & Directives**

This hands-on project demonstrates Angular template syntax and control flow features, including interpolation, property binding, event binding, `@if`, `@for`, `@switch`, `ngClass`, and `ngStyle`. It includes building a Todo List UI with filtering, dynamic rendering, and an empty state without using a backend. Through this project, I learned how Angular dynamically updates the UI based on application state.

---

# Day 8 – Component Communication & Dependency Injection**

This hands-on project demonstrates component communication and Angular Dependency Injection. It includes using `@Input`, `@Output`, signal inputs, reusable services, and `providedIn: 'root'` to share state between parent and child components. Through this project, I learned how Angular components communicate efficiently while maintaining a clean and modular architecture.

---

# Day 9 – Routing & Navigation**

This hands-on project demonstrates Angular Routing using standalone components. It includes configuring application routes, implementing navigation with `routerLink`, handling route parameters and query parameters, creating a lazy-loaded module, and adding a wildcard 404 page. Through this project, I learned how Angular enables efficient navigation in Single Page Applications.

---

# Day 10 – Reactive Forms & Validation**

This hands-on project demonstrates Angular Reactive Forms using `FormBuilder` and `FormControl`. It includes implementing built-in and custom validators, displaying validation messages, managing form states (`dirty`, `touched`, and `valid`), and creating a signup form with password confirmation validation. Through this project, I learned how to build scalable and maintainable forms using Angular's reactive approach.

---

# **Day 11 – HttpClient & REST APIs**

This hands-on project demonstrates API integration using Angular's `HttpClient`. It includes performing GET, POST, PUT, and DELETE operations, consuming typed API responses, using Observables, and displaying data with the `AsyncPipe`. The project also implements loading indicators and error handling while fetching data from a public REST API. Through this project, I learned how Angular communicates with backend services efficiently.

---

# Day 12 – RxJS in Practice**

This hands-on project demonstrates practical usage of RxJS in Angular applications. It includes implementing a real-time search feature using `debounceTime`, `distinctUntilChanged`, `switchMap`, `map`, and `takeUntilDestroyed` to optimize API calls and cancel stale requests. The project also handles loading states and API errors while following reactive programming principles. Through this project, I gained practical experience in building responsive and efficient Angular applications using RxJS.

---

# Day 13 – Pipes, Custom Directives & Lifecycle Hooks**

This hands-on project demonstrates Angular Custom Pipes, Custom Attribute Directives, and Lifecycle Hooks using standalone components. It includes creating a reusable `timeAgo` pipe, implementing a highlight-on-hover directive using `HostListener` and `HostBinding`, and understanding the Angular component lifecycle through `constructor`, `ngOnInit`, and `ngOnDestroy`. Through this project, I learned how to build reusable UI features, manage DOM interactions, and handle component initialization and cleanup effectively.

---

# Day 14 – Route Guards, HTTP Interceptors & Shared State**

This hands-on project demonstrates Angular authentication using Functional Route Guards, HTTP Interceptors, and shared application state. It includes building a Login and Dashboard flow, implementing an `AuthService` for token management, protecting routes with a Functional `CanActivate` Guard, and preparing an HTTP Interceptor to automatically attach authentication tokens and handle `401 Unauthorized` responses. Through this project, I learned how Angular secures routes, centralizes HTTP request handling, and manages shared application state using modern Angular best practices.

---

# Day 15 – Angular Material + Accessibility
 
Created a separate Material Todo project to practice Angular Material components and accessibility. The project focuses on building a clean Todo UI using mat-toolbar, mat-card, mat-form-field, matInput, and Material buttons. Implemented task creation, task completion, deletion, empty-state handling, and Angular @for/@if control flow. Also applied accessibility best practices by using proper form labels, meaningful button text, correct input types, and accessible UI structure.


# Day 16-CLI Note Tool — 

Today I built a standalone CLI Note Tool using Node.js to practice file handling and command-line concepts. I used fs/promises with readFile() and writeFile() to read and save notes in a JSON file, path.join() to create the file path, and JSON.parse() / JSON.stringify() to convert between JSON and JavaScript data. The tool uses process.argv and npm scripts to handle add, list, and delete commands directly from the terminal. I also implemented async/await for asynchronous operations and try/catch with proper error messages for file and input errors.

Features
Add: npm run notes -- add "Learn Node.js"
List: npm run notes -- list
Delete: npm run notes -- delete <id>
Notes are stored permanently in data/notes.json
Proper error handling for invalid input and file operations

----



# Day 17 — Express Hello API —

Today I built a standalone Express Hello API to practice Express.js fundamentals. I learned how to set up an Express server, create routes using GET, work with req and res, and organize routes in a separate Express Router module. I also implemented a request-logger middleware using req.method, req.url, and next() to log incoming requests, and added a 404 handler to handle unknown routes with proper status codes and JSON responses.

Features
Routes: GET /api/hello, GET /api/about, GET /api/status
Request Logger: Logs HTTP method and URL for every incoming request
Router Module: Routes are maintained separately using express.Router()
404 Handler: Returns 404 Route not found for undefined routes
Nodemon: Automatically restarts the server when code changes
JSON Responses: API responses are returned using res.json()
Request Flow: Request → Logger Middleware → Router → Route → Response

---

# Day 18 — REST API Design (CRUD)

Today I built a standalone in-memory REST API for tasks using Node.js and Express.js to practice CRUD operations and REST API conventions. I learned how to design resource-based endpoints using HTTP methods, handle request bodies with express.json(), use route parameters with req.params, query parameters with req.query, and return appropriate HTTP status codes such as 200, 201, 204, and 404. I also implemented task filtering based on status using query parameters.

Features
Create: POST /tasks — Create a new task with 201 Created
Read All: GET /tasks — Get all tasks
Read One: GET /tasks/:id — Get a specific task
Update: PUT /tasks/:id — Update an existing task
Delete: DELETE /tasks/:id — Delete a task with 204 No Content
Filtering: GET /tasks?status=todo — Filter tasks by status
Error Handling: Returns 404 Not Found when a task does not exist
In-Memory Data: Tasks are stored temporarily in a JavaScript array without using a database

----

# Day 19 — Validation, Errors & Config

Today I built a standalone Express.js hands-on project to practice request validation, centralized error handling, and environment-based configuration. I used express-validator to validate incoming task data, implemented custom validation messages, and created a centralized error-handling middleware to return consistent JSON error responses. I also learned how to use dotenv and environment variables to manage the server port and added .env to .gitignore to keep configuration and secrets out of Git.

Features
Request Validation: Validates task title and status using express-validator
Custom Validation: Added rules for required title, minimum title length, and allowed status values (todo/done)
Central Error Handler: Handles errors through a centralized Express error middleware
Consistent JSON Errors: Returns structured error responses with field and message
Environment Configuration: Uses .env, dotenv, and process.env.PORT for server configuration
Git Security: Added .env and node_modules/ to .gitignore
Error Status: Returns 400 Bad Request for invalid request data


---

# Day 20 — JWT Authentication 🔐

Today I learned the basics of authentication using bcrypt and JWT. I implemented user registration with password hashing, login with bcrypt.compare(), JWT token generation using jwt.sign(), and an authentication middleware using jwt.verify(). I also created a protected /profile route that requires a valid Bearer token.

Features

Register user with bcrypt password hashing
Login with password verification
JWT token generation
JWT authentication middleware
Protected /profile route
Handling missing and invalid/expired tokens