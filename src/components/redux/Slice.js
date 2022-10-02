import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: "sample",
    initialState: {
        user: false,
        setUser: false,
        sidebar: false,
    },
    reducers: {
        Drop: (state, action) => {
            state.user = action.payload;
        },

        dropuser: (state, action) => {
            state.setUser = action.payload;
        },
        Bar: (state, action) => {
            state.sidebar = action.payload;
        },
    },
});
export default Slice.reducer;
export const { Drop, dropuser, Bar } = Slice.actions;
