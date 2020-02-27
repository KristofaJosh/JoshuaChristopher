import React from "react";
import styled from "styled-components";
import Text from "../atoms/typography";
import Line from "../atoms/divider";

export default function Header(props) {
    return (
        <HeaderStyle>
            <div><Text size={'med'}>{props.text}</Text></div>
            <div><Line/></div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    div { width: 100%; }
`;

