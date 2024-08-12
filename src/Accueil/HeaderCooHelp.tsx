import axios from "axios";
import { apiCoordonnees } from "../Helpers/Api";

export interface RecepCoo {
    id: number;
    telephone: string;
    email: string;
    horaire: string;
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  }
export const getDataCoo = async () => {
  try {
    const response = await axios.get(apiCoordonnees);
    console.log("data afficher avec succés:", response.data);
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