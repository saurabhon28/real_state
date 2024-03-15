import PerfectHome from "./PerfectHome";
import "./guide.css";

function Guide() {
  return (
    <section className="prototype-inner1">
      <div className="frame-parent1">
        <div className="frame-wrapper1">
          <div className="how-it-works-parent">
            <h1 className="how-it-works">HOW IT WORKS?</h1>
            <div className="step-by-step-guide-wrapper">
              <div className="step-by-step">Step by Step Guide</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper2">
          <PerfectHome />
        </div>
        {/* <FrameComponent3
          showcaseYourProperty="Showcase Your Property"
          listYourPropertyWithEaseF="List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly."
          image200="../images/img2.png"
        />  */}
      </div>
    </section>
  );
}

export default Guide;
