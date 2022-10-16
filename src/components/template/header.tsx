import { Title } from "./title";

type Props = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: Props) => {
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
    </div>
  );
};
