import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./HomePage.scss";
import logo from "../assets/logo.png";
import upload from "../assets/upload.png";

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a medical report image");
      return;
    }
    setLoading(true);
    // TODO: Upload file to server
    setTimeout(() => {
      setLoading(false);
      alert("File uploaded successfully");
    }, 2000);
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="container">
          <img src={logo} alt="Logo" className="logo" />
          <nav>
            {/* <a href="/features">Features</a>
            <a href="/how-it-works">How it Works</a>
            <a href="/privacy">Privacy</a>
            <a href="/support">Support</a>
            <a href="/signin">Sign In</a> */}
            <button className="get-started">Get Started</button>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h2>
            <TypeAnimation
              sequence={[
                "Understand Your Medical Records with Clarity",
                1000, // 等待1秒
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={1}
            />
          </h2>
          <p>
            Transform complex medical terminology into clear, easy-to-understand
            explanations. Upload your medical records and get instant
            interpretations.
          </p>
          <div className="hero-buttons">
            <button className="try-now">Try It Now</button>
            {/* <button className="watch-demo">Watch Demo</button> */}
          </div>
        </section>

        <section className="upload-section">
          <div className="upload-box">
            <h3>Upload Your Medical Record</h3>
            <p>Supported formats: PDF, JPG, PNG (Max size: 10MB)</p>
            <form onSubmit={handleUpload}>
              <input
                type="file"
                id="file-upload"
                className="file-input"
                onChange={handleFileChange}
              />
              <img src={upload} alt="Upload" className="upload-icon" />
              <label htmlFor="file-upload" className="file-label">
                Choose File
              </label>
              {file && <p className="file-name">{file.name}</p>}
              {/* <button type="submit" className="upload-button">
                Upload
              </button> */}
            </form>
          </div>
        </section>

        <section className="features">
          <h3>Smart Features for Better Understanding</h3>
          <div className="feature-list">
            <div className="feature-item">
              <div className="icon">🔍</div>
              <h4>AI-Powered Analysis</h4>
              <p>
                Advanced machine learning algorithms for accurate interpretation
              </p>
            </div>
            <div className="feature-item">
              <div className="icon">🔒</div>
              <h4>Privacy First</h4>
              <p>Your data is encrypted and secure with HIPAA compliance</p>
            </div>
            <div className="feature-item">
              <div className="icon">⚡</div>
              <h4>Instant Results</h4>
              <p>Get explanations within seconds of uploading</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
