import './App.css'

function App() {
  return (
    <div className="page">
      {/* Top navigation */}
      <header className="navbar">
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        {/* Hero section */}
        <section id="home" className="hero">
          <div className="hero-text">
            <span className="badge">Welcome to my world -Where Geology meets AI</span>
            <h1 className="hero-title">Hello, I'm Ruth Aryeetey.</h1>
            <h2 className="hero-subtitle">Explore.Engineer.Evolve.</h2>
            <p className="hero-intro">
              I'm a passionate learner who loves coding, exploring how AI can
              be applied in geological engineering, and making a positive impact.
            </p>
          </div>

          <div className="hero-avatar">
            <div className="avatar-circle">
              <span>RA</span>
            </div>
            <p className="motto">AI-Powered Insights, Earth-Driven Solutions </p>
          </div>
        </section>

        {/* About section (change the text to your own) */}
        <section id="about" className="section">
          <h3>About</h3>
          <p>I'm Ruth Aryeetey.I'm fascinated by the ground beneath us,and how AI can help engineers read it: from mapping rock layers to spotting risks before the become problems.I'm learning web development to build tools that would make that work easier to share and understand.</p>
        </section>
      </main>
    </div>
  )
}

export default App