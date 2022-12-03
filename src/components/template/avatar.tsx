import Link from "next/link";
import Image from "next/image";

import { useAuth } from "../../contexts/auth-context";

export const Avatar = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div
      className={`bg-slate-400 rounded-full aspect-square ml-3 ${
        !user?.imageURL ? "p-1.5" : ""
      }`}
    >
      <Link href={"/profile"}>
        <img
          src={user?.imageURL ?? "/images/avatar.svg"}
          alt="User avatar"
          height={user?.imageURL ? 40 : 35}
          width={user?.imageURL ? 40 : 25}
          className="cursor-pointer rounded-full"
        />
      </Link>
    </div>
  );
};
