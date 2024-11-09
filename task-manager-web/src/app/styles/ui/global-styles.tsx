import { GlobalStyles as MUIGlobalStyles } from '@mui/material'
import { CSSProperties, FC } from 'react'

export const GlobalStyles: FC = () => {
  const styles = {
    boxSizing: 'border-box',
    height: '100%',
    margin: 0,
    padding: 0,
    width: '100%',
  } as CSSProperties

  return (
    <MUIGlobalStyles
      styles={{
        body: {
          ...styles,
        },
      }}
    />
  )
}
