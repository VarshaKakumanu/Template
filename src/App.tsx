import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Layout from "./layouts/Layout"; // Main layout

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Main Layout (Navbar & Footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Catch-all 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
