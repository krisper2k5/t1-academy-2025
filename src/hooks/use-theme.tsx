import { useLayoutEffect, useState } from "react";

type Theme = "dark" | "light";

export const useTheme = (): [string, (theme: Theme) => void] => {
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
