import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/404.Page";
import RestrorauntMenu from "./components/RestrurantMenu";
import CardContext from "./utils/cardContext";

const About = lazy(() => import("./components/About"));
// Components HLL
const App = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="app">
      <CardContext.Provider value={{ cartValue: cartCount, setCartCount }}>
        <Header />
        <Outlet />
        <Footer />
      </CardContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <About />
          </Suspense>
        ),
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
