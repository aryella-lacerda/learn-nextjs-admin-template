import { PropsWithChildren } from "react";
import { useTheme } from "../../contexts/theme-context";
import { Content } from "./content";
import { Header } from "./header";
import { SideMenu } from "./side-menu";

type Props = {
  title: string;
  subtitle: string;
};

export const Layout = ({
  children,
  title,
  subtitle,
}: PropsWithChildren<Props>) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <SideMenu />
      <div className="flex flex-col flex-1 p-7 bg-gray-300 dark:bg-gray-800">
        <Header title={title} subtitle={subtitle} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};
