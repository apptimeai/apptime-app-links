export type ThemeMode = "apptime-dark" | "apptime-light";

export const useTheme = () => {
  const theme = useState<ThemeMode>("theme", () => "apptime-dark");

  const toggleTheme = () => {
    theme.value = theme.value === "apptime-dark" ? "apptime-light" : "apptime-dark";
    if (import.meta.client) {
      document.documentElement.setAttribute("data-theme", theme.value);
      if (theme.value === "apptime-light") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    }
  };

  return {
    theme,
    toggleTheme,
  };
};

