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

- Node.js, Express, dotenv, morgan, node-cache, Axios

**_Authentication_**

- Auth0, JWT (JSON Web Tokens)

## 📂 Project Structure

`weather-app/
├── client/               # Frontend
│   └── weather-ui/
│       ├── public/
│       └── src/
│           ├── assets/
│           ├── components/
│           ├── contexts/
│           ├── hooks/
│           ├── layouts/
│           ├── pages/
│           ├── services/
│           ├── styles/
│           ├── types/
│           ├── utils/
│           └── .env
│
├── server/               # Backend
│   └── weather-api/
│       ├── public/
│       └── src/
│           ├── controller/
│           ├── data/
│           ├── routes/
│           ├── utils/
│           └── .env
│
└── README.md
`
