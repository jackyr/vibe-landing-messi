import { createContext } from "react"

const ColorModeContext = createContext<{
  isDarkMode: boolean;
  themeMode: 'light' | 'dark';
  toggleThemeMode: () => void;
}>({
  isDarkMode: true,
  themeMode: 'dark',
  toggleThemeMode: () => {},
});

export default ColorModeContext