import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import HeadComponent from "@/src/HeadComponent";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      {/* <HeadComponent /> */}
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
