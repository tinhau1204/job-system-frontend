import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: undefined,
    role: undefined,
};

export const user = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (_, action) => action.payload,
    },
});

export const getUser = (state) => state.user;

export const { login } = user.actions;
export default user.reducer;
