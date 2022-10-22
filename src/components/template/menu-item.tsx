import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  url?: string;
  onClick?: () => void;
  text: string;
  icon: ReactNode;
  className?: string;
};

type ItemProps = {
  text: string;
  icon: ReactNode;
  className?: string;
};

const Item = ({ icon, text, className }: ItemProps) => (
  <a
    className={`flex flex-col justify-center items-center text-gray-600 dark:text-gray-50 w-24 h-24 ${className}`}
  >
    {icon}
    <span className="text-xs font-light">{text}</span>
  </a>
);

export const MenuItem = ({ text, icon, url, onClick, className }: Props) => {
  return (
    <li
      onClick={onClick}
      className="hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer"
    >
      {url ? (
        <Link href={url}>
          <Item icon={icon} text={text} className={className} />
        </Link>
      ) : (
        <Item icon={icon} text={text} className={className} />
      )}
    </li>
  );
};
