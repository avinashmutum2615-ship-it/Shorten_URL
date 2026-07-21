# 🔗 Short URL Generator

A simple and efficient web application that converts long URLs into short, shareable links. Built with **Node.js**, **Express.js**, **MongoDB**, and **EJS**, this project demonstrates the fundamentals of backend development, database integration, and URL redirection.

---

## ✨ Features

- 🔗 Convert long URLs into short links
- 🚀 Redirect users to the original URL
- 💾 Store URL data in MongoDB
- 🎨 Simple and responsive user interface
- ⚡ Fast and lightweight application

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Frontend:** EJS, HTML, CSS

---

## 📁 Project Structure

```text
short-url-generator/
│
├── controllers/
│   └── url.js
├── models/
│   └── Url.js
├── views/
│   └── index.ejs
├── server.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/short-url-generator.git
cd short-url-generator
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the Application

```bash
npm start
```

### 5. Open Your Browser

```
http://localhost:3000
```

---

## 📖 How It Works

1. Enter a long URL.
2. Click the **Shorten** button.
3. The application generates a unique short URL.
4. Open the generated short URL to be redirected to the original website.

---

## 🌱 Future Enhancements

- User authentication
- Click analytics dashboard
- Custom short URLs
- QR code generation
- URL expiration feature
- Copy-to-clipboard button

---

## 🤝 Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.


## 👨‍💻 Author

**Avinash Mutum**
