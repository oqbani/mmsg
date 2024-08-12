import React from "react";
import { useTranslation } from "react-i18next";
import FormCandidature from "./FormCandidature";

interface ModalRdvProps {
  toggleCandidat: boolean;
  handletoggleCandidat: () => void;
}

const ModalCandida: React.FC<ModalRdvProps> = ({
  toggleCandidat,
  handletoggleCandidat,
}) => {
  const [t] = useTranslation("global");
  return (
    <div className={`modal-container ${toggleCandidat ? "show" : ""}`}>
      <div
        className={`modal ${toggleCandidat ? "show" : ""}`}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fw-bolder">
                {t("modal.candida-title")}
              </h4>
              <a
                type="a"
                className="close modal-btn-close"
                onClick={handletoggleCandidat}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </a>
            </div>
            <div className="modal-body">
              <div className="d-flex flex-column">
                <h5 className=" text-start fw-bold">{t('candidature.note')}</h5>
                <ol className="text-start">
                  <li>{t("candidature.h-1")}</li>
                  <li>{t("candidature.h-2")}</li>
                  <li>{t("candidature.h-3")}</li>
                  <li>{t("candidature.h-4")}</li>
                  <li>{t("candidature.h-5")}</li>
                </ol>
                <h3 className="fw-bold mb-4">{t("candidature.conditions")}</h3>
                <ul className="text-start">
                  <li>{t("candidature.p-1")}</li>
                  <li>{t("candidature.p-2")}</li>
                  <li>{t("candidature.p-3")}</li>
                  <li>{t("candidature.p-4")}</li>
                  <li>{t("candidature.p-5")}</li>
                  <li>{t("candidature.p-6")}</li>
                  <li>{t("candidature.p-7")}</li>
                </ul>
              </div>
              <div>
                <h2>{t("modal.form-candida")}</h2>
              </div>
            </div>
            <FormCandidature />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCandida;
