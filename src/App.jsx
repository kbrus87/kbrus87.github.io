// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import { useState } from "react";
import Navigation from "./components/Navigation";
import UserStatus from "./components/UserStatus";

export default function App() {
  const [user, setUser] = useState(null);
  const handleLogin = () => {
    // placeholder login logic
    setUser({ name: "Bruno Javier Ramari" });
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-50 text-gray-900">
      <header className="Header flex justify-between items-center">
        <h5 className="Logo text-xl font-bold">KBrus Github Page</h5>

        <div className="Options">
          <Navigation />
          <UserStatus user={user} handleLogin={handleLogin} />
        </div>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
    </div>
  );
}
