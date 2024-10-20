import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginAndRegister/LoginPage";
import RegisterPage from "./pages/LoginAndRegister/RegisterPage";
import Root from "./pages/Root";
import ShopPage from "./pages/ShopPage/ShopPage";

async function loader() {
  try {
    const response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loader,
    errorElement: <Error />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/detail/:productId",
        element: <DetailPage />,
        loader: loader,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
