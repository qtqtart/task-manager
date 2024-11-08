import { GlobalStyles } from '@app/styles'
import { useThemeMode } from '@features/theme-mode'
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material'
import { FC, PropsWithChildren, useMemo } from 'react'

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeMode } = useThemeMode()

  const theme = useMemo(
    () =>
      createTheme({
        shape: {
          borderRadius: 8,
        },
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode],
  )

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
