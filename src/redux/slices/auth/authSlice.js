import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../http/axios'
import jwtDecode from 'jwt-decode'

const initialState = {
    token: localStorage.getItem('token'),
    name: '',
    email: '',
    phone: '',
    id: null,
    role: null,
    registerStatus: '',
    registerError: '',
    loginStatus: '',
    loginError: '',
    updateStatus: '',
    updateError: '',
    userLoaded: false,
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('api/user/registration', {
                name: user.name,
                email: user.email,
                password: user.password,
                role: 'USER',
            })
            localStorage.setItem('token', data)
            return data
        } catch (err) {
            //console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('api/user/login', {
                email: user.email,
                password: user.password,
                //role: user.role,
                //name: user.name,
            })
            localStorage.setItem('token', data)
            return data
        } catch (err) {
            //console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)
export const changeUser = createAsyncThunk(
    'auth/changeUser',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(`api/user/${user.id}`, user)
            localStorage.setItem('token', data)
            return data
        } catch (err) {
            //console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loadUser(state) {
            const token = state.token
            if (token) {
                const user = jwtDecode(token)
                return {
                    ...state,
                    token,
                    id: user.id,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    userLoaded: true,
                }
            }
        },
        logoutUser(state) {
            localStorage.removeItem('token')
            return {
                ...state,
                name: '',
                email: '',
                id: '',
                role: '',
                registerStatus: '',
                registerError: '',
                loginStatus: '',
                loginError: '',
                userLoaded: false,
            }
        },
        //changeUser(state, action) {
        //    try {
        //        return {
        //            ...state,
        //            name: action.payload.name,
        //            email: action.payload.email,
        //        }
        //    } catch (err) {
        //        return {
        //            ...state,
        //            updateStatus: 'rejected',
        //            updateError: action.payload,
        //        }
        //    }
        //},
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            return { ...state, registerStatus: 'pending' }
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwtDecode(action.payload)
                return {
                    ...state,
                    token: action.payload,
                    id: user.id,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    registerStatus: 'success',
                }
            } else {
                return state
            }
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: 'rejected',
                registerError: action.payload,
            }
        })
        builder.addCase(loginUser.pending, (state) => {
            return { ...state, loginStatus: 'pending' }
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwtDecode(action.payload)
                return {
                    ...state,
                    token: action.payload,
                    id: user.id,
                    role: user.role,
                    name: user.name,
                    email: user.email,
                    loginStatus: 'success',
                    userLoaded: true,
                }
            } else {
                return state
            }
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                loginStatus: 'rejected',
                loginError: action.payload,
            }
        })
        builder.addCase(changeUser.pending, (state) => {
            return { ...state, updateStatus: 'pending' }
        })
        builder.addCase(changeUser.fulfilled, (state, action) => {
            //console.log(action.payload)
            const user = jwtDecode(action.payload)
            //console.log(user)
            return {
                ...state,
                name: user.name,
                email: user.email,
                updateStatus: 'success',
            }
        })
        builder.addCase(changeUser.rejected, (state, action) => {
            return {
                ...state,
                updateStatus: 'rejected',
                updateError: action.payload,
            }
        })
    },
})

// Action creators are generated for each case reducer function
export const { loadUser, logoutUser } = authSlice.actions

export default authSlice.reducer
