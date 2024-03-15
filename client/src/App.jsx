import "./App.css";
import Dreams from "./components/Dreams";
import Footer from "./components/Footer";
import Guide from "./components/Guide";
import Header from "./components/Header";
import Services from "./components/Services";
import HomeImage1 from "./assets/images/home1.png";
import HomeImage2 from "./assets/images/home2.png";

function App() {
  return (
    <>
      <Header />
      <Dreams />
      <img className="test-1-1" alt="" src={HomeImage1} />
      <section className="prototype-inner"></section>
      <Guide />
      <Services />
      <section className="speech-recognition-model-wrapper">
        <div className="speech-recognition-model">
          <img
            className="image-203-flattened"
            loading="lazy"
            alt=""
            src={HomeImage2}
          />
          <div className="prediction-engine" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
