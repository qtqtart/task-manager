import { GlobalStyles, overrideComponents } from '@app/styles'
import { useThemeMode } from '@features/theme-mode'
import { createTheme, CssBaseline, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material'
import { FC, PropsWithChildren, useMemo } from 'react'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeMode } = useThemeMode()

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
        shape: {
          borderRadius: 8,
        },
      }),
    [themeMode],
  )

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
