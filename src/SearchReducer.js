


import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'searchReducer', // tên chuỗi xác định slice
    initialState: "", // giá trị khởi tạo ban đầu
    reducers: { // tạo các actions
        searchTermChanges(state, action) { //action increase
            return action.payload;
            
        },
       
       
    }
})



const { actions, reducer } = counterSlice
export const {searchTermChanges} = actions // export action
export default reducer //ngầm hiểu chúng ta đang export counterSlice
