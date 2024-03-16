import "./services.css"; // Import CSS file for styling

function Services() {
  const servicesData = [
    {
      searchEngine: "01",
      detailedListings: "Search and Filters",
      everyDetailMattersSellers:
        "Tailored Searches to meet your needs. Find what you’re looking for with precision.",
    },
    {
      searchEngine: "02",
      detailedListings: "Detailed Listings",
      everyDetailMattersSellers:
        "Every Detail Matters. Sellers can list, and buyers can explore properties that meet their exact specifications.",
    },
    {
      searchEngine: "03",
      detailedListings: "Direct Messaging",
      everyDetailMattersSellers:
        "Seamless Communication. Connect directly with sellers or buyers to ask questions, negotiate, and make decisions.",
    },
    {
      searchEngine: "04",
      detailedListings: "Secure Payments",
      everyDetailMattersSellers:
        "Trust in Every Transaction. Our secure payment system ensures your peace of mind",
    },
  ];

  // Render the Services component
  return (
    <section className="network-connector">
      <div className="user-interface">
        <div className="data-storage">
          {/* Heading */}
          <h1 className="why-choose-xyz">WHY CHOOSE XYZ?</h1>
        </div>
        <div className="rule-set-parent">
          <div className="rule-set">
            <div className="decision-tree-builder">
              <div className="graph-builder">
                {/* Map through servicesData to render each service */}
                {servicesData.map((service, index) => (
                  <div className="visualization-engine" key={index}>
                    <div className="model-trainer">{service.searchEngine}</div>
                    <div className="evaluation-engine">
                      {/* Feature */}
                      <div className="search-and-filters">
                        {service.detailedListings}
                      </div>
                      <div className="regression-model" />
                    </div>
                    {/* Description */}
                    <div className="tailored-searches-to">
                      {service.everyDetailMattersSellers}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services; // Export the Services component
