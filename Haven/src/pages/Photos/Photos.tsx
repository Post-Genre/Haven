import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import "./photos.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

import photos from "./photo-list";

export default function Photos() {
  //   console.log("photos: ", photos);
  const photosArraySize = 8;
  const splitPhotos = [];
  for (let i = 0; i < photos.length; i += photosArraySize) {
    splitPhotos.push(photos.slice(i, i + photosArraySize));
  }
  console.log("splitPhotos: ", splitPhotos);

  const rowPhotoAlbumArray = splitPhotos.map((splitPhoto, i) => {
    return (
      <SwiperSlide className="photos-swiper-slide">
        <RowsPhotoAlbum
          key={i}
          photos={splitPhoto}
          //   targetRowHeight={225}
          rowConstraints={{ minPhotos: splitPhoto.length / 2 }}
          spacing={20}
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="photos-container">
      <Swiper
        direction={"horizontal"}
        slidesPerView={"auto"}
        freeMode={true}
        // scrollbar={{ draggable: true }}
        // mousewheel={{
        //   releaseOnEdges: true, // important: allows vertical page scroll at edges
        //   forceToAxis: false, // allows free vertical scroll even mid-slider
        //   invert: false, // flip horizontal direction if needed
        //   sensitivity: 1, // adjust scroll speed
        // }}
        spaceBetween={20}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="swiper-container-class"
      >
        {rowPhotoAlbumArray}
      </Swiper>
    </div>
  );
}
