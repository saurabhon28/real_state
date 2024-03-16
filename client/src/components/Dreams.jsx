import "./dreams.css"; // Importing CSS file
import arrow from "../assets/images/arrow.svg"; // Importing arrow image from assets

function Dreams() {
  return (
    // Section containing the main content
    <section className="frame-section">
      <div className="frame-parent">
        {" "}
        {/* Parent div */}
        <div className="connecting-dreams-to-reality-y-parent">
          {" "}
          {/* Div for connecting dreams to reality */}
          <h1 className="connecting-dreams-to-container">
            {" "}
            {/* Heading container */}
            <p className="connecting-dreams-to">
              CONNECTING DREAMS TO REALITY
            </p>{" "}
            {/* First line */}
            <p className="your-premier">
              {" "}
              {/* Second line */}
              <i className="your-premier1">YOUR PREMIER</i>{" "}
              {/* Italicized text */}
            </p>
            <p className="real-estate-marketplace">REAL ESTATE MARKETPLACE</p>{" "}
            {/* Third line */}
          </h1>
          <div className="where-every-search">
            {" "}
            {/* Div for additional description */}
            Where every search ends with a home {/* Text */}
          </div>
        </div>
        {/* Div containing primary buttons */}
        <div className="primary-button-parent">
          {/* Button for finding home */}
          <button className="primary-button1">
            <div className="explore2">Find Your Home</div> {/* Button text */}
            <img
              className="arrow-forward-resting-icon2"
              alt=""
              src={arrow}
            />{" "}
            {/* Arrow image */}
          </button>
          {/* Button for listing property */}
          <button className="primary-button2">
            <div className="explore3">List Your Property</div>{" "}
            {/* Button text */}
            <img
              className="arrow-forward-resting-icon3"
              alt=""
              src={arrow}
            />{" "}
            {/* Arrow image */}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dreams; // Exporting the Dreams component
