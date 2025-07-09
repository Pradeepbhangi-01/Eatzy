import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/404.Page";
import RestrorauntMenu from "./components/RestrurantMenu";

// Components HLL
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      { path: "contact", element: <Contact /> },
      {
        path: "restaurant/:resId",
        element: <RestrorauntMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
