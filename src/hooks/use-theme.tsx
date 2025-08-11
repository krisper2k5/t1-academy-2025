import { useLayoutEffect, useState } from "react";

export const useTheme = (): [string, (theme: string) => void] => {
  const [theme, setTheme] = useState<string>("dark");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, setTheme];
};
