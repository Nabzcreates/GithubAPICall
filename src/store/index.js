import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './userDataSlice'
import userReducer from './userSlice'



export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    user : userReducer
  },
})