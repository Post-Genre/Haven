import "./button.css";

type ButtonPrimaryProps = {
  link: string;
  text: string;
};

export default function ButtonPrimary({ link, text }: ButtonPrimaryProps) {
  return (
    <div className="button-container">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button-primary"
        href={link}
      >
        {text}
      </a>
    </div>
  );
}
