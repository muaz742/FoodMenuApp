import {configureStore} from '@reduxjs/toolkit'
import foodMenuReducer from './foodMenuSlice'

export default configureStore({
    reducer: {
        foodMenu: foodMenuReducer
    }
})
