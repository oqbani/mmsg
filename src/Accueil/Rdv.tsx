import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LuCalendarClock } from "react-icons/lu";
import { RxPencil2 } from "react-icons/rx";
import ModalRdv from "./ModalRdv";
import ModalPresc from "./ModalPresc";

const rdv: React.FC = () => {
  const [t] = useTranslation("global");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [togglePresc, setTogglePresc] = useState(false);
  const handleTogglePresc = () => {
    setTogglePresc(!togglePresc);
  };
  return (
    <div className="equipe">
      <div className=" d-flex flex-column justify-content-center align-items-center">
        <div className=" text-center mb-5">
          <h1 className="title text-center" data-aos="fade-up-right">
            {t("equipe.title")}
            <span> {t("equipe.soustitle")}</span>
          </h1>
        </div>
        <div className="slider-cards">
          <div className="slider-card" data-aos="fade-down-left">
            <div
              data-aos="zoom-in"
              className="slider-card-top d-flex justify-content-between align-items-center"
            >
              <LuCalendarClock className=" fs-1" />
              <h2>{t("Slider.title-rdv")}</h2>
            </div>
            <p data-aos="zoom-in">{t("Slider.p-rdv")}</p>
            <button
              onClick={handleToggle}
              data-toggle="modal"
              data-target=".bd-example-modal-lg"
              data-aos="zoom-in"
            >
              {t("Slider.btn-rdv")}
            </button>
          </div>
          <div className="slider-card" data-aos="fade-down-right">
            <div
              data-aos="zoom-in"
              className="slider-card-top d-flex justify-content-between align-items-center"
            >
              <RxPencil2 className=" fs-1" />
              <h2 data-aos="zoom-in">{t("Slider.title-press")}</h2>
            </div>
            <p data-aos="zoom-in">{t("Slider.p-press")}</p>
            <button onClick={handleTogglePresc} data-aos="zoom-in">
              {t("Slider.btn-press")}
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {toggle && <ModalRdv toggle={toggle} handleToggle={handleToggle} />}
      </div>

      <div>
        {togglePresc && (
          <ModalPresc
            togglePresc={togglePresc}
            handleTogglePresc={handleTogglePresc}
          />
        )}
      </div>
    </div>
  );
};

export default rdv;
