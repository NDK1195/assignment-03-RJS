import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { ON_LOGIN } from "../store/authenticationSlice";
import { setProductList } from "../store/productListSlice";

function Root() {
  const data = useLoaderData();
  const dispatch = useDispatch();

  const currentLoginUser = JSON.parse(localStorage.getItem("currentLoginUser"));

  if (currentLoginUser) {
    dispatch(ON_LOGIN());
  }

  useEffect(() => {
    dispatch(setProductList(data));

    const userArr = JSON.parse(localStorage.getItem("userArr"));
    if (!userArr) {
      localStorage.setItem("userArr", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <NavBar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Root;
