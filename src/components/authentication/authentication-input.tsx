import { InputHTMLAttributes } from "react";

type Props = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const AuthenticationInput = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col mt-6">
      <label className="mb-2 font-semibold text-md">{label}</label>
      <input
        className="py-3 px-3 rounded-md border border-transparent focus:border-blue-300 focus:outline-none"
        {...props}
      />
    </div>
  );
};
