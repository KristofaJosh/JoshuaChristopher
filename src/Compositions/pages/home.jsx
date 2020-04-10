import React from "react";
import Text from '../../Components/atoms/typography';
import Button from '../../Components/atoms/button';
import ImageContainer from "../../Components/atoms/ImagePlaceholder";
import Header from "../../Components/molecules/header";
import {Content, Inner} from "../templates";
import Socials from "../../Components/molecules/socials";
import {RecentJobs} from "./jobs";
import Pic from "../../Components/atoms/ImagePlaceholder/image.jpg"
import StyleContext from "../../Contexts/styleContext/styleContext";


export default function Home({changeTheme}) {


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
                        <Content>
                            <Button variant={'secondary'} link={true}>Contact Me</Button>
                            
                            <StyleContext.Consumer>
                                {({changeTheme})=>  <Button variant={'primary'} empty fn={changeTheme}>☀</Button>}
                            </StyleContext.Consumer>

                        </Content>
                    </div>
                </Inner>
                <Inner>
                    <ImageContainer image={Pic} shape={'round'}/>
                </Inner>
            </Content>
            <Content>
                <Inner>
                    <Socials variant={'default'}/>
                </Inner>
                <Inner/>
            </Content>
            <Header text={'Recent Projects'}/>
            <RecentJobs/>
        </>
    )
}