import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ModalCandida from "./ModalCandida";

const Infos: React.FC = () => {
  const [t] = useTranslation("global");

  const infos = [
    {
      title: t("infos.0.title"),
      content: t("infos.0.content"),
      btn: t("infos.0.btn"),
      slug: t("infos.0.slug"),
    },
    {
      title: t("infos.1.title"),
      content: t("infos.1.content"),
      btn: t("infos.1.btn"),
      slug: t("infos.1.slug"),
    },
    {
      title: t("infos.2.title"),
      content: t("infos.2.content"),
      btn: t("infos.2.btn"),
      slug: t("infos.2.slug"),
    },
  ];

  const [toggleCandidat, setToggleCandidat] = useState(false);

  const handleCandidat = () => {
    setToggleCandidat(!toggleCandidat);
  };
  return (
    <div className="infos-container my-5">
      <div className=" text-center mb-5">
        <h1 className="title text-center" data-aos="fade-up-right">
          {t("infos-content.title")}
          <span> {t("infos-content.soustitle")}</span>
        </h1>
      </div>
      <div className="infos">
        <div className="container">
          <div className="infos-cards">
            {infos.map((info, index) => (
              <div className="infos-card" data-aos="zoom-in" key={index}>
                <div data-aos="zoom-in">
                  <h3 className=" d-flex justify-content-between align-items-center">
                    <IoInformationCircleOutline className="fs-2" />
                    {info.title}
                  </h3>
                </div>
                <p data-aos="zoom-in">{info.content}</p>
                <Link to={`/${info.slug}`} className=" text-decoration-none">
                  <button
                    data-aos="zoom-in"
                    className=" fw-bolder d-flex justify-content-between align-items-center px-2"
                  >
                    {info.btn} <BsArrowRight className="fs-3" />
                  </button>
                </Link>
              </div>
            ))}
            <div className="infos-card" data-aos="zoom-in">
              <div data-aos="zoom-in">
                <h3 className=" d-flex justify-content-between align-items-center">
                  <IoInformationCircleOutline className="fs-2" />
                  {t("candidature.title")}
                </h3>
              </div>
              <p data-aos="zoom-in">{t("candidature.content")}</p>
              <button
                onClick={handleCandidat}
                data-aos="zoom-in"
                className=" fw-bolder d-flex justify-content-between align-items-center px-2"
              >
                {t("candidature.btn")} <BsArrowRight className="fs-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="infos-blur w-100 h-100"></div>
      </div>
      <div
        className="w-100 d-flex justify-content-center text-center mt-5"
        data-aos="zoom-in"
      >
        <Link to={"/informations"} style={{ textDecoration: "none" }}>
          <button className="info-btn fw-bolder">
            {t("infos-content.btn")} <BsArrowRight className=" fs-3" />
          </button>
        </Link>
      </div>
      <div>
        {toggleCandidat && (
          <ModalCandida
            toggleCandidat={toggleCandidat}
            handletoggleCandidat={handleCandidat}
          />
        )}
      </div>
    </div>
  );
};

export default Infos;
