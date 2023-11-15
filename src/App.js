import "./App.css";
import About from "./pages/about/About";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
