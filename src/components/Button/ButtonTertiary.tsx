import "./button.css";

type ButtonTertiaryProps = {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
};

export default function ButtonTertiary({
  onClick,
  text,
  type = "button",
}: ButtonTertiaryProps) {
  return (
    <div className="button-container">
      <button className="button-tertiary" type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
