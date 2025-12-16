import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CatalogPage from "./pages/Catalog";
import ContactPage from "./pages/Contact";
import ProductPage from "./pages/Product";
import USACarsPage from "./pages/UsaCars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "catalog",
        element: <CatalogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "catalog/:article",
        element: <ProductPage />,
      },
      {
        path: "usa-cars",
        element: <USACarsPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
