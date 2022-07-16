import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../http/axios'

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const { data } = await axios.get(`api/contacts/1`)
        return data
    }
)

const initialState = {
    item: {},
    status: '',
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducer: {
        //addAddition(state, action) {
        //    console.log(action.payload)
        //    state.item.additions.push(action.payload)
        //},
    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.item = {}
            state.status = 'loading'
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.item = action.payload
            state.status = 'loaded'
        },
        [fetchContacts.rejected]: (state) => {
            state.item = {}
            state.status = 'error'
        },
    },
})
//export const { addAddition } = productSlice.actions
export const contacts = contactsSlice.reducer
