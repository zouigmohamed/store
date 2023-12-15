import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className=" container mx-auto ">
      <Navbar />
      <div className="w-10/12 mx-auto h-full">
        <Outlet />
      </div>
      <Footer/>

    </div>
  );
};

export default RootLayout;
