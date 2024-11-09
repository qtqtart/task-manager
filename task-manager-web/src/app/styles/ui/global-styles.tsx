import { GlobalStyles as MUIGlobalStyles } from '@mui/material'
import { FC } from 'react'

export const GlobalStyles: FC = () => {
  const styles = {
    height: '100%',
    margin: 0,
    padding: 0,
    width: '100%',
  }

  return (
    <MUIGlobalStyles
      styles={{
        body: {
          ...styles,
        },
        html: {
          ...styles,
        },
      }}
    />
  )
}
