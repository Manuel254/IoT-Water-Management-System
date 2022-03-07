import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import Layout from "./Components/Layout";
import Overview from "./Components/Overview page/Overview";
import Tanks from "./Components/Tanks/Tanks";
import TankDetails from "./Components/Tanks/TankDetails";
import Analytics from "./Components/Analytics";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TanksTable from "./Components/Tanks/TanksTable";

document.body.style.background = "#f5f5f5";

function App() {
  return (
    <div>
      <Router>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/tanks" element={<TankDetails />} />
            {/* <Route path="/tanks/:id" element={<TankDetails />} /> */}
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
