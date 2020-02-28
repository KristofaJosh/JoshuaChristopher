import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {textColor, hover} from "../constants";
import Text from "../atoms/typography";
import PropTypes from "prop-types";
import Button from "../atoms/button";


export default function Menu(props) {

    const paths = ["Home", "About", "Works", "Contacts"];

    return (
        <MenuStyle {...props}>
            {paths.map(el => (
                <NavLink exact activeClassName='active'
                         to={'/' + el}
                         key={el}
                ><Text size={'sm'}>{el}</Text></NavLink>
            ))}
            <Button variant={'primary'}>brief me</Button>

        </MenuStyle>
    )

}

const MenuStyle = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    
    @media (max-width: 900px){
        width: 100%;        
    }
}
    
    a {
        color: ${textColor} !important;
    }

    .active {
        color: ${hover} !important;
    }
    
    p {
        display: inline;
    }
    
    .active::before {
        content: '< '
    }
    .active::after {
        content: ' />'
    }

    &:hover {
        color: ${hover} !important;
    }
`;

MenuStyle.propTypes = {
    variant: PropTypes.oneOf(['default', 'big', 'med', 'small', 'xsm'])
};

MenuStyle.defaultProps = {
    variant: 'default',
};
