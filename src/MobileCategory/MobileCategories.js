import React, { useState, useEffect } from 'react'
import Subcategory from '../SubCategory/Subcategory'
import SubCategoryData from '../SubCategory/SubCategoryData'
import { Mobilesbrands } from './mobilesDetails'
import MobilesDetails from './mobilesDetails'
import Slider from "react-slick";
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import MobilesView from './MobilesView'
import { useSelector, useDispatch } from 'react-redux';
import { mobilesCategory, mobileBrands, selectedMobileBrands, mobilefilter, brandscheck, removebrandscheck, clearbrandscheck, filterAllMobiles } from '../Features/MobileCategories/MobileCategoriesSlice';

const MobileCategories = () => {
    const dispatch = useDispatch()
    const brands = useSelector(state => state.mobilecategory.brands)
    const brandschecks = useSelector(state => state.mobilecategory.brandscheck)
    const filterMobPrice = useSelector(state => state.mobilecategory.mobileFilter)
    const settings = {
        infinite: true,
        speed: 500,
        
        slidesToShow: 5,
        slidesToScroll: 5
    };

    useEffect(() => {
        dispatch(mobileBrands(Mobilesbrands))
        dispatch(mobilesCategory(MobilesDetails))
    }, [])
    const brandsCheckbox = (e) => {
        !e.target.checked ? dispatch(removebrandscheck(e.target.value)) : dispatch(brandscheck(e.target.value))
    }
    // const mobileDetailds = useSelector(state => state.mobilecategory.category)
    // const mobBrand = useSelector(state => state.mobilecategory.selectedMobileBrand)
    // const choosenMob = mobileDetailds?.filter(mobile => mobile?.name === mobBrand && mobile?.price <= filterMobPrice)

    const onHandleMobileClick = (data) => {
        // dispatch(filterAllMobiles(choosenMob))
        // dispatch(clearbrandscheck())
        dispatch(selectedMobileBrands(data?.path))
    }

    const checkChecked = (brands) => {
        return brandschecks?.findIndex((item) => item === brands?.path) > -1 ? { checked: true } : {}
    }

    return (
        <div>
            <Subcategory SubCategoryData={SubCategoryData} />
            <div className='MobileSection'>

                <div className='mobilesImages'>
                    <img src="https://rukminim1.flixcart.com/flap/100/14/image/f53db3179f88fdf5.jpg?q=50" alt="mobiles" />
                </div>

                <div className="mobiles">

                    <div className="filters">

                        <input type="range" id='tickmarks' min="1000" max="130000" onChange={(e) => dispatch(mobilefilter(e.target.value))} />
                        <div> max price {filterMobPrice}</div>
                        {
                            brands?.map(brands => {

                                return (
                                    <div className='brandsCheckboxs'>
                                        {/* <input type="checkbox" name={brands?.path} id={brands?.path} value={brands?.path } onChange={(e) => brandsCheckbox(e)} /><span>{brands?.path?.toUpperCase()}</span> */}
                                        <input
                                            id={brands?.path}
                                            name={brands?.path}
                                            value={brands?.path}
                                            type="checkbox"
                                            onChange={(e) => brandsCheckbox(e)}
                                            {...checkChecked(brands)}
                                        />
                                        <span>{brands?.path?.toUpperCase()}</span>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='mobilesBrands'>
                        <Slider {...settings}>
                            {
                                brands?.map(data =>
                                    <Card onClick={() => onHandleMobileClick(data)}>
                                        <CardImg top width="100%" src={data?.src} alt=" image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">Shop Now</CardTitle>
                                        </CardBody>
                                    </Card>
                                )
                            }
                        </Slider>

                        <div className='biggestFestivalOffer'>
                            <img src="https://rukminim1.flixcart.com/flap/844/140/image/22fac0275f59c0d1.jpg?q=50" alt="festival offer" />
                        </div>
                        <>
                            <MobilesView />
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default MobileCategories
