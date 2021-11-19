import React, { useEffect } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import {  NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { filterAllMobiles, selectedMobile } from '../Features/MobileCategories/MobileCategoriesSlice';

const MobilesView = () => {

    const dispatch = useDispatch()
    const mobBrand = useSelector(state => state.mobilecategory.selectedMobileBrand)
    const mobileDetailds = useSelector(state => state.mobilecategory.category)
    const filterMobPrice = useSelector(state => state.mobilecategory.mobileFilter)
    const brandschecks = useSelector(state => state.mobilecategory.brandscheck)
    const filterAllmobile = useSelector(state => state.mobilecategory.filterMob)
    
    const choosenMob = mobileDetailds?.filter(mobile => mobile?.name === mobBrand && mobile?.price <= filterMobPrice)
    
    const checkboxMobiles = mobileDetailds?.filter(mobile => brandschecks.includes(mobile?.name) && mobile?.price <= filterMobPrice)

    useEffect(() => {
        dispatch(filterAllMobiles(choosenMob))
    }, [mobBrand, filterMobPrice])
    useEffect(() => {
        dispatch(filterAllMobiles(checkboxMobiles))
    }, [brandschecks, filterMobPrice])

    return (
        <div className="phoneGallery">
            {
                filterAllmobile?.map(mobiles =>
                    <NavLink to='/mobileview' onClick={() => dispatch(selectedMobile(mobiles))}>
                        <Card >
                            <CardImg top width="100%" src={mobiles?.src} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{mobiles?.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 ">{mobiles?.model}</CardSubtitle>
                                <CardTitle tag='h3'>$ {mobiles?.price}</CardTitle>
                            </CardBody>
                        </Card>
                    </NavLink>
                )
            }
        </div>
    )
}

export default MobilesView
