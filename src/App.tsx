import Aos from "aos";
import Accueil from "./Pages/Accueil";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Accueil/Navbar";
import Footer from "./Accueil/Footer";
import Soins from "./Pages/Soins";
import Gene from "./Soins/Gene";
import Logo from "./Soins/Logo";
import Nutr from "./Soins/Nutr";
import Psy from "./Soins/Psy";
import Prelev from "./Soins/Prelev";
import Infirm from "./Soins/Infirm";
import Kine from "./Soins/Kine";
import Autres from "./Soins/Autres";
import Infos from "./Pages/Infos";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { BeatLoader } from "react-spinners";
import logo from "/mmsg-logo.png";
import BlogDetails from "./Pages/BlogDetails";
function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="">
      <Router>
        {loading ? (
          <div className="loader d-flex gap-3 justify-content-center flex-column align-items-center">
            <img src={logo} alt="" />
            <BeatLoader color="#000" className="" />
          </div>
        ) : (
          <>
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Accueil />} />

              {/* SOINS */}
              <Route path="/soins" element={<Soins />} />
              <Route path="/soins/medecine-generale" element={<Gene />} />
              <Route path="/soins/soins-infirmiers" element={<Infirm />} />
              <Route path="/soins/prelevements" element={<Prelev />} />
              <Route path="/soins/kinesitherapie" element={<Kine />} />
              <Route path="/soins/psychotherapie" element={<Psy />} />
              <Route path="/soins/nutrition-et-dietetique" element={<Nutr />} />
              <Route path="/soins/logopedie" element={<Logo />} />
              <Route path="/soins/autres-specialites" element={<Autres />} />

              {/* INFOS */}
              <Route path="/informations" element={<Infos />} />
              <Route
                path="/informations/#a-propos-de-nous"
                element={<Infos />}
              />
              <Route path="/informations/#horaires" element={<Infos />} />
              <Route path="/informations/#paiement" element={<Infos />} />
              <Route path="/informations/#equipe" element={<Infos />} />
              <Route path="/informations/#cpas" element={<Infos />} />
              <Route path="/informations/#faq" element={<Infos />} />
              <Route path="/informations/#liens-utiles" element={<Infos />} />

              

              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:titreFr" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {showScrollButton && (
              <button className="scroll-to-top-button" onClick={scrollToTop}>
                <IoIosArrowUp />
              </button>
            )}
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
