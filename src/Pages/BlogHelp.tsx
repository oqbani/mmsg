import axios from "axios";
import { apiBlog } from "../Helpers/Api";


export interface RecepBlog {
  id: number;
  titreFr: string;
  titreEn: string;
  categorieFr: string;
  categorieEn: string;
  contenuFr: string;
  contenuEn: string;
  date: string;
  image: string;
}



export const getDataBlog = async () => {
    try {
      const response = await axios.get(apiBlog);
      console.log("data afficher avec succés:", response.data);
      return response.data;
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