import React from "react";
import styled from "styled-components";
import {footerBackgroundColor} from "../../constants";
import PropTypes from "prop-types";

export default function Line(props) {

    return(<LineStyle {...props}/>)

}

const LineStyle = styled.div`
    background-color: ${footerBackgroundColor};
    width: 100%;
    height: 4px;
`;

LineStyle.propTypes = {
    variant: PropTypes.oneOf(['default', 'primary', 'secondary'])
};

LineStyle.defaultProps = {
    variant: 'default',
};