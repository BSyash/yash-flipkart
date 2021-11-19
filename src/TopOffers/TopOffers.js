import React, { Component } from "react";
import Slider from "react-slick";
import { TopOffersData } from "./TopOffersData";

import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const TopOffers = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    return (

        <Slider {...settings}>
            {
                TopOffersData?.map(data =>

                    <Card>
                        <CardImg top width="100%" src={data?.src} alt=" image cap" />
                        <CardBody>
                            <CardTitle tag="h3">{data?.title}</CardTitle>
                            <CardSubtitle tag="h5" className="mb-2 text-muted"> from {data?.startFrom}</CardSubtitle>
                        </CardBody>
                    </Card>

                )
            }
        </Slider>
    )
}

export default TopOffers
