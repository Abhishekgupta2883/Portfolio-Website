import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skill/skill";
import Contact from "./components/contact/contact";
import FadeInSection from './components/FadeInSection';

import "./App.css";

function App() {
    const [selectedTab, setSelectedTab] = useState(null);

    return (
        <div className="app">
            <Navbar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

            <br /><br /><br /><br />
            <FadeInSection>

            <div className="block" id="home-section">
                <Home />
            </div>
            </FadeInSection>
         

            <br /><br /><br /><br />
            <FadeInSection>
                <div id="about-section" className="block">
                    <About />
                </div>
            </FadeInSection>

            <br /><br /><br /><br />
            <FadeInSection>
                <div id="skills-section" className="block">
                    <Skills selectedTab={selectedTab} />
                </div>
            </FadeInSection>

            <FadeInSection>
                <div id="contact-section" className="block">
                    <Contact />
                </div>
            </FadeInSection>
        </div>
    );
}

export default App;
