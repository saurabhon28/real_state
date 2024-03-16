import PerfectHome from "./PerfectHome";
import "./guide.css";

function Guide() {
  // Render the Guide component
  return (
    <section className="prototype-inner1">
      <div className="frame-parent1">
        <div className="frame-wrapper1">
          <div className="how-it-works-parent">
            {/* Heading */}
            <h1 className="how-it-works">HOW IT WORKS?</h1>
            <div className="step-by-step-guide-wrapper">
              {/* Step by Step Guide */}
              <div className="step-by-step">Step by Step Guide</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper2">
          {/* Render the PerfectHome component */}
          <PerfectHome />
        </div>
      </div>
    </section>
  );
}

export default Guide; // Export the Guide component
