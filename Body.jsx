import { Outlet } from "react-router";
import NavBar from "./src/NavBar";
import Footer from "./src/Footer";
const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
