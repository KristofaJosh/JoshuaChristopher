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
    font-size: ${fontSize}
`;

TextStyle.propTypes = {
    variant: PropTypes.oneOf(['default', 'big', 'med', 'small', 'xsm'])
};

TextStyle.defaultProps = {
    variant: 'default',
};

