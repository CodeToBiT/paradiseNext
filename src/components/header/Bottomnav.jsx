import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { FaPlus, FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";


// import { IconName } from "react-icons/fa6";

import Head from "next/head";

import {
  useGetSettingsQuery,
  useGetDestinationsQuery,
  useGetMenusQuery,
} from "../../../frontend/services/api";
import Link from "next/link";

const NavigationBar = () => {
  const { data: settings } = useGetSettingsQuery();
  const { data: destination } = useGetDestinationsQuery();
  const { data: companyMenu, isSuccess } = useGetMenusQuery("1");
  const { data: travellerMenu, isSuccess: success } = useGetMenusQuery("4");

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
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
  };

  useEffect(() => {
    if (isSuccess && success) {
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
    }
  }, [isSuccess, success]);

  useEffect(() => {
    if (isSuccess && success) {
      if (window.innerWidth < 1024) {
        document
          .querySelectorAll(".aside .nav-link")
          .forEach(function (element) {
            element.addEventListener("click", function (e) {
              let nextEl = element.nextElementSibling;
              let parentEl = element.parentElement;
              let allSubmenus_array = parentEl.querySelectorAll(".submenu");

              if (nextEl && nextEl.classList.contains("submenu")) {
                e.preventDefault();
                if (nextEl.style.display == "block") {
                  nextEl.style.display = "none";
                } else {
                  nextEl.style.display = "block";
                }
              }
            });
          });
      }
    }
  }, [isSuccess, success]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={settings?.data.fav_icon} sizes="any" />
      </Head>

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
            </Link>
            <button
              className="btn-sm canvabtn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <FaBars className="text-white" />
            </button>
            <div
              className="flex-center-between flex-grow-1 px-12 pb-8 py-sm-0 px-sm-0 hidden "
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav mx-auto gap-4 gap-sm-32 px-sm-32">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                    passHref
                  >
                    Home
                  </Link>
                </li>
                {companyMenu?.data.map((data, i) => {
                  return (
                    <li className="nav-item dropdown" key={i}>
                      <Link
                        className="nav-link dropdown-toggle"
                        href="/about"
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
                        {data.children[0]?.map((menu, i) => {
                          return (
                            <li key={i}>
                              <Link className="dropdown-item" href={menu.slug}>
                                {menu.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="/destinations"
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
                    {destination?.data.slice(0, 5).map((data, i) => {
                      if (data.children.length >= 1) {
                        return (
                          <li key={i}>
                            <Link
                              className="dropdown-item right"
                              href={`/destinations/${data.slug}`}
                            >
                              <span>{data.name}</span>
                            </Link>

                            <ul
                              className="dropdown-menu dropdown-submenu"
                              key={i}
                            >
                              {data.children?.map((sub, i) => {
                                if (
                                  sub.children.length >= 1 &&
                                  sub.slug != "nepal-day-tours"
                                ) {
                                  return (
                                    <li key={i}>
                                      <Link
                                        className="dropdown-item right"
                                        href={`/destinations/${sub.slug}`}
                                      >
                                        {sub.name}
                                      </Link>

                                      {sub.children?.map((msub, i) => {
                                        return (
                                          <ul
                                            className="dropdown-menu dropdown-submenu"
                                            key={i}
                                          >
                                            <li>
                                              <Link
                                                className="dropdown-item"
                                                href={`/destinations/${msub.slug}`}
                                              >
                                                {msub.name}
                                              </Link>
                                            </li>
                                          </ul>
                                        );
                                      })}
                                    </li>
                                  );
                                } else if (sub.slug != "nepal-day-tours") {
                                  return (
                                    <li key={i}>
                                      <Link
                                        className="dropdown-item"
                                        href={`/destinations/${sub.slug}`}
                                      >
                                        {sub.name}
                                      </Link>
                                    </li>
                                  );
                                }
                              })}
                            </ul>
                          </li>
                        );
                      } else {
                        return (
                          <li key={i}>
                            <Link
                              className="dropdown-item"
                              href={`/destinations/${data.slug}`}
                            >
                              {data.name}
                            </Link>
                          </li>
                        );
                      }
                    })}
                    <li>
                      <Link className="dropdown-item" href="/destinations">
                        View All
                      </Link>
                    </li>
                  </ul>
                </li>

                {travellerMenu?.data.map((data, i) => {
                  if (data.children) {
                    return (
                      <li className="nav-item dropdown" key={i}>
                        <Link
                          className="nav-link dropdown-toggle"
                          href={data.slug}
                          id="navbarDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {data.title}
                        </Link>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          {data.children[0].map((menu, i) => {
                            return (
                              <li key={i}>
                                <Link
                                  className="dropdown-item"
                                  href={menu.slug}
                                >
                                  {menu.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  } else {
                    return (
                      <li className="nav-item" key={i}>
                        <Link
                          className="nav-link active"
                          aria-current="page"
                          href="/daytours"
                          passHref
                        >
                          Day Tours
                        </Link>
                      </li>
                    );
                  }

                  // {
                  //   data.children ? (
                  //     <li className="nav-item">
                  //       <Link
                  //         className="nav-link active"
                  //         aria-current="page"
                  //         href={data.slug}
                  //         passHref
                  //
                  //       >
                  //         {data.title}
                  //       </Link>
                  //     </li>
                  //   ) : (
                  //     <li className="nav-item dropdown">
                  //       <Link
                  //         className="nav-link dropdown-toggle"
                  //         href={data.slug}
                  //         id="navbarDropdownMenuLink"
                  //         role="button"
                  //         data-bs-toggle="dropdown"
                  //         aria-expanded="false"
                  //       >
                  //         {data.title}
                  //       </Link>
                  //       <ul
                  //         className="dropdown-menu"
                  //         aria-labelledby="navbarDropdownMenuLink"
                  //       >
                  //         <li>
                  //           <Link
                  //             className="dropdown-item"
                  //             h
                  //           >
                  //             News and Updates
                  //           </Link>
                  //         </li>
                  //         <li>
                  //           <Link
                  //             className="dropdown-item"
                  //             href="#"
                  //             //
                  //           >
                  //             Nepal at Glance
                  //           </Link>
                  //         </li>
                  //         <li>
                  //           <Link
                  //             className="dropdown-item"
                  //             href="#"
                  //             //
                  //           >
                  //             Best time to visit Nepal
                  //           </Link>
                  //         </li>
                  //         <li>
                  //           <Link
                  //             className="dropdown-item"
                  //             href="#"
                  //             //
                  //           >
                  //             People and Language
                  //           </Link>
                  //         </li>
                  //         <li>
                  //           <Link
                  //             className="dropdown-item"
                  //             href="#"
                  //             //
                  //           >
                  //             Festivals and Holidays
                  //           </Link>
                  //         </li>
                  //         <li>
                  //           <Link
                  //             className="dropdown-item"
                  //             href="#"
                  //             //
                  //           >
                  //             Equipment Checklist
                  //           </Link>
                  //         </li>
                  //       </ul>
                  //     </li>
                  //   );
                  // }
                })}
              </ul>
              <Link
                href={`/deals/special-offer`}
                className="btn btn-primary btn-bubble rounded-8 btn-sm text-white"
              >
                Hot Deals
              </Link>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`offcanvas offcanvas-end ${isNavbarOpen ? "show" : ""}`}
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header bg-white">
          <Link
            href="/"
            className="offcanvas-title h5 text-white"
            id="offcanvasExampleLabel"
          >
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
          </Link>
          <button
            type="button"
            className="btn-close text-primary"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <MdClose className="h4" />
          </button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="aside">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  passHref
                  // onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>

              {companyMenu?.data.map((data, i) => {
                return (
                  <li className="nav-item" key={i}>
                    <Link
                      className="nav-link d-flex flex-center-between"
                      href="/about"
                    >
                      Our Company <FaPlus />
                    </Link>
                    <ul className="dropdown-menu submenu">
                      {data.children[0]?.map((menu, i) => {
                        return (
                          <li key={i}>
                            <Link
                              className="nav-link"
                              href={menu.slug}
                              // onClick={handleLinkClick}
                            >
                              {menu.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}

              <li className="nav-item">
                <Link
                  className="nav-link d-flex flex-center-between"
                  href="/destinations"
                >
                  Destination <FaPlus />
                </Link>

                <ul className="submenu dropdown-menu">
                  {destination?.data.slice(0, 5).map((data, i) => {
                    if (data.children.length >= 1) {
                      return (
                        <li key={i}>
                          <Link
                            className="nav-link d-flex flex-center-between"
                            href={`/destinations/${data.slug}`}
                            // onClick={handleLinkClick}
                          >
                            {data.name} <FaPlus />
                          </Link>

                          <ul className="dropdown-menu submenu" key={i}>
                            {data.children?.map((sub, i) => {
                              if (
                                sub.children.length >= 1 &&
                                sub.slug != "nepal-day-tours"
                              ) {
                                return (
                                  <li key={i}>
                                    <Link
                                      className="nav-link d-flex flex-center-between"
                                      href={`/destinations/${sub.slug}`}
                                      // onClick={handleLinkClick}
                                    >
                                      {sub.name} <FaPlus />
                                    </Link>

                                    <ul
                                      className="dropdown-menu submenu"
                                      key={i}
                                    >
                                      {sub.children?.map((msub, i) => {
                                        return (
                                          <li key={i}>
                                            <Link
                                              className="nav-link"
                                              href={`/destinations/${msub.slug}`}
                                            >
                                              {msub.name}
                                            </Link>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </li>
                                );
                              } else if (sub.slug != "nepal-day-tours") {
                                return (
                                  <li key={i}>
                                    <Link
                                      className="nav-link"
                                      href={`/destinations/${sub.slug}`}
                                    >
                                      {sub.name}
                                    </Link>
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </li>
                      );
                    } else {
                      return (
                        <li key={i}>
                          <Link
                            className="nav-link"
                            href={`/destinations/${data.slug}`}
                            // onClick={handleLinkClick}
                          >
                            {data.name}
                          </Link>
                        </li>
                      );
                    }
                  })}
                  <li>
                    <Link className="nav-link " href="/destinations">
                      View All
                    </Link>
                  </li>
                </ul>
              </li>
              {travellerMenu?.data.map((data, i) => {
                if (data.children) {
                  return (
                    <li className="nav-item dropdown" key={i}>
                      <Link
                        className="nav-link d-flex flex-center-between"
                        href={data.slug}
                      >
                        {data.title} <FaPlus />
                      </Link>
                      <ul className="dropdown-menu submenu">
                        {data.children[0].map((menu, i) => {
                          return (
                            <li key={i}>
                              <Link
                                className="nav-link"
                                href={menu.slug}
                                // onClick={handleLinkClick}
                              >
                                {menu.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li className="nav-item" key={i}>
                      <Link
                        className="nav-link"
                        aria-current="page"
                        href="/daytours"
                        passHref
                        // onClick={handleLinkClick}
                      >
                        Day Tours
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
