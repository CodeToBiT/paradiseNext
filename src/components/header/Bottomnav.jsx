import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  useGetSettingsQuery,
  useGetDestinationsQuery,
} from "../../../frontend/services/api";
import Link from "next/link";

const NavigationBar = () => {
  const { data: settings } = useGetSettingsQuery();
  const { data: destination } = useGetDestinationsQuery();
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
            <Link className="navbar-brand" href="/">
              {settings?.data.site_main_logo ? (
                <Image
                  src={settings?.data.site_main_logo}
                  width="150"
                  height="70"
                  alt="logo"
                />
              ) : (
                <Image
                  src="/assets/image/logo.png"
                  width="150"
                  height="70"
                  alt="logo"
                />
              )}
              {/* <Image
                src={settings?.data.site_main_logo}
                width="150"
                height="70"
                alt="logo"
              /> */}
            </Link>
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Company
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" href="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Message From CEO
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Wy Choose Us?
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Destination
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {/* <li>
                      <Link className="dropdown-item" href="#">
                        Asia
                      </Link>
                      <ul className="dropdown-menu dropdown-submenu">
                        <li>
                          <Link className="dropdown-item" href="#">
                            Nepal
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {destination?.data.slice(0, 5).map((data, i) => {
                      return (
                        <li>
                          <Link
                            className="dropdown-item"
                            href={`/destinations/${data.slug}`}
                          >
                            {data.name}
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <Link className="dropdown-item" href="/destinations">
                        View All
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Combo Package
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/packages">
                        View All
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Travelers Info
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Another action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <Link href="#" className="btn btn-primary btn-sm text-white">
                Tour Nepal
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
