import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
