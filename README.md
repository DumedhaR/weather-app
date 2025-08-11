# 🌦 Weather App With Auth

A full-stack weather application featuring real-time weather data fetching and secure user authentication.

**_Frontend:_** Built with React, Vite, and TypeScript, providing a simple and responsive user interface.

**_Backend:_** Built with Node.js and Express, handling API requests and caching weather data for short intervals to optimise performance and reduce external API calls.

**_Weather Data:_** Fetched from the OpenWeatherMap's Current Weather API. The backend caches responses temporarily to minimise latency and API usage costs.

**_Authentication:_**

- Client uses Auth0 for user login and authentication flows.
- All backend API endpoints are protected using JWT tokens issued by Auth0, ensuring secure access control between client and server.

**_How it works:_**

- The user logs in via Auth0 on the frontend.
- Auth0 issues JWT tokens which the client sends with every API request.
- The backend validates the token before serving cached or fresh weather data.
- Frontend displays weather info dynamically in a clean, responsive UI.

## 🛠 Tech Stack

**_Frontend_**

- React (TypeScript), Vite, Material UI, Tailwind CSS, Axios, Auth0 React SDK

**_Backend_**

- Node.js, Express, dotenv, morgan, node-cache, Axios, express-oauth2-jwt-bearer

**_Authentication_**

- Auth0, JWT (JSON Web Tokens)

## 📂 Project Structure

```plaintext
weather-app/
├── client/               # Frontend
│   └── weather-ui/
│       ├── public/
│       ├── src/
│       │   ├── assets/
│       │   ├── components/
│       │   ├── contexts/
│       │   ├── hooks/
│       │   ├── layouts/
│       │   ├── pages/
│       │   ├── services/
│       │   ├── styles/
│       │   ├── types/
│       │   └── utils/
│       └── .env
│
├── server/               # Backend
│   └── weather-api/
│       ├── public/
│       ├── src/
│       │   ├── controller/
│       │   ├── data/
│       │   ├── routes/
│       │   └── utils/
│       └── .env
│
└── README.md
```

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/DumedhaR/weather-app.git
cd weather-app
```

### 2️⃣ Install Dependencies

#### Frontend:

```bash
cd client/weather-ui
npm install

```

#### Backend:

```bash
cd server/weather-api
npm install

```

### 3️⃣ Environment Variables

Create `.env` files in both `client/weather-ui` and `server/weather-api`.

#### client/weather-ui/.env

```ini
VITE_AUTH0_DOMAIN = <your-auth0-domain>
VITE_AUTH0_CLIENT_ID = <your-auth0-client-id>
VITE_AUTH0_AUDIENCE = <your-auth0-server-api-audience>
VITE_API_BASE_URL = <your-back-end-server-base-url>

```

#### server/weather-api/.env

```ini
NODE_ENV = <system-environment>
PORT = <server-port-number>
CLIENT_URL = <your-client-app-base-url>
OPENWEATHER_API_KEY = <your-api-key>
AUTH0_AUDIENCE = <your-auth0-server-api-audience>
AUTH0_ISSUER_BASE_URL = <https://your-auth0-domain-here/>

```

#### ⭕ Note

The environment variables in `.env.example` are provided for `testing` and `evaluation` only.
To `test` the application, rename `.env.example` to `.env`, then either use the values as-is or update them with your own API keys and credentials.

### 4️⃣ Run the Application

#### Start backend:

```bash
cd server/weather-api
npm start

```

#### Start frontend:

```bash
cd client/weather-ui
npm run dev

```

App will be available at:

```
http://localhost:5173
```

## 📌 API Endpoints

- **GET** `/api/weather` – Fetch weather for all available cities.

- **GET** `/api/weather/:cityId` – Fetch weather for a specific city.

## 🗒️ Final Note

- The **OpenWeatherMap API** endpoint for fetching weather data for **multiple cities** in a single request:

```
GET http://api.openweathermap.org/data/2.5/group?id={CITY_IDS}&units=metric&appid={API_KEY}
```

is no longer supported for new API keys, and has been removed from their documentation.

- As a result, this project fetches weather data for **cities** using:

```
GET https://api.openweathermap.org/data/2.5/weather?id={CITY_ID}&units=metric&appid={API_KEY}
```
