import Topnav from "./Components/Topnav/Topnav";
import Footer from "./Components/Footer/Footer";
// import components for pages
import Approutes from "./routes";
import { useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <div className="app_component">
      <Topnav
        background={location.pathname === "/contact" ? true : false}
        backgroundtwo={location.pathname === "/contact" ? false : true}
      />
      <Approutes />
      <Footer />
    </div>
  );
}

export default App;
