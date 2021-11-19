import { createSlice } from '@reduxjs/toolkit'

const initialCategoriesValue = {
    category: [],
}

export const mainCategorySlice = createSlice({
    name: 'mainCategory',
    initialState: initialCategoriesValue,
    reducers: {
        mainCategory: (state, action) => {
            
            state.category =  action.payload
        },
    },
})

export const { mainCategory } = mainCategorySlice.actions

export default mainCategorySlice.reducer