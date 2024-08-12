import React, { useState } from "react";
import logo from "/mmsg-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import ModalRdv from "./ModalRdv";
import * as bootstrap from "bootstrap";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryClick = (categoryTitle: string) => {
    const offcanvasNavbar = document.getElementById("offcanvasNavbar");
    if (offcanvasNavbar) {
      const offcanvasInstance =
        bootstrap.Offcanvas.getInstance(offcanvasNavbar) ||
        new bootstrap.Offcanvas(offcanvasNavbar);
      offcanvasInstance.hide();
    }
    setActiveCategory(categoryTitle);
    navigate(categoryTitle === "" ? "/" : `/${categoryTitle}`);
  };

  const handleSubcategoryClick = () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      const dropdownMenu = toggle.nextElementSibling;
      if (dropdownMenu && dropdownMenu.classList.contains("show")) {
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        toggle.dispatchEvent(clickEvent);
      }
    });
  };

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [t] = useTranslation("global");

  const navbar = [
    {
      title: t("navbar.0.title"),
      slug: t("navbar.0.slug"),
      souscategorie: [
        {
          title: t("navbar.0.souscategorie.0.title"),
          slug: t("navbar.0.souscategorie.0.slug"),
        },
        {
          title: t("navbar.0.souscategorie.1.title"),
          slug: t("navbar.0.souscategorie.1.slug"),
        },
        {
          title: t("navbar.0.souscategorie.2.title"),
          slug: t("navbar.0.souscategorie.2.slug"),
        },
        {
          title: t("navbar.0.souscategorie.3.title"),
          slug: t("navbar.0.souscategorie.3.slug"),
        },
        {
          title: t("navbar.0.souscategorie.4.title"),
          slug: t("navbar.0.souscategorie.4.slug"),
        },
        {
          title: t("navbar.0.souscategorie.5.title"),
          slug: t("navbar.0.souscategorie.5.slug"),
        },
        {
          title: t("navbar.0.souscategorie.6.title"),
          slug: t("navbar.0.souscategorie.6.slug"),
        },
        {
          title: t("navbar.0.souscategorie.7.title"),
          slug: t("navbar.0.souscategorie.7.slug"),
        },
      ],
    },
    {
      title: t("navbar.1.title"),
      slug: t("navbar.1.slug"),
      souscategorie: [
        {
          title: t("navbar.1.souscategorie.0.title"),
          slug: t("navbar.1.souscategorie.0.slug"),
        },
        {
          title: t("navbar.1.souscategorie.1.title"),
          slug: t("navbar.1.souscategorie.1.slug"),
        },
        {
          title: t("navbar.1.souscategorie.2.title"),
          slug: t("navbar.1.souscategorie.2.slug"),
        },
        {
          title: t("navbar.1.souscategorie.3.title"),
          slug: t("navbar.1.souscategorie.3.slug"),
        },
        {
          title: t("navbar.1.souscategorie.4.title"),
          slug: t("navbar.1.souscategorie.4.slug"),
        },
        {
          title: t("navbar.1.souscategorie.5.title"),
          slug: t("navbar.1.souscategorie.5.slug"),
        },
        {
          title: t("navbar.1.souscategorie.6.title"),
          slug: t("navbar.1.souscategorie.6.slug"),
        },
      ],
    },
  ];

  const handleLinkClick = (event: any, path: any) => {
    event.preventDefault();
    handleCategoryClick("");
    navigate(path);
  };
  return (
    <div className="container-navbar">
      <div className="">
        <Header />
        <nav className="navbar d-flex justify-content-between navbar-expand-lg bg-white p-0">
          <div className="container container-fluid d-flex justify-content-lg-center align-items-center bg-white p-0 pe-2">
            <Link
              to="/"
              className="navbar-brand d-flex justify-content-center gap-2 align-items-center"
            >
              <img src={logo} style={{ width: "4rem" }} />
              <h3 className=" fw-bolder mt-2" style={{ color: "#333" }}>
                MMSG
              </h3>
            </Link>
            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-categorie" id="offcanvasNavbarLabel">
                  <img src={logo} style={{ width: "4rem" }} />
                </h5>
                <button
                  type="button"
                  className="btn-close border-0 shadow-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      aria-current="page"
                      onClick={(event) => handleLinkClick(event, "/")}
                    >
                      {t("nav-content.accueil")}
                    </Link>
                  </li>
                  {navbar.map((cat, index) => (
                    <li className="nav-item dropdown" key={index}>
                      <Link
                        to={`/${cat.slug}`}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className={`nav-link dropdown-toggle ${
                          activeCategory === "" ? "" : ""
                        }`}
                        onClick={() => {
                          handleCategoryClick(cat.slug);
                          handleSubcategoryClick();
                        }}
                      >
                        {cat.title}
                      </Link>
                      <ul className="dropdown-menu">
                        {cat.souscategorie.map((sc, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={`/${cat.slug}/${sc.slug}`}
                              onClick={() => handleCategoryClick(sc.title)}
                              className="dropdown-item d-flex align-items-center gap-2 bg-white"
                            >
                              {sc.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}

                  <li className="nav-item">
                    <Link
                      to="/blog"
                      className="nav-link"
                      aria-current="page"
                      onClick={(event) => handleLinkClick(event, "/blog")}
                    >
                      BLOG
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      aria-current="page"
                      onClick={(event) => handleLinkClick(event, "/contact")}
                    >
                      CONTACT
                    </Link>
                  </li>
                </ul>
                <button
                  onClick={handleToggle}
                  className=" btn-rdv"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  {t("nav-content.btn-rdv")}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="">
        {toggle && <ModalRdv toggle={toggle} handleToggle={handleToggle} />}
      </div>
    </div>
  );
};

export default Navbar;
