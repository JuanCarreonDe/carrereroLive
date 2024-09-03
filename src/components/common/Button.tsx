import { Link } from "react-router-dom";

interface Props {
  toPath?: string;
  href?: string;
  tailwindClass?: string;
  text: string;
}

export const Button = ({
  toPath,
  tailwindClass = "bg-secondary text-black",
  text,
  href,
}: Props) => {
  if (toPath) {
    return (
      <Link to={toPath} className={`px-6 py-1 hover:scale-105 transition-transform ${tailwindClass}`}>
        {text}
      </Link>
    );
  } else {
    return (
      <a href={href} className={`px-6 py-1 hover:scale-105 transition-transform ${tailwindClass}`}>
        {text}
      </a>
    );
  }
};
