import React, { useState } from 'react'
import Subcategory from '../SubCategory/Subcategory'
import SubCategoryData from '../SubCategory/SubCategoryData'
import { fashionData } from './FashionCategoryData'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux'


const menWomenData = [
    {
        name: "men's",
        gender: 'male'
    },
    {
        name: "women's",
        gender: 'female'
    },
    {
        name: "childs",
        gender: 'child'
    }]
const FashionCategory = () => {

    const [genders, setgender] = useState('')

    const filterFashion = fashionData?.filter(fashoions => fashoions?.gender === genders.gender)
    return (
        <div>
            <Subcategory SubCategoryData={SubCategoryData} />
            <div className="fashionSection">
                <div className='filters'>

                </div>
                <div className='menWomen'>
                    <div className='trios'>
                        {
                            menWomenData?.map(genders => <div className='genders' onClick={() => setgender(genders)}>{genders?.name}</div>)
                        }
                    </div>
                    <div className='fashionGallery'>
                        {
                            filterFashion?.map(fashions =>
                                <Card>
                                    <CardImg top width="100%" src={fashions?.src} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h5">{fashions?.companyName}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 ">Price : {fashions?.price}</CardSubtitle>
                                        <CardSubtitle tag="h6" className="mb-2 ">for : {fashions?.gender}</CardSubtitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">type : {fashions?.type}</CardSubtitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">size : {fashions.size}</CardSubtitle>
                                    </CardBody>
                                </Card>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FashionCategory
