import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'


const Header = () => (
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <a href="/aprtoapy" class="navbar-brand">
        APY 2 APR CONVERTER
      </a>
      <button
        type="button"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse">
        <div class="mr-auto navbar-nav">
          <a href="/aprtoapy" class="nav-link">
            <FontAwesomeIcon icon={faHome}/> <span> </span>
            Home
          </a>

          <a href="https://github.com/Laurent34000/aprtoapy" class="nav-link">
            <FontAwesomeIcon icon={faGithub} /><span> </span>
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
