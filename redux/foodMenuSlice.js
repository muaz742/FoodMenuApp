import {createSlice} from '@reduxjs/toolkit'

export const foodMenuSlice = createSlice({
    name: 'foodMenu',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavorite: (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload)
            }
        },
    }
})

export const {addFavorite} = foodMenuSlice.actions

export default foodMenuSlice.reducer
