import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Experience.css";

const Experience = ({
  className = "",
  propBackground,
  propBackground1,
  group2,
  propTop,
  propLeft,
  propHeight,
}) => {
  const experienceStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  const groupIconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      height: propHeight,
    };
  }, [propTop, propLeft, propHeight]);

  return (
    <div className={`experience ${className}`} style={experienceStyle}>
      <div className="experience-child" style={rectangleDivStyle} />
      <div className="mask-group-parent">
        <img className="mask-group-icon" alt="" src="/mask-group.svg" />
        <img
          className="frame-child"
          loading="lazy"
          alt=""
          src={group2}
          style={groupIconStyle}
        />
        <div className="client-onboard-container">
          <div className="client-onboard-wrapper">
            <div className="cib-on-the-mobile-wrapper">
              <h1 className="cib-on-the">CIB on the Mobile </h1>
            </div>
            <div className="client-onboard-description">
              <div className="take-your-client-onboard-seaml-wrapper">
                <div className="take-your-client-container">
                  <p className="take-your-client">
                    Take your client onboard seamlessly by our amazing
                  </p>
                  <p className="take-your-client">
                    tool of digital onboard process.
                  </p>
                </div>
              </div>
              <div className="learn-more">
                <img
                  className="learn-more-child"
                  alt=""
                  src="/rectangle-977.svg"
                />
                <div className="learn-more1">
                  <p className="take-your-client">LEARN MORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  className: PropTypes.string,
  group2: PropTypes.string,

  /** Style props */
  propBackground: PropTypes.any,
  propBackground1: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight: PropTypes.any,
};

export default Experience;
