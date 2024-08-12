import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GiArrowScope } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { ImUserPlus } from "react-icons/im";
import { IoMdDoneAll } from "react-icons/io";
import { IoTelescope } from "react-icons/io5";
import { SiLibreofficewriter } from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { BiCheck, BiPlus } from "react-icons/bi";
import { RxPencil2 } from "react-icons/rx";
import { LuCalendarClock } from "react-icons/lu";
import ModalCandida from "../Accueil/ModalCandida";
import { apiMedecins } from "../Helpers/Api";
import axios from "axios";
import img from "/3774299.png"
const Infos: React.FC = () => {
  // const scrollToElement = (hash:string) => {
  //   if (hash) {
  //     const elementId = hash.substring(1); // Remove the '#' from the hash
  //     const element = document.getElementById(elementId);
  //     if (element) {
  //       setTimeout(() => {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }, 0); // Adjust the delay as necessary (0 ms is usually enough)
  //     }
  //   }
  // };

  // useEffect(() => {
  //   scrollToElement(location.hash);

  //   const handleHashChange = () => {
  //     scrollToElement(window.location.hash);
  //   };

  //   window.addEventListener('hashchange', handleHashChange);

  //   return () => {
  //     window.removeEventListener('hashchange', handleHashChange);
  //   };
  // }, [location]);


  const location = useLocation();

  const scrollToElement = (hash:string) => {
    if (hash) {
      const elementId = hash.substring(1); // Remove the '#' from the hash
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0); // Adjust the delay as necessary (0 ms is usually enough)
      }
    }
  };

  useEffect(() => {
    // Scroll to the element when the component is mounted or location changes
    scrollToElement(location.hash);

    // Listen for hash changes and scroll to the element
    const handleHashChange = () => {
      scrollToElement(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [location]);




  
  
  

  const [toggle, setToggle] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleToggle = (index: any) => {
    if (toggle === index) setToggle(null);
    else setToggle(index);
  };

  const [t] = useTranslation("global");
  
  interface RecepMedecins {
    id: number;
    nom: string;
    prenom: string;
    specialite: string;
    createdAt: string;
  }
  const [medecins, setMedecins] = useState<RecepMedecins[]>([]);

  const getDataMedecins = async () => {
    try {
      const response = await axios.get(`${apiMedecins}`);
      console.log("data afficher avec succès:", response.data);
      return response.data["hydra:member"];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.error("Erreur de statut:", error.response.status);
          console.error("Erreur de données:", error.response.data);
        } else if (error.request) {
          console.error(
            "La requête a été effectuée mais aucune réponse reçue:",
            error.request
          );
        } else {
          console.error(
            "Un message d'erreur décrivant le problème:",
            error.message
          );
        }
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  useEffect(() => {
    const fetchMedecins = async () => {
      try {
        const response = await getDataMedecins();
        setMedecins(response);
      } catch (error) {
        console.error("Erreur de fetching:", error);
      }
    };

    fetchMedecins();
  }, []);

  const faq = [
    {
      question: t("infos-content.question-1"),
      answer: t("infos-content.answer-1"),
    },
    {
      question: t("infos-content.question-2"),
      answer: t("infos-content.answer-2"),
    },
    {
      question: t("infos-content.question-3"),
      answer: t("infos-content.answer-3"),
    },
    {
      question: t("infos-content.question-4"),
      answer: t("infos-content.answer-4"),
    },
    {
      question: t("infos-content.question-5"),
      answer: t("infos-content.answer-5"),
    },
    {
      question: t("infos-content.question-6"),
      answer: t("infos-content.answer-6"),
    },
    {
      question: t("infos-content.question-7"),
      answer: t("infos-content.answer-7"),
      btn: t("infos-content.answer-7-btn"),
    },
  ];


  // MODAL CANDIDATURE
  const [toggleCandidat, setToggleCandidat] = useState(false)

  const handleCandidat = () => {
    setToggleCandidat(!toggleCandidat)
  }

  return (
    <div>
      <div className="page-head infos-head" data-aos="fade-right">
        <div className="container page-head-content">
          <h1>
            {t("infos-content.title")}{" "}
            <span>{t("infos-content.soustitle")}</span>
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
            | {t("infos-content.soustitle")}
          </p>
        </div>
        <div className="infos-blur w-100 h-100"></div>
      </div>

      <div className="apropos-container my-5" id="a-propos-de-nous">
        <div className="infos-container my-5">
          <div className=" text-center mb-5">
            <h1 className="title text-center" data-aos="fade-up-right">
              {t("infos-content.apropos")}
              <span> {t("infos-content.apropos-soustitle")}</span>
            </h1>
          </div>
          <div className="apropos-desc mb-1" data-aos="zoom-in">
            <li className="container" style={{ listStyle: "none" }}>
              {t("infos-content.apropos-desc")}
            </li>
          </div>
          <div className="infos">
            <div className="container">
              <div className="apropos-cards">
                <div className="apropos-card" data-aos="zoom-in">
                  <h3 className=" d-flex justify-content-between align-items-center" data-aos="zoom-in">
                    <GiArrowScope className=" fs-1" />
                    {t("infos-content.apropos-mission-title")}
                  </h3>
                  <li style={{ listStyle: "none" }} data-aos="zoom-in">
                    {t("infos-content.apropos-mission-desc")}
                  </li>
                </div>
                <div className="apropos-card" data-aos="zoom-in">
                  <h3 className=" d-flex justify-content-between align-items-center" data-aos="zoom-in">
                    <IoTelescope className=" fs-1" />
                    {t("infos-content.apropos-vision-title")}
                  </h3>
                  <li style={{ listStyle: "none" }} data-aos="zoom-in">
                    {t("infos-content.apropos-vision-desc")}
                  </li>
                </div>
              </div>
            </div>
            <div className="apropos-blur w-100 h-100"></div>
          </div>
        </div>
      </div>

      <div className="" id="paiement">
        <div className=" text-center mb-5">
          <h1 className="title text-center" data-aos="fade-up-right">
            <span> {t("infos-content.paiment")}</span>
          </h1>
        </div>

        <div className="paiement mb-5">
          <div className="paiement-card container" data-aos="zoom-in">
            <h1 className="rotating-icon">
              <GrServices />
            </h1>
            <h1 className="mb-5" style={{ color: "rgb(206, 27, 27)" }}>
              {t("infos-content.paiment-title")}
            </h1>
            <p>{t("infos-content.paiment-desc")}</p>
          </div>
          <div className="paiement-card container" data-aos="zoom-in">
            <div data-aos="zoom-in">
              <h3>
                <ImUserPlus className="fs-1" />
                {t("infos-content.paiment-inscription-title")}
              </h3>
              <p>{t("infos-content.paiment-inscription-desc")}</p>
            </div>
            <div data-aos="zoom-in">
              <h3>
                <SiLibreofficewriter className="fs-1" />
                {t("infos-content.paiment-consultation-title")}
              </h3>
              <p>{t("infos-content.paiment-consultation-desc")}</p>
            </div>
            <div data-aos="zoom-in">
              <h3>
                <IoMdDoneAll className="fs-1" />
                {t("infos-content.paiment-regle-title")}
              </h3>
              <p>{t("infos-content.paiment-regle-desc")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="" id="equipe">
        <div className=" text-center mb-5">
          <h1 className="title text-center" data-aos="fade-up-right">
            {t("infos-content.equipe")}
            <span> {t("infos-content.equipe-soustitle")}</span>
          </h1>
        </div>

        <div className="equipe mb-5">
          <div className="container d-flex justif-content-center align-items-center flex-column">
            <Swiper
              navigation
              pagination={{ clickable: true }}
              freeMode={true}
              autoplay={{ delay: 2000 }}
              modules={[Navigation, Pagination, FreeMode, Autoplay]}
              className="mySwiper"
              spaceBetween={20}
              breakpoints={{
                480: {
                  slidesPerView: 1,
                },
                868: {
                  slidesPerView: 2,
                },
                968: {
                  slidesPerView: 3,
                },
                1468: {
                  slidesPerView: 3,
                },
              }}
            >
              <div className="blog-cards">
                {medecins.map((b, index) => (
                  <SwiperSlide key={index}>
                    <div className="blog-card equipe-card">
                      <div data-aos="zoom-in">
                        <img src={img || "/3774299.png"} className="" alt="" />
                      </div>
                      <div className="blog-content mt-4">
                        <h3>Dr. {b.nom}{b.prenom}</h3>
                        <h5>{b.specialite}</h5>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="" id="horaires">
        <div className=" text-center mb-5">
          <h1 className="title text-center" data-aos="fade-up-right">
            {t("infos-content.candidature")}
            <span> {t("infos-content.candidature-soustitle")}</span>
          </h1>
        </div>

        <div className="candidature mb-5">
          <div className="candidature-card" data-aos="zoom-in"></div>
          <div className="candidature-card" data-aos="zoom-in">
            <h5>{t("infos-content.candidature-head")}</h5>
            <ul>
              <li>
                <IoMdDoneAll /> {t("infos-content.candidature-job-1")}
              </li>
              <li>
                <IoMdDoneAll /> {t("infos-content.candidature-job-2")}
              </li>
              <li>
                <IoMdDoneAll /> {t("infos-content.candidature-job-3")}
              </li>
              <li>
                <IoMdDoneAll /> {t("infos-content.candidature-job-4")}
              </li>
              <li>
                <IoMdDoneAll /> {t("infos-content.candidature-job-5")}
              </li>
            </ul>
            <button onClick={handleCandidat}>{t("infos-content.candidature-btn")}</button>
          </div>
        </div>
        <div>
          {toggleCandidat && <ModalCandida toggleCandidat={toggleCandidat} handletoggleCandidat={handleCandidat} />}
        </div>
      </div>

      <div className="" id="cpas">
        <div className=" text-center mb-5">
          <h1 className="title text-center" data-aos="fade-up-right">
            <span> {t("infos-content.cpas-soustitle")}</span>
          </h1>
        </div>

        <div className="cpas mb-5">
          <div className="container">
            <ul className=" d-flex flex-column gap-3" data-aos="zoom-in">
              <li>
                <BiCheck className="i" /> {t("infos-content.cpas-p-1")}
              </li>
              <li>
                <BiCheck className="i" /> {t("infos-content.cpas-p-2")}
              </li>
              <li>
                <BiCheck className="i" /> {t("infos-content.cpas-p-3")}
              </li>
              <h4 className="fw-bold">{t("infos-content.cpas-pers-titre")}</h4>
              <ul className=" d-flex flex-column gap-3">
                <li>
                  <BiCheck className="i" /> {t("infos-content.cpas-pers-p-1")}
                </li>
                <li>
                  <BiCheck className="i" /> {t("infos-content.cpas-pers-p-2")}
                </li>
              </ul>
              <li className="text-danger">
                {t("infos-content.cpas-pers-p-red")}
              </li>
            </ul>
          </div>
          <div className="equipe mt-5">
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <div className="slider-cards cpas-cards">
                <a target="_blank" style={{textDecoration: "none"}} href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=fr&la=F&cn=1976070834&table_name=loi&&caller=list&F&fromtab=loi&tri=dd+AS+RANK&rech=1&numero=1&sql=(text+contains+(%27%27))#Art.56">
                  <div
                    className="slider-card cpas-card"
                    data-aos="fade-down-left"
                  >
                    <div
                      data-aos="zoom-in"
                      className="slider-card-top d-flex justify-content-between align-items-center"
                    >
                      <h2>{t("infos-content.cpas-aide-titre")}</h2>
                      <LuCalendarClock className=" fs-1" />
                    </div>
                    <p data-aos="zoom-in">{t("infos-content.cpas-aide-p")}</p>
                  </div>
                </a>
                <a target="_blank" style={{textDecoration: "none"}} href="http://www.ocmw-info-cpas.be/home_fr">
                  <div
                    className="slider-card cpas-card"
                    data-aos="fade-down-right"
                  >
                    <div
                      data-aos="zoom-in"
                      className="slider-card-top d-flex justify-content-between align-items-center"
                    >
                      <h2 data-aos="zoom-in">
                        {t("infos-content.cpas-cpas-titre")}
                      </h2>
                      <RxPencil2 className=" fs-1" />
                    </div>
                    <p data-aos="zoom-in">{t("infos-content.cpas-cpas-p")}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-5" id="faq">
        <div className=" text-center mb-5">
          <h1 className="title text-center" data-aos="fade-up-right">
            <span> {t("infos-content.faq")}</span>
          </h1>
        </div>

        <div className="faq">
          <div className="faq-card">
            {faq.map((f, index) => (
              <div
                className="question-container"
                key={index}
                onClick={() => handleToggle(index)}
                data-aos="zoom-in"
              >
                <h3 className="question">
                  {f.question} <BiPlus className="i fs-1" />
                </h3>
                <ul className={toggle === index ? "show" : "hide"}>
                  <li>{f.answer}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="faq-card" data-aos="zoom-in"></div>
        </div>
      </div>

    </div>
  );
};

export default Infos;
