import { BugReport as BugReportIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { FC, useEffect, useState } from 'react'

export const ThrowErrorButton: FC = () => {
  const [hasError, setHasError] = useState(false)

  const onClick = () => setHasError((hasError) => !hasError)

  useEffect(() => {
    if (!hasError) return

    throw new Error('@throw-error-button')
  }, [hasError])

  return (
    <IconButton onClick={onClick}>
      <BugReportIcon />
    </IconButton>
  )
}
