import React, {useState} from "react";
import styled from "styled-components";
import Text from "../typography";
import {footerBackgroundColor, textColor} from "../../constants";


export const InputFlatEffect = (props) => {
    const [value, setValue] = useState('');
    
    const valueInInput = (e) => {
        setValue(e.target.value);
        if(props.onChange)props.onChange(e)
    };
    
    return (
        <InputFlatEffectStyle value={value} variant={'primary'}>
            <div className="style-two">
                <div className="inputStyle">
                    <input type={props.type} name={props.name} className='input'
                           value={props.value}
                           onChange={valueInInput}/>
                    <label htmlFor={props.name} className="label">
                        <Text>{props.label}</Text>
                    </label>
                </div>
            </div>
        </InputFlatEffectStyle>
    )
};

export const TextAreaBox = (props) => {
    
    return (
        <>
            <TextAreaStyleBox {...props}>
                <label htmlFor={props.name} className="labelBox">
                    <Text type={'text'} weight={props.weight} color={props.color} case={props.case}>{props.label}</Text>
                </label>
                <textarea className="textBox" name={props.name} value={props.value}
                          placeholder={props.placeholder} onChange={props.onChange}/>
            </TextAreaStyleBox>
        </>
    )
};


const TextAreaStyleBox = styled.div`
    color: ${props=> props.inputColor || props.soft};
    display: flex;
    flex-direction: column;
    width: 100%;
    
    p {margin: 0;};
    
    .icon {
        position: absolute;
        top: 28px;
        left: 22px;
    }
    
    
    .textBox {
        margin-top: 5px;
        border: 1px solid #979797;
        padding: 0.9rem;
        border-radius: 3.5px;
        font-weight: 600;
        font-size: 1rem;
        text-indent: ${props => props.icon ? '30px' : ''};
        min-height: 85px;
        resize: ${props=>props.resize || null};
        
       ::placeholder {
          color:    #979797;
          font-weight: normal;
        }
    };
    
    
    .labelBox {
        font-size: 1rem;
        text-transform: ${props=> props.caps ? 'uppercase' : 'capitalize'};
        color: ${props => props.labelColor ? props.labelColor : '#979797'}
        p{margin: 0;};
    }
`;



const InputFlatEffectStyle = styled.div`
    margin: 0 0.3rem;
    color: ${props=> props.inputColor || 'black'};
    width: 100%;


    .inputStyle {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 50px;
        padding: 2px;
        border-bottom: 3px solid ${footerBackgroundColor};
    }

    .label {
        position: relative;
        top: ${props => props.value ? '-20px' : '1px'};
        margin-left: 5px;
        font-size: 1rem;
        transition: top ease-in-out 0.5s;
        color: ${textColor};
        font-weight: ${props => props.value ? 'normal' : '600'};
        p {margin: 0;};
    }

    .input {
        position: relative;
        top: 25px;
        text-indent: 5px;
        background-color: transparent;
        font-size: 1rem;
        font-weight: 600;
        z-index: 2;
        border: none;
        outline: none;
        color: ${textColor};
    }
    
    .input:focus + label {
        color: #979797;
        top: ${props => props.value ? '-1.25rem' : '-0.125rem'};
        font-size: ${props => props.value ? '0.8125rem' : '1rem'};
        font-weight: normal;
    }

`;

export default InputFlatEffect;
