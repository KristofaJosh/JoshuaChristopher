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
            name: 'This Portfolio',
            date: '2020-12-19',
            details: {
                description: 'You are currently viewing this site',
                src: 'http://joshuachristopher.netlify.com',
                tools: ['html5', 'css3', 'heroku', 'react'],
            },
        },
        {
            id: 3,
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fdecacentral.netlify.com%2F",
            name: 'Decagon Central',
            details: {
                description: 'Unlike work correctly both with client-side routing ' +
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running'+
                    'and a non-root public URL. Learn how to configure a non-root public URL by running',
                src: 'https://decacentral.netlify.com/login',
                tools: ['html5', 'css3', 'django', 'react', 'typescript'],
            },
        },
        {   id: 4,
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fchrisjosh-inizio.netlify.com%2F",
            name: 'Digicon',
            details: {
                description: 'just a static webpage',
                src: 'https://digiconmock.netlify.com/',
                tools: ['html5', 'css3', 'bootstrap'],
            },
        },
        {   id: 5,
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fchrisjosh-digicon.netlify.com%2F",
            name: 'Inizio',
            details: {
                description: 'just a static webpage',
                src: 'http://netlify.com',
                tools: ['html5', 'css3'],
            },
        },
        {   id: 6,
            image: "https://loremflickr.com/400/200?random=45",
            name: 'Jodava',
            details: {
                description: 'an app that breacheses\n' +
                    'the gap between customers\n' +
                    'and business persons, while\n' +
                    'still retaining the intimacy that\n' +
                    'peer-to-peer chatting offers.',
                src: '#',
                tools: ['html5', 'css3', 'flask', 'JS'],
            },
        },
        
    ];

    return (
        <>
            <Header text={'Projects'}/>
            <CardContainer>
                {api.map(el =>
                    <Card id={el.id} image={el.image} name={el.name} details={el.details}/>
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