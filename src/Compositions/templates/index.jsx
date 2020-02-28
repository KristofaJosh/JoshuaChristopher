import React from "react";
import styled from 'styled-components';
import {backgroundColor, footerBackgroundColor, textColor, footerTextColor} from '../../Components/constants'
import PropTypes from "prop-types";


export function Body(props) {
    return (
        <BodyStyle {...props}>
            <div className="container ">
                {props.children}
            </div>
        </BodyStyle>
    );
}

export function Footer(props) {
    return (
        <FooterStyle {...props}>
            <div className="container">
                {props.children}
            </div>
        </FooterStyle>
    )
}

export function Inner(props) {
    return (
        <InnerStyle align={props.align}>{props.children}</InnerStyle>
    )
}

export function InnerLeft(props) {
    return (
        <InnerStyleLeft>{props.children}</InnerStyleLeft>
    )
}
export function InnerRight(props) {
    return (
        <InnerStyleRight>{props.children}</InnerStyleRight>
    )
}

export function Content(props) {

    return (
        <ContentStyle>
            {props.children}
        </ContentStyle>
    )

}


const BodyStyle = styled.div`
        display: flex;
        justify-content: center;
        flex: 1;
        background-color: ${backgroundColor};
        color: ${textColor};
    
`;

const FooterStyle = styled.div`
    background-color: ${footerBackgroundColor};
    color: ${footerTextColor};
`;

const ContentStyle = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 900px){
        flex-direction: column;
        align-items: center;
  }
`;

const InnerStyle = styled.div`
    display: flex;
    width: 100%;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    
    // @media (min-width 1200px){
    //     display: flex;
    // }
`;

const InnerStyleLeft = styled.div`
    display: flex;
    width: 100%;
    margin: 1rem 0;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    
    // @media (min-width 1200px){
    //     display: flex;
    // }
`;
const InnerStyleRight = styled.div`
    display: flex;
    width: 100%;
    margin: 1rem 0;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    
    // @media (min-width 1200px){
    //     display: flex;
    // }
`;

BodyStyle.propTypes = {
    variant: PropTypes.oneOf(['default', 'primary', 'secondary'])
};

BodyStyle.defaultProps = {
    variant: 'default',
};

FooterStyle.propTypes = {
    variant: PropTypes.oneOf(['default', 'primary', 'secondary'])
};

FooterStyle.defaultProps = {
    variant: 'default',
};



