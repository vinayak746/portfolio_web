import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MangementSystems from "./pages/MangementSystems";
import WebDevelopment from "./pages/WebDevelopment";
import UiUx from "./pages/UiUx";
import CloudServices from "./pages/CloudServices";

const App = () => (
  <Router>
    <div className="min-h-screen transition-all duration-500 bg-black text-white light:bg-white light:text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management-systems" element={<MangementSystems />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/ui-ux" element={<UiUx />} />
        <Route path="/cloud-computing" element={<CloudServices />} />
      </Routes>
    </div>
  </Router>
);

export default App;
