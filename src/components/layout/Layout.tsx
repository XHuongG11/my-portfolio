import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "../common/PageTransition";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <PageTransition>
        <main className="flex-1 relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8 py-6 lg:py-8">
          <Outlet />
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

export default Layout;
