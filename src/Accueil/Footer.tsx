import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail, MdKeyboardArrowRight } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import logo from "/mmsg-logo.png";
import ModalCandida from "./ModalCandida";
import { Link } from "react-router-dom";
import ModalRdv from "./ModalRdv";
import ModalPresc from "./ModalPresc";
import { getDataCoo, RecepCoo } from "./HeaderCooHelp";

const Footer: React.FC = () => {
  const [t] = useTranslation("global");
  const [toggleCandidat, setToggleCandidat] = useState(false);

  const handleCandidat = () => {
    setToggleCandidat(!toggleCandidat);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [togglePresc, setTogglePresc] = useState(false);
  const handleTogglePresc = () => {
    setTogglePresc(!togglePresc);
  };

  const [Coordonnees, setCoordonnees] = useState<RecepCoo[]>([]);

  const fetchCoordonnees = async () => {
    try {
      const response = await getDataCoo();
      if (Array.isArray(response)) {
        console.log("Fetched Coordonnees data:", response); // Debug log
        setCoordonnees(response);
      } else {
        setCoordonnees([]);
      }
    } catch (error) {
      console.log(t);
      console.error("Erreur de fetching:", error);
      setCoordonnees([]);
    }
  };
  useEffect(() => {
    fetchCoordonnees();
  }, []);
  return (
    <div className="footer">
      <div className="container">
        {Coordonnees.map((c) => (
          <ul className="">
            <div className="d-flex gap-3 align-items-center">
              <img src={logo} style={{ width: "4rem" }} />
              <h3 className=" fw-bolder mb-5" style={{ color: "#333" }}>
                MMSG
              </h3>
            </div>
            <li>
              <FaRegClock className=" fs-5 me-2" />
              {c.horaire}
            </li>
            <li>
              <FaLocationDot className=" fs-5 me-2" /> {t("footer.adress")}
            </li>
            <li>
              <FaPhoneAlt className=" fs-5 me-2" />+ {c.telephone}
            </li>
            <li>
              <MdAlternateEmail className=" fs-5 me-2" /> {c.email}
            </li>
            <div className="media pt-3 d-flex gap-3">
              <a
                target="_blank"
                href={`${c.facebook}`}
                style={{ color: "white" }}
              >
                <FaFacebookSquare className="i fs-4 me-2" />
              </a>
              <a
                target="_blank"
                href={`${c.instagram}`}
                style={{ color: "white" }}
              >
                <BsInstagram className="i fs-5 me-2" />
              </a>
              <a
                target="_blank"
                href={`${c.linkedin}`}
                style={{ color: "white" }}
              >
                <BsLinkedin className="i fs-5 me-2" />
              </a>
              <a
                target="_blank"
                href={`${c.youtube}`}
                style={{ color: "white" }}
              >
                <TfiYoutube className="i fs-5" />
              </a>
            </div>
          </ul>
        ))}
        <ul>
          <h2>{t("footer.mmsg")}</h2>
          <li onClick={handleCandidat}>
            <MdKeyboardArrowRight />
            {t("footer.li-1")}
          </li>
          <Link
            to={"/soins"}
            className=" text-white text-decoration-none"
            onClick={handleClick}
          >
            <li>
              <MdKeyboardArrowRight />
              {t("footer.li-2")}
            </li>
          </Link>
          <Link
            to={"/blog"}
            className=" text-white text-decoration-none"
            onClick={handleClick}
          >
            <li>
              <MdKeyboardArrowRight />
              {t("footer.li-3")}
            </li>
          </Link>
          <Link
            to={"/informations/#equipe"}
            className=" text-white text-decoration-none"
            onClick={handleClick}
          >
            <li>
              <MdKeyboardArrowRight />
              {t("footer.li-4")}
            </li>
          </Link>
          <Link
            to={"/"}
            className=" text-white text-decoration-none"
            onClick={handleClick}
          >
            <li>
              <MdKeyboardArrowRight />
              {t("footer.li-5")}
            </li>
          </Link>
        </ul>
        <ul>
          <h2>{t("footer.liens")}</h2>

          <Link
            to={"/contact"}
            className=" text-white text-decoration-none"
            onClick={handleClick}
          >
            <li>
              <MdKeyboardArrowRight />
              {t("footer.contact")}
            </li>
          </Link>
          <Link
            to={"/informations/#faq"}
            className=" text-white text-decoration-none"
            onClick={handleClick}
          >
            <li>
              <MdKeyboardArrowRight />
              {t("footer.faq")}
            </li>
          </Link>
          <Link
            to={"/informations/#cpas"}
            className=" text-white text-decoration-none"
            onClick={handleClick}
          >
            <li>
              <MdKeyboardArrowRight />
              {t("footer.cpas")}
            </li>
          </Link>
          <li onClick={handleTogglePresc}>
            <MdKeyboardArrowRight />
            {t("footer.prescription")}
          </li>
          <li onClick={handleToggle}>
            <MdKeyboardArrowRight />
            {t("footer.rdv")}
          </li>
        </ul>
      </div>
      <div className="copy-right">
        <h6>{t("footer.copy-right")}</h6>
      </div>

      <div>
        {toggleCandidat && (
          <ModalCandida
            toggleCandidat={toggleCandidat}
            handletoggleCandidat={handleCandidat}
          />
        )}
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

export default Footer;
