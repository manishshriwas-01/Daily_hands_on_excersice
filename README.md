# Daily Hands-on Exercise

# Node JSON CLI

A simple Node.js CLI application that reads task data from a JSON file, transforms the data by adding a task status, and writes the updated data to a new JSON file. The project also includes a simple HTML/CSS/JavaScript dashboard to visualize the transformed tasks.

## Features

* Read task data from `tasks.json`
* Transform task data using a separate module
* Add a `status` field (`Completed` or `Pending`)
* Write transformed data to `output.json`
* Display task statistics and task cards in a simple dashboard
* Clean and modular project structure

## Project Structure

```text
node-json-cli/
│
├── package.json
├── index.js
├── transformer.js
├── tasks.json
├── output.json
│
└── public/
    ├── index.html
    ├── style.css
    └── app.js
```

## Technologies Used

* Node.js
* JavaScript (ES6)
* HTML5
* CSS3

## Installation

1. Create the project folder and navigate to it.

```bash
mkdir node-json-cli
cd node-json-cli
```

2. Initialize the Node.js project.

```bash
npm init -y
```

3. Install dependencies (if any).

```bash
npm install
```

## Run the Project

Generate the transformed JSON file.

```bash
npm start
```

Open the dashboard:

* Open `public/index.html` using **Live Server** in VS Code.

## Input Example (`tasks.json`)

```json
[
  {
    "id": 1,
    "title": "Learn Node.js",
    "completed": false
  }
]
```

## Output Example (`output.json`)

```json
[
  {
    "id": 1,
    "title": "Learn Node.js",
    "completed": false,
    "status": "Pending"
  }
]
```

## Learning Outcomes

* Node.js runtime
* npm and package.json
* CommonJS modules
* Reading and writing JSON files
* File System (`fs`) module
* Data transformation using JavaScript
* Basic frontend integration with HTML, CSS, and JavaScript
