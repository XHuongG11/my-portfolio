import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function Layout() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl px-6 lg:px:8 "> <Outlet /></div>
      <Footer />
    </>
  );
}

export default Layout;
