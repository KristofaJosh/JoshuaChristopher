import React from "react";
import styled from "styled-components";

export default function ImageContainer({...props}) {


    return (
        <ImageStyle  shape={props.shape}>
                <Image src={props.image} height={props.height} alt='loading'/>
        </ImageStyle>
    )
}

const ImageStyle = styled.div`
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    border: none;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({shape})=>shape==="round"?"50%": "0" };
`;

const Image = styled.img`
    width: 100%;
    min-height: ${props => props.height || '100%'};
`;