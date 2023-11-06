import { Navbar, Footer } from "../index";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
