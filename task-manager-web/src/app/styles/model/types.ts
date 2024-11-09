import { Components, Theme } from '@mui/material'

export type OverridedComponent = Components<Omit<Theme, 'components'>>
