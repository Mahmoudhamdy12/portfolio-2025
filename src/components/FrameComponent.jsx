import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`ellipse-parent ${className}`}>
      <div className="frame-inner" />
      <div className="inner-circle-layers">
        <div className="inner-circle-layers-child" />
        <img className="vector-icon" alt="" src="/vector-1.svg" />
        <img className="group-icon" loading="lazy" alt="" src="/group.svg" />
        <img
          className="inner-circle-layers-item"
          loading="lazy"
          alt=""
          src="/group-1901.svg"
        />
        <img
          className="vector-icon1"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
        <img
          className="inner-circle-layers-inner"
          alt=""
          src="/group-1902.svg"
        />
        <img
          className="inner-circle-layers-child1"
          loading="lazy"
          alt=""
          src="/group-1904.svg"
        />
      </div>
      <img className="frame-child1" alt="" src="/group-1903.svg" />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
