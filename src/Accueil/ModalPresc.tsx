import React from "react";
import { useTranslation } from "react-i18next";
import FormPresc from "./FormPresc";

interface ModalRdvProps {
  togglePresc: boolean;
  handleTogglePresc: () => void;
}
const ModalPresc: React.FC<ModalRdvProps> = ({
  togglePresc,
  handleTogglePresc,
}) => {
  const [t] = useTranslation("global");
  return (
    <div className={`modal-container ${togglePresc ? "show" : ""}`}>
      <div
        className={`modal ${togglePresc ? "show" : ""}`}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bolder">
                {t("modal.presc-title")}
              </h5>
              <a
                type="a"
                className="close modal-btn-close"
                onClick={handleTogglePresc}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </a>
            </div>
            <div className="modal-body">
              <div className="   d-flex flex-column justify-content-center align-items-center">
                <h3 className=" fw-bold mb-4">{t("prescription.note")}</h3>
                <ul className="text-start">
                  <li>{t("prescription.p-1")}</li>
                  <li>{t("prescription.p-2")}</li>
                  <li>{t("prescription.p-3")}</li>
                </ul>
              </div>
              <div>
                <h2>{t("modal.form-presc")}</h2>
              </div>
            </div>
            <FormPresc />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPresc;
