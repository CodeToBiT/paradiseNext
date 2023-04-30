import "../styles/globals.scss";
import { SSRProvider } from "react-bootstrap";
import NavigationBar from "./components/header/Bottomnav";
import Topnav from "./components/header/Topnav";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <SSRProvider>
        <header className="main-header">
          <Topnav />
          <NavigationBar />
        </header>
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </>
  );
}
