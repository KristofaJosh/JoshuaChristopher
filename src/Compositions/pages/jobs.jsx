import React, {useEffect, useState} from "react";
import Header from "../../Components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContainer, {Card} from "../../Components/molecules/Card";
import axios from 'axios';



export default function Jobs() {

    const [api, setApi] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://chrisjoshportfolio.herokuapp.com/jobs/',
        })
            .then((response) =>
                setApi(response.data)
            )
            .catch(err => console.log(err.message))
    }, []);

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