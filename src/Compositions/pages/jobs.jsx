import React from "react";
import Header from "../../Components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
                tools: ['html5', 'css3', 'heroku', 'react', 'git'],
            },
        },
        {
            id: 3,
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fdecacentral.netlify.com%2F",
            name: 'Decagon Central',
            details: {
                description: 'First project built and deployed to heroku server. This simple webpage was built to leverage' +
                    'my skill on APIs, axios, and atomic design principles' +
                    ' This is just a sample site. \nOriginal web site organization private.',
                src: 'https://decacentral.netlify.com/login',
                tools: ['html5', 'css3', 'django', 'react', 'heroku', 'git'],
            },
        },
        {   id: 4,
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fchrisjosh-inizio.netlify.com%2F",
            name: 'Digicon',
            details: {
                description: 'A static webpage to illustrate my knowledge on responsive web design and mobile interface',
                src: 'https://digiconmock.netlify.com/',
                tools: ['html5', 'css3', 'bootstrap', 'git'],
            },
        },
        {   id: 5,
            image: "https://api.apiflash.com/v1/urltoimage?access_key=77460fb38d424cf4ae8f640f8bb0a541&url=https%3A%2F%2Fchrisjosh-digicon.netlify.com%2F",
            name: 'Inizio',
            details: {
                description: 'A static webpage to illustrate my knowledge in responsive web design and mobile interface',
                src: 'https://iniziomock.netlify.com/',
                tools: ['html5', 'css3', 'bootstrap', 'javascript', 'git'],
            },
        },
        {   id: 6,
            image: "http://res.cloudinary.com/webweavers/image/upload/v1586520171/MyPortfolio/webproject_snapshot/Screenshot_2020-04-10_Jodava_1_zx9ble.webp",
            name: 'Jodava',
            details: {
                description: 'an app that breacheses\n' +
                    'the gap between customers\n' +
                    'and business persons, while\n' +
                    'still retaining the intimacy that\n' +
                    'peer-to-peer chatting offers. This was an in house project. It was built with Flask as the backend',
                src: '#',
                tools: ['html5', 'css3', 'flask', 'javascript', 'git'],
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