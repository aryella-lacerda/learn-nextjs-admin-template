import { useTheme } from "../../contexts/theme-context";
import { MoonIcon, SunIcon } from "../icons";

export const ThemeToggle = () => {
  const { theme, setTheme, THEMES } = useTheme();

  return theme === THEMES.DARK ? (
    <div
      onClick={() => {
        setTheme(THEMES.LIGHT);
      }}
      className={`
        hidden sm:flex border-2 border-gray-200 hover:bg-gray-200 text-gray-200 hover:text-slate-700
        rounded-full items-center cursor-pointer
      `}
    >
      <div>
        <div className="pl-2 lg:pl-3 text-sm">Light</div>
      </div>
      <div className="ml-1 bg-gray-200 rounded-full px-1 py-1 lg:px-2 lg:py-2 text-slate-700">
        {SunIcon}
      </div>
    </div>
  ) : (
    <div
      onClick={() => {
        setTheme(THEMES.DARK);
      }}
      className={`
        flex border-2 border-slate-700 hover:bg-slate-700 text-slate-700 hover:text-gray-200 
        rounded-full items-center cursor-pointer
      `}
    >
      <div className="mr-1 bg-slate-700 rounded-full px-1 py-1 lg:px-2 lg:py-2 text-gray-200">
        {MoonIcon}
      </div>
      <div>
        <div className="pr-2 lg:pr-3 text-sm">Dark</div>
      </div>
    </div>
  );
};
