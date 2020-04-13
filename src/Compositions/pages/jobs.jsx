import React, {useEffect, useState} from "react";
import Header from "../../Components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContainer, {Card} from "../../Components/molecules/Card";
import axios from 'axios';

export default function Jobs() {

    const [api, setApi] = useState([]);

    // let api = [
    //     {
    //         "name": "234 Spaces",
    //         "project_details": {
    //             "description": "Worked with a team, built every atom on the website, some molecules and create several pages like the homepage and listings",
    //             "tools": [
    //                 "django",
    //                 "react",
    //                 "html5",
    //                 "css3",
    //                 "docker"
    //             ],
    //             "link": "https://234spaces.netlify.com",
    //         },
    //         "project_snapshot": "http://res.cloudinary.com/webweavers/image/upload/w_400//v1586626320/MyPorfolio/webproject_snapshot/vfgi74npjbp39q3ikd6h.png",
    //         "repository": "private"
    //     },
    //     {
    //         "name": "This Portfolio",
    //         "project_details": {
    //             "description": "I built this website while learning react. In this project, context, themeing and states where used.",
    //             "tools": [
    //                 "react",
    //                 "html5",
    //                 "css3",
    //                 "sass",
    //                 "django",
    //                 "mongodb",
    //                 "heroku",
    //                 "python"
    //             ],
    //             "link": "https://joshuachristopher.netlify.com",
    //         },
    //         "project_snapshot": "http://res.cloudinary.com/webweavers/image/upload/w_400//v1586628555/MyPorfolio/webproject_snapshot/em0dov0behhxbxzg79sq.png",
    //         "repository": "https://github.com/KristofaJosh/JoshuaChristopher"
    //     },
    //     {
    //         "name": "Deca Central",
    //         "project_details": {
    //             "description": "The first project built and deployed to Heroku server. This simple webpage was built to leverage my skill on APIs, Axios, and atomic design principles' This is just a sample site. Original web site organization private.",
    //             "tools": [
    //                 'html5', 'css3', 'sass', 'django', 'react', 'heroku', 'git'
    //             ],
    //             "link": "https://decacentral.netlify.com/login/",
    //         },
    //         "project_snapshot": "http://res.cloudinary.com/webweavers/image/upload/w_400//v1586629749/MyPorfolio/webproject_snapshot/crsnnpeollkcatyfmgme.png",
    //
    //         "repository": "https://github.com/KristofaJosh/DecaCentral",
    //     },
    //     {
    //         "name": "DigiSol",
    //         "project_details": {
    //             "description": "A static webpage to illustrate my knowledge on responsive web design and mobile interface",
    //             "tools": [
    //                 'html5','css3','git','netlify'
    //             ],
    //             "link": "https://digiconmock.netlify.com/",
    //         },
    //         "project_snapshot": "http://res.cloudinary.com/webweavers/image/upload/w_400//v1586630139/MyPorfolio/webproject_snapshot/fevjzbwqgegfmmgbyeir.png",
    //         "repository": "",
    //     },
    //     {
    //         "name": "Inizio",
    //         "project_details": {
    //             "description": "A static webpage to illustrate my knowledge in responsive web design and mobile interface",
    //             "tools": [
    //                 "html5",
    //                 "css3",
    //                 "git",
    //                 "netlify",
    //                 "bootstrap"
    //             ],
    //             "link": "https://iniziomock.netlify.com/",
    //         },
    //         "project_snapshot": "http://res.cloudinary.com/webweavers/image/upload/w_400//v1586630322/MyPorfolio/webproject_snapshot/oplajdj6o1ypuurua3mo.png",
    //         "repository": "https://github.com/decadevs/savefast-KristofaJosh"
    //     },
    //     {
    //         "name": "Jodava",
    //         "project_details": {
    //             "description": "An app that breaches the gap between customers and business persons, while still retaining the intimacy that peer-to-peer chatting offers. This was an in house project. It was built using Flask as the backend.",
    //             "tools": [
    //                 'flask', 'html5', 'css3', 'javascript', 'python'
    //             ],
    //             "link": "https://github.com/decadevs/Jodava",
    //         },
    //         "project_snapshot": "http://res.cloudinary.com/webweavers/image/upload/w_400//v1586630639/MyPorfolio/webproject_snapshot/oo2h2ti8ilzye2runxvh.png",
    //         "repository": "https://github.com/decadevs/Jodava"
    //     },
    // ];

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://chrisjoshportfolio.herokuapp.com/jobs/',
            header: {
                'Access-Control-Allow-Origin': '*',
            }
            // url: 'http://localhost:8000/jobs/',
        })
            .then((response) => console.log(response))
            .catch((err) => console.log(err.message))
    }, [api]);

    return (
        <>
            <Header text={'Projects'}/>
            <CardContainer>
                {api.map((el, index) =>
                    <Card key={index} details={el}/>
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