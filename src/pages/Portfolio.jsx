import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="webhr-logo-vectorized" />
      <FrameComponent3 />
      <FrameComponent4 />
      <section className="footer">
        <div className="social-links">
          <h1 className="linkedin-behance-container">
            <span className="linkedin-behance-container1">
              <p className="linkedin">LinkedIn</p>
              <p className="linkedin">{`>>`}</p>
              <p className="linkedin">Behance</p>
              <p className="linkedin">{`>>`}</p>
              <p className="linkedin">Dribbble</p>
              <p className="linkedin">{`>>`}</p>
              <p className="linkedin">Instagram</p>
              <p className="linkedin">{`>>`}</p>
              <p className="linkedin">logo</p>
            </span>
          </h1>
        </div>
        <FrameComponent2 />
      </section>
    </div>
  );
};

export default Portfolio;
