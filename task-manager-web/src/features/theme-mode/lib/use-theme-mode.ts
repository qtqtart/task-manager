import { useAppActions, useAppSelector } from '@app/store'

export function useThemeMode() {
  const { themeMode } = useAppSelector(({ themeMode }) => themeMode)
  const { toggleThemeMode } = useAppActions()

  return {
    themeMode,
    toggleThemeMode,
  }
}
