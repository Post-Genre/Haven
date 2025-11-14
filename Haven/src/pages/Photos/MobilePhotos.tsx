import "./photos.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { FreeMode, Scrollbar, Mousewheel, Navigation } from "swiper/modules";
import photos from "./photo-list";
import djPhotos from "./dj-photo-list";
import obpPhotos from "./obp-photo-list";
import { useState } from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import PhotoSlide from "./PhotoSlide";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function MobilePhotos() {
  const photosSlides = photos.map((photo, i) => {
    return (
      <SwiperSlide key={i} className="mobile-photos-swiper-slide">
        <PhotoSlide
          title={photo.title}
          subtitle={photo.alt}
          image={photo.src}
        />
      </SwiperSlide>
    );
  });

  const djPhotosSlides = djPhotos.map((photo, i) => {
    return (
      <SwiperSlide key={i} className="mobile-photos-swiper-slide">
        <PhotoSlide
          title={photo.title}
          subtitle={photo.alt}
          image={photo.src}
        />
      </SwiperSlide>
    );
  });

  const obpPhotosSlides = obpPhotos.map((photo, i) => {
    return (
      <SwiperSlide key={i} className="mobile-photos-swiper-slide">
        <PhotoSlide
          title={photo.title}
          subtitle={photo.alt}
          image={photo.src}
        />
      </SwiperSlide>
    );
  });
  return (
    <div className="mobile-photo-container">
      <h3>LIVE MUSIC</h3>
      <div className="mobile-photo-album-container">
        <div className="custom-prev photos-button">
          <FaAngleLeft color="white" />
        </div>
        <Swiper
          slidesPerView={1}
          modules={[FreeMode, Scrollbar, Mousewheel, Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
            enabled: true,
          }}
          // loop={true}
        >
          {photosSlides}
        </Swiper>
        <div className="custom-next photos-button">
          <FaAngleRight color="white" />
        </div>
      </div>

      <h3>DJ NIGHTS</h3>
      <div className="mobile-photo-album-container">
        <div className="custom-prev photos-button">
          <FaAngleLeft color="white" />
        </div>
        <Swiper
          slidesPerView={1}
          modules={[FreeMode, Scrollbar, Mousewheel, Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
            enabled: true,
          }}
          // loop={true}
        >
          {djPhotosSlides}
        </Swiper>
        <div className="custom-next photos-button">
          <FaAngleRight color="white" />
        </div>
      </div>

      <h3>OAKLAND BLOCK PARTY 2025</h3>
      <div className="mobile-photo-album-container">
        <div className="custom-prev photos-button">
          <FaAngleLeft color="white" />
        </div>
        <Swiper
          slidesPerView={1}
          modules={[FreeMode, Scrollbar, Mousewheel, Navigation]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
            enabled: true,
          }}
          // loop={true}
        >
          {obpPhotosSlides}
        </Swiper>
        <div className="custom-next photos-button">
          <FaAngleRight color="white" />
        </div>
      </div>
    </div>
  );
}
