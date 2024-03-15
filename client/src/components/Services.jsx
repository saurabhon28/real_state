import FrameComponent from "./FrameComponent";
import "./services.css";

function Services() {
  return (
    <section className="network-connector">
      <div className="user-interface">
        <div className="data-storage">
          <h1 className="why-choose-xyz">WHY CHOOSE XYZ?</h1>
        </div>
        <div className="rule-set-parent">
          <div className="rule-set">
            <div className="decision-tree-builder">
              <div className="graph-builder">
                <div className="visualization-engine">
                  <div className="model-trainer">01</div>
                  <div className="evaluation-engine">
                    <div className="search-and-filters">Search and Filters</div>
                    <div className="regression-model" />
                  </div>
                </div>
                <div className="tailored-searches-to">
                  Tailored Searches to meet your needs. Find what you’re looking
                  for with precision.
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </div>
      </div>
    </section>
  );
}

export default Services;
