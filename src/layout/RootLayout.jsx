import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="max-container">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
