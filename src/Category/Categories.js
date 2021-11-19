import React, { useEffect } from 'react'
import categoryes from './CategoryData';
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { mainCategory } from '../Features/MainCategory/MainCategorySlice';


const Categories = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(mainCategory(categoryes))
    }, [])
    const categoryMain = useSelector(state => state.maincategory.category);
    return (
        <div className='categories'>
            {
                categoryMain?.map(category =>
                    <div className='categoryData'>
                        <NavLink to={category?.pathName}>
                            <img src={category?.src} alt="igms" />
                            <p>{category?.title}</p>
                        </NavLink>
                    </div>
                )
            }
        </div>
    )
}

export default Categories
