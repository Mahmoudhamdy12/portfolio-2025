import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`crossfunctional-wrapper-parent ${className}`}>
      <div className="crossfunctional-wrapper">
        <div className="crossfunctional-items-parent">
          <div className="crossfunctional-items">
            <div className="im-currently-looking-to-join-parent">
              <div className="im-currently-looking-container">
                <p className="im-currently-looking">
                  I'm currently looking to join a cross-functional team
                </p>
                <p className="that-values-improving">{`that values improving people's lives through accessible design `}</p>
              </div>
              <div className="crossfunctional-highlight">
                <h1 className="cross-functional">{`cross-functional `}</h1>
              </div>
            </div>
          </div>
          <div className="vector-parent">
            <img
              className="frame-child2"
              loading="lazy"
              alt=""
              src="/vector-25.svg"
            />
            <img className="frame-child3" alt="" src="/vector-26.svg" />
            <img className="frame-child4" alt="" src="/vector-27.svg" />
            <img className="frame-child5" alt="" src="/vector-28.svg" />
            <img className="frame-child6" alt="" src="/vector-29.svg" />
            <img
              className="frame-child7"
              loading="lazy"
              alt=""
              src="/vector-30.svg"
            />
            <div className="ellipse-div" />
            <img className="frame-child8" alt="" src="/group-1899.svg" />
            <div className="ellipse-group">
              <div className="frame-child9" />
              <img className="frame-child10" alt="" src="/group-1897.svg" />
              <img className="frame-child11" alt="" src="/group-1907.svg" />
            </div>
            <img
              className="vector-icon2"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="ellipse-container">
              <div className="frame-child12" />
              <FrameComponent />
              <img
                className="group-icon1"
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
              <img className="frame-child13" alt="" src="/group-1900.svg" />
              <img
                className="frame-child14"
                loading="lazy"
                alt=""
                src="/group-1905.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="header-titles-parent">
          <div className="header-titles">
            <div className="contact-details">
              <h1 className="featured-project">Featured Project</h1>
              <h1 className="example-project">Example Project</h1>
            </div>
          </div>
          <div className="card-parent">
            <img className="card-icon" alt="" src="/card@2x.png" />
            <h1 className="a-web-app-container">
              <p className="im-currently-looking">
                A web app for visualizing personalized Spotify data. View your
              </p>
              <p className="im-currently-looking">
                top artists, top tracks, recently played tracks, and detailed
                audio
              </p>
              <p className="im-currently-looking">
                information about each track. Create and save new playlists of
              </p>
              <p className="im-currently-looking">
                recommended tracks based on your existing playlists and more.
              </p>
            </h1>
            <div className="card-icons">
              <div className="gradient2" />
              <div className="gradient3" />
              <div className="gradient4" />
              <img className="portfolio-icon" alt="" src="/portfolio@2x.png" />
              <div className="icons1">
                <img
                  className="portfolio-icon1"
                  alt=""
                  src="/portfolio-1@2x.png"
                />
                <img
                  className="mask-group-icon3"
                  loading="lazy"
                  alt=""
                  src="/mask-group-4@2x.png"
                />
              </div>
              <div className="icons2">
                <img
                  className="icon-park-solidclick"
                  alt=""
                  src="/iconparksolidclick.svg"
                />
                <img
                  className="icon-park-solidclick1"
                  loading="lazy"
                  alt=""
                  src="/iconparksolidclick.svg"
                />
              </div>
              <img
                className="icon-park-solidclick2"
                loading="lazy"
                alt=""
                src="/iconparksolidclick.svg"
              />
              <div className="icon-park-solidclick-parent">
                <img
                  className="icon-park-solidclick"
                  alt=""
                  src="/iconparksolidclick.svg"
                />
                <img
                  className="icon-park-solidclick1"
                  loading="lazy"
                  alt=""
                  src="/iconparksolidclick.svg"
                />
              </div>
              <img
                className="icon-park-solidclick5"
                loading="lazy"
                alt=""
                src="/iconparksolidclick.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="second-project">
        <div className="second-project-details-parent">
          <div className="second-project-details">
            <div className="second-project-title">
              <h1 className="featured-project">Featured Project</h1>
            </div>
            <h1 className="example-project">Example Project</h1>
          </div>
          <div className="second-project-card">
            <div className="project-heading">
              <img
                className="card-icon1"
                loading="lazy"
                alt=""
                src="/card-1@2x.png"
              />
              <h1 className="a-web-app-container1">
                <p className="im-currently-looking">
                  A web app for visualizing personalized Spotify data. View your
                </p>
                <p className="im-currently-looking">
                  top artists, top tracks, recently played tracks, and detailed
                  audio
                </p>
                <p className="im-currently-looking">
                  information about each track. Create and save new playlists of
                </p>
                <p className="im-currently-looking">
                  recommended tracks based on your existing playlists and more.
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-parent">
        <h1 className="contact">Contact</h1>
        <div className="contact-info">
          <h2 className="im-currently-looking-container1">
            <p className="im-currently-looking">
              I'm currently looking to join a cross-functional team that values
              improving people's lives
            </p>
            <p className="im-currently-looking">
              through accessible design. or have a project in mind? Let's
              connect.
            </p>
            <p className="im-currently-looking">&nbsp;</p>
            <p className="im-currently-looking">ibrhaimmemon930@gmail.com</p>
          </h2>
          <img
            className="social-icons"
            loading="lazy"
            alt=""
            src="/social-icons.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
