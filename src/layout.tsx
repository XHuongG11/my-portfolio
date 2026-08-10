import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="relative z-10 mx-auto my-10 max-w-7xl px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
