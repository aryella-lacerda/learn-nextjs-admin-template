type Props = {
  title: string;
  subtitle: string;
};

export const Title = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h1 className="font-black text-3xl text-gray-800 dark:text-gray-200">
        {title}
      </h1>
      <h2 className="font-light text-sm text-gray-700 dark:text-gray-300">
        {subtitle}
      </h2>
    </div>
  );
};
