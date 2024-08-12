import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTop = () => {
    window.scrollTo(0, 550);
  };

  const [t] = useTranslation("global");

  const blog = [
    {
      id: 0,
      title: t("blog.0.title"),
      date: t("blog.0.date"),
      cat: t("blog.0.cat"),
      img: t("blog.0.img"),
      content: t("blog.0.content"),
      slug: t("blog.0.slug"),
    },
    {
      id: 1,
      title: t("blog.1.title"),
      date: t("blog.1.date"),
      cat: t("blog.1.cat"),
      img: t("blog.1.img"),
      content: t("blog.1.content"),
      slug: t("blog.1.slug"),
    },
    {
      id: 2,
      title: t("blog.2.title"),
      date: t("blog.2.date"),
      cat: t("blog.2.cat"),
      img: t("blog.2.img"),
      content: t("blog.2.content"),
      slug: t("blog.2.slug"),
    },
    {
      id: 3,
      title: t("blog.3.title"),
      date: t("blog.3.date"),
      cat: t("blog.3.cat"),
      img: t("blog.3.img"),
      content: t("blog.3.content"),
      slug: t("blog.3.slug"),
    },
    {
      id: 4,
      title: t("blog.4.title"),
      date: t("blog.4.date"),
      cat: t("blog.4.cat"),
      img: t("blog.4.img"),
      content: t("blog.4.content"),
      slug: t("blog.4.slug"),
    },
    {
      id: 5,
      title: t("blog.5.title"),
      date: t("blog.5.date"),
      cat: t("blog.5.cat"),
      img: t("blog.5.img"),
      content: t("blog.5.content"),
      slug: t("blog.5.slug"),
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4;

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  // Search functionality
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blog.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const offset = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(offset, offset + postsPerPage);

  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0); // Reset page to 0 when searching
  };

  return (
    <div>
      <div className="page-head blog-head" data-aos="fade-right">
        <div className="container page-head-content">
          <h1>{t("blog-content.blog")}</h1>
          <p className=" fs-4">{t("soins-content.desc")}</p>
          <p>
            <Link
              to={"/"}
              className=" text-white"
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
              to={`/blog/${b?.title}`}
              className="text-black"
              style={{ textDecoration: "none" }}
              key={index}
            >
              <div className="post-card" data-aos="zoom-in" key={index}>
                <div data-aos="zoom-in">
                  <img src={b?.img} alt="" />
                </div>
                <div className="blog-card-content" data-aos="zoom-in">
                  <h3>{b?.title}</h3>
                  <h6 className="d-flex align-items-center gap-2">
                    <p>{b?.date}</p> <p>|</p> <p>{b?.cat}</p>
                  </h6>
                  <p>{b?.content.slice(0, 300)}</p>
                </div>
              </div>
            </Link>
          ))}
          <div className=" w-100 h-100 d-flex justify-content-center align-items-center">
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
            {currentPosts.slice(-6).map((b, index) => (
              <Link
                to={`/blog/${b?.title}`}
                className="text-black"
                style={{ textDecoration: "none" }}
                key={index}
                onClick={handleTop}
              >
                <div className="recent-card" data-aos="zoom-in">
                  <div className=" d-flex gap-2">
                    <MdKeyboardArrowRight />
                    <div className="blog-card-content mb-2">
                      <h6>{b?.title}</h6>
                      <li className=" d-flex align-items-center gap-1">
                        <li>{b?.date}</li> <li>|</li> <li>{b?.cat}</li>
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
              <img src="/bg-pages-8.jpg" alt="" data-aos="zoom-in" />
              <img src="/bg-2.avif" alt="" data-aos="zoom-in" />
              {currentPosts.slice(-8).map((b) => (
                <div data-aos="zoom-in">
                  <img src={b?.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
