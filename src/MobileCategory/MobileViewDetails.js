import React, { useState,useEffect } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, buyMobiles, cartItemsCounter } from '../Features/MobileCategories/MobileCategoriesSlice';
import { Link } from 'react-router-dom';

const MobileViewDetails = () => {

    const dispatch = useDispatch()
    const cartsItems = useSelector(state => state.mobilecategory.cartitems)

    const selectedMob = useSelector(state => state.mobilecategory.selectedMobile)

    const itemToCart = cartsItems.reduce((preValue, currValue) => {

        if (preValue.length === 0) {
            preValue.push(currValue)
        } else {
            preValue.forEach((value, index) => {
                if (value.src === currValue.src && value.description === currValue.description) {
                    return preValue
                } else {
                    const getValue = preValue.find((item) => item.src === currValue.src)
                    if (getValue) {
                        return preValue;
                    } else {
                        preValue.push(currValue);
                    }
                }
            })
        }
        return preValue
    }, [])
    useEffect(() => {
        dispatch(cartItemsCounter(itemToCart?.length))
    }, [cartsItems])




    return (
        <div className='phoneShows'>
            {/* <div className="filters">
                filter area
            </div> */}
            <div className='phones'>
                <Card>
                    <CardImg top width="100%" src={selectedMob?.src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">company Name : {selectedMob?.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">model : {selectedMob?.model}</CardSubtitle>
                        <CardSubtitle tag="h5" className="mb-2 text-muted">Price : {selectedMob?.price}</CardSubtitle>
                        <CardText>Specification : {selectedMob?.details}.</CardText>
                        <div className='addAndBuy'>
                            <Button color='danger' onClick={() => dispatch(addToCart(selectedMob))}>Add Cart</Button>
                            <Link to='/buymobile'><Button color='primary' onClick={() => dispatch(buyMobiles(selectedMob))} >Buy Now</Button></Link>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default MobileViewDetails
