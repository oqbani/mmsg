import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import { MdEmail } from "react-icons/md";
import { FaFileImport, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import be from "react-phone-input-2/lang/fr.json";
import axios from "axios";
import { apiCandida } from "../Helpers/Api";

const FormCandidature: React.FC = () => {
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
    // file: Yup.string()
    //   .required(t("modal-validation.file"))
  });

  const initialValues = {
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    file: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);

      try {
        const formData = new FormData();
        formData.append("nom", values.nom);
        formData.append("prenom", values.prenom);
        formData.append("email", values.email);
        formData.append("telephone", values.telephone);
        formData.append("file", values.file);
        console.log(formData);

        const response = await axios.post(apiCandida, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status !== 201) {
          throw new Error("Failed to send email");
        }

        console.log("Email sent successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Error sending email:", error);
      }
    },
  });
  return (
    <div>
      <form
        ref={formRef}
        onSubmit={formik.handleSubmit}
        className="gap-3 form"
        data-aos="fade-left"
      >
        <div className=" d-flex gap-4 justify-content-center align-items-center flex-wrap">
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

          {/* FILES */}
          <div>
            <div className="input-container">
              <label htmlFor="">
                {t("modal-validation.file")}
                <FaFileImport />
              </label>
              <input
                type="file"
                className="px-4 py-3 border-0 shadow-none"
                style={{ height: "4rem" }}
                name="file"
                multiple
                // accept="image/jpeg, image/png, image/gif" // Ensure only valid formats are accepted
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0];
                  formik.setFieldValue("file", file);
                }}
                onBlur={formik.handleBlur}
                // accept=".png, .jpg"
              />
            </div>
            {formik.touched.file && formik.errors.file ? (
              <div className="error">{formik.errors.file} *</div>
            ) : null}
          </div>
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

export default FormCandidature;
