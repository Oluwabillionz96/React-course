const NavBar = () => {
  return (
    <nav className="nav">
      <div>LOGO</div>
      <ul className="nav-ul">
        <li>Home</li>
        <li>Contact</li>
        <li> About</li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <p className="welcome">Welcome to</p>
        <h1>My site</h1>
        <div class="contain-boxes">
          <button className="boxes">Download cV</button>
          <button className="boxes">Hire Me</button>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
