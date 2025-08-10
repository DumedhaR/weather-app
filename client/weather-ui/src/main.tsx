// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-1yprsmnyle7lg0yn.us.auth0.com"
    clientId="ELtQP2ceqW6Sl2lOU3htJTLCpqzg9TCX"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "http://localhost:8000",
    }}
  >
    <App />
  </Auth0Provider>
);
