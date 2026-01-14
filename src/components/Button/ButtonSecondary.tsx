import "./button.css";

type ButtonSecondaryProps = {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
};

export default function ButtonSecondary({
  onClick,
  text,
  type = "button",
}: ButtonSecondaryProps) {
  return (
    <div className="button-container">
      <button className="button-secondary" type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
