import { configureStore } from '@reduxjs/toolkit'

import MainCategorySlice from '../Features/MainCategory/MainCategorySlice'
import MobileCategoriesSlice from '../Features/MobileCategories/MobileCategoriesSlice'

export const store = configureStore({
    reducer: {
        
        maincategory: MainCategorySlice,
        mobilecategory:MobileCategoriesSlice
  },
})