import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateBuild from "./pages/CreateBuild";
import EditBuild from "./pages/EditBuild";
import BuildDetails from "./pages/BuildDetails";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand-mark">
          <span className="brand-icon"></span>
          <div>
            <strong>BoltBucket Studio</strong>
            <small>Custom device configurator</small>
          </div>
        </Link>

        <nav className="site-nav">
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
        </nav>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateBuild />} />
          <Route path="/builds/:id" element={<BuildDetails />} />
          <Route path="/builds/:id/edit" element={<EditBuild />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
