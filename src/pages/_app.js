import '../styles/global.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; 
const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
