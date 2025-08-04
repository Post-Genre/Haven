import ButtonSecondary from "../Button/ButtonSecondary";
import "./paragraph-and-button.css";

type ParagraphAndButtonProps = {
  link: string;
  paragraph: string;
  buttonText: string;
};

export default function ParagraphAndButton({
  link,
  paragraph,
  buttonText,
}: ParagraphAndButtonProps) {
  return (
    <div className="paragraph-and-button-container">
      <p className="small-font">{paragraph}</p>
      <div className="paragraph-and-button-button">
        <ButtonSecondary link={link} text={buttonText} />
      </div>
    </div>
  );
}
