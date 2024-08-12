import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import { MdEmail } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { IoTime } from "react-icons/io5";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import be from "react-phone-input-2/lang/fr.json";
import { apiMedecins, apiRdv } from "../Helpers/Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = () => {
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
  // i18n
  const [t] = useTranslation("global");
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    nom: Yup.string().required(t("modal-validation.nom")),
    prenom: Yup.string().required(t("modal-validation.prenom")),
    telephone: Yup.string().required(t("modal-validation.phone")),
    email: Yup.string()
      .email("Email invalide")
      .required(t("modal-validation.email")),
    date: Yup.date().required(t("modal-validation.date")),
    medecins: Yup.string().required(t("modal-validation.medecins")),
    message: Yup.string().required(t("modal-validation.message")),
  });

  const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    medecins: "",
    date: "",
    message: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const response = await axios.post(`${apiRdv}`, values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error("Failed to send email");
        }

        console.log("Email sent successfully!");
        formik.resetForm();
        navigate("/");
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
  });

  return (
    <div className="">
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
              country={"be"}
              value={formik.values.telephone}
              onChange={(value) => formik.setFieldValue("telephone", value)}
              onBlur={formik.handleBlur}
              inputProps={{
                name: "telephone",
                required: true,
                autoFocus: true,
              }}
              localization={be}
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

        {/* MEDECINS SELECT */}
        <div>
          <div className="input-container">
            <label htmlFor="">
              {t("modal.medecins")}
              <FaUserDoctor />
            </label>
            <select
              name="medecins"
              value={formik.values.medecins}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option selected>Choisissez un medecin</option>
              {medecins.map((dr) => (
                <option key={dr.id} value={dr.nom}>
                  Dr. {dr.nom}
                  {dr.prenom}
                </option>
              ))}
            </select>
          </div>
          {formik.touched.medecins && formik.errors.medecins ? (
            <div className="error">{formik.errors.medecins}</div>
          ) : null}
        </div>

        {/* DATE TIME PICKER */}
        <div>
          <div className="input-container">
            <label htmlFor="">
              {t("modal.form-date")}
              <IoTime />
            </label>
            <div className="datetime">
              <input
                type="datetime-local"
                name="date"
                value={formik.values.date}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          {formik.touched.date && formik.errors.date ? (
            <div className="error">{formik.errors.date} *</div>
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
              style={{ height: "120px" }}
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
  );
};

export default Form;
