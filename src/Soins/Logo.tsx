import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiCheck } from "react-icons/bi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ModalRdv from "../Accueil/ModalRdv";

const Logo = () => {
  const [t] = useTranslation("global");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <div className="page-head" data-aos="fade-right">
        <div className="container page-head-content">
          <h1>{t("navbar.0.souscategorie.6.title")}</h1>
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
            | {t("navbar.0.souscategorie.6.title")}
          </p>
        </div>
        <div className="contact-blur w-100 h-100"></div>
      </div>
      <div className="container ">
        <div className="bg-red-white-container text-center pt-5" data-aos="fade-right">
          <h1 className="title" data-aos="zoom-in">
            {t("logopedie.title")} <span>{t("logopedie.soustitle")}</span>
          </h1>
          <div className="bg-red-white">
            <div className="bg-red">
              <div className=" mb-3" data-aos="zoom-in">
                <img src="/speech-1.jpg" alt="" />
              </div>
              <p>{t("logopedie.desc")}</p>
              <li>
                <BiCheck className="fs-1 fw-bolder" /> {t("logopedie.desc-")}
              </li>
              <li>
                <BiCheck className="fs-1 fw-bolder" /> {t("logopedie.desc-1")}
              </li>
              <li>
                <BiCheck className="fs-1 fw-bolder" /> {t("logopedie.desc-2")}
              </li>
              <li>
                <BiCheck className="fs-1 fw-bolder" /> {t("logopedie.desc-3")}
              </li>
              <li>
                <BiCheck className="fs-1 fw-bolder" /> {t("logopedie.desc-4")}
              </li>
              <li>
                <BiCheck className="fs-1 fw-bolder" /> {t("logopedie.desc-5")}
              </li>
              <p>{t("logopedie.desc--")}</p>
              <p>{t("logopedie.desc---")}</p>
              <button onClick={handleToggle}>{t("Slider.btn-rdv")}</button>
            </div>
            <div className="bg-white">
              <div className="p-3" data-aos="zoom-in">
                <h1>
                  <BsFillInfoSquareFill />
                </h1>
                <h4>{t("logopedie.infos-title")}</h4>
                <p>
                  <BiCheck className="fs-1 fw-bolder" /> {t("logopedie.infos")}
                </p>
              </div>
              <div className="p-3" data-aos="zoom-in">
                <h1>
                  <RiCalendarScheduleFill />
                </h1>
                <h4>{t("logopedie.Horaire-title")}</h4>
                <p>
                  <BiCheck className="fs-1 fw-bolder" />{" "}
                  {t("logopedie.horaire-1")}
                </p>
                <p>
                  <BiCheck className="fs-1 fw-bolder" />{" "}
                  {t("logopedie.horaire-2")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="autres-soins-container">
          <h1 className="title mb-5" data-aos="fade-right">
            {t("autres-soins.title")} <span>{t("autres-soins.soustitle")}</span>
          </h1>
          <div className="autres-soins" data-aos="zoom-in">
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
              <Link to="/soins/soins-infirmiers" data-aos="zoom-in">
                <div>
                  <img src="/nursing-1.webp" alt="" />
                  <h2>{t("navbar.0.souscategorie.1.title")}</h2>
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

export default Logo;
