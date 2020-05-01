import React, {useState} from "react";
import Header from "../../Components/molecules/header";
import {Content, Inner, InnerLeft} from "../templates";
import {InputFlatEffect, TextAreaBox} from "../../Components/atoms/inputs";
import Button from "../../Components/atoms/button";
import axios from 'axios';

export default function BriefMe() {
    const [form, setForm] = useState({fullName: '', email: '', message: ''});
    const [error, setError] = useState({type: '', message: ''});
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };
    
    setTimeout(() => {
        if (error.message !== '') {
            setError({type: '', message: ''})
        }
    }, 2000);
    
    const sendMessage = () => {
        if (form.message === '' || form.email === '' || form.fullName === '') {
            setError({type: 'red', message: 'Complete all fields above'})
        } else {
            setLoading(true);
            axios({
                method: 'POST',
                url: "https://chrisjoshportfolio.herokuapp.com/jobs/",
                data: JSON.stringify(form)
            }).then((response)=>{
                setLoading(false);
                setForm({fullName: '', email: '', message: ''});
                setError({type: 'green', message: "Message Sent."});
                
            }).catch((err)=>{
                setLoading(false);
                setError({type: 'red', message: err.message});
            });
            
        }
    };
    
    
    return (
        <>
            <Header text={'Send Me A Message'}/>
            <Content>
                <InnerLeft>
                    <Inner>
                        <InputFlatEffect label={'Full Name'} name={'fullName'} onChange={handleChange}/>
                    </Inner>
                    <Inner>
                        <InputFlatEffect label={'Email'} name={'email'} onChange={handleChange}/>
                    </Inner>
                    <Inner>
                        <TextAreaBox name={'message'} onChange={handleChange}/>
                    </Inner>
                    <span style={{color: error.type}}>{error.message}</span>
                    <Inner>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-start'}}>
                            <Button variant={'primary'} onClick={sendMessage}>
                                {loading ?
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    :
                                    'Send'}
                            </Button>
                        </div>
                    </Inner>
                </InnerLeft>
                <InnerLeft>
                    {/*<Text>*/}
                    {/*    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo*/}
                    {/*    dolor nihil animi similique eveniet! Lorem ipsum, dolor sit amet*/}
                    {/*    consectetur adipisicing elit. Non, nemo dolor nihil animi similique*/}
                    {/*    eveniet!*/}
                    {/*</Text>*/}
                    {/*<Text>*/}
                    {/*    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, nemo*/}
                    {/*    eveniet!*/}
                    {/*</Text>*/}
                </InnerLeft>
            </Content>
        </>
    )
}