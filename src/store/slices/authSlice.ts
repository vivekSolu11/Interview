import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

interface MessageList {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  isSystem: boolean;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  messages: MessageList[];
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  messages: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.loading = false;
    },
    loginFailure: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setMessage: (state, action: PayloadAction<MessageList[]>) => {
      state.messages = [...state.messages, ...action.payload];
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, setMessage } =
  authSlice.actions;
export default authSlice.reducer;
