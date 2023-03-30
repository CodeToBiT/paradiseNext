import "../styles/globals.scss";

import NavigationBar from "./components/header/NavigationBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}
