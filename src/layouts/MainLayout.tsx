import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-700 flex flex-col overflow-hidden no-copy">
      <Header />
      <div className="flex-1 relative"> {children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
