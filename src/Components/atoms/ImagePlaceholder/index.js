import React from "react";
import styled from "styled-components";

export default function ImageContainer({...props}) {

    return (
        <ImageStyle>
            <Image src={props.image} alt='loading'/>
        </ImageStyle>
    )
}

const ImageStyle = styled.div`
    background-color: grey;
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    border: none;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${props => props.shape};
`;

const Image = styled.img`
    width: 100%;
`;