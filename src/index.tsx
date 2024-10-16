import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./setup.css";
import "@mantine/core/styles.css";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(rootElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
      <ToastContainer/>
    </React.StrictMode>
  </QueryClientProvider>
);
