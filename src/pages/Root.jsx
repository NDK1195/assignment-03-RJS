import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { ON_LOGIN } from "../store/authenticationSlice";
import Chat from "./Chat/Chat";

function Root() {
  const data = useLoaderData();
  const dispatch = useDispatch();

  // save data to local storage
  localStorage.setItem("productList", JSON.stringify(data));

  const currentLoginUser = JSON.parse(localStorage.getItem("currentLoginUser"));

  useEffect(() => {
    if (currentLoginUser) {
      dispatch(ON_LOGIN());
    }
  }, []);

  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Chat />
      <NavBar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Root;
