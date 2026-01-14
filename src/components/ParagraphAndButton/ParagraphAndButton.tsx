import "./paragraph-and-button.css";

type ParagraphAndButtonProps = {
  // link: string;
  paragraph: string;
  // buttonText: string;
  CustomButton: React.ReactNode;
};

export default function ParagraphAndButton({
  paragraph,
  CustomButton,
}: ParagraphAndButtonProps) {
  return (
    <div className="paragraph-and-button-container">
      <p className="small-font">{paragraph}</p>
      <div className="paragraph-and-button-button">{CustomButton}</div>
    </div>
  );
}
