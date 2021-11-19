import React from 'react'
import Slider from "react-slick";
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';


const Sliders = ({ ...props }) => {
    const settings = {
        infinite: true,
        speed: 500,
        DragEvent: true,
        slidesToShow: 5,
        slidesToScroll: 5
    };

    return (
        <Slider {...settings}>
            {
                props?.data?.map(data =>
                    <Card onClick={() => props?.onClickHandle(data)}>
                        <CardImg top width="100%" src={data?.src} alt={data?.alt} />
                        <CardBody>
                            {
                                props.CardTitleData?.map(titles => <CardTitle tag="h5">{titles}</CardTitle>)
                            }
                        </CardBody>
                    </Card>
                )
            }
        </Slider>
    )
}

export default Sliders
