import React, { Component } from "react";
import Slider from "react-slick";
import ImageContainer from "../atoms/ImagePlaceholder";
import Pic from "../atoms/ImagePlaceholder/pic.jpg";

export default class CardCarousel extends Component {

    render() {
        let values = [1,2,3,4,5,6,7,8,9,10];

        const settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
        };

        return (
            <div>
                <Slider {...settings}>
                    {values.map(el =>
                        <div>
                            <ImageContainer image={Pic} shape={'card'}/>
                        </div>
                    )}
                </Slider>
            </div>
        );
    }
}

