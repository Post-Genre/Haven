import { MasonryPhotoAlbum, type Photo } from "react-photo-album";
import "react-photo-album/masonry.css";
import "./photos.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import backgroundImg from "../../assets/media/banners/banner1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

import photos from "./photo-list";
import djPhotos from "./dj-photo-list";
import obpPhotos from "./obp-photo-list";
import { useState } from "react";
import TitleContainer from "../../components/TitleContainer/TitleContainer";
import { div } from "motion/react-client";

type SelectablePhoto = Photo & {
  selected?: boolean;
};

export default function Photos() {
  //   console.log("photos: ", photos);
  //   photos.sort(() => Math.random() - 0.5);
  //   djPhotos.sort(() => Math.random() - 0.5);
  const [lightboxPhoto, setLightboxPhoto] = useState<SelectablePhoto>();

  function displayAltText(photo: Photo) {
    console.log("Alt Text: ", photo.alt);
  }
  const photosArraySize = 8;
  const splitPhotos = [];
  const djSplitPhotos = [];
  const objSplitPhotos = [];
  for (let i = 0; i < photos.length; i += photosArraySize) {
    splitPhotos.push(photos.slice(i, i + photosArraySize));
  }
  for (let i = 0; i < djPhotos.length; i += photosArraySize) {
    djSplitPhotos.push(djPhotos.slice(i, i + photosArraySize));
  }

  for (let i = 0; i < obpPhotos.length; i += photosArraySize) {
    objSplitPhotos.push(obpPhotos.slice(i, i + photosArraySize));
  }

  const rowPhotoAlbumArray = splitPhotos.map((splitPhoto, i) => {
    return (
      <SwiperSlide className="photos-swiper-slide">
        <RowsPhotoAlbum
          key={i}
          photos={splitPhoto}
          targetRowHeight={225}
          rowConstraints={{ minPhotos: splitPhoto.length / 2 }}
          spacing={20}
        />
      </SwiperSlide>
    );
  });

  const djPhotoAlbumArray = djSplitPhotos.map((splitPhoto, i) => {
    return (
      <SwiperSlide className="photos-swiper-slide">
        <RowsPhotoAlbum
          key={i}
          photos={splitPhoto}
          targetRowHeight={225}
          rowConstraints={{ minPhotos: splitPhoto.length / 2 }}
          spacing={20}
          onClick={({ photo }) => {
            // displayAltText(photo);
            setLightboxPhoto(photo);
          }}
        />
      </SwiperSlide>
    );
  });

  const obpPhotoAlbumArray = objSplitPhotos.map((splitPhoto, i) => {
    return (
      <SwiperSlide className="photos-swiper-slide">
        <RowsPhotoAlbum
          key={i}
          photos={splitPhoto}
          targetRowHeight={225}
          rowConstraints={{ minPhotos: splitPhoto.length / 2 }}
          spacing={20}
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="photos-container">
      <TitleContainer image={backgroundImg} text="PHOTOS" />

      <div className="photos-album-container">
        <h3>LIVE MUSIC</h3>
        <div className="swiper-photo-album-container">
          {" "}
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

        <h3>DJ NIGHTS</h3>
        <div className="swiper-photo-album-container">
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
            {djPhotoAlbumArray}
          </Swiper>
          <Lightbox
            open={Boolean(lightboxPhoto)}
            close={() => setLightboxPhoto(undefined)}
            slides={
              lightboxPhoto
                ? [
                    {
                      src: lightboxPhoto.src,
                      title: lightboxPhoto.title,
                      description: lightboxPhoto.alt,
                    },
                  ]
                : undefined
            }
            carousel={{ finite: true }}
            render={{ buttonPrev: () => null, buttonNext: () => null }}
            styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
            controller={{
              closeOnBackdropClick: true,
              closeOnPullUp: true,
              closeOnPullDown: true,
            }}
            //   plugins={[Captions]}
            //   captions={{ descriptionTextAlign: "center" }}
          />
        </div>

        <h3>OAKLAND BLOCK PARTY 2025</h3>
        <div className="swiper-photo-album-container">
          {" "}
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
            {obpPhotoAlbumArray}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
