import "./carousel.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
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

import DJImage from "../../assets/media/disco nap/IMG_2003.jpg";
import WBYPic from "../../assets/media/haven pics/IMG_8836.jpg";
import GetInvolved from "../../assets/media/backgrounds/Psych Background.png";

export default function Carousel() {
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

  function getFirstFourEvents(events: Event[]): Event[] {
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
      .slice(0, 4); // Only return first 4
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
        setEvents(getFirstFourEvents(sortedEvents));
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

  const slideEvents = events.map((eventItem, index) => (
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
  const carouselItems: ReactNode[] = [
    slideEvents[0],
    <SwiperSlide key={1} className="swiper-slide-container-class">
      <CarouselItem
        mainTitle="Follow us on Instagram!"
        subtitle="@haven.pgh"
        image={DJImage}
        url="https://www.instagram.com/haven.pgh/?hl=en"
        buttonText="INSTAGRAM"
      />
    </SwiperSlide>,
    slideEvents[1],
    <SwiperSlide key={3} className="swiper-slide-container-class">
      <CarouselItem
        mainTitle="Interested in hosting your event at HAVEN?"
        subtitle="Contact us for private event rentals!"
        image={WBYPic}
        routeInPage={true}
        url="/rentals"
        buttonText="RENTALS"
      />
    </SwiperSlide>,
    slideEvents[2],
    // slideEvents[3],
    <SwiperSlide key={5} className="swiper-slide-container-class">
      <CarouselItem
        mainTitle="Want to get involved at HAVEN?"
        subtitle="Fill out our interest form!"
        image={GetInvolved}
        url="https://www.pg.media/get-involved.html"
        buttonText="GET INVOLVED!"
      />
    </SwiperSlide>,
  ];
  return (
    <>
      <Swiper
        effect="coverflow"
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={50}
        initialSlide={0}
        slidesPerView={"auto"}
        // slidesPerView={1}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        centeredSlides={true}
        // loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // onSwiper={(swiper) => {
        //   console.log("swiper instance: ", swiper);
        //   console.log("swiper instance 2: ", swiper);
        // }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        }}
        className="swiper-container-class"
      >
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
