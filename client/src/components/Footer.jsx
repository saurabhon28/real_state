import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function Footer() {
  const [email, setEmail] = useState();

  const handleClick = () => {
    axios
      .post("http://localhost:3000/api/register", {
        email,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <footer className="footer">
      <div className="feature-selector">
        <div className="data-normalizer">
          <div className="data-transformer">
            <div className="error-handler">
              <h1 className="xyz-industries1">
                <span className="xyz2">
                  <span className="xyz3">XYZ</span>
                  <span className="span1">{` `}</span>
                </span>
                <i className="industries1">INDUSTRIES</i>
              </h1>
              <div className="xyz-industries-where">
                XYZ Industries: Where real estate dreams meet seamless
                transactions, transforming aspirations into achievements.
              </div>
            </div>
            <button className="secondary-button1">
              <div className="explore4">EXPLORE</div>
              <div className="user-interface-builder">
                <FaArrowRight className="arrow-forward-resting-icon4" />
              </div>
            </button>
          </div>
          <div className="model-validator">
            <div className="performance-tuner">
              <div className="quick-links">Quick Links</div>
              <div className="logic-branch">
                <div className="function-collection">
                  <div className="about-us">About Us</div>
                </div>
                <div className="function-collection1">
                  <div className="blog">Blog</div>
                </div>
                <div className="function-collection2">
                  <div className="testimonials">Testimonials</div>
                </div>
                <div className="function-collection3">
                  <div className="terms-and-conditions">
                    Terms and Conditions
                  </div>
                </div>
                <div className="function-collection4">
                  <div className="privacy-policy">Privacy Policy</div>
                </div>
                <div className="function-collection5">
                  <div className="site-map">Site Map</div>
                </div>
              </div>
            </div>
            <div className="output-set">
              <div className="customer-support">Customer Support</div>
              <div className="frame-parent2">
                <div className="feedback-wrapper">
                  <div className="feedback">Feedback</div>
                </div>
                <div className="report-a-problem-wrapper">
                  <div className="report-a-problem">Report a Problem</div>
                </div>
                <div className="request-a-call-back-wrapper">
                  <div className="request-a-call">Request a Call Back</div>
                </div>
              </div>
            </div>
            <div className="frame-parent3">
              <div className="subscribe-us-parent">
                <div className="subscribe-us">Subscribe Us</div>
                <div className="frame-wrapper3">
                  <div className="subscribe-to-our-weekly-newsle-wrapper">
                    <div className="subscribe-to-our">
                      Subscribe to our weekly newsletter
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame-parent4">
                <input
                  className="frame-item"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Id"
                  type="text"
                />
                <button onClick={handleClick} className="subscribe-wrapper">
                  <div className="subscribe">Subscribe</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vector-parent">
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/line-200.svg"
        />
        <div className="frame-parent5">
          <div className="youtube-parent">
            <FaYoutube className="youtube-icon" />

            <FaSquareXTwitter className="twitter-icon" />

            <FaInstagramSquare className="instagram-icon" />

            <FaFacebook className="facebook-icon" />
          </div>
          <div className="frame-parent6">
            <div className="frame-parent7">
              <div className="terms-wrapper">
                <div className="terms">Terms</div>
              </div>

              <div className="privacy-wrapper">
                <div className="privacy">Privacy</div>
              </div>
            </div>
            <div className="copyright-parent">
              <FaRegCopyright className="copyright-icon" />

              <div className="xyz-wrapper">
                <div className="xyz4">2024 XYZ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
