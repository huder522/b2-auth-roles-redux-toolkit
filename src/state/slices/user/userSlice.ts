import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user-slice";


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
    }
  }
});


export default userSlice.reducer;
export const { signIn } = userSlice.actions;