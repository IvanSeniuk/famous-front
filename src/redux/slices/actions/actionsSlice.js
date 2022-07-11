import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $authHost } from '../../../http'
import axios from '../../../http/axios'

export const fetchActions = createAsyncThunk(
    'actions/fetchActions',
    async () => {
        const { data } = await axios.get('api/actions')
        return data
    }
)
export const createActions = createAsyncThunk(
    'actions/createActions',
    async (item) => {
        const { data } = await $authHost.post('api/actions', item)
        return data
    }
)
export const deleteActions = createAsyncThunk(
    'actions/deleteActions',
    async (id) => {
        const { data } = await $authHost.delete(`api/actions/${id}`)
        return data
    }
)

const initialState = {
    items: [],
    status: '',
    createStatus: '',
    deleteStatus: '',
}

const actionsSlice = createSlice({
    name: 'actions',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchActions.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        },
        [fetchActions.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'loaded'
        },
        [fetchActions.rejected]: (state) => {
            state.items = []
            state.status = 'error'
        },
        [createActions.pending]: (state) => {
            state.createStatus = 'loading'
        },
        [createActions.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.createStatus = 'loaded'
        },
        [createActions.rejected]: (state) => {
            state.createStatus = 'error'
        },
        [deleteActions.pending]: (state) => {
            state.deleteStatus = 'loading'
        },
        [deleteActions.fulfilled]: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
            state.deleteStatus = 'loaded'
        },
        [deleteActions.rejected]: (state) => {
            state.deleteStatus = 'error'
        },
    },
})

export const actions = actionsSlice.reducer
