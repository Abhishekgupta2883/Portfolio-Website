import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/portfolioLogo.jpeg";

export default function Navbar({ setSelectedTab, selectedTab }) {
    const [isLogoExpanded, setIsLogoExpanded] = useState(false);
    const [activeItem, setActiveItem] = useState('home-section');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogoClick = () => {
        setIsLogoExpanded(true);
    };

    const handleOverlayClick = () => {
        setIsLogoExpanded(false);
    };

    const scrollToSection = (sectionId, tab = null) => {
        if (tab) setSelectedTab(tab);
        setActiveItem(sectionId);
        setIsMenuOpen(false); // Close menu after clicking a link
        const section = document.getElementById(sectionId);
        if (section) {
            let yOffset;
            switch(sectionId) {
                case 'skills-section':
                    yOffset = -150;
                    break;
                case 'home-section':
                    yOffset = -80;
                    break;
                case 'about-section':
                    yOffset = -80;
                    break;
                case 'contact-section':
                    yOffset = -80;
                    break;
                default:
                    yOffset = -100;
            }
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar">
                <img 
                    src={logo} 
                    alt="Logo" 
                    className="navbar-logo"
                    onClick={handleLogoClick}
                />
                <div className="menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li className={`nav-item ${activeItem === 'home-section' ? 'active' : ''}`} 
                        onClick={() => scrollToSection("home-section")}>Home</li>
                    <li className={`nav-item ${activeItem === 'about-section' ? 'active' : ''}`}
                        onClick={() => scrollToSection("about-section")}>About</li>
                    <li className={`nav-item ${activeItem === 'skills-section' && selectedTab === 'skills' ? 'active' : ''}`}
                        onClick={() => scrollToSection("skills-section", "skills")}>Skills</li>
                    <li className={`nav-item ${activeItem === 'skills-section' && selectedTab === 'projects' ? 'active' : ''}`}
                        onClick={() => scrollToSection("skills-section", "projects")}>Projects</li>
                    <li className={`nav-item ${activeItem === 'contact-section' ? 'active' : ''}`}
                        onClick={() => scrollToSection("contact-section")}>Contact</li>
                </ul>
            </nav>

            {/* ✅ Expanded Logo & Overlay */}
            {isLogoExpanded && (
                <>
                    <div className="logo-overlay" onClick={handleOverlayClick}></div>
                    <img src={logo} alt="Expanded Logo" className="logo-expanded" />
                </>
            )}
        </>
    );
}
