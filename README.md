# Frontend-Dev

### Student Result Management System
#### _A Beginner-Friendly React + JSON Server CRUD Project_

This project is a simple student result management application built using React and JSON Server. All CRUD operations (Create, Read, Update, Delete) are performed using Fetch API, and all state is managed using `useState` only. No `useEffect` is used so beginners can clearly see every data-fetching action is triggered manually.

- Add new students  
- Load all students  
- Edit a student  
- Delete a student  
- View student details  
- Manual "Load Students" button to fetch data anytime  

---

## Features

- React components for List, Form, Details
- JSON Server backend
- Full CRUD with Fetch API
- Manual data loading by button click
- Beginner-friendly architecture
- No useEffect required

---

## Folder Structure

```
student-result-app/
│
├── db.json
│
├── src/
│   ├── components/
│   │   ├── StudentList.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentDetails.jsx
│   │
│   ├── services/
│   │   └── studentService.js
│   │
│   ├── App.jsx
│   └── index.js
│
├── public/
│   └── index.html
│
├── package.json
└── node_modules/
```

---

## Installation

### 1. Navigate to your workspace

```
cd C:\Users\Aadiy\OneDrive\Desktop\Frontend-Dev
```

### 2. Create a React app

```
npx create-react-app student-result-app
```

### 3. Go into the project

```
cd student-result-app
```

### 4. Replace the default `src` folder  
Paste your custom `src` files (App.jsx, components, services, index.js).

### 5. Create `db.json` in the project root

```
{
  "students": []
}
```

---

## Running the Backend (JSON Server)

Use npx so you don’t rely on global PATH setup:

```
npx json-server --watch db.json --port 3007
```

Backend will run at:

```
http://localhost:3007/students
```

---

## Running the React App

Install dependencies if needed:

```
npm install
```

Start the app:

```
npm start
```

Your React app opens at:

```
http://localhost:3000
```

---

## CRUD Flow

### Create
Fill the form → Submit → Student added → User clicks "Load Students" to refresh.

### Read
Click "Load Students" → StudentList fetches all records.

### Update
Click Edit → Update fields → Save → User reloads list.

### Delete
Click Delete → Confirm → Student removed → User reloads list.

### View Details
Click View → StudentDetails screen shows full info.

---

## Important Notes

- No useEffect is used anywhere.
- All data is fetched only through button clicks.
- This keeps the project simple for new React learners.
- JSON Server must be running for any data operation to work.

---

## Troubleshooting

### Error: package.json missing
You are in the wrong folder.  
Run:

```
cd student-result-app
```

### Error: json-server not recognized
Run JSON Server using:

```
npx json-server --watch db.json --port 3007
```

### Error: Port already in use
React will ask:
```
Would you like to run the app on another port?
```
Press Y.

---