import { useState } from 'react';

function Navbar({ theme, onToggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((current) => !current);
    };

    return ( 
        <nav className={`navbar ${isOpen ? 'open' : ''}`} id="navbar">
            <div className="navbar-brand">
                <h1>My Portfolio</h1>
                <button
                    type="button"
                    className="theme-toggle"
                    onClick={onToggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
                <button
                    type="button"
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                >
                    ☰
                </button>
            </div>
            <ul>
                <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                <li><a href="#resume" onClick={() => setIsOpen(false)}>Resume</a></li>
                <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </nav>
     );
}

export default Navbar;