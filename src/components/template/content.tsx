import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col mt-7 text-gray-800 dark:text-gray-200">
      {children}
    </div>
  );
};
