import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  url: string;
  text: string;
  icon: ReactNode;
};

export const MenuItem = ({ text, icon, url }: Props) => {
  return (
    <li className="hover:bg-gray-100 dark:hover:bg-gray-900">
      <Link href={url}>
        <a className="flex flex-col justify-center items-center w-20 h-20">
          {icon}
          <span className="text-xs font-light text-gray-600 dark:text-gray-50">
            {text}
          </span>
        </a>
      </Link>
    </li>
  );
};
