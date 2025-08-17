import "./title-container.css";

type TitleContainerProps = {
  image: string;
  text: string;
};

export default function TitleContainer({ image, text }: TitleContainerProps) {
  return (
    <div className="title-container">
      <img src={image} alt="title" className="title-image" />
      <h1 className="title-text">{text}</h1>
    </div>
  );
}
