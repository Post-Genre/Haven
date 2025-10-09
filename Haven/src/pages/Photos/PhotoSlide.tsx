import "./photos.css";

type PhotoSlideProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  image: string;
};

export default function PhotoSlide({
  title,
  subtitle,
  image,
}: PhotoSlideProps) {
  return (
    <div className="photo-slide-container">
      <h4>{title}</h4>
      <img src={image} />
      <p className="smallest-font">{subtitle}</p>
    </div>
  );
}
