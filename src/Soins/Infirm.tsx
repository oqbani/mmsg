import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCheck } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ModalRdv from "../Accueil/ModalRdv";
const Infirm = () => {
  const [t] = useTranslation("global");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="page-head" data-aos="fade-right">
        <div className="container page-head-content">
          <h1>{t("navbar.0.souscategorie.1.title")}</h1>
          <p className=" fs-4">{t("soins-content.desc")}</p>
          <p>
            <Link
              to={"/"}
              className=" text-white"
              style={{ textDecoration: "none" }}
            >
              {t("nav-content.accueil")}
            </Link>{" "}
            |{" "}
            <Link
              to={"/soins"}
              className=" text-white"
              style={{ textDecoration: "none" }}
            >
              {" "}
              {t("navbar.0.title")}{" "}
            </Link>{" "}
            | {t("navbar.0.souscategorie.1.title")}
          </p>
        </div>
        <div className="contact-blur w-100 h-100"></div>
      </div>
      <div className="container ">
        <div
          className="bg-red-white-container text-center pt-5"
          data-aos="fade-right"
        >
          <h1 className="title" data-aos="fade-right">
            {t("infirmier.title")} <span>{t("infirmier.soustitle")}</span>
          </h1>
          <div className="bg-red-white" data-aos="zoom-in">
            <div className="bg-red" data-aos="fade-right">
              <div data-aos="zoom-in">
                <img src="/nursing-1.webp" alt="" />
              </div>
              <p>{t("infirmier.desc")}</p>
              <button onClick={handleToggle}>{t("Slider.btn-rdv")}</button>
            </div>
            <div className="bg-white">
              <div className="p-3" data-aos="zoom-in">
                <h1>
                  <BsFillInfoSquareFill />
                </h1>
                <h4>{t("infirmier.infos-title")}</h4>
                <p>
                  <BiCheck className="fs-1 fw-bolder" />{" "}
                  {t("infirmier.activite-1")}
                </p>
                <p>
                  <BiCheck className="fs-1 fw-bolder" />{" "}
                  {t("infirmier.activite-2")}
                </p>
                <p>
                  <BiCheck className="fs-1 fw-bolder" />{" "}
                  {t("infirmier.activite-3")}
                </p>
                <p>
                  <BiCheck className="fs-1 fw-bolder" />{" "}
                  {t("infirmier.activite-4")}
                </p>
              </div>
              <div className="p-3" data-aos="zoom-in">
                <h1>
                  <RiCalendarScheduleFill />
                </h1>
                <h4>{t("infirmier.Horaire-title")}</h4>
                <p>
                  <BiCheck className="fs-1 fw-bolder" />{" "}
                  {t("infirmier.horaire-1")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="autres-soins-container" data-aos="zoom-in">
          <h1 className="title mb-5" data-aos="fade-right">
            {t("autres-soins.title")} <span>{t("autres-soins.soustitle")}</span>
          </h1>
          <div className="autres-soins">
            <div className="autres-bg-img" data-aos="zoom-in">
              <img src="/autres.avif" alt="" />
            </div>
            <div className="autres-bg-content">
              <Link to="/soins/medecine-generale" data-aos="zoom-in">
                <div>
                  <img src="/general-1.jpg" alt="" />
                  <h2>{t("navbar.0.souscategorie.0.title")}</h2>
                </div>
              </Link>
              <Link to="/soins/prelevements" data-aos="zoom-in">
                <div>
                  <img src="/prelevement.webp" alt="" />
                  <h2>{t("navbar.0.souscategorie.2.title")}</h2>
                </div>
              </Link>
              <Link to="/soins/kinesitherapie" data-aos="zoom-in">
                <div>
                  <img src="/kinesithearpy-2.webp" alt="" />
                  <h2>{t("navbar.0.souscategorie.3.title")}</h2>
                </div>
              </Link>
              <Link to="/soins/psychotherapie" data-aos="zoom-in">
                <div>
                  <img src="/psychotherapie.jpeg" alt="" />
                  <h2>{t("navbar.0.souscategorie.4.title")}</h2>
                </div>
              </Link>
              <Link to="/soins/nutrition-et-dietetique" data-aos="zoom-in">
                <div>
                  <img src="/nutrition-2.webp" alt="" />
                  <h2>{t("navbar.0.souscategorie.5.title")}</h2>
                </div>
              </Link>
              <Link to="/soins/logopedie" data-aos="zoom-in">
                <div>
                  <img src="/speech-1.jpg" alt="" />
                  <h2>{t("navbar.0.souscategorie.6.title")}</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        {toggle && <ModalRdv toggle={toggle} handleToggle={handleToggle} />}
      </div>
    </div>
  );
};

export default Infirm;