import { Layout } from "../components/template";
import { useTheme } from "../contexts/theme-context";

const Notifications = () => {
  const { THEMES, theme, setTheme } = useTheme();

  return (
    <Layout
      title="Notifications"
      subtitle="Here you can see your notifications"
    >
      <div>Notifications</div>
      <div>Theme: {theme}</div>
      <button
        onClick={() => {
          setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
        }}
      >
        Update Theme
      </button>
    </Layout>
  );
};

export default Notifications;
