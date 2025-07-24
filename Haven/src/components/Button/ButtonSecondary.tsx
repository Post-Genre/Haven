import "./button.css";

type ButtonSecondaryProps = {
  link: string;
  text: string;
};

export default function ButtonSecondary({ link, text }: ButtonSecondaryProps) {
  return (
    <div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="button-secondary"
        href={link}
      >
        {text}
      </a>
    </div>
  );
}
