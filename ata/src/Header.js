import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
    <div className="container">
      <a href="/aprtoapy" className="navbar-brand">
        APY 2 APR CONVERTER
      </a>
      <button
        type="button"
        aria-label="Toggle navigation"
        className="navbar-toggler collapsed"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse">
        <div className="mr-auto navbar-nav">
          <a href="/aprtoapy" className="nav-link">
            <FontAwesomeIcon icon={faHome} /> <span> </span>
            Home
          </a>

          <a
            href="https://github.com/Laurent34000/aprtoapy"
            className="nav-link"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span> </span>
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
