import { useAppActions, useAppSelector } from '@app/store'

export function useThemeMode() {
  const { themeMode } = useAppSelector(({ themeMode }) => themeMode)
  const { setThemeMode } = useAppActions()

  return {
    setThemeMode,
    themeMode,
  }
}
