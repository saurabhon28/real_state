import "./header.css";

function Header() {
  return (
    <section className="prototype-child">
      <header className="xyz-industries-parent">
        <h1 className="xyz-industries">
          <span className="xyz">
            <span className="xyz1">XYZ</span>
            <span className="span">{` `}</span>
          </span>
          <i className="industries">INDUSTRIES</i>
        </h1>
        <div className="navigation-menu-wrapper">
          <nav className="navigation-menu">
            <nav className="menu-buttons-parent">
              <div className="menu-buttons">
                <div className="home">Home</div>
              </div>
              <div className="menu-buttons1">
                <div className="home1">About Us</div>
              </div>
              <div className="menu-buttons2">
                <div className="home2">Property</div>
              </div>
              <div className="menu-buttons3">
                <div className="home3">Services</div>
              </div>
              <div className="menu-buttons4">
                <div className="home4">Contact</div>
              </div>
            </nav>
          </nav>
        </div>
        <div className="frame-wrapper">
          <div className="secondary-button-parent">
            <button className="secondary-button">
              <div className="explore">Sign Up</div>
              <img
                className="arrow-forward-resting-icon"
                alt=""
                src="/arrow-forward-resting.svg"
              />
            </button>
            <button className="primary-button">
              <div className="explore1">Sign In</div>
              <img
                className="arrow-forward-resting-icon1"
                alt=""
                src="/arrow-forward-resting.svg"
              />
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
