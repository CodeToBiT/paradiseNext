import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavigationBar = () => {
  const [windowChange, setWindowChange] = useState(false);
  if (typeof window != "undefined") {
    const changeNavbarPosition = () => {
      if (window.scrollY >= 154) {
        setWindowChange(true);
      } else {
        setWindowChange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarPosition);
  }

  useEffect(() => {
    if (window.innerWidth > 992) {
      document
        .querySelectorAll(".navbar .nav-item")
        .forEach(function (everyitem) {
          everyitem.addEventListener("mouseover", function (e) {
            let el_link = this.querySelector("a[data-bs-toggle]");

            if (el_link != null) {
              let nextEl = el_link.nextElementSibling;
              el_link.classList.add("show");
              nextEl.classList.add("show");
            }
          });
          everyitem.addEventListener("mouseleave", function (e) {
            let el_link = this.querySelector("a[data-bs-toggle]");

            if (el_link != null) {
              let nextEl = el_link.nextElementSibling;
              el_link.classList.remove("show");
              nextEl.classList.remove("show");
            }
          });
        });
    }
  }, []);

  return (
    <>
      <div
        className={windowChange ? "nav-bar navbar-sticky shadow-4" : "nav-bar"}
      >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              <Image
                src="/assets/image/logo.png"
                width="150"
                height="70"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav mx-auto gap-32 px-32">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Company
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/about">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Message From CEO
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Wy Choose Us?
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Terms and Conditions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Destination
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Asia
                      </a>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Nepal
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Combo Package
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Travelers Info
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <a href="#" className="btn btn-primary btn-sm text-white">
                Tour Nepal
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
