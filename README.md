# URL Shortener API

A simple and efficient RESTful API that shortens long URLs into compact, easy-to-share short links — with support for custom short IDs and click analytics.

---

## Features

- Accept a long URL and generate a unique short URL
- Optionally allow custom short IDs
- Redirect from short URL to original URL
- Track the number of times a short URL was clicked
- MongoDB-based persistence
- Hosted on Vercel for easy access and testing
- Built with Node.js, Express, and Mongoose

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Utilities**: [`shortid`](https://www.npmjs.com/package/shortid), `dotenv`, `cors`

---

## API Endpoints

### `POST /api/url`

Create a new short URL.

#### Request Body:
```json
{
  "longurl": "https://example.com/very/long/url",
  "id": "customId123" 
}
