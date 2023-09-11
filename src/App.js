import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/">
        <h1 className="card obl">Recipe Website</h1>
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
