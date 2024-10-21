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
          <button className="boxes">Download CV</button>
          <button className="boxes">Hire Me</button>
        </div>
      </div>
    </section>
  );
};

const Section2 = () =>{
  return(
    <section className ='services'>
      <div className='text'>
        <h2>Our Services</h2>
        <div className='line'></div>
      </div>
      <div className='images'>
        <div className='carrier'>
          <img src='./image.png'/>
          <div className='inner-text'>
            <h3>web development </h3>
            <p>Lorem Ipsum is simply dummy text
               of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book
            </p>
          </div>
        </div>
        <div className='carrier'>
        <img src='./image.png'/>
        <div className='inner-text'>
        <h3>web development </h3>
            <p>Lorem Ipsum is simply dummy text
               of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book
            </p>
        </div>
        </div>
        <div className='carrier'>
        <img src='./image.png'/>
        <div className='inner-text'>
        <h3>web development </h3>
            <p>Lorem Ipsum is simply dummy text
               of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
              scrambled it to make a type specimen book
            </p>
        </div>
        </div>
      </div>
    </section>
  )
}

const Section3 = () =>{
  return(
    <section className='third'>
     <h2 className='coffee'>Take A Coffee & Chat With Me</h2> 
     <div className="btn">
       <button>
        <span>
         <svg width="32" height="24" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M4.33334 33.6666C3.18751 33.6666 2.20695 33.2589 1.39167 32.4437C0.576394 31.6284 0.168061 30.6471 0.166672 29.4999V4.49992C0.166672 3.35409 0.575005 2.37353 1.39167 1.55825C2.20834 0.742974 3.18889 0.334641 4.33334 0.333252H37.6667C38.8125 0.333252 39.7938 0.741585 40.6104 1.55825C41.4271 2.37492 41.8347 3.35547 41.8333 4.49992V29.4999C41.8333 30.6458 41.4257 31.627 40.6104 32.4437C39.7951 33.2603 38.8139 33.668 37.6667 33.6666H4.33334ZM21 19.0833L37.6667 8.66658V4.49992L21 14.9166L4.33334 4.49992V8.66658L21 19.0833Z" fill="#FB7185"/>
         </svg>
       </span>
       <a href='mailto: goodluckreuben@gmail.com'>goodluckreuben96@gmail.com</a>
       </button>
       <button>
        <span>
        <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10.3125C15 6.69 17.94 3.75 21.5625 3.75H38.4375C42.06 3.75 45 6.69 45 10.3125V49.6875C45 51.428 44.3086 53.0972 43.0779 54.3279C41.8472 55.5586 40.178 56.25 38.4375 56.25H21.5625C19.822 56.25 18.1528 55.5586 16.9221 54.3279C15.6914 53.0972 15 51.428 15 49.6875V10.3125ZM26.25 45C25.7527 45 25.2758 45.1975 24.9242 45.5492C24.5725 45.9008 24.375 46.3777 24.375 46.875C24.375 47.3723 24.5725 47.8492 24.9242 48.2008C25.2758 48.5525 25.7527 48.75 26.25 48.75H33.75C34.2473 48.75 34.7242 48.5525 35.0758 48.2008C35.4275 47.8492 35.625 47.3723 35.625 46.875C35.625 46.3777 35.4275 45.9008 35.0758 45.5492C34.7242 45.1975 34.2473 45 33.75 45H26.25Z" fill="#60A5FA"/>
        </svg>
        </span>
        1023456789
       </button>
     </div>

     <form action='mailto: goodluckreuben96@gmail.com' method="post" enctype="text/plain"></>
      <input type='text' name='Name' id='Name' required placeholder='Your username'/>
      <input type='email' name='email' id='email' required placeholder='email'/>
      <textarea name="message" id="message" cols='80' rows='20' placeholder='Your message'></textarea>
      <button type='submit'>Send message</button>
     </form>
    </section>
  )
}

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Section2/>
      <Section3/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
