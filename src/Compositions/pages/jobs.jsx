import React from "react";
import Header from "../../Components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from "../../Components/organism/carousel";
import CardContainer, {Card} from "../../Components/atoms/Card";
import Pic from "../../Components/atoms/ImagePlaceholder/pic.jpg";



export default function Jobs() {
    let api = [
        {
            id: 1,
            image: Pic,
            name: 'Der MarktPlatz',
            details: {
                description: 'Unlike work correctly both with client-side routing ' +
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },
        {   id: 2,
            image: Pic,
            name: 'Digicon',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },
        {
            image: Pic,
            name: 'Der MarktPlatz',
            details: {
                description: 'Unlike work correctly both with client-side routing ' +
                    'and a non-root public URL. Learn how to configure a non-root public URL by running',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },
        {
            image: Pic,
            name: 'Der MarktPlatz',
            details: {
                description: 'Unlike work correctly both with client-side routing ' +
                    'and a non-root public URL. Learn how to configure a non-root public URL by running',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },
        {
            image: Pic,
            name: 'Digicon',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },{
            image: Pic,
            name: 'Der MarktPlatz',
            details: {
                description: 'Unlike work correctly both with client-side routing ' +
                    'and a non-root public URL. Learn how to configure a non-root public URL by running',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },
        {
            image: Pic,
            name: 'Digicon',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },{
            image: Pic,
            name: 'Der MarktPlatz',
            details: {
                description: 'Unlike work correctly both with client-side routing ' +
                    'and a non-root public URL. Learn how to configure a non-root public URL by running',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },
        {
            image: Pic,
            name: 'Digicon',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },



    ];

    return (
        <>
            <Header text={'Projects'}/>
            <CardContainer>
                {api.map(el =>
                    <Card image={el.image} name={el.name} details={el.details}/>
                )}
            </CardContainer>
        </>
    )
}


export function RecentJobs() {
    return (
        <>
            <CardCarousel/>
        </>

    );
}