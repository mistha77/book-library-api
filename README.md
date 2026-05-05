# 📚 Book Library API

A simple RESTful API built using Node.js and Express.js to manage a collection of books.
This project demonstrates CRUD operations along with borrow and return functionality.

---

## 🚀 Features

* 📖 Get all books
* ➕ Add a new book
* 🔍 Get book by ID
* ✏️ Update book details
* ❌ Delete a book
* 📕 Borrow a book
* 📗 Return a book

---

## 🛠️ Tech Stack

* Node.js
* Express.js

---

## 📁 Project Structure

```
book-library-api/
│
├── controllers/
├── routes/
├── data/
├── app.js
├── package.json
├── README.md
└── postman_collection.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/your-username/book-library-api.git
```

2. Navigate to the project folder

```
cd book-library-api
```

3. Install dependencies

```
npm install
```

4. Run the server

```
npm start
```

Server will run on:
👉 http://localhost:3000

---

## 📡 API Endpoints

### 📚 Books

* GET `/api/books` → Get all books
* POST `/api/books` → Add new book
* GET `/api/books/:id` → Get single book
* PUT `/api/books/:id` → Update book
* DELETE `/api/books/:id` → Delete book

### 🔄 Borrow & Return

* POST `/api/borrow` → Borrow a book
* POST `/api/return` → Return a book

---

## 📦 Postman Collection

A ready-to-use Postman collection is included:

👉 Import `postman_collection.json` in Postman to test all endpoints easily.

---

## 👩‍💻 Author

* Mistha v

---

## 📌 Notes

* This project uses in-memory data (no database).
* Suitable for learning REST API basics.

---
