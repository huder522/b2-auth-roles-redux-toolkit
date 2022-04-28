import { createSlice } from "@reduxjs/toolkit";


interface User {
  uid: string;
  name: string;
  role: string;
}

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
    
  }
});


export default userSlice.reducer;