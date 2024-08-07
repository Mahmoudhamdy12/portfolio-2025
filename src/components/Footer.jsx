import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={`footer1 ${className}`}>
      <div className="project-heading-parent">
        <div className="im-a-software-engineer-parent">
          <h1 className="im-a-software">I'm a Software Engineer.</h1>
          <div className="experience-card-parent">
            <h1 className="im-a-software1">I'm a Software Engineer.</h1>
          </div>
        </div>
      </div>
      <div className="developed-webhr-landing-page-wrapper">
        <h1 className="developed-webhr-landing">
          Developed web.hr landing page which is utilized in 25,000+ companies.
        </h1>
      </div>
      <div className="designer-description-container">
        <div className="designer-description-container-inner">
          <div className="a-designer-who-parent">
            <h1 className="a-designer-who">A Designer who</h1>
            <div className="judge-description">
              <div className="mask">
                <div className="judges-a-book-by-its-cover-parent">
                  <h1 className="judges-a-book-container">
                    <p className="judges-a-book">Judges a book</p>
                    <p className="judges-a-book">
                      <span>{`by its `}</span>
                      <span className="cover">cover</span>
                      <span className="span">...</span>
                    </p>
                  </h1>
                  <div className="currently-description">
                    <div className="gradient-parent">
                      <div className="gradient" />
                      <img
                        className="arrow-icon"
                        loading="lazy"
                        alt=""
                        src="/arrow.svg"
                      />
                      <div className="me">
                        <div className="me-child" />
                        <img
                          className="image-1-icon"
                          alt=""
                          src="/image-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mask-child" />
              </div>
              <h3 className="because-if-the">
                Because if the cover does not impress you what else can?
              </h3>
            </div>
          </div>
        </div>
        <div className="facebook-details-wrapper">
          <div className="facebook-details">
            <div className="project-details">
              <h1 className="im-a-software2">{`I'm a Software Engineer.| `}</h1>
              <div className="project-content">
                <h1 className="currently-im-a-container">
                  <span className="currently-im-a-container1">
                    <span className="currently-im-a">{`Currently, I'm a Software Engineer at     `}</span>
                    <span className="facebook">Facebook</span>
                    <span>,</span>
                  </span>
                </h1>
                <img
                  className="project-content-child"
                  loading="lazy"
                  alt=""
                  src="/group-1898@2x.png"
                />
              </div>
            </div>
            <div className="experience-container">
              <h1 className="a-self-taught-uiux-container">
                <p className="judges-a-book">
                  A self-taught UI/UX designer, functioning in the industry for
                  3+ years now.
                </p>
                <p className="judges-a-book">
                  I make meaningful and delightful digital products that create
                  an equilibrium
                </p>
                <p className="judges-a-book">
                  between user needs and business goals.
                </p>
              </h1>
            </div>
          </div>
        </div>
        <h1 className="work-experience">Work Experience</h1>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
