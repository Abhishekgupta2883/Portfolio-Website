import "./contact.css";
import React, { useState, useRef } from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
 

export default function Contact() {
  
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  
  const containerRef = useRef(null); // Reference for the container to apply the 3D effect
  
  // Handle mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.05; // X-axis movement
    const y = (e.clientY - top - height / 2) * 0.05; // Y-axis movement
    containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  // const handleMouseLeave = () => {
  //   containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
  // };

  let onSubmit = async (event) => {
    event.preventDefault();
   
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key",  import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`❌ ${data.message || "Submission failed. Try again!"}`);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("⚠️ Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="contact-container" 
      ref={containerRef} 
      onMouseMove={handleMouseMove} 
      
    >
      {/* Left Section - Contact Info */}
      <div className="contact-info">
        <h1>Let's Talk</h1>
        <p>
          "Hey there! I'm a student who loves working on projects, exploring
          new ideas, and building cool things. Always happy to connect,
          collaborate, or just chat—feel free to reach out!" 😊🚀
        </p>

        <div className="contact-details">
          <span>
            <MailIcon className="icon" /> ag8882138469@gmail.com
          </span>
          <br />
          <span>
            <PhoneIcon className="icon" /> +91 8882138469
          </span>
          <br />
          <span>
            <LocationOnIcon className="icon" /> India
          </span>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="contact-form-box">
        <h1>Contact Me</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name" 
              required 
              className="form-input" 
              placeholder=" "
            />
            <label htmlFor="name">Your Name</label>
          </div>

          <div className="form-group">
            <input 
              type="email" 
              name="email" 
              required 
              className="form-input" 
              placeholder=" "
            />
            <label htmlFor="email">Your Email</label>
          </div>

          <div className="form-group">
            <textarea 
              name="message" 
              required 
              className="form-textarea"
              placeholder=" "
            ></textarea>
            <label htmlFor="message">Write a Message</label>
          </div>

          <button type="submit" className="form-button" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
        <span className="form-result">{result}</span>
      </div>
    </div>
  );
}
