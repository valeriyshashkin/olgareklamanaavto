import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
      <style jsx>{`
        div {
          margin-top: 74px;
        }
      `}</style>
    </>
  );
}
