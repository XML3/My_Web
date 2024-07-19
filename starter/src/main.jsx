import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Headers } from "./components/Headers.jsx";
import { Content } from "./components/Content.jsx";
import { ContactForm } from "./components/Contact.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Headers />,
      },
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/",
        element: <Skills />,
      },
      {
        path: "/",
        element: <ContactForm />,
      },
    ],
  },
]);

//@ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>

  <RouterProvider router={router} />
  //</React.StrictMode>
);
