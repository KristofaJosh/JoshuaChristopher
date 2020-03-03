import React from "react";
import styled from "styled-components";
import ImageContainer from "../ImagePlaceholder";
import Text from "../typography";
import Line from "../divider";
import {backgroundColor} from "../../constants";


export default function CardContainer(props) {

    return (
        <CardContainerStyle>
            {props.children}
        </CardContainerStyle>
    )
}

export function Card(props) {
    return (
        <div {...props}>
        <CardStyle  key={props.id}>
            <Image>
                <div>
                    <a href={props.url}>
                    {/*<a href={props.url|| props.details.src}>*/}
                    <ImageContainer image={'' || props.image} height={'12.5rem'}/>
                    </a>
                </div>
            </Image>
            <CardContent variant={'card'}>
                <div>
                    <div className='title'>
                        <Text size={'sm'} weight={'800'}>{props.name}</Text>
                        <Line/>
                    </div>
                    <div className='description'>
                        {/*<Text size={'xsm'}>{props.type }</Text>*/}
                        <Text size={'xsm'}>{props.type ||props.details.description}</Text>
                    </div>
                </div>
                <div className='tools'>
                    <Line/>
                    <Text size={'sm'}>
                        {props.details.tools.map(el =>
                            <i className={"devicon-"+el+"-plain"}/>
                        )}
                    </Text>
                    <Line/>
                </div>
            </CardContent>
        </CardStyle>
        </div>
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
    margin: 1.1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 17px;
   
`;

const Image = styled.div`
    background-color: grey;
    height: 12.5rem;
    overflow: hidden;
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
    box-shadow: 0px -11px 48px -11px black;
    z-index: 2;
    
    &:hover{
        box-shadow: 0px 0px 33px 5px black;
        transform: scale(1.1);
    };
};


    div {
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;


const CardContent = styled.div`
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.6rem; 
    background: linear-gradient(180deg, ${backgroundColor}, transparent);
    box-shadow: 0px -117px 27px -11px #00000075

    
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