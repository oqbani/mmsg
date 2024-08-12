import React from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
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
    <div className="soins-container container my-5">
      <div className=" text-center mb-5">
        <h1 className="title text-center" data-aos="fade-up-right">
          {t("soins-content.title")}
          <span> {t("soins-content.soustitle")}</span>
        </h1>
      </div>
      <div className="soins-content-container">
        {soins.slice(0, 6).map((s, index) => (
          <Link key={index} to={`/soins/${s.slug}`}>
            <div className="soins-card">
              <div data-aos="zoom-in">
                <img src={s.img} alt="" />
              </div>
              <div className="soins-content" data-aos="zoom-in">
                <button className=" fw-bolder d-flex justify-content-between align-items-center px-2">
                  {s.title} <BsArrowRight className="fs-3" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className=" text-center mt-5" data-aos="zoom-in">
        <Link to={"/soins"}>
          <button className=" fw-bolder">{t("soins-content.btn-soins")}</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
