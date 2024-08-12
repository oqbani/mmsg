import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { apiBlog, uploadUrl } from "../Helpers/Api";
import { format } from "date-fns";
import slugify from "slugify";

interface RecepBlog {
  id: number;
  titreFr: string;
  titreEn: string;
  categorieFr: string;
  categorieEn: string;
  contenuFr: string;
  contenuEn: string;
  date: string;
  image: string;
  imageFile: string;
}

const BlogDetails: React.FC = () => {
  const [blogs, setBlogs] = useState<RecepBlog[]>([]);
  const { t, i18n } = useTranslation("global");
  const language = i18n.language;
  const { titreFr } = useParams<{ titreFr: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiBlog}`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Find the blog based on the URL parameter and language
  const findArticle = blogs.find((b) =>
    slugify(language === "fr" ? b.titreFr : b.titreEn, { lower: true }) === titreFr
  );

  if (!findArticle) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="page-head blog-head" data-aos="fade-right">
        <div className="container page-head-content">
          <h1>{t("blog-content.blog")} DETAILS</h1>
          <p className="fs-4">{t("soins-content.desc")}</p>
          <p>
            <Link
              to="/"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              {t("nav-content.accueil")}
            </Link>{" "}
            | {t("blog-content.blog")}
          </p>
        </div>
        <div className="contact-blur w-100 h-100"></div>
      </div>

      <div className="container posts-container my-5">
        <div className="post-cards">
          <div className="post-card" data-aos="zoom-in">
            <div data-aos="zoom-in">
              <img
                src={`${uploadUrl}/blog_images/${findArticle.image}`}
                alt={findArticle.titreFr}
              />
            </div>
            <div className="blog-card-content" data-aos="zoom-in">
              <h3>
                {language === "fr"
                  ? findArticle.titreFr
                  : findArticle.titreEn}
              </h3>
              <h6 className="d-flex align-items-center gap-2">
                <p>{format(new Date(findArticle.date), "yyyy-MM-dd")}</p>{" "}
                <p>|</p>{" "}
                <p>
                  {language === "fr"
                    ? findArticle.categorieFr
                    : findArticle.categorieEn}
                </p>
              </h6>
              <p>
                {language === "fr"
                  ? findArticle.contenuFr
                  : findArticle.contenuEn}
              </p>
            </div>
          </div>
        </div>

        <div className="post-menu">
          <div data-aos="zoom-in">
            <h5>{t("blog-content.search")}</h5>
            <div className="post-search">
              <input
                type="text"
                value={""}
                placeholder={t("blog-content.search")}
              />
              <BiSearch className="icon-search" />
            </div>
          </div>
          <div data-aos="zoom-in">
            <h5>{t("blog-content.dernierpost")}</h5>
            {blogs.map((b, index) => (
              <Link
                to={`/blog/${slugify(language === "fr" ? b.titreFr : b.titreEn, { lower: true })}`}
                className="text-black"
                style={{ textDecoration: "none" }}
                key={index}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="recent-card" data-aos="zoom-in">
                  <div className="d-flex gap-2">
                    <MdKeyboardArrowRight />
                    <div className="blog-card-content mb-2">
                      <h6>{language === "fr" ? b.titreFr : b.titreEn}</h6>
                      <li className="d-flex align-items-center gap-1">
                        <li>{format(new Date(b.date), "yyyy-MM-dd")}</li>{" "}
                        <li>|</li>{" "}
                        <li>
                          {language === "fr" ? b.categorieFr : b.categorieEn}
                        </li>
                      </li>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div>
            <h5>{t("blog-content.gallery")}</h5>
            <div className="gallery" data-aos="zoom-in">
              {blogs.map((b, index) => (
                <div data-aos="zoom-in" key={index}>
                  <img
                    src={`${uploadUrl}/blog_images/${b.image}`}
                    style={{ width: "9rem", height: "auto" }}
                    alt={b.titreFr}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
