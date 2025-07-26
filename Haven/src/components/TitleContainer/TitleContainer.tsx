import "./title-container.css";

type TitleContainerProps = {
  image: string;
  text: string;
};

export default function TitleContainer({ image, text }: TitleContainerProps) {
  console.log(image);
  return (
    <div
      className="title-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1>{text}</h1>
    </div>
  );
}
