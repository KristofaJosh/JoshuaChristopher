import React from "react";
import Header from "../../Components/molecules/header";
import {Content, InnerLeft} from "../templates";
import Text from "../../Components/atoms/typography";


export default function About() {
    let aboutMe = "I am Joshua Christopher";
    let otherInfo = "story";
    return (
        <>
            <Header text={'About Me'}/>
            <Content>
                <InnerLeft>
                    <Text>
                        <Text>&lt;p&gt;</Text>
                        {aboutMe}
                        <br /> consecteturadipisicing elit.
                        <br />
                        Non, nemo dolor nihil animi
                        <br />
                        similique eveniet!
                        <Text>&lt;/p&gt;</Text>
                    </Text>
                </InnerLeft>
                <InnerLeft>
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo
                        dolor nihil animi similique eveniet! Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Non, nemo dolor nihil animi similique
                        eveniet!
                    </Text>
                    {/*<List>*/}
                    {/*    <Text mb={0}>Lorem ipsum, dolor sit </Text>*/}
                    {/*</List>*/}
                    {/*<List>*/}
                    {/*    <Text mb={0}>Lorem ipsum, dolor sit </Text>*/}
                    {/*</List>*/}
                    {/*<List>*/}
                    {/*    <Text mb={0}>Lorem ipsum, dolor sit </Text>*/}
                    {/*</List>*/}
                    <Text>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo
                        eveniet!
                        {otherInfo}
                    </Text>
                </InnerLeft>
            </Content>
        </>
    )
}