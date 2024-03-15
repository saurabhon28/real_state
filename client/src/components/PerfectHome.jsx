import "./perfectHome.css";

function PerfectHome() {
  const homeData = [
    {
      heading: "Discover Your Perfect Home",
      paragraph:
        "Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.",
      image: "../images/img1.png",
      learnMore: "Learn More",
    },
    {
      heading: "Showcase Your Property",
      paragraph:
        "List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly.",
      image: "../images/img2.png",
      learnMore: "Learn More",
    },
    {
      heading: "Connect and Communicate",
      paragraph:
        "Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward.",
      image: "../images/img3.png",
      learnMore: "Learn More",
    },
    {
      heading: "Seal the Deal Securely",
      paragraph:
        "Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property.",
      image: "../images/img4.png",
      learnMore: "Learn More",
    },
  ];

  return (
    <div>
      {homeData.map((home, index) => (
        <div key={index} className="image-199-parent">
          <img
            className="image-199-icon"
            loading="lazy"
            alt=""
            src={home.image} // Use the image from home object
          />
          <div className="frame-container">
            <div className="discover-your-perfect-home-parent">
              <h1 className="discover-your-perfect">{home.heading}</h1>{" "}
              {/* Use heading from home object */}
              <div className="use-our-advanced">
                {home.paragraph} {/* Use paragraph from home object */}
              </div>
              <div className="learn-more">{home.learnMore}</div>{" "}
              {/* Use learnMore from home object */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PerfectHome;
