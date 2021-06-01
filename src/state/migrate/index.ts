/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import fetchOldMigrateBalance from './migrate'

// import { MigrateState, Farm } from '../types'

const initialState = { data: [] }

export const migrateSlice = createSlice({
  name: 'Migrate',
  initialState,
  reducers: {
    setMigrateOldBalanceData: (state, action) => {
      const liveData = action.payload;
      state.data = liveData[0];
    },
  },
})

export const { setMigrateOldBalanceData } = migrateSlice.actions

export const fetchOldMigrateBalanceAsync = (account) => async (dispatch) => {
  const balance = await fetchOldMigrateBalance(account)
  dispatch(setMigrateOldBalanceData(balance))
}

export default migrateSlice.reducer
