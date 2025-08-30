import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin: (state, action: PayloadAction<AuthState>) => {
            state.isLoggedIn = action.payload
        },

    }
})

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
