import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import { useContext } from "react";
import Navigation from "./components/Navigation";
// import UserStatus from "./components/UserStatus";

import AwesomSpinner from "./components/AwesomSpinner";

import { MyContext } from "./context/Context";
import ProjectContent from "./pages/Project";

export default function App() {
  //const [user, setUser] = useState(null);
  // const handleLogin = () => {
  //   setUser({ name: "Bruno Javier Ramari" });
  // };

  const { loading } = useContext(MyContext);
  return (
    <div className="min-w-screen min-h-screen text-gray-900">
      <header className="Header flex justify-between items-center">
        <Link to="/"><h5 className="Logo font-bold">KBrus Github Page</h5></Link>

        <div className="Options">
          <Navigation />
        </div>
      </header>

      <main className="p-6">
        {loading ? (
          <AwesomSpinner />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/project/:project_id" element={<ProjectContent />} />
          </Routes>
        )}
      </main>
    </div>
  );
}
