import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import Layout from "./Components/Layout";
import Overview from "./Components/Overview";
import Tanks from "./Components/Tanks";
import Analytics from "./Components/Analytics";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

document.body.style.background = "#f5f5f5";

function App() {
  return (
    <div>
      <Router>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/tanks" element={<Tanks />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
