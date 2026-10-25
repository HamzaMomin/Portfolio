import { Outlet } from "react-router-dom";
import Footer from "../shared/components/Footer";
import Header from "../shared/components/Header";
import PortfolioLike from "../shared/components/PortfolioLike";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-body text-brand-ink">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <PortfolioLike />
    </div>
  );
}
