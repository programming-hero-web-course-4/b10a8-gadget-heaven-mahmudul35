import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../AllProductData.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/statistics",
        element: <h1>Hello</h1>,
      },
    ],
  },
  {
    path: "/product/:productId",
    element: <Layout />,
    children: [
      {
        path: "/product/:productId",
        element: <ProductDetails />,
        loader: () => fetch("../AllProductData.json"),
      },
    ],
  },
]);

export default router;
