import "./carousel.css";
import { useState } from "react";
import CarouselItem from "../CarouselItem/CarouselItem";
import { FaAngleLeft, FaAngleRight, FaCircle } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import JasonPic from "../../assets/media/haven pics/DSCF7307.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    <CarouselItem index={0} />,
    <CarouselItem index={1} />,
    <CarouselItem index={2} />,
    <CarouselItem index={3} />,
    <CarouselItem index={4} />,
    <CarouselItem index={5} />,
  ];

  return (
    <Swiper
      effect="coverflow"
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={"auto"}
      navigation={true}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: false,
      }}
      className="swiper-container-class"
    >
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide-container-class">
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
