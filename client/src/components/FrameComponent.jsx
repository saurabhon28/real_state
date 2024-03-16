import "./frameComponent.css";

const FrameComponent = () => {
  const servicesData = [
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

  return (
    <div>
      {servicesData.map((service, index) => (
        <div key={index} className="sequence-assembler-wrapper">
          <div className="sequence-assembler">
            <img
              className="sequence-assembler-child"
              alt=""
              src={service.line202}
            />
            <div className="visualizer">
              <div className="communication-hub">
                <div className="database-access">
                  <div className="search-engine">{service.searchEngine}</div>
                  <div className="pattern-detector">
                    <div className="detailed-listings">
                      {service.detailedListings}
                    </div>
                    <div className="training-set" />
                  </div>
                </div>
                <div className="every-detail-matters">
                  {service.everyDetailMattersSellers}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrameComponent;
