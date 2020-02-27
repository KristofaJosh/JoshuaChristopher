import React from "react";
import styled from 'styled-components';
import {backgroundColor, footerBackgroundColor, textColor, footerTextColor} from '../../Components/constants'
import PropTypes from "prop-types";


export function Body(props) {
    console.log(props);
    return (
        <BodyStyle {...props}>
            <div className="container">
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
    return(
        <InnerStyle>{props.children}</InnerStyle>
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
    flex: 1;
    background-color: ${backgroundColor};
    color: ${textColor}
`;

const FooterStyle = styled.div`
    background-color: ${footerBackgroundColor};
    min-height: 100px;
    color: ${footerTextColor}
`;

const ContentStyle = styled.div`
    display: flex;
    justify-content: space-between;
`;

const InnerStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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



