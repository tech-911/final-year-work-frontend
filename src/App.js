import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./pages/login/Auth";
import Layout from "./components/NavLayout";
import Control from "./pages/control";
import Monitor from "./pages/monitoring";
import UseAuthContext from "./components/Context/UseAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = UseAuthContext();
  return (
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/" element={user && <Layout />}>
          <Route index element={user ? <Home /> : <Navigate to="/auth" />} />
          <Route
            path="/auth"
            element={!user ? <Auth /> : <Navigate to="/" />}
          />
          <Route
            path="/control"
            element={user ? <Control /> : <Navigate to="/auth" />}
          />
          <Route
            path="/monitor"
            element={user ? <Monitor /> : <Navigate to="/auth" />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
