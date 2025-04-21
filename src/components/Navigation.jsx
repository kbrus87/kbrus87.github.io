import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navigation">
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
      <div className={`nav-links ${open ? 'show' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link>
        <Link to="/donate" onClick={() => setOpen(false)}>DONATE</Link>
      </div>
    </nav>
  );
}