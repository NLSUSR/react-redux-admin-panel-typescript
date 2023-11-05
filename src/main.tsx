import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./alpha_app/app/app";
import { rootStore } from "./golf_shared/store";
import "./index.css";

createRoot(document.querySelector("#root") as Element).render(
  <StrictMode>
    <Provider store={rootStore}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
