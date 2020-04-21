import React from "react";
import Header from "../../Components/molecules/header";
import {Content, InnerLeft} from "../templates";
import Text from "../../Components/atoms/typography";


export default function About() {
    let aboutMe = "I am Joshua Christopher";
    return (
        <>
            <Header text={'About Me'}/>
            <Content>
                <InnerLeft>
                    <Text>
                        <Text>&lt;p&gt;</Text>
                        {aboutMe}
                        <br/>
                        FullStack Developer
                        <br/>
                        Python, EcmaScript, SQL, React, Django
                        <br/>
                        Building Rest API's, CI, Unit Testing
                        <Text>&lt;/p&gt;</Text>
                    </Text>
                </InnerLeft>
                <InnerLeft>
                    <Text>
                        Joshua Enyi-Christopher loves solving logical problems with computers, he is a fullstack
                        developer with Over 3 years experience. He's core languages are Python and Javascript.
                        He has a Bachelors in Computer Information Systems while in school the first programming language
                        he learnt was C after which he moved to C++.
                    </Text>
     
                    <Text>
                        Over the years, he has interned in several organisations where he has applied he's knowledge to
                        improve and/or optimize manual processes.
                    </Text>
                </InnerLeft>
            </Content>
        </>
    )
}