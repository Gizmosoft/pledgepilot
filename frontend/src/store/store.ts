import { configureStore } from '@reduxjs/toolkit'
import userReducer, { setUser } from './UserSlice'
import { AxiosResponse } from 'axios';
export const store = configureStore({
  reducer: {
    user:userReducer
  },
})
// Check localStorage for a user and dispatch setUser action
const storedUser = localStorage.getItem('user');
if (storedUser) {
  store.dispatch(setUser(JSON.parse(storedUser)));
}
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch