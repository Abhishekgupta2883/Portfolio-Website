import React, { useState, useEffect, useRef } from "react";
import "./skill.css";
import HoverCard from "./hover"; // Import the HoverCard component

// Importing images
import reactImg from "../../assets/react.png";
import expressImg from "../../assets/express.jpg";
import cssImg from "../../assets/css.png";
import htmlImg from "../../assets/html.webp";
import jsImg from "../../assets/js.png";
import nodeImg from "../../assets/node.jpeg";
import pythonImg from "../../assets/Python.png";
import cppImg from "../../assets/c++.jpeg";
import listing from "../../assets/listing.jpeg";
import portfolio from "../../assets/portfolioProject.jpeg";

export default function Skills({ selectedTab }) {
    const [activeTab, setActiveTab] = useState("skills");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const containerRef = useRef(null);

    // Skills Data
    const skills = [
        { name: "React", img: reactImg, description: "Frontend library for building user interfaces" },
        { name: "Express", img: expressImg, description: "Backend web application framework for Node.js" },
        { name: "CSS", img: cssImg, description: "Styling and layout of web applications" },
        { name: "HTML", img: htmlImg, description: "Structure and content of web pages" },
        { name: "JavaScript", img: jsImg, description: "Programming language for web development" },
        { name: "Node.js", img: nodeImg, description: "JavaScript runtime for server-side development" },
        { name: "Python", img: pythonImg, description: "Versatile programming language" },
        { name: "C++", img: cppImg, description: "High-performance programming language" }
    ];

    // Projects Data
    const projects = [
        {
            name: "Portfolio Website",
            img: portfolio,
            description: "A dynamic portfolio built with React, featuring interactive animations and smooth navigation.",
            techStack: ["React", "CSS", "JavaScript"],
          
        },
        {
            name: "Wanderlust Clone",
            img: listing,
            description: "A full-stack property listing platform using Express, Node.js, and JavaScript.",
            techStack: ["Node.js", "Express", "MongoDB"],
            
        }
    ];
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - left - width / 2) * 0.05;
            const y = (e.clientY - top - height / 2) * 0.05;
            containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };

        const handleMouseLeave = () => {
            if (containerRef.current) {
                containerRef.current.style.transform = 'translate(0, 0)';
            }
        };
    useEffect(() => {
        if (selectedTab === "skills" || selectedTab === "projects") {
            setActiveTab(selectedTab);
        }
    }, [selectedTab]);

    return (
        <div 
                ref={containerRef} 
                className="skills-container" 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
            <div className="toggle-buttons">
                <button className={activeTab === "skills" ? "active" : ""} onClick={() => setActiveTab("skills")}>Skills</button>
                <button className={activeTab === "projects" ? "active" : ""} onClick={() => setActiveTab("projects")}>Projects</button>
            </div>

            <div className="content">
                {activeTab === "skills" ? (
                    <ul className="skills-list">
                        {skills.map((skill, index) => (
                            <li key={index} className="skill-item">
                                <img src={skill.img} alt={skill.name} className="skill-image" />
                                <span>{skill.name}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <HoverCard
                                key={index}
                                title={project.name}
                                description={project.description}
                                image={project.img}
                                onClick={() => {
                                    setSelectedProject(project);
                                    setIsPopupOpen(true);
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Popup remains the same */}
            {isPopupOpen && selectedProject && (
                <div className="project-popup" onClick={() => setIsPopupOpen(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setIsPopupOpen(false)}>&times;</button>
                        <img src={selectedProject.img} alt={selectedProject.name} className="enlarged-project" />
                        <h2>{selectedProject.name}</h2>
                        <p>{selectedProject.description}</p>
                        <div className="project-tech-stack">
                            {selectedProject.techStack.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={selectedProject.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            <a href={selectedProject.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
