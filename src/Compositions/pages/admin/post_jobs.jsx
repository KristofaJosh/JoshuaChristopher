import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Text from "../../../Components/atoms/typography";
import Button from "../../../Components/atoms/button";
import axios from 'axios';
import {textColor} from "../../../Components/constants";

const PostJob = () => {
    const [form, setForm] = useState({
        name: '',
        project_details: {
            description: '',
            tools: '',
            link: '',
            repository: '',
        },
        project_snapshot: '',
    });
    
    let result, data; //temp data to append screenshot
    
    
    const [message, setMessage] = useState('');
    const [linkState, setLinkState] = useState('');
    const [loader, setLoader] = useState(false);
    
    const WebImage = async (url, access_key, width, height, upload_preset) => {
        let resolved_url = url.replace(/:/g, "%3A").replace(/\//g, "%2F");
        let formData = new FormData();
        
        setMessage('getting image');
        
        axios({
            url: `https://api.apiflash.com/v1/urltoimage?access_key=${access_key}&format=png&height=${height}&response_type=json&url=${resolved_url}&width=${width}`,
            method: "GET",
            responseType: "json",
        }).then((response) => {
                setMessage('linking to cloudinary account');
                formData.append('file', response.data.url);
                formData.append('upload_preset', upload_preset);
                axios({
                    url: "https://api.cloudinary.com/v1_1/webweavers/upload",
                    method: "POST",
                    data: formData,
                })
                    .then((response) => {
                        setMessage('image created and link created!');
                        data['project_snapshot'] = response.data.url.replace(/upload/g, "upload/w_400/");
                        setLinkState('Available');
                        setLoader(false)
                    })
                    .catch((err) => {
                        setLinkState('Are you sure the site is available ?');
                        setMessage(err.message + '. Image was not created, try again');
                        setLoader(false)
                    })
            }
        ).catch((err) => {
            setMessage('Not Found, Did you forget to add http:// or https:// ?');
            setLoader(false)
        });
    };
    
    
    const CreateProject = (e) => {
        setMessage('');
        setForm({
                ...form, [e.target.name]: e.target.value.trim(),
                project_details:
                    {
                        ...form.project_details, [e.target.name]:
                            e.target.name === 'tools' ?
                                e.target.value.replace(/,/g, ' ').trim().toLowerCase() : e.target.value.trim()
                    },
            }
        );
        
    };
    
    useEffect(() => {
    
    }, [form, message]);
    
    
    const SendForm = (e) => {
        e.preventDefault();
        
        if (form.project_details.tools) {
            if (typeof (form.project_details.tools) === 'object') {
                result = form.project_details.tools.join().split(' ').filter(el => el !== '');
            } else {
                result = form.project_details.tools.split(' ').filter(el => el !== '');
            }
            data = {...form, project_details: {...form.project_details, tools: result}};
            console.log(data);
            setForm(data);
            
            if (form.project_details.link) {
                setLoader(true);
                WebImage(
                    form.project_details.link,
                    "77460fb38d424cf4ae8f640f8bb0a541",
                    1440,
                    1080,
                    "eaggx3vk"
                )
            }
            
        }
        
        
    };
    
    return (
        <PostFormStyle>
            <FormStyle>
                <form action="" onSubmit={SendForm}>
                    
                    <div>
                        <Text>Project Name:</Text>
                        <input type="text" name='name' onChange={CreateProject} required/>
                    </div>
                    <div>
                        <Text>Project Description:</Text>
                        <textarea rows={'100px'} cols={'100%'} name='description' onChange={CreateProject}/>
                    </div>
                    <div>
                        <Text>Tools:</Text>
                        <input type="text" name='tools' onChange={CreateProject}
                               placeholder={'python javascript ruby ...'} required/>
                    </div>
                    <div>
                        <Text>Project Link:</Text>
                        <span>
                            <span className={'loader'}>O</span>
                            <input className={'loader-input'} type="text" name='link' placeholder={'http://'}
                                   onChange={CreateProject}/>
                            <span className={'linkState'}>{linkState}</span>
                        </span>
                    </div>
                    <div>
                        <Text>Repository:</Text>
                        <input type="text" name='repository' onChange={CreateProject}/>
                    </div>
                    
                    <div className={'btn-message'}>
                        <Button variant={'secondary'}
                                disabled={!form.project_details.tools || !form.project_details.description || !form.project_details.name || !form.project_details.link}
                                type={'submit'}>{form.project_snapshot ? 'Post Project' : 'Create Project'}</Button>
                        <span className={'error'}><Text size={'xxsm'}>{message}</Text></span>
                        <span style={{width: '20%'}}>{loader ?
                            <div className="spinner-border" role="status">
                                <span className="sr-only"/>
                            </div>
                            :
                            ''
                        }</span>
                    </div>
                
                </form>
            </FormStyle>
            
            <PreviewStyle>
                <div>
                    <div className={'valueBlock'}>
                        <Text type={'med'}>Name:</Text>
                        <span>{form.name || 'waiting for input ...'}</span>
                    </div>
                    
                    <div className={'valueBlock'}>
                        <Text type={'med'}>Project Description:</Text>
                        <span>{form.project_details.description || 'waiting for input ...'}</span>
                    </div>
                    <div className={'valueBlock'}>
                        <Text type={'med'}>Tools Used In Project:</Text>
                        <span>{
                            form.project_details.tools.length > 0 && typeof (form.project_details.tools) === 'string' ?
                                form.project_details.tools
                                    .replace(',', '')
                                    .replace('.', '')
                                    .replace('and', '')
                                    .split(' ')
                                    .filter(el => el !== '')
                                    .map(el => (<i className={'tools devicon-' + el + '-plain'}/>))
                                :
                                typeof (form.project_details.tools) === 'object' ?
                                    form.project_details.tools.map(el => (
                                        <i className={'tools devicon-' + el + '-plain'}/>)) : 'waiting for input ...'
                        }
                        </span>
                    </div>
                    <div className={'valueBlock'}>
                        <Text type={'med'}>Web Link to Project:</Text>
                        <span>{form.project_details.link || 'waiting for input ...'}</span>
                    </div>
                    <div className={'valueBlock'}>
                        <Text type={'med'}>Link to Repository:</Text>
                        <span>{form.project_details.repository || 'waiting for input ...'}</span>
                    </div>
                    <div className={'valueBlock'}>
                        <Text type={'med'}>Generated Shot:</Text>
                        <span>{form.project_snapshot ?
                            <a href={form.project_snapshot || '#'}>Preview Screenshot</a>
                            : 'waiting for input ...'}
                            </span>
                    </div>
                    <div className={'valueBlock'}>
                        <Text type={'med'}>Image Preview:</Text>
                        <span><div>{form.project_snapshot ?
                            <img src={form.project_snapshot} alt="loading screenshot"/> :
                            <>
                                <span style={{width: '20%'}}>{loader ?
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only"/>
                                    </div>
                                    : ''}
                                </span>
                            </>
                        }</div></span>
                    </div>
                </div>
            
            </PreviewStyle>
        </PostFormStyle>
    )
};

const PostFormStyle = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width: 900px){
        flex-direction: column-reverse;
    }
`;

const FormStyle = styled.div`
    width: 60%;
    form {
        div {
            margin: 3rem;
            input {
                height: 3rem;
                width: 100%;
                text-indent: 1rem;
            };
            textarea {
                height: 6rem;
                width: 100%;
                padding: 1rem;
            };
            p {
                font-weight: bolder;
            };
            span{
            position: relative;
            .loader {
                position: absolute;
                color: black;
                right: 10px;
                display: flex;
                align-items: center;
                top: 0;
                bottom: 0;}
                .loader-input {padding-right: 50px;}
            }
                .linkState {font-size: 0.7rem; color: grey; font-style: italic;}
        }
        .btn-message {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .error {color: red};
        }
    }
    @media screen and (max-width: 900px){
            width: 100%;
    }
`;

const PreviewStyle = styled.div`
    border: 1px solid ${textColor};
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    display: flex;
    // align-items: center;
    width: 40%;
    font-family: consolas;
    div {
        width: 100%;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;
        
        .valueBlock {
            p {font-weight: bold;}
            margin: 1rem 0;
            span {
                // width: 100%;
                word-wrap: break-word;
            }
            span div {
                padding: 1rem;
                img {width: 100%}
            }
            .tools {
                padding: 0.3rem;
            }
        }
        .valueBlock:last-child{
            border-top: 1px solid ${textColor};
        }
       
    }
        @media screen and (max-width: 900px){
            width: 100%;
    }
    
    
`;

export default PostJob;