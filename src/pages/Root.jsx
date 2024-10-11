import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Root() {
  const data = useLoaderData();

  localStorage.setItem("products", JSON.stringify(data));

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
