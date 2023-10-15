import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { App } from "./alpha_app/app/app";
import { getStore } from "./golf_shared/store";
// import axios from "axios";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <Provider store={getStore}>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

// setInterval(() => {
//   axios.get("http://brontosaur.ru/api/drink").then(console.log);
//   axios.get("http://brontosaur.ru/api/food").then(console.log);
//   axios.get("http://brontosaur.ru/api/menu").then(console.log);
//   axios.get("http://brontosaur.ru/api/flora").then(console.log);
//   axios.get("http://brontosaur.ru/api/flower").then(console.log);
//   axios.get("http://brontosaur.ru/api/table").then(console.log);
//   axios.get("http://brontosaur.ru/api/reserve").then(console.log);
//   axios.get("http://brontosaur.ru/api/order").then(console.log);
// }, 1);
