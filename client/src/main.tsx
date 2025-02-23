import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <ToastProvider
        toastProps={{
          variant: "flat",
          shouldShowTimeoutProgess: true,
        }}
      />
      <App />
    </HeroUIProvider>
  </StrictMode>
);
