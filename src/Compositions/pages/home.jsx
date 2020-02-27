import React from "react";
import Text from '../../Components/atoms/typography';
import Button from '../../Components/atoms/button';
import ImageContainer from "../../Components/atoms/ImagePlaceholder";
import Header from "../../Components/molecules/header";

import Pic from "../../Components/atoms/ImagePlaceholder/pic.jpg"

import {Content, Inner} from "../templates";


export default function Home() {
    return (
        <>
            <Content>
                <Inner>
                    <div>
                        <Text size={'big'}>Bring your</Text>
                        <Text size={'big'}>brand to life </Text>
                        <Text size={'big'}>with my </Text>
                        <Text size={'big'}>help</Text>
                        <Text size={'sm'}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Non, nemo dolor nihil animi similique eveniet!</Text>
                        <Button variant={'secondary'}>Contact Me</Button>
                    </div>
                </Inner>
                <Inner>
                    <ImageContainer image={Pic} shape={'50%'}/>
                </Inner>
            </Content>

            <Header text={'Recent Projects'}/>
        </>
    )
}