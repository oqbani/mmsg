import React from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt } from "react-icons/fa";
import Form from "./Form";

interface ModalRdvProps {
  toggle: boolean;
  handleToggle: () => void;
}

const ModalRdv: React.FC<ModalRdvProps> = ({ toggle, handleToggle }) => {
  const [t] = useTranslation("global");

  return (
    <div className={`modal-container ${toggle ? "show" : ""}`}>
      <div
        className={`modal ${toggle ? "show" : ""}`}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bolder">{t("modal.rdv-title")}</h5>
              <a
                type="a"
                className="close modal-btn-close"
                onClick={handleToggle}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </a>
            </div>
            <div className="modal-body">
              <div className=" d-flex flex-column justify-content-center align-items-center">
                <h2 className=" mb-4">{t("modal.tel-title")}</h2>
                <button>
                  <a
                    href="tel: +32 2 527 97 90"
                    className=" d-flex justify-content-between align-items-center"
                  >
                    {t("modal.tel-btn")}
                    <FaPhoneAlt />
                  </a>
                </button>
              </div>
              <div>
                <h2>{t("modal.form-title")}</h2>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalRdv;
