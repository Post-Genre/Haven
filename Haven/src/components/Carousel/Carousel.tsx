import "./carousel.css";
import { useEffect, useState } from "react";
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

  type Event = {
    EventName: string;
    EventDate: string;
    EventDoorsOpen: string;
    ticketTypes: any[];
    EventUrl: string;
    EventThumbnail: string;
    ShowPublic: boolean;
  };

  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);

  function sortEventsByDate(events: Event[]): Event[] {
    return events.sort((a, b) => {
      const [yearA, monthA, dayA] = a.EventDate.split("-").map(Number);
      const [yearB, monthB, dayB] = b.EventDate.split("-").map(Number);

      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);

      return dateA.getTime() - dateB.getTime();
    });
  }

  function getFirstThreeEvents(events: Event[]): Event[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return events
      .filter((event) => {
        const [year, month, day] = event.EventDate.split("-").map((num) =>
          parseInt(num, 10)
        );
        const eventDate = new Date(year, month - 1, day);
        return eventDate >= today && event.ShowPublic;
      })
      .slice(0, 6); // Only return first 3
  }

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://67sxoyzalltf7cnmecge2sj5yq0bckqd.lambda-url.us-east-2.on.aws",
        {
          method: "GET",
          headers: { "x-api-key": "7a055rda" },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ERROR, STATUS: ${response.status}`);
      }

      const data = await response.json();

      if (data && data.length > 0) {
        const sortedEvents = sortEventsByDate(data);
        setEvents(getFirstThreeEvents(sortedEvents));
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching event data:", error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const carouselItems = events.map((eventItem, index) => (
    <SwiperSlide key={index} className="swiper-slide-container-class">
      <CarouselItem
        mainTitle={eventItem.EventName}
        subtitle="Get your tickets now!"
        image={eventItem.EventThumbnail}
        url={eventItem.EventUrl}
        buttonText="TICKETS"
      />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        effect="coverflow"
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={"auto"}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        initialSlide={0}
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
        {/* {carouselItems.map((item, index) => (
      <SwiperSlide key={index} className="swiper-slide-container-class">
        {item}
      </SwiperSlide>
    ))} */}
        {carouselItems}
      </Swiper>
      <div className="controls-row">
        <div className="custom-prev">
          <FaAngleLeft color="white" size={28} />
        </div>
        <div className="custom-pagination"></div>
        <div className="custom-next">
          <FaAngleRight color="white" size={28} />
        </div>
      </div>
    </>
  );
}
