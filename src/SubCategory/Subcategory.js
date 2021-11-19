import React, { useState } from 'react'



const Subcategory = ({ SubCategoryData }) => {
    return (
        <div className='SubCategoryitems'>
            {SubCategoryData?.map((SubCategoryData) => <CategoryLoop SubCategoryData={SubCategoryData} />)}
        </div>

    )
}

const CategoryLoop = ({ SubCategoryData }) => {

    const [open, setopen] = useState(false)
    const title = SubCategoryData?.title
    return (
        <>
            {
                title && (
                    <ul >
                        {
                            <li onClick={() => setopen((e) => !e)}>{title}</li>
                        }
                        {open && < Subcategory SubCategoryData={SubCategoryData.children} />}

                    </ul>
                )
            }
        </>
    )
}
export default Subcategory
