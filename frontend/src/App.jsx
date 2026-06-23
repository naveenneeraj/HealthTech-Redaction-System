import "./App.css";

function App() {
  return (
    <div className="app">

      <div className="background"></div>

      <nav className="navbar">
        <h2>🏥 HealthTech AI</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <button className="nav-btn">Get Started</button>
      </nav>

      <section className="hero">

        <div className="hero-left">
          <h1>
            Secure Healthcare
            <br />
            Data Redaction
          </h1>

          <p>
            Protect patient privacy using AI-powered PHI detection,
            automated document redaction, HIPAA compliance,
            and secure healthcare data management.
          </p>

          <div className="buttons">
            <button className="primary-btn">
              Start Redaction
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-card">
            <h3>98%</h3>
            <p>AI Detection Accuracy</p>
          </div>

          <div className="glass-card">
            <h3>HIPAA</h3>
            <p>Fully Compliant</p>
          </div>
        </div>

      </section>

      <section className="stats">

        <div className="stat-card">
          <h2>10K+</h2>
          <p>Documents Processed</p>
        </div>

        <div className="stat-card">
          <h2>99%</h2>
          <p>Compliance Rate</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>System Availability</p>
        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <h3>🤖 AI Redaction</h3>
          <p>
            Automatically detect names,
            phone numbers, emails and PHI.
          </p>
        </div>

        <div className="feature-card">
          <h3>📄 PDF Upload</h3>
          <p>
            Upload healthcare documents securely.
          </p>
        </div>

        <div className="feature-card">
          <h3>⚡ Fast Processing</h3>
          <p>
            Real-time AI processing and redaction.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure Storage</h3>
          <p>
            End-to-end encrypted healthcare records.
          </p>
        </div>

      </section>

      <section className="upload-section">

        <h2>Upload Healthcare Document</h2>

        <div className="upload-box">

          <p>📂 Drag & Drop PDF Here</p>

          <button className="upload-btn">
            Choose File
          </button>

        </div>

      </section>

      <footer>

        <h3>HealthTech AI Redaction System</h3>

        <p>
          AI Powered Healthcare Privacy Platform
        </p>

      </footer>

    </div>
  );
}

export default App;