import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2 className="logo">RION</h2>

            {/* Hamburger */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                </li>

                <li className="dropdown">
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>

                    <ul className="dropdown-menu">
                        <li>
                            <a href="#education" onClick={() => setMenuOpen(false)}>
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={() => setMenuOpen(false)}>
                                Experience
                            </a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                </li>

                <li>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                </li>

                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;