import { alpha, PaletteMode, PaletteOptions, SimplePaletteColorOptions } from '@mui/material'

type PaletteColor = Omit<SimplePaletteColorOptions, 'main'>

const NEUTRAL_COLORS: PaletteColor = {
  _0: '#000000',
  _10: '#1F1B1F',
  _20: '#333033',
  _30: '#494649',
  _40: '#625D62',
  _50: '#797579',
  _60: '#949094',
  _70: '#AEAAAE',
  _80: '#CAC5CA',
  _90: '#E6E1E4',
  _95: '#F4EFF2',
  _99: '#FFFAFE',
  _100: '#FFFFFF',
}

const PRIMARY_COLORS: PaletteColor = {
  _0: NEUTRAL_COLORS._0,
  _10: '#4A148C',
  _20: '#6A1B9A',
  _30: '#7B1FA2',
  _40: '#8E24AA',
  _50: '#9C27B0',
  _60: '#AB47BC',
  _70: '#BA68C8',
  _80: '#CE93D8',
  _90: '#E1BEE7',
  _95: '#F3E5F5',
  _99: NEUTRAL_COLORS._99,
  _100: NEUTRAL_COLORS._100,
}

const SECONDARY_COLORS: PaletteColor = {
  _0: NEUTRAL_COLORS._0,
  _10: '#311B92',
  _20: '#4527A0',
  _30: '#512DA8',
  _40: '#5E35B1',
  _50: '#673AB7',
  _60: '#7E57C2',
  _70: '#9575CD',
  _80: '#B39DDB',
  _90: '#D1C4E9',
  _95: '#EDE7F6',
  _99: NEUTRAL_COLORS._99,
  _100: NEUTRAL_COLORS._100,
}

const INFO_COLORS: PaletteColor = {
  _0: NEUTRAL_COLORS._0,
  _10: '#0D47A1',
  _20: '#1565C0',
  _30: '#1976D2',
  _40: '#1E88E5',
  _50: '#2196F3',
  _60: '#42A5F5',
  _70: '#64B5F6',
  _80: '#90CAF9',
  _90: '#BBDEFB',
  _95: '#E3F2FD',
  _99: NEUTRAL_COLORS._99,
  _100: NEUTRAL_COLORS._100,
}

const WARNING_COLORS: PaletteColor = {
  _0: NEUTRAL_COLORS._0,
  _10: '#FF6F00',
  _20: '#FF8F00',
  _30: '#FFA000',
  _40: '#FFB300',
  _50: '#FFC107',
  _60: '#FFCA28',
  _70: '#FFD54F',
  _80: '#FFE082',
  _90: '#FFECB3',
  _95: '#FFF8E1',
  _99: NEUTRAL_COLORS._99,
  _100: NEUTRAL_COLORS._100,
}

const ERROR_COLORS: PaletteColor = {
  _0: NEUTRAL_COLORS._0,
  _10: '#B71C1C',
  _20: '#C62828',
  _30: '#D32F2F',
  _40: '#E53935',
  _50: '#F44336',
  _60: '#EF5350',
  _70: '#E57373',
  _80: '#EF9A9A',
  _90: '#FFCDD2',
  _95: '#FFEBEE',
  _99: NEUTRAL_COLORS._99,
  _100: NEUTRAL_COLORS._100,
}

const SUCCESS_COLORS: PaletteColor = {
  _0: NEUTRAL_COLORS._0,
  _10: '#1B5E20',
  _20: '#2E7D32',
  _30: '#388E3C',
  _40: '#43A047',
  _50: '#4CAF50',
  _60: '#66BB6A',
  _70: '#81C784',
  _80: '#A5D6A7',
  _90: '#C8E6C9',
  _95: '#E8F5E9',
  _99: NEUTRAL_COLORS._99,
  _100: NEUTRAL_COLORS._100,
}

const colors: PaletteOptions = {
  action: {
    activatedOpacity: 0.1,
    focusOpacity: 0.1,
    hoverOpacity: 0.1,
    selectedOpacity: 0.1,
  },
  common: {
    black: NEUTRAL_COLORS._10,
    white: NEUTRAL_COLORS._99,
  },
  error: {
    dark: ERROR_COLORS._20,
    light: ERROR_COLORS._80,
    main: ERROR_COLORS._50,
    ...ERROR_COLORS,
  },
  info: {
    dark: INFO_COLORS._20,
    light: INFO_COLORS._80,
    main: INFO_COLORS._50,
    ...INFO_COLORS,
  },
  primary: {
    dark: PRIMARY_COLORS._20,
    light: PRIMARY_COLORS._80,
    main: PRIMARY_COLORS._50,
    ...PRIMARY_COLORS,
  },
  secondary: {
    dark: PRIMARY_COLORS._20,
    light: SECONDARY_COLORS._80,
    main: SECONDARY_COLORS._50,
    ...SECONDARY_COLORS,
  },
  success: {
    dark: SUCCESS_COLORS._20,
    light: SUCCESS_COLORS._80,
    main: SUCCESS_COLORS._50,
    ...SUCCESS_COLORS,
  },
  warning: {
    dark: WARNING_COLORS._20,
    light: WARNING_COLORS._80,
    main: WARNING_COLORS._50,
    ...WARNING_COLORS,
  },
}

export const palette = (themeMode: PaletteMode) => {
  const light: PaletteOptions = {
    ...colors,
    background: {
      background: NEUTRAL_COLORS._99,
      default: NEUTRAL_COLORS._99,
      error: ERROR_COLORS._40,
      errorContainer: ERROR_COLORS._90,
      info: INFO_COLORS._40,
      infoContainer: INFO_COLORS._90,
      onBackground: NEUTRAL_COLORS._10,
      onError: ERROR_COLORS._100,
      onErrorContainer: ERROR_COLORS._10,
      onInfo: NEUTRAL_COLORS._100,
      onInfoContainer: INFO_COLORS._10,
      onPrimary: PRIMARY_COLORS._100,
      onPrimaryContainer: PRIMARY_COLORS._10,
      onSecondary: SECONDARY_COLORS._100,
      onSecondaryContainer: SECONDARY_COLORS._10,
      onSuccess: SUCCESS_COLORS._100,
      onSuccessContainer: SUCCESS_COLORS._10,
      onSurface: NEUTRAL_COLORS._10,
      onWarning: WARNING_COLORS._100,
      onWarningContainer: WARNING_COLORS._10,
      outline: NEUTRAL_COLORS._50,
      paper: alpha(PRIMARY_COLORS._20, 0.15),
      primary: PRIMARY_COLORS._40,
      primaryContainer: PRIMARY_COLORS._90,
      secondary: SECONDARY_COLORS._40,
      secondaryContainer: SECONDARY_COLORS._90,
      success: SUCCESS_COLORS._40,
      successContainer: SUCCESS_COLORS._90,
      surface: NEUTRAL_COLORS._99,
      warning: WARNING_COLORS._40,
      warningContainer: WARNING_COLORS._90,
    },
    mode: 'light',
  }

  const dark: PaletteOptions = {
    ...colors,
    background: {
      background: NEUTRAL_COLORS._10,
      default: NEUTRAL_COLORS._10,
      error: ERROR_COLORS._80,
      errorContainer: ERROR_COLORS._30,
      info: INFO_COLORS._80,
      infoContainer: INFO_COLORS._30,
      onBackground: NEUTRAL_COLORS._90,
      onError: ERROR_COLORS._20,
      onErrorContainer: ERROR_COLORS._90,
      onInfo: INFO_COLORS._20,
      onInfoContainer: INFO_COLORS._90,
      onPrimary: PRIMARY_COLORS._20,
      onPrimaryContainer: PRIMARY_COLORS._90,
      onSecondary: SECONDARY_COLORS._20,
      onSecondaryContainer: SECONDARY_COLORS._90,
      onSuccess: SUCCESS_COLORS._20,
      onSuccessContainer: SUCCESS_COLORS._90,
      onSurface: NEUTRAL_COLORS._90,
      onWarning: WARNING_COLORS._20,
      onWarningContainer: WARNING_COLORS._90,
      outline: NEUTRAL_COLORS._50,
      paper: alpha(PRIMARY_COLORS._20, 0.15),
      primary: PRIMARY_COLORS._80,
      primaryContainer: PRIMARY_COLORS._30,
      secondary: SECONDARY_COLORS._80,
      secondaryContainer: SECONDARY_COLORS._30,
      success: SUCCESS_COLORS._80,
      successContainer: SUCCESS_COLORS._30,
      surface: NEUTRAL_COLORS._10,
      warning: WARNING_COLORS._80,
      warningContainer: WARNING_COLORS._30,
    },
    mode: 'dark',
  }

  return themeMode === 'light' ? light : dark
}
