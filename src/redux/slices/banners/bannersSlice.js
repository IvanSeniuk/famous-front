import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { $authHost } from '../../../http'
import axios from '../../../http/axios'

export const fetchBanners = createAsyncThunk(
    'banners/fetchBanners',
    async () => {
        const { data } = await axios.get('api/banner')
        return data
    }
)
export const createBanner = createAsyncThunk(
    'banners/createBanner',
    async (banner) => {
        const { data } = await $authHost.post('api/banner', banner)
        return data
    }
)
export const deleteBanner = createAsyncThunk(
    'banners/deleteBanner',
    async (id) => {
        const { data } = await $authHost.delete(`api/banner/${id}`)
        return data
    }
)
export const updateBanner = createAsyncThunk(
    'banners/updateBanner',
    async (banner) => {
        try {
            const { data } = await $authHost.put(
                `api/banner/${banner.id}`,
                banner
            )
            console.log(data)
            return data
        } catch (err) {
            console.log(err.response.data)
            return err.response.data
        }
    }
)

const initialState = {
    items: [],
    status: '',
    createStatus: '',
    deleteStatus: '',
    updateStatus: '',
}

const bannersSlice = createSlice({
    name: 'banners',
    initialState,
    reducer: {},
    extraReducers: {
        [fetchBanners.pending]: (state) => {
            state.items = []
            state.status = 'loading'
        },
        [fetchBanners.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'loaded'
        },
        [fetchBanners.rejected]: (state) => {
            state.items = []
            state.status = 'error'
        },
        [createBanner.pending]: (state) => {
            state.createStatus = 'loading'
        },
        [createBanner.fulfilled]: (state, action) => {
            state.items.push(action.payload)
            state.createStatus = 'loaded'
        },
        [createBanner.rejected]: (state) => {
            state.createStatus = 'error'
        },
        [deleteBanner.pending]: (state) => {
            state.deleteStatus = 'loading'
        },
        [deleteBanner.fulfilled]: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
            state.deleteStatus = 'loaded'
        },
        [deleteBanner.rejected]: (state) => {
            state.deleteStatus = 'error'
        },
        [updateBanner.pending]: (state) => {
            state.updateStatus = 'loading'
        },
        [updateBanner.fulfilled]: (state, action) => {
            state.items = state.items.filter(
                (item) => (item.id = action.payload)
            )
            state.updateStatus = 'loaded'
        },
        [updateBanner.rejected]: (state) => {
            state.updateStatus = 'error'
        },
    },
})

export const banners = bannersSlice.reducer
