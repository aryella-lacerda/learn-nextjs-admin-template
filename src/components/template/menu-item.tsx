import Link from "next/link";
import React, { ComponentRef } from "react";
import { ReactNode } from "react";

type Props = {
  url?: string;
  onClick?: () => void;
  text: string;
  icon: ReactNode;
  className?: string;
};

export const MenuItem = ({ text, icon, url, onClick, className }: Props) => {
  return (
    <li
      onClick={onClick}
      className="hover:bg-gray-300 dark:hover:bg-gray-800 cursor-pointer"
    >
      {url ? (
        <Link href={url}>
          <a
            className={`flex flex-col justify-center items-center text-gray-600 dark:text-gray-50 w-24 h-24 ${className}`}
          >
            {icon}
            <span className="text-xs font-light">{text}</span>
          </a>
        </Link>
      ) : (
        <a
          className={`flex flex-col justify-center items-center text-gray-600 dark:text-gray-50 w-24 h-24 ${className}`}
        >
          {icon}
          <span className="text-xs font-light">{text}</span>
        </a>
      )}
    </li>
  );
};
