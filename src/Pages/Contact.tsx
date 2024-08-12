import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  FaClock,
  FaFacebookSquare,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import fr from "react-phone-input-2/lang/fr.json";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import * as Yup from "yup";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import { AiFillMessage } from "react-icons/ai";
import axios from "axios";
import { apiContact } from "../Helpers/Api";

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // i18n
  const [t] = useTranslation("global");
  const formRef = useRef<HTMLFormElement>(null);

  const validationSchema = Yup.object().shape({
    nom: Yup.string().required(t("modal-validation.nom")),
    prenom: Yup.string().required(t("modal-validation.prenom")),
    telephone: Yup.string().required(t("modal-validation.phone")),
    email: Yup.string()
      .email("Email invalide")
      .required(t("modal-validation.email")),
    message: Yup.string().required(t("modal-validation.message")),
  });

  const initialValues = {
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${apiContact}`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 201) {
          throw new Error("Failed to add médecin");
        }

        console.log("Médecin ajouté avec succès !");
      } catch (error) {
        console.error("Erreur lors de l'ajout du médecin :", error);
      }
    },
  });
  return (
    <div className="">
      <div className="page-head contact-head" data-aos="fade-right">
        <div className="container page-head-content">
          <h1>{t("contact.contact")}</h1>
          <p className=" fs-4">{t("soins-content.desc")}</p>
          <p>
            <Link
              to={"/"}
              className=" text-white"
              style={{ textDecoration: "none" }}
            >
              {t("nav-content.accueil")}
            </Link>{" "}
            | {t("contact.contact")}
          </p>
        </div>
        <div className="contact-blur w-100 h-100"></div>
      </div>
      <h1 className="title my-5" data-aos="fade-left">
        {t("contact.title")} <span>{t("contact.soustitle")}</span>
      </h1>
      <div className="contact-form my-5 py-5" data-aos="fade-right">
        <div className="contact container">
          <div className="form-content" data-aos="zoom-in">
            <div className="d-flex align-items-center gap-5" data-aos="zoom-in">
              <IoShareSocialSharp className="i" />
              <div>
                <h2>{t("contact.media")}</h2>

                <div className="media pt-3 d-flex gap-3">
                  <FaFacebookSquare className="i fs-5 me-2" />
                  <BsInstagram className="i fs-5 me-2" />
                  <BsLinkedin className="i fs-5 me-2" />
                  <TfiYoutube className="i fs-5" />
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-5" data-aos="zoom-in">
              <FaClock className="i" />
              <div>
                <h2>{t("contact.horaire-title")}</h2>
                <h5>{t("contact.horaire")}</h5>
              </div>
            </div>
            <div className="d-flex align-items-center gap-5" data-aos="zoom-in">
              <MdEmail className="i" />
              <div>
                <h2>{t("contact.form-email")}</h2>
                <h5>infos@mmsg.be</h5>
              </div>
            </div>
            <div className="d-flex align-items-center gap-5" data-aos="zoom-in">
              <FaLocationDot className="i" />
              <div>
                <h2>{t("contact.form-adress")}</h2>
                <h5>187, RueWayez à 1070 Anderlecht</h5>
              </div>
            </div>
            <div className="d-flex align-items-center gap-5" data-aos="zoom-in">
              <FaPhoneAlt className="i" />
              <div>
                <h2>{t("contact.form-tel")}</h2>
                <h5>+32 (0) 2 527 97 90</h5>
              </div>
            </div>
          </div>

          <div className="form-content" data-aos="zoom-in">
            <form
              ref={formRef}
              onSubmit={formik.handleSubmit}
              className="gap-3 form"
              data-aos="fade-left"
            >
              {/* NOM && PRENOM */}
              <div>
                <div className="input-container">
                  <label htmlFor="">{t("modal.form-nom")}</label>
                  <input
                    type="text"
                    className="px-4 py-3 border-0 shadow-none"
                    placeholder={`Dupont`}
                    name="nom"
                    value={formik.values.nom}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.nom && formik.errors.nom ? (
                  <div className="error">{formik.errors.nom} *</div>
                ) : null}
              </div>
              <div>
                <div className="input-container">
                  <label htmlFor="">{t("modal.form-prenom")}</label>
                  <input
                    type="text"
                    className="px-4 py-3 border-0 shadow-none"
                    placeholder={`Jack`}
                    name="prenom"
                    value={formik.values.prenom}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.prenom && formik.errors.prenom ? (
                  <div className="error">{formik.errors.prenom} *</div>
                ) : null}
              </div>

              {/* PHONE */}
              <div>
                <div className="input-container">
                  <label htmlFor="" className=" text-start">
                    {t("modal.form-tel")}
                    <FaPhoneAlt />
                  </label>
                  <PhoneInput
                    country={"fr"}
                    value={formik.values.telephone}
                    onChange={(value) =>
                      formik.setFieldValue("telephone", value)
                    }
                    onBlur={formik.handleBlur}
                    inputProps={{
                      name: "telephone",
                      required: true,
                      autoFocus: true,
                    }}
                    localization={fr}
                    inputClass="phone"
                    isValid={(value) => {
                      if (value.match(/12345/)) {
                        return "Invalid value: ";
                      } else if (value.match(/1234/)) {
                        return false;
                      } else {
                        return true;
                      }
                    }}
                  />
                </div>
                {formik.touched.telephone && formik.errors.telephone ? (
                  <div className="error">{formik.errors.telephone} *</div>
                ) : null}
              </div>

              {/* EMAIL */}
              <div>
                <div className="input-container">
                  <label htmlFor="">
                    {t("modal.form-email")}
                    <MdEmail />
                  </label>
                  <input
                    type="email"
                    className="px-4 py-3 border-0 shadow-none"
                    placeholder={`exemple@gmail.com`}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">{formik.errors.email} *</div>
                ) : null}
              </div>

              {/* MESSAGE */}
              <div>
                <div className="input-container">
                  <label htmlFor="">
                    Messages <AiFillMessage />
                  </label>
                  <textarea
                    className="px-4 py-3 border-0 shadow-none"
                    style={{ height: "120px", maxWidth: "26rem" }}
                    placeholder={`${t("modal.form-message")}`}
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                </div>
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message} *</div>
                ) : null}
              </div>

              {/* Btn */}
              <button
                type="submit"
                className="mt-4 px-4 d-flex justify-content-between align-items-center"
              >
                {t("modal.form-btn")} <FaPaperPlane />{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="container contact my-5" data-aos="zoom-in">
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/mmsg-bg-1.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/mmsg-bg-2.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/mmsg-bg-3.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/mmsg-bg-4.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/mmsg-maps.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div style={{ width: "100%" }} data-aos="zoom-in">
        <iframe
          className="w-100"
          style={{ height: "40rem" }}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Maison%20M%C3%A9dicale%20St-Guidon+()&amp;t=k&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
    </div>
  );
};

export default Contact;
