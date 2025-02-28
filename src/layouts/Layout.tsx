import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-screen ">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 "> {/* Main content */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
