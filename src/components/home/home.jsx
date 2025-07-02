import React, { useRef } from "react";
import "./home.css";
import cartoonImage from "../../assets/cartoon.png";
import { TypeAnimation } from 'react-type-animation';  // Add this import

export default function Home() {
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) * 0.05;
        const y = (e.clientY - top - height / 2) * 0.05;

        containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
        containerRef.current.style.transform = "translate(0px, 0px)";
    };

    return (
        <div
            className="home-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="text-content">
                <h1>Abhishek Gupta</h1>
                <div className="typing-container">
                    <span>
                        I am a  <TypeAnimation
                        sequence={[
                            'Frontend Developer',
                            1000,
                            'React Developer',
                            1000,
                            'Web Designer',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="typing-text"
                    />
                    </span>
                   
                </div>
                <p>Currently, I'm a Student pursuing my BTech</p>
                <p>
                    "I’m a dedicated and hardworking student who’s taught myself valuable skills.
                    I’m a quick learner, always eager to grow, and passionate about embracing new challenges
                    while continuously improving myself through determination and a strong commitment to excellence."
                </p>
                
                <a href="https://www.linkedin.com/in/abhishek-gupta-4b32a7291/" type="button" className="resume-btn">Linkedin</a>
                <a href="https://drive.google.com/file/d/1des9wuxZhtWZ0iTMBxRZA9bEgpGT4KXI/view?usp=drivesdk" type="button" className="resume-btn">Resume</a>
            </div>
            <div className="image-wrapper">
                <img src={cartoonImage} alt="Cartoon of Abhishek" className="profile-image" />
            </div>
        </div>
    );
}
