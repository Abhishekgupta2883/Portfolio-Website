import React, { useRef } from "react";
import cartoonImage from "../../assets/cartoon.png";
import "./about.css";

export default function About() {
    const aboutRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = aboutRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) * 0.05;
        const y = (e.clientY - top - height / 2) * 0.05;

        aboutRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
        aboutRef.current.style.transform = "translate(0px, 0px)";
    };

    return (
        <div
            className="about-section"
            ref={aboutRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <h1 className="about-heading">About Me</h1>
            <div className="about-container">
                <div className="image-container">
                    <img src={cartoonImage} alt="Cartoon of Abhishek" className="about-image" />
                </div>
                <div className="about-content">
                    <p className="first-paragraph">
                        With a strong foundation in web development and a passion for AI technology, I have spent the past year honing my skills in React, Express, CSS, HTML, and JavaScript. My journey has involved building dynamic, responsive applications and understanding the intricacies of frontend and backend development. I take a problem-solving approach to coding, continuously learning and refining my techniques to create efficient and scalable solutions.
                    </p>
                    <p className="second-paragraph">
                    Additionally, I've explored Python and C++, broadening my programming foundation and algorithmic thinking skills. I'm committed to growing as a developer and applying these skills to create impactful solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}
