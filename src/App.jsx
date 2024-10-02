import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import HomePage from "./pages/HomePage/HomePage";
import Error from "./pages/Error";
import DetailPage from "./pages/DetailPage/DetailPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Root from "./pages/Root";

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
loader();
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
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
