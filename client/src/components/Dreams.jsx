import "./dreams.css";
import arrow from "../assets/images/arrow.svg";

function Dreams() {
  return (
    <section className="frame-section">
      <div className="frame-parent">
        <div className="connecting-dreams-to-reality-y-parent">
          <h1 className="connecting-dreams-to-container">
            <p className="connecting-dreams-to">CONNECTING DREAMS TO REALITY</p>
            <p className="your-premier">
              <i className="your-premier1">YOUR PREMIER</i>
            </p>
            <p className="real-estate-marketplace">REAL ESTATE MARKETPLACE</p>
          </h1>
          <div className="where-every-search">
            Where every search ends with a home
          </div>
        </div>
        <div className="primary-button-parent">
          <button className="primary-button1">
            <div className="explore2">Find Your Home</div>

            <img className="arrow-forward-resting-icon2" alt="" src={arrow} />
          </button>
          <button className="primary-button2">
            <div className="explore3">List Your Property</div>

            <img className="arrow-forward-resting-icon3" alt="" src={arrow} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Dreams;
