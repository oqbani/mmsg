import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
// Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Link } from "react-router-dom";
import { RecepBlog } from "../Pages/BlogHelp";
import { apiBlog, uploadUrl } from "../Helpers/Api";
import { formatDate } from "date-fns";
import axios from "axios";
import slugify from "slugify";

const Blog: React.FC = () => {
  const [blog, setBlog] = useState<RecepBlog[]>([]);
  const { t, i18n } = useTranslation("global");
  const language = i18n.language;

  const fetchBlogs = async () => {
    const response = await axios.get(`${apiBlog}`);
    setBlog(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="blog my-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="title text-center" data-aos="fade-up-right">
            {t("blog-content.title")}
            <span> {t("blog-content.soustitle")}</span>
          </h1>
        </div>
      </div>

      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mt-5 d-none"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>

      <div className="container d-flex justif-content-center align-items-center flex-column">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          freeMode={true}
          autoplay={{ delay: 2000 }}
          modules={[Navigation, Pagination, FreeMode, Autoplay]}
          className="mySwiper"
          spaceBetween={20}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            868: {
              slidesPerView: 2,
            },
            968: {
              slidesPerView: 3,
            },
            1468: {
              slidesPerView: 3,
            },
          }}
        >
          <div className="blog-cards">
            {blog.map((b, index) => (
              <SwiperSlide key={index}>
                <div className="blog-card text-black">
                  <Link
                    to={`/blog/${slugify(
                      language === "fr" ? b.titreFr : b.titreEn,
                      { lower: true }
                    )}`}
                    className="text-black text-decoration-none"
                  >
                    <div data-aos="zoom-in">
                      <img src={`${uploadUrl}/blog_images/${b.image}`} />
                    </div>
                    <div className="blog-content mt-4">
                      <h3 data-aos="zoom-in">
                        {language === "fr" ? b.titreFr : b.titreEn}
                      </h3>
                      <div data-aos="zoom-in">
                        <p className="text-gray-800">{formatDate(b?.date, "yyyy-MM-dd")}</p>|
                        <a href="">
                          {language === "fr" ? b.categorieFr : b.categorieEn}
                        </a>
                      </div>
                      <p data-aos="zoom-in">
                        {language === "fr"
                          ? b.contenuFr.slice(0, 150)
                          : b.contenuEn.slice(0, 150)}
                        ...
                      </p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <Link to={"/blog"}>
          <button
            data-aos="zoom-in"
            className=" mt-3"
            style={{ width: "20rem" }}
          >
            {t("blog-content.btn")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
