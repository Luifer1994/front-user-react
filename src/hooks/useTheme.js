import useThemeStore from "../stores/theme";

export default function useTheme() {
  const { theme, setTheme } = useThemeStore();
  return { theme, setTheme };
}
