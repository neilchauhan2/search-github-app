import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  componentDidMount = () => {
    document.addEventListener("DOMContentLoaded", () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    });
  };

  render() {
    return (
      <header>
        <nav
          className="navbar is-link"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1 className="is-size-4  ">GitHub Search App</h1>
            </Link>

            <Link
              to="#"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </Link>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <span className="navbar-item">
                <a
                  href="https://github.com/neilchauhan2/search-github-app"
                  className="button is-link is-inverted"
                >
                  <span className="icon">
                    <i className="fab fa-github" />
                  </span>
                  <span>Code</span>
                </a>
              </span>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
