import React from "react";
import Header from "../../Components/molecules/header";
import {Content, InnerLeft} from "../templates";
import Text from "../../Components/atoms/typography";

export default function Contacts() {
    return (
        <>
        <Header text={'Contact Me'}/>
            <Content>
                <InnerLeft>
                    <Text>
                    <Text>&lt;p&gt;</Text>
                        Lorem ipsum, dolor sit amet
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
                    </Text>
                </InnerLeft>
            </Content>
        </>
    )
}