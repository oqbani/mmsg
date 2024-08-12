import slugify from 'slugify';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { apiBlog, uploadUrl } from "../Helpers/Api";
import axios from "axios";
import { formatDate } from "date-fns";

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

const Blog: React.FC = () => {
  const [blog, setBlog] = useState<RecepBlog[]>([]);
  const { i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTop = () => {
    window.scrollTo(0, 550);
  };

  const fetchBlogs = async () => {
    const response = await axios.get(`${apiBlog}`);
    setBlog(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const { t } = useTranslation("global");

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4;

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
    handleTop();
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = Array.isArray(blog)
    ? blog.filter((post) =>
        (language === "fr" ? post.titreFr : post.titreEn)
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : [];

  const offset = currentPage * postsPerPage;
  const currentPosts = Array.isArray(filteredPosts)
    ? filteredPosts.slice(offset, offset + postsPerPage)
    : [];
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0);
  };

  return (
    <div>
      <div className="page-head blog-head" data-aos="fade-right">
        <div className="container page-head-content">
          <h1>{t("blog-content.blog")}</h1>
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
          {currentPosts.reverse().map((b, index) => (
            <Link
            to={`/blog/${slugify(b.titreFr, { lower: true })}`}
              className="text-black"
              style={{ textDecoration: "none" }}
              key={index}
            >
              <div className="post-card" data-aos="zoom-in">
                <div data-aos="zoom-in">
                  <img
                    src={`${uploadUrl}/blog_images/${b.image}`}
                  />
                </div>
                <div className="blog-card-content" data-aos="zoom-in">
                  <h4>{language === "fr" ? b.titreFr : b.titreEn}</h4>
                  <h6 className="d-flex align-items-center gap-2">
                    <p>{formatDate(b?.date, "yyyy-MM-dd")}</p> <p>|</p>{" "}
                    <p>{language === "fr" ? b.categorieFr : b.categorieEn}</p>
                  </h6>
                  <p>
                    {language === "fr"
                      ? b.contenuFr.slice(0, 300)
                      : b.contenuEn.slice(0, 300)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              marginPagesDisplayed={2}
              pageRangeDisplayed={6}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>

        <div className="post-menu">
          <div data-aos="zoom-in">
            <h5>{t("blog-content.search")}</h5>
            <div className="post-search">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={t("blog-content.search")}
              />
              <BiSearch className="icon-search" />
            </div>
          </div>
          <div data-aos="zoom-in">
            <h5>{t("blog-content.dernierpost")}</h5>
            {currentPosts.slice(-4).map((b, index) => (
              <Link
                to={`/blog/${slugify(b.titreFr, { lower: true })}`}
                className="text-black"
                style={{ textDecoration: "none" }}
                key={index}
                onClick={handleTop}
              >
                <div className="recent-card" data-aos="zoom-in">
                  <div className="d-flex gap-2">
                    <MdKeyboardArrowRight />
                    <div className="blog-card-content mb-2">
                      <h6>{language === "fr" ? b.titreFr : b.titreEn}</h6>
                      <li className="d-flex align-items-center gap-1">
                        <li>{formatDate(b?.date, "yyyy-MM-dd")}</li> <li>|</li>{" "}
                        <li>{language === "fr" ? b.categorieFr : b.categorieEn}</li>
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
              {currentPosts.slice(-8).map((b, index) => (
                  <img
                    src={`${uploadUrl}/blog_images/${b.image}`}
                    style={{ width: "9rem", height: "auto" }}
                    data-aos="zoom-in" key={index}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
