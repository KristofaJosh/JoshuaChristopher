import React from "react";
import {Content, InnerLeft, InnerRight} from "../../Compositions/templates";
import Socials from "../molecules/socials";
import Text from "../atoms/typography";
import styled from "styled-components";

export default function FooterDiv(props) {

    let year = new Date();
    year = year.getFullYear();

    return (
        <FooterDivStyle>
            <Content>
                <InnerLeft>
                <Text size={'med'}>I'm available for freelance<br/>you can reach me by</Text>
                </InnerLeft>
            </Content>
            <Content>
                <InnerLeft><Socials variant={'footer'} /></InnerLeft>
                <InnerRight className='copyright'><Text size='xsm'>{year} - All rights reserved - TheChristophers</Text></InnerRight>
            </Content>
            <Content>
            </Content>
        </FooterDivStyle>
    )

}

const FooterDivStyle = styled.div`
    margin: 2.5rem 0;
    
    .copyright {
        background-color: red !important;
    }
`;