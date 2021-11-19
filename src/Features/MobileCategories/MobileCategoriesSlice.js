import { createSlice } from '@reduxjs/toolkit'

const initialMobilesCategoriesValue = {
    category: [],
    brands: [],
    selectedMobileBrand: '',
    selectedMobile: [],
    cartitems: [],
    cartitemCounter:0,
    mobileFilter: 0,
    buymobile: [],
    brandscheck: [],
    filterMob: []
}

export const mobileCategorySlice = createSlice({
    name: 'mobilesCategory',
    initialState: initialMobilesCategoriesValue,
    reducers: {
        mobilesCategory: (state, action) => {
            state.category = [...action.payload]
        },
        mobileBrands: (state, action) => {
            state.brands = [...action.payload]
        },
        selectedMobileBrands: (state, action) => {
            state.selectedMobileBrand = action.payload
        },
        selectedMobile: (state, action) => {
            state.selectedMobile = action.payload
        },
        mobilefilter: (state, action) => {
            state.mobileFilter = action.payload
        },
        addToCart: (state, action) => {
            
            state.cartitems = [...state.cartitems, action.payload]
        },
        cartItemsCounter: (state, action) => {
            
            state.cartitemCounter =  action.payload
        },
        removeToCart: (state, action) => {
            state.cartitems = action.payload
        },
        buyMobiles: (state, action) => {
            state.buymobile = [...state.cartitems, action.payload]
        },
        brandscheck: (state, action) => {
            state.brandscheck = [...state.brandscheck, action.payload]
        },
        removebrandscheck: (state, action) => {
            const removechek = state.brandscheck.filter(items => items != action.payload)
            state.brandscheck = removechek
        },
        clearbrandscheck: (state, action) => {
            state.brandscheck = []
        },
        filterAllMobiles: (state, action) => {
            state.filterMob = action.payload
        },
    },
})

export const { mobilesCategory, mobileBrands, selectedMobileBrands, selectedMobile, addToCart, mobilefilter, removeToCart, buyMobiles, brandscheck, removebrandscheck, filterAllMobiles,clearbrandscheck,cartItemsCounter } = mobileCategorySlice.actions

export default mobileCategorySlice.reducer