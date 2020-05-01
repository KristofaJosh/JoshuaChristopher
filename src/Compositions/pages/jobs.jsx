import React, {useEffect, useState} from "react";
import Header from "../../Components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContainer, {Card} from "../../Components/molecules/Card";
import axios from 'axios';
import styled from "styled-components";


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
        <div>
            <Header text={'Projects'}/>
            <CardContainer>
                {api.length < 1 ?
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    :
                    api.map((el, index) => <Card key={index} details={el}/>)
                }
            </CardContainer>
        </div>
    )
}

const Spinner = styled.div`

`;


export function RecentJobs() {
    return (
        <>
            {/*<CardCarousel/>*/}
        </>
    
    );
}