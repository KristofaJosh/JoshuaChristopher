import React from "react";
import styled from "styled-components";
import Text from '../typography';
import PropTypes from 'prop-types';
import {buttonBackground, buttonBorder, buttonText, hover} from '../../constants';


let element = '';

export default function Button(props) {
    if (props.link) {
        
        element =
            <>
                <ButtonStyle variant={props.variant} onClick={props.fn} {...props}>
                    <a href="tel:+2348166870575"><Text>{props.children}
                        <span> /&gt;</span></Text></a>
                </ButtonStyle>
            </>
        
    } else {
        element =
            <>
                <ButtonStyle variant={props.variant} onClick={props.fn} {...props}>
                    <Text>{props.children}<span> /&gt;</span></Text>
                </ButtonStyle>
            </>
    }
    
    
    if (props.empty) {
        element =
            <>
                <ButtonStyle variant={props.variant} onClick={props.fn} {...props}>
                    <Text>{props.children}</Text>
                </ButtonStyle>
            </>
    }
    
    
    return (
        <>{element}</>
    );
}

const ButtonStyle = styled.button`
  background-color: ${buttonBackground};
  color: ${buttonText};
  border: 2px solid ${buttonBorder};
  border-radius: 5.3px;
  padding: 0.5rem;
  font-weight: 700;
  margin: 1rem 0;
  
  a {   color: ${buttonText};}
  
  &:hover {
    background-color: ${hover};
  }
`;

ButtonStyle.propTypes = {
    variant: PropTypes.oneOf(['default', 'primary', 'secondary'])
};

ButtonStyle.defaultProps = {
    variant: 'default',
};

