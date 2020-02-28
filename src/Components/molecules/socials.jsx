import React from "react";
import styled from "styled-components";
import Text from "../atoms/typography";
import {fontSize, hover, textColor} from "../constants";

export default function Socials(props) {
    const links = [
        ["Github", "https://github.com/KristofaJosh/"],
        ["LinkedIn", "https://www.linkedin.com/in/christofajosh"],
        ["Facebook", "https://www.facebook.com/christofajosh/"],
        ["Skype", "skype:christofajosh?call"],
    ];

    return (
        <>
            <SocialStyle {...props}>
                {links.map(el => (
                  <a href={el[1]} key={el}>
                    <Text size={'xsm'}>
                        <ion-icon name={"logo-"+ el[0].toLowerCase()}/>
                        {"  " + el[0]}
                    </Text>
                  </a>
                ))}
            </SocialStyle>
        </>
    );
}

const SocialStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  font-size: ${fontSize};
  
  a {
    color: ${textColor} !important;
  }
  
  &:hover {color: ${hover};}  
`;
