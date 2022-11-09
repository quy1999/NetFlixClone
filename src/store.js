
import searchReducer from './SearchReducer';
import searchReducerCopy from './SearchReducerCopy'
import { configureStore } from "@reduxjs/toolkit";




const rootReducer = {
    searchReducer:searchReducer,
    searchReducerCopy:searchReducerCopy
}

const store = configureStore({
    reducer: rootReducer,
})

export default store