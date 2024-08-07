import Footer from "./Footer";
import Experience from "./Experience";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`hero-container ${className}`}>
      <div className="hello-i-am-ibrahim-memon-wrapper">
        <h1 className="hello-i-am-container">
          <span className="hello-i-am-container1">
            <span>{`Hello! I Am `}</span>
            <span className="ibrahim-memon">Ibrahim Memon</span>
          </span>
        </h1>
      </div>
      <div className="engineer-description-container">
        <div className="engineer-description-wrapper">
          <Footer />
        </div>
        <div className="experience-content-parent">
          <div className="experience-content">
            <Experience group2="/group-2.svg" />
            <Experience
              propBackground="linear-gradient(95.56deg, #130428 7.29%, #251043 34.38%, #38126d 56.77%, #261045 84.9%, #190634)"
              propBackground1="linear-gradient(95.56deg, #130428 7.29%, #251043 34.38%, #38126d 56.77%, #261045 84.9%, #190634)"
              group2="/group-1935.svg"
              propTop="unset"
              propLeft="unset"
              propHeight="98px"
            />
          </div>
          <div className="background-experience">
            <div className="background-experience-wrapper">
              <div className="background-parent">
                <img className="background-icon" alt="" src="/background.svg" />
                <div className="experience1">
                  <div className="experience-item" />
                  <div className="experience-inner" />
                  <h1 className="cib-on-the1">CIB on the Mobile </h1>
                  <div className="take-your-client-container1">
                    <p className="take-your-client1">
                      Take your client onboard seamlessly by our amazing
                    </p>
                    <p className="take-your-client1">
                      tool of digital onboard process.
                    </p>
                  </div>
                  <div className="learn-more3">
                    <img
                      className="learn-more-item"
                      alt=""
                      src="/rectangle-977.svg"
                    />
                    <div className="learn-more4">
                      <p className="take-your-client1">LEARN MORE</p>
                    </div>
                  </div>
                  <div className="mask-group-group">
                    <img
                      className="mask-group-icon1"
                      alt=""
                      src="/mask-group-2.svg"
                    />
                    <img
                      className="frame-item"
                      loading="lazy"
                      alt=""
                      src="/group-1938.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-experience">
              <div className="gradient1" />
              <div className="experience1">
                <div className="experience-item" />
                <div className="experience-child1" />
                <h1 className="cib-on-the2">CIB on the Mobile </h1>
                <div className="take-your-client-container2">
                  <p className="take-your-client1">
                    Take your client onboard seamlessly by our amazing
                  </p>
                  <p className="take-your-client1">
                    tool of digital onboard process.
                  </p>
                </div>
                <div className="learn-more6">
                  <img
                    className="learn-more-item"
                    alt=""
                    src="/rectangle-977.svg"
                  />
                  <div className="learn-more4">
                    <p className="take-your-client1">LEARN MORE</p>
                  </div>
                </div>
                <div className="mask-group-group">
                  <img
                    className="mask-group-icon1"
                    alt=""
                    src="/mask-group-3.svg"
                  />
                  <img
                    className="icons"
                    loading="lazy"
                    alt=""
                    src="/icons.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
