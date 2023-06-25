import "./App.css";
import Error from "./pages/Error404";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact={true} path="/*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
