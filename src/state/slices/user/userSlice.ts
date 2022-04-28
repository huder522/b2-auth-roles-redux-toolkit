import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models/others";


interface UserState {
  isAuthCheck: boolean;
  user: User | null;
}

const initialState: UserState = {
  isAuthCheck: false,
  user: null,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: ( state, action: PayloadAction<User> ) => {
      state.isAuthCheck = true;
      state.user = action.payload;
    },
    setAuthCheck: ( state ) => {
      state.isAuthCheck = true;
    }
  }
});


export default userSlice.reducer;
export const { signIn, setAuthCheck } = userSlice.actions;