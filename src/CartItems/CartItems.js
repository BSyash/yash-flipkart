import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { cartItemsCounter, removeToCart } from '../Features/MobileCategories/MobileCategoriesSlice';

const CartItems = () => {
    const dispatch = useDispatch()
    const cartsItems = useSelector(state => state.mobilecategory.cartitems)
    const [cartData, setcartData] = useState()


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

    const removeCartItem = (id) => {
        const filterCartItem = cartsItems?.filter((item, inx) => inx != id)
        dispatch(removeToCart(filterCartItem))
    }
    useEffect(() => {
        // dispatch(cartItemsCounter(itemToCart.length))
        setcartData(cartsItems)
    }, [cartsItems])
    return (
        <>
            {cartData ?
                <div className='addedCartItems'>
                    {
                        itemToCart?.map((items, id) =>
                            <Card>
                                <CardImg top width="100%" src={items?.src} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">company Name : {items?.name}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">model : {items?.model}</CardSubtitle>
                                    <CardSubtitle tag="h5" className="mb-2 text-muted">Price : {items?.price}</CardSubtitle>
                                    <CardText>Specification : {items?.details}.</CardText>
                                    <div className='cartBuyRemoveBtn'>
                                        <Button>Buy Now</Button>
                                        <Button color='danger' onClick={() => removeCartItem(id)}>Remove</Button>


                                    </div>
                                </CardBody>
                            </Card>
                        )
                    }

                </div>
                :
                <h3>Cart is Empty</h3>
            }

        </>
    )
}

export default CartItems
