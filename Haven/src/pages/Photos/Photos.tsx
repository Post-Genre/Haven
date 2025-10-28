import { MasonryPhotoAlbum, type Photo } from "react-photo-album";
import "react-photo-album/masonry.css";
import "./photos.css";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
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
import PhotoSlide from "./PhotoSlide";

type SelectablePhoto = Photo & {
  selected?: boolean;
};

export default function Photos() {
  const [lightboxPhoto, setLightboxPhoto] = useState<SelectablePhoto>();

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
          onClick={({ photo }) => {
            setLightboxPhoto(photo);
          }}
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
          onClick={({ photo }) => {
            setLightboxPhoto(photo);
          }}
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
            mousewheel={{
              forceToAxis: true,
            }}
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
            mousewheel={{
              forceToAxis: true,
            }}
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
            render={{
              slide: ({ slide }) => (
                <PhotoSlide
                  title={slide.title}
                  subtitle={slide.description}
                  image={slide.src}
                />
              ),
              buttonNext: () => null,
              buttonPrev: () => null,
            }}
            styles={{ root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .8)" } }}
            controller={{
              closeOnBackdropClick: true,
              closeOnPullUp: true,
              closeOnPullDown: true,
            }}
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
            mousewheel={{
              forceToAxis: true,
            }}
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
