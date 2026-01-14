import "./button.css";

type ButtonPrimaryProps = {
  onClick?: () => void;
  text: string;
  type?: "button" | "submit" | "reset";
};

export default function ButtonPrimary({
  onClick,
  text,
  type = "button",
}: ButtonPrimaryProps) {
  return (
    <div className="button-container">
      <button className="button-primary" type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
