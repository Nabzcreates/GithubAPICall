import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'octocat'
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, {payload}) => {
      state.value = payload 
      // console.log('hello', state.value)
      // return state.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer