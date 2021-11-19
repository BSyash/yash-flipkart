import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Cards = ({ ...props }) => {
    return (
        <>
            {
                // <Card>
                //     <CardImg top width="100%" src={props.src} alt="Card image cap" />
                //     <CardBody>
                //         <CardTitle tag="h5">{ }</CardTitle>
                //         {
                //             CardSubtitleData?.map(SubtitleData =>
                //                 <CardSubtitle tag={SubtitleData?.tag} className="mb-2 text-muted">{jhvggh}</CardSubtitle>
                //             )
                //         }

                //         <CardSubtitle tag="h5" className="mb-2 text-muted">{ }</CardSubtitle>
                //         <CardText>{ }</CardText>
                //         <div className='addAndBuy'>
                //             <Button color='danger' onClick={() => dispatch(addToCart(selectedMob))}></Button>
                //             <Link to='/buymobile'><Button color='primary' onClick={() => dispatch(buyMobiles(selectedMob))} ></Button></Link>
                //         </div>
                //     </CardBody>
                // </Card>
            }
        </>
    )
}

export default Cards
