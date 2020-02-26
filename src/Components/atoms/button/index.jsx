import React from "react";
import styled from "styled-components";
import Text from '../typography';
import PropTypes from 'prop-types';
import {buttonText, buttonBackground, hover} from '../../constants';

export default function Button(props) {
    return (

        <ButtonStyle {...props} onClick={props.fnc}>
            <Text>{props.children}<span> /&gt;</span></Text>
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button`
  background-color: ${buttonBackground};
  color: ${buttonText};
  border: 2px solid ${buttonBackground};
  border-radius: 5.3px;
  padding: 0.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
  
  &:hover {
    background-color: ${hover};
    border: 2px solid ${buttonText};
  }
`;

ButtonStyle.propTypes = {
    variant: PropTypes.oneOf(['default', 'primary', 'secondary'])
};

ButtonStyle.defaultProps = {
    variant: 'default',
};

