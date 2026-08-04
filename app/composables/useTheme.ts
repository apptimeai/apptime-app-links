export type ThemeMode = "apptime-dark" | "apptime-light";

export const useTheme = () => {
  const themeCookie = useCookie<ThemeMode>("apptime-theme", {
    default: () => "apptime-dark",
  });

  const theme = ref<ThemeMode>("apptime-dark");

  const applyTheme = (newTheme: ThemeMode) => {
    theme.value = newTheme;
    themeCookie.value = newTheme;

    if (import.meta.client) {
      document.documentElement.setAttribute("data-theme", newTheme);
      if (newTheme === "apptime-light") {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }
    }
  };

  const toggleTheme = () => {
    const nextTheme: ThemeMode =
      theme.value === "apptime-dark" ? "apptime-light" : "apptime-dark";
    applyTheme(nextTheme);
  };

  onMounted(() => {
    const saved = (themeCookie.value as ThemeMode) || "apptime-dark";
    applyTheme(saved);
  });

  return {
    theme,
    toggleTheme,
    applyTheme,
  };
};
