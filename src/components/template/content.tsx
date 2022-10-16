import { PropsWithChildren } from "react";

export const Content = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col mt-7">{children}</div>;
};
