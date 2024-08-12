import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Soins: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [t] = useTranslation("global");

  const soins = [
    {
      title: t("soins.0.title"),
      content: t("soins.0.content"),
      img: t("soins.0.img"),
      slug: t("soins.0.slug"),
    },
    {
      title: t("soins.1.title"),
      content: t("soins.1.content"),
      img: t("soins.1.img"),
      slug: t("soins.1.slug"),
    },
    {
      title: t("soins.2.title"),
      content: t("soins.2.content"),
      img: t("soins.2.img"),
      slug: t("soins.2.slug"),
    },
    {
      title: t("soins.3.title"),
      content: t("soins.3.content"),
      img: t("soins.3.img"),
      slug: t("soins.3.slug"),
    },
    {
      title: t("soins.4.title"),
      content: t("soins.4.content"),
      img: t("soins.4.img"),
      slug: t("soins.4.slug"),
    },
    {
      title: t("soins.5.title"),
      content: t("soins.5.content"),
      img: t("soins.5.img"),
      slug: t("soins.5.slug"),
    },
    {
      title: t("soins.6.title"),
      content: t("soins.6.content"),
      img: t("soins.6.img"),
      slug: t("soins.6.slug"),
    },
  ];
  return (
    <div className="soins-page mb-5">
      <div className="page-head" data-aos="fade-right">
        <div className="container page-head-content">
          <h1>
            {t("soins-content.title")}{" "}
            <span>{t("soins-content.soustitle")}</span>
          </h1>
          <p className="fs-4">{t("soins-content.desc")}</p>
          <p>
            <Link
              to={"/"}
              className=" text-white"
              style={{ textDecoration: "none" }}
            >
              {t("nav-content.accueil")}
            </Link>{" "}
            | {t("soins.0.title")}
      </p>
        </div>
        <div className="contact-blur w-100 h-100"></div>
      </div>
      <div className="container">
        <div className="page-content">
          <h1 className="title" data-aos="fade-left">
            {t("soins-content.soins-title")}{" "}
            <span>{t("soins-content.soins-soustitle")}</span>
          </h1>
          <p className="" data-aos="fade-right">{t("soins-content.soins-desc")}</p>
        </div>
        <div className="soins-page-cards">
          {soins.map((s, index) => (
            <div className="soins-page-card" data-aos="zoom-in" key={index}>
              <div className="px-3 pt-3">
                <img src={s.img} alt="" />
              </div>
              <div>
                <Link
                  to={`/soins/${s.slug}`}
                  style={{ color: "rgb(206, 27, 27)" }}
                >
                  <h3 className="px-3">{s.title}</h3>
                </Link>
                <p className="px-3">{s.content.slice(0, 100)}...</p>
                <Link
                  to={`/soins/${s.slug}`}
                  style={{ color: "rgb(206, 27, 27)" }}
                >
                  <button className=" d-flex justify-content-between align-items-center px-3">
                    {t("soins-content.btn")} <BsArrowRight className="fs-3" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Soins;
