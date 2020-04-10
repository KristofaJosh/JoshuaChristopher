import React from "react";
import Header from "../../Components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from "../../Components/organism/carousel";
import CardContainer, {Card} from "../../Components/molecules/Card";


export default function Jobs({...props}) {

    let api = [
        {   id: 2,
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fjoshuachristopher.netlify.com%2F",
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
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fdecacentral.netlify.com%2F",
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
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fchrisjosh-inizio.netlify.com%2F",
            name: 'Digicon',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'php', 'apache'],
            },
        },
        {   id: 5,
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fchrisjosh-digicon.netlify.com%2F",
            name: 'Inizio',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'php', 'react'],
            },
        },
        {   id: 6,
            image: "https://loremflickr.com/400/200?random=45",
            name: 'Deca Vest',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'php', 'apache', 'ps'],
            },
        },
        {
            id: 7,
            image: "https://loremflickr.com/400/200?random=22",
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
        {   id: 8,
            image: "https://loremflickr.com/400/200?random=34",
            name: 'Digicon',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'php', 'apache'],
            },
        },
        {   id: 9,
            image: "https://loremflickr.com/320/240/paris,girl/all",
            name: 'Inizio',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3', 'php', 'react'],
            },
        },
        {   id: 10,
            image: "https://loremflickr.com/400/200?random=45",
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
                {api.map(el =>
                    <Card id={el.id} image={el.image} name={el.name} url={el.url} type={el.type} details={ el.origin || el.details}/>
                )}
            </CardContainer>
        </>
    )
}


export function RecentJobs() {
    return (
        <>
            {/*<CardCarousel/>*/}
        </>

    );
}