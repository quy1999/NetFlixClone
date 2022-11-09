


import {createSlice} from '@reduxjs/toolkit';

const counterSliceCopy = createSlice({
    name: 'searchReducerCopy', // tên chuỗi xác định slice
    initialState: "", // giá trị khởi tạo ban đầu
    reducers: { // tạo các actions
       
       
        searchChanges(state, action) { //action increase
            return action.payload;
            
        },
    }
})


const { actions, reducer } = counterSliceCopy
export const {searchChanges} = actions // export action
export default reducer //ngầm hiểu chúng ta đang export counterSlice
