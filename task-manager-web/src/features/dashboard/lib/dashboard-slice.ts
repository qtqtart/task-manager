import { createSlice } from '@reduxjs/toolkit'

import { DashboardState } from '../model/types'

const initialState: DashboardState = {
  isOpenDashboard: false,
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
