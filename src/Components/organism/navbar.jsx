import React from "react";
import styled from "styled-components";
import Menu from "../molecules/menu";
import Logo from "../atoms/logo";

export default function NavBar() {
    let name = 'Joshua Enyi-Christopher'
    return (
        <NavBarStyle>
            <Logo variant={'logo'} text={name}/>
            <Menu variant={'default'}/>
        </NavBarStyle>
    )
}

const NavBarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem 0;
`;

