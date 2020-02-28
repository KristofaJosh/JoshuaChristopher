import React from "react";
import styled from "styled-components";
import ImageContainer from "../ImagePlaceholder";
import Text from "../typography";
import {footerBackgroundColor} from "../../constants";
import Line from "../divider";

export default function CardContainer(props) {

    return (
        <CardContainerStyle>
            {props.children}
        </CardContainerStyle>
    )
}

export function Card(props) {
    return (
        <CardStyle {...props}>
            <Image>
                <div>
                    <ImageContainer image={props.image}/>
                </div>
            </Image>
            <CardContent>
                <div>
                    <div className='title'>
                        <Text size={'sm'} weight={'800'}>{props.name}</Text>
                        <Line/>
                    </div>
                    <div className='description'>
                        <Text size={'xsm'}>{props.details.description}</Text>
                    </div>
                </div>
                <div className='tools'>
                    <Line/>

                    <Text size={'sm'}>
                        {props.details.tools.map(el =>
                            <ion-icon name={"logo-" + el}/>
                        )}
                    </Text>
                    <Line/>
                </div>
            </CardContent>
        </CardStyle>
    )
}

const CardContainerStyle = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    
`;

const CardStyle = styled.div`
    width: 16.7rem;
    min-width: 15.625rem;
    min-height: 25rem;
    // border: 2px solid blue;
    margin: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

const Image = styled.div`
    height: 12.5rem;
    overflow: hidden;
    div {
        overflow: hidden;
    }
`;


const CardContent = styled.div`
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.6rem;
    
    .title {
        letter-spacing: 0px;
        line-height: 30px; 
    };
    
    .description {
        width: 100%; 
        height: 6.9rem; 
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: none; 
        -ms-overflow-style: none; 
    };
    .description::-webkit-scrollbar {
        width: 0px;
    }
    .tools {width: 100%;};
`;