import "./perfectHome.css"; // Import CSS file for styling
import image1 from "../assets/images/img1.png"; // Import images
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";

function PerfectHome() {
  // Data for different features related to finding or showcasing properties
  const homeData = [
    {
      heading: "Discover Your Perfect Home",
      paragraph:
        "Use our advanced filters to narrow down your search. Specify everything from location to amenities, ensuring you find the property that feels right.",
      image: image1,
      learnMore: "Learn More",
    },
    {
      heading: "Showcase Your Property",
      paragraph:
        "List your property with ease. Fill in detailed forms to highlight every feature, attracting the perfect buyer directly.",
      image: image2,
      learnMore: "Learn More",
    },
    {
      heading: "Connect and Communicate",
      paragraph:
        "Our platform facilitates direct communication between buyer and seller, making negotiations transparent and straightforward.",
      image: image3,
      learnMore: "Learn More",
    },
    {
      heading: "Seal the Deal Securely",
      paragraph:
        "Advance payments made safe. Secure your agreement with confidence, and step closer to your dream property.",
      image: image4,
      learnMore: "Learn More",
    },
  ];

  // Render the component
  return (
    <div>
      {/* Map through the homeData array to render each feature */}
      {homeData.map((home, index) => (
        <div key={index} className="image-199-parent">
          {/* Render the image for each feature */}
          <img
            className="image-199-icon"
            loading="lazy"
            alt=""
            src={home.image} // Use the image from home object
          />
          <div className="frame-container">
            {/* Render the heading and paragraph for each feature */}
            <div className="discover-your-perfect-home-parent">
              <h1 className="discover-your-perfect">{home.heading}</h1>{" "}
              {/* Use heading from home object */}
              <div className="use-our-advanced">
                {home.paragraph} {/* Use paragraph from home object */}
              </div>
              {/* Render "Learn More" link for each feature */}
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
