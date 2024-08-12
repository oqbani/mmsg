import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Autres = () => {
  const [t] = useTranslation("global");
  return (
    <div>
      <div className=" page-head">
        <div className="container page-head-content">
          <h1>{t("navbar.0.souscategorie.7.title")}</h1>
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
            | {t("navbar.0.souscategorie.7.title")}
          </p>
        </div>
        <div className="contact-blur w-100 h-100"></div>
      </div>
    </div>
  );
};

export default Autres;
