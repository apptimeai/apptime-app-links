export type ThemeMode = "dark" | "light";

export const useTheme = () => {
  const theme = useState<ThemeMode>("theme", () => "light");

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    if (import.meta.client) {
      document.documentElement.setAttribute("data-theme", theme.value);
      if (theme.value === "light") {
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


