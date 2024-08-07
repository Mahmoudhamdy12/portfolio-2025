import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={`main-content ${className}`}>
      <div className="header" />
      <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
      <nav className="webhr-description">
        <nav className="home-parent">
          <a className="home">Home</a>
          <a className="about">About</a>
          <a className="lab">Lab</a>
        </nav>
      </nav>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
