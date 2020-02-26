import React from "react";
import styled from "styled-components";
import {textColor} from "../constants";
import Text from '../atoms/typography';

export default function Logo(props) {
    return (
        <>
            <Text size={'logo'}><LogoStyle {...props}><span>&lt;/</span></LogoStyle>{props.text}</Text>
        </>
    )
}

const LogoStyle = styled.span`
    color: ${textColor};
    font-weight: 700;
`;