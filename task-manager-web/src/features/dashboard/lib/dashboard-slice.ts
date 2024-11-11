import { createSlice } from '@reduxjs/toolkit'
import { getMediaQuery } from '@shared/utils/get-media-query'

import { DashboardState } from '../model/types'

const initialState: DashboardState = {
  isOpenDashboard: !getMediaQuery('md'),
}

export const dashboardSlice = createSlice({
  initialState,
  name: 'dashboard',
  reducers: {
    toggleIsOpenDashboard: (state) => {
      state.isOpenDashboard = !state.isOpenDashboard
    },
  },
})
