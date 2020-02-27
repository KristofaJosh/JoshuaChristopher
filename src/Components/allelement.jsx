import React from "react";
import Text from "../Components/atoms/typography";
import Button from '../Components/atoms/button';
import Logo from '../Components/atoms/logo';
import Line from '../Components/atoms/divider'
import ImageContainer from "../Components/atoms/ImagePlaceholder";
import Header from "../Components/molecules/header";

import Pic from "../Components/atoms/ImagePlaceholder/pic.jpg"
import Menu from "./molecules/menu";
import {Content, Inner} from "../Compositions/templates";


export default function All() {
    return (
        <>
            <Logo variant={'logo'} text={'Joshua Christopher'}/>
            <Menu/>
            <Text size={'big'}>Hello</Text>
            <Text size={'med'}>Hello</Text>
            <Text size={'default'}>Hello</Text>
            <Text size={'sm'}>Hello</Text>
            <Text size={'xsm'}>Hello</Text>

            <Button variant={'primary'}>Contact Me</Button>
            <Button variant={'secondary'}>Brief Me</Button>
            <br/>
            <Line variant={'default'}/>
            <br/>

            <ImageContainer image={Pic} shape={'50%'}/>
            <ImageContainer image={Pic} shape={'50%'}/>
            <ImageContainer image={Pic} shape={'50%'}/>

            <Header text={'Header'}/>
            <Header text={'Header'}/>

            <Content>
                <Inner>
                    <Text size={'big'}>Hello</Text>
                </Inner>
                <Inner>
                    <Text size={'big'}>Hello</Text>
                </Inner>
            </Content>


        </>
    )
}