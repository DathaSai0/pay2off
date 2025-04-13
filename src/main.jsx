import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.js";
import AppLayout from "./pages/appLayout/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppLayout>
        <App />
      </AppLayout>
    </Provider>
  </StrictMode>
);
