import { HomeIcon, NotificationsIcon, SettingsIcon } from "../icons";
import { MenuItem } from "./menu-item";

export const SideMenu = () => {
  return (
    <aside>
      <ul>
        <MenuItem url="/" text="Home" icon={HomeIcon} />
        <MenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <MenuItem
          url="/notifications"
          text="Notifications"
          icon={NotificationsIcon}
        />
      </ul>
    </aside>
  );
};
