import "./App.css"; // Importing main CSS file
import Dreams from "./components/Dreams"; // Importing Dreams component
import Footer from "./components/Footer"; // Importing Footer component
import Guide from "./components/Guide"; // Importing Guide component
import Header from "./components/Header"; // Importing Header component
import Services from "./components/Services"; // Importing Services component
import HomeImage1 from "./assets/images/home1.png"; // Importing image for home
import HomeImage2 from "./assets/images/home2.png"; // Importing image for home

function App() {
  return (
    <>
      <Header /> {/* Render Header component */}
      <Dreams /> {/* Render Dreams component */}
      <img className="test-1-1" alt="" src={HomeImage1} />{" "}
      {/* Render first home image */}
      <Guide /> {/* Render Guide component */}
      <Services /> {/* Render Services component */}
      {/* Section for speech recognition model */}
      <section className="speech-recognition-model-wrapper">
        <div className="speech-recognition-model">
          <img
            className="image-203-flattened"
            loading="lazy"
            alt=""
            src={HomeImage2} // Render second home image
          />
          <div className="prediction-engine" />{" "}
          {/* Placeholder for prediction engine */}
        </div>
      </section>
      <Footer /> {/* Render Footer component */}
    </>
  );
}

export default App; // Exporting the App component
