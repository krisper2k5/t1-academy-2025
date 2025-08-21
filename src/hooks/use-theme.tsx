import { useLayoutEffect, useState } from "react";

type Theme = "dark" | "light";

export const useTheme = (): [Theme, (theme: Theme) => void] => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedData = localStorage.getItem("app-theme") as Theme;
    return savedData || "light";
  });

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
