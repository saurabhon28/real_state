import "./header.css"; // Import CSS file for styling

// Header component definition
function Header() {
  // Render the Header component
  return (
    <section className="prototype-child">
      <header className="xyz-industries-parent">
        {/* XYZ Industries */}
        <h1 className="xyz-industries">
          <span className="xyz">
            <span className="xyz1">XYZ</span>
            <span className="span">{` `}</span>
          </span>
          <i className="industries">INDUSTRIES</i>
        </h1>
        {/* Navigation Menu */}
        <div className="navigation-menu-wrapper">
          <nav className="navigation-menu">
            <nav className="menu-buttons-parent">
              {/* Home */}
              <div className="menu-buttons">
                <div className="home">Home</div>
              </div>
              {/* About Us */}
              <div className="menu-buttons1">
                <div className="home1">About Us</div>
              </div>
              {/* Property */}
              <div className="menu-buttons2">
                <div className="home2">Property</div>
              </div>
              {/* Services */}
              <div className="menu-buttons3">
                <div className="home3">Services</div>
              </div>
              {/* Contact */}
              <div className="menu-buttons4">
                <div className="home4">Contact</div>
              </div>
            </nav>
          </nav>
        </div>
        {/* Sign Up and Sign In buttons */}
        <div className="frame-wrapper">
          <div className="secondary-button-parent">
            {/* Sign Up Button */}
            <button className="secondary-button">
              <div className="explore">Sign Up</div>
              <img
                className="arrow-forward-resting-icon"
                alt=""
                src="/arrow-forward-resting.svg"
              />
            </button>
            {/* Sign In Button */}
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

// Export the Header component
export default Header;
