import { PropsWithChildren } from "react";
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
  return (
    <div>
      <SideMenu />
      <Header title={title} subtitle={subtitle} />
      <Content>{children}</Content>
    </div>
  );
};
