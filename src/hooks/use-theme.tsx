import { useLayoutEffect, useState } from "react";

type Theme = "dark" | "light";

export const useTheme = (): [Theme, (theme: Theme) => void] => {
  const [theme, setTheme] = useState<Theme>(() => {
    const isDarkTheme = window?.matchMedia(
      "(prefers-color-scheme: dark )"
    ).matches;
    const defaultTheme = isDarkTheme ? "dark" : "light";
    const savedData = localStorage.getItem("app-theme") as Theme;
    return savedData || defaultTheme;
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
