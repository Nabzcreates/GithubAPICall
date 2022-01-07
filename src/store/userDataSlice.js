import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: { }
}


export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, {payload}) => {
      state.data = payload
      // console.log('daaaaaaata', state.data)

    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userDataSlice.actions

export default userDataSlice.reducer