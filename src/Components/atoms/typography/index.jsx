import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'
import {fontSize} from "../../constants";

export default function Text(props) {
    return (
        <TextStyle {...props}>{props.children}</TextStyle>
    );
}

const TextStyle = styled.p`
    font-size: ${fontSize};
    font-weight: ${props=> props.weight || '0'};
`;

TextStyle.propTypes = {
    variant: PropTypes.oneOf(['default', 'big', 'med', 'small', 'xsm', 'xxsm'])
};

TextStyle.defaultProps = {
    variant: 'default',
};

