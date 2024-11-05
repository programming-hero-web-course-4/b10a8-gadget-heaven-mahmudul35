import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Faq from "../pages/FAQandSupport/Faq";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Statistics from "../pages/Statistics/Statistics";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        element: <Statistics />,
      },
      {
        path: "/faq",
        element: <Faq />,
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
