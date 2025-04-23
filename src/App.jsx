// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import { useContext } from "react";
import Navigation from "./components/Navigation";
// import UserStatus from "./components/UserStatus";
import MidiRouter from "./pages/MidiRouter";
import AwesomSpinner from "./components/AwesomSpinner";

import { MyContext } from "./context/Context";

export default function App() {
  //const [user, setUser] = useState(null);
  const { loading } = useContext(MyContext);
  // const handleLogin = () => {
  //   setUser({ name: "Bruno Javier Ramari" });
  // };

  return (
    <div className="min-w-screen min-h-screen text-gray-900">
      <header className="Header flex justify-between items-center">
        <h5 className="Logo font-bold">KBrus Github Page</h5>

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
            <Route path="/midirouter" element={<MidiRouter />} />
          </Routes>
        )}
      </main>
    </div>
  );
}
