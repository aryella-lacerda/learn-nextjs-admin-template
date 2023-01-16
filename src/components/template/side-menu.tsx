import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth-context";
import {
  HomeIcon,
  NotificationsIcon,
  SettingsIcon,
  SignOutIcon,
} from "../icons";
import { Logo } from "./logo";
import { MenuItem } from "./menu-item";

export const SideMenu = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <aside className="flex flex-col">
      <div className="flex flex-col justify-center items-center w-24 h-24 bg-gradient-to-r from-orange-400 to-red-700">
        <Logo />
      </div>
      <ul className="flex-col flex-grow bg-gray-100 dark:bg-gray-900">
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <MenuItem
          url="/notifications"
          text="Notifications"
          icon={NotificationsIcon}
        />
      </ul>
      <div>
        <ul className="flex-col flex-grow bg-gray-100 dark:bg-gray-900">
          <MenuItem
            onClick={async () => {
              await logout();
              router.push("/authentication");
              console.log("Sign out");
            }}
            text="Sign out"
            icon={SignOutIcon}
            className="text-red-500 dark:text-red-400 hover:bg-red-800 hover:text-white dark:hover:text-white"
          />
        </ul>
      </div>
    </aside>
  );
};
