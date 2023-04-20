import "../styles/globals.scss";
import { SSRProvider } from "react-bootstrap";
import NavigationBar from "./components/header/Bottomnav";
import Topnav from "./components/header/Topnav";

export default function App({ Component, pageProps }) {
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
      </SSRProvider>
    </>
  );
}
