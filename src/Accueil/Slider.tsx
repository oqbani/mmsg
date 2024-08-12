import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";
import ModalRdv from "./ModalRdv";
import ModalPresc from "./ModalPresc";

const Slider: React.FC = () => {
  const { t } = useTranslation("global");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const [togglePresc, setTogglePresc] = useState(false);

  const handleTogglePresc = () => {
    setTogglePresc(!togglePresc);
  };

  return (
    <div>
      <div className="slider">
        <div className="container">
          <div className="slider-top" data-aos="fade-right">
            <h1>{t("Slider.title")}</h1>
            <h2>{t("Slider.soustitle")}</h2>
            <p
              style={{ maxWidth: "35rem", fontSize: "1.3rem" }}
              className="py-2"
            >
              {t("Slider.content")}
            </p>

            <div className="d-flex gap-5">
              <button
                onClick={handleToggle}
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                {t("Slider.btn-rdv")}
              </button>
              <button onClick={handleTogglePresc}>
                {t("Slider.btn-press")}
              </button>
            </div>
          </div>

          <div className="slider-blur w-100 h-100"></div>
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

export default Slider;
