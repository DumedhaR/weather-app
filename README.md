# 🌦 Weather App With Auth

A full-stack weather application featuring real-time weather data fetching and secure user authentication.

**Frontend:** Built with React, Vite, and TypeScript, providing a simple and responsive user interface.

**Backend:** Built with Node.js and Express, handling API requests and caching weather data for short intervals to optimise performance and reduce external API calls.

**Weather Data:** Fetched from the OpenWeatherMap's Current Weather API. The backend caches responses temporarily to minimise latency and API usage costs.

**Authentication:**

- Client uses Auth0 for user login and authentication flows.
- All backend API endpoints are protected using JWT tokens issued by Auth0, ensuring secure access control between client and server.

**How it works**:

- The user logs in via Auth0 on the frontend.
- Auth0 issues JWT tokens which the client sends with every API request.
- The backend validates the token before serving cached or fresh weather data.
- Frontend displays weather info dynamically in a clean, responsive UI.
