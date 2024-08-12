import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo_fr from "../assets/imgs/FR.png";
import logo_en from "../assets/imgs/EN.png";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import { ImFacebook2 } from "react-icons/im";
import { getDataCoo, RecepCoo } from "./HeaderCooHelp";

const Header: React.FC = () => {
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (newLang: string) => {
    i18n.changeLanguage(newLang);
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
    <div className="header">
      {Coordonnees.slice(0, 1).map((c) => (
        <div
          className="container d-flex justify-content-between align-items-center p-1"
          key={c.id}
        >
          <div className="header-media h-100 d-flex align-items-center justify-content-center gap-4">
            <li>
              <FaPhoneAlt className="i me-2" />+{c.telephone}
            </li>
            <li>
              <MdAlternateEmail className="i me-2" />
              {c.email}
            </li>
            <li>
              <FaRegClock className="i me-2" />
              {c.horaire}
            </li>
          </div>
          <div className=" d-flex gap-5">
            <div className="media-header">
              <a
                target="_blank"
                href={`${c.facebook}`}
                style={{ color: "white" }}
              >
                <ImFacebook2 className="fa fs-3 me-2" />
              </a>
              <a
                target="_blank"
                href={`${c.instagram}`}
                style={{ color: "white" }}
              >
                <BsInstagram className="fa fs-5 me-2" />
              </a>
              <a
                target="_blank"
                href={`${c.linkedin}`}
                style={{ color: "white" }}
              >
                <BsLinkedin className="fa fs-5 me-2" />
              </a>
              <a
                target="_blank"
                href={`${c.youtube}`}
                style={{ color: "white" }}
              >
                <TfiYoutube className="fa fs-5" />
              </a>
            </div>
            <div>
              <img
                src={logo_fr}
                style={{ width: "1.5rem", marginRight: ".5rem" }}
                onClick={() => handleLanguageChange("fr")}
                alt=""
              />
              <img
                src={logo_en}
                style={{ width: "1.5rem" }}
                onClick={() => handleLanguageChange("en")}
                alt=""
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
