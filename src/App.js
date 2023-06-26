import "./App.css";
import Error from "./pages/Error404";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project/:id" element={<Project />} />
        <Route exact={true} path="/*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;
