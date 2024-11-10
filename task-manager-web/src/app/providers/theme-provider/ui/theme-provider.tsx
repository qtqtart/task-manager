import { createTheme, GlobalStyles, overrideComponents } from '@app/styles'
import { useThemeMode } from '@features/theme-mode'
import { CssBaseline, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material'
import { FC, PropsWithChildren, useMemo } from 'react'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeMode } = useThemeMode()
  const theme = useMemo(() => createTheme(themeMode), [themeMode])

  theme.components = overrideComponents(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />

        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
