/// <reference types="vite/client" />
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/free-mode";
declare module "swiper/css/scrollbar";



declare module '*?metadata' {
  const metadata: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  export default metadata;
}