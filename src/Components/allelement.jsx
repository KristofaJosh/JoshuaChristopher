import React from "react";
import Text from "../Components/atoms/typography";
import Button from '../Components/atoms/button';
import Logo from '../Components/atoms/logo';
import Line from '../Components/atoms/divider'
import ImageContainer from "../Components/atoms/ImagePlaceholder";
import Header from "../Components/molecules/header";

import Pic from "../Components/atoms/ImagePlaceholder/pic.jpg"
import Menu from "./molecules/menu";
import {Content, Footer, Inner, InnerLeft, InnerRight} from "../Compositions/templates";
import Socials from "./molecules/socials";
import NavBar from "./organism/navbar";
import FooterDiv from "./organism/footerdiv";
// import CardContainer, {Card} from "./atoms/Card";



export default function All() {
    return (
        <>
            <Header text={'Atoms'}/>

            <Logo variant={'logo'}/>
            <Button variant={'primary'}>Contact Me</Button>
            <Button variant={'secondary'}>Brief Me</Button>
            <Text size={'big'}>Hello</Text>
            <Text size={'med'}>Hello</Text>
            <Text size={'default'}>Hello</Text>
            <Text size={'sm'}>Hello</Text>
            <Text size={'xsm'}>Hello</Text>
            <br/>
                <Line variant={'default'}/>
            <br/>

            {/*<CardContainer>*/}
            {/*   */}
            {/*</CardContainer>*/}


            <Header text={'Molecules'}/>
            <Menu/>
            <Content>
            <ImageContainer image={Pic} shape={'round'}/>
            <ImageContainer image={Pic} />
            {/*<ImageContainer image={'https://res.cloudinary.com/webweavers/image/upload/v1582806866/sample.jpg'} shape={'smcard'}/>*/}
            </Content>
            <Socials/>

            <Header text={'Templates'}/>

            <Content>
                <Inner>
                    <Text size={'med'}>Inner</Text>
                </Inner>
                <Inner>
                    <Text size={'med'}>Inner</Text>
                </Inner>
            </Content>
            <Content>
                <InnerLeft>
                    <Text size={'med'}>Inner Left</Text>
                </InnerLeft>
                <InnerLeft>
                    <Text size={'med'}>Inner Left</Text>
                </InnerLeft>
            </Content>
            <Content>
                <InnerRight>
                    <Text size={'med'}>Inner Right</Text>
                </InnerRight>
                <InnerRight>
                    <Text size={'med'}>Inner Right</Text>
                </InnerRight>
            </Content>
            <Header text={'Organism'}/>
            <NavBar/>
            <Footer>
            <FooterDiv/>
            </Footer>
        </>
    )
}



