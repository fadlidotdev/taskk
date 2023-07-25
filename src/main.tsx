import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import {Toaster} from "react-hot-toast";
import {BrowserRouter} from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster />
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
