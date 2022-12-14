import { Avatar } from "./avatar";
import { ThemeToggle } from "./theme-toggle";
import { Title } from "./title";

type Props = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: Props) => {
  return (
    <div className="flex justify-between">
      <Title title={title} subtitle={subtitle} />
      <div className="flex items-center">
        <ThemeToggle />
        <Avatar />
      </div>
    </div>
  );
};
