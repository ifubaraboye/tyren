import Footer from "../components/Footer";
import AltNavbar from "../components/AltNavbar";
import { Outlet } from "react-router-dom";

export default function AltLayout() {
  return (
    <div>
      <AltNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}