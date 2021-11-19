import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const BuyMobile = () => {
    const buiedMobile = useSelector(state => state.mobilecategory.buymobile)
    console.log('buiedMobile', buiedMobile);
    const cancelOrder = (id) => {
        console.log(id);
    }
    return (
        <div className='buySection'>
            <div className='buyMobileView'>
                {
                    buiedMobile?.map((items, id) =>
                        <Card>
                            <CardImg top width="100%" src={items?.src} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">company Name : {items?.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">model : {items?.model}</CardSubtitle>
                                <CardSubtitle tag="h5" className="mb-2 text-muted">Price : {items?.price}</CardSubtitle>
                                <CardText>Specification : {items?.details}.</CardText>
                                <Button color='danger' onClick={() => cancelOrder(id)}>Cancel</Button>
                            </CardBody>
                        </Card>
                    )
                }
            </div>
            <div className="billpayment">
                <h2>PRICE DETAILS </h2>
                <h4>PRICE () : </h4>
                <h4>Discount : </h4>
                <h4>Delevary Charges : </h4>
                <h3>Total Amount : </h3>

            </div>

        </div>
    )
}

export default BuyMobile
