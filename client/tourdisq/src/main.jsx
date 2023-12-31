import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain = "dev-g2qmssr73utzal6t.us.auth0.com"
    clientId="aYaIV2be6wHXOVEqrIbiHGVThMoNpuyY"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/"
    }}
    audience= "http://localhost:8000"
    scope ="openid profile email"
    >
      <MantineProvider >
        <App />
      </MantineProvider>
    </Auth0Provider>
  </React.StrictMode>
);
