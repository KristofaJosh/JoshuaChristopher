import React from "react";
import Header from "../../Components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from "../../Components/organism/carousel";
import CardContainer, {Card} from "../../Components/atoms/Card";
// import Pic from "../../Components/atoms/ImagePlaceholder/pic.jpg";
// import axios from 'axios'


export default function Jobs({...props}) {

    let api = [
        {
            id: 1,
            image: "https://loremflickr.com/500/240?random=1",
            name: 'Der MarktPlatz',
            details: {
                description: 'Unlike work correctly both with client-side routing ' +
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'docker', 'angular'],
            },
        },
        {   id: 2,
            image: "https://loremflickr.com/320/240/girl?random=1",
            name: 'Campus Transact',
            date: '2020-12-19',
            details: {
                description: 'Just a description of the webpage or project will be here',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'heroku'],
            },
        },
        {
            id: 3,
            image: "https://loremflickr.com/400/200?random=2",
            name: 'Der MarktPlatz',
            details: {
                description: 'Unlike work correctly both with client-side routing ' +
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'vue'],
            },
        },
        {   id: 4,
            image: "https://loremflickr.com/400/200?random=3",
            name: 'Digicon',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'php', 'apache'],
            },
        },
        {   id: 5,
            image: "https://loremflickr.com/320/240/paris,girl/all",
            name: 'Inizio',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'php', 'react'],
            },
        },
        {   id: 6,
            image: "https://loremflickr.com/400/200?random=5",
            name: 'Deca Vest',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'php', 'apache', 'ps'],
            },
        },
    ];

    return (
        <>
            <Header text={'Projects'}/>
            <CardContainer>
                {props.api.map(el =>
                    <Card id={el.id} image={el.image} name={el.name} url={el.url} type={el.type} details={ el.origin || el.details}/>
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