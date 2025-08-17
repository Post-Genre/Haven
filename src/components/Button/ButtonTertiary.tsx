import "./button.css";

type ButtonTertiaryProps = {
  link: string;
  text: string;
};

export default function ButtonTertiary({ link, text }: ButtonTertiaryProps) {
  return (
    <div className="button-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button-tertiary"
        href={link}
      >
        {text}
      </a>
    </div>
  );
}
