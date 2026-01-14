import "./title-container.css";

type TitleContainerProps = {
  image: string;
  text: string;
};

export default function TitleContainer({ image, text }: TitleContainerProps) {
  return (
    <div
      className="title-container"
      // style={{ backgroundImage: `url(${image})` }}
    >
      <img src={image} alt="" />
      <h1>{text}</h1>
    </div>
  );
}
