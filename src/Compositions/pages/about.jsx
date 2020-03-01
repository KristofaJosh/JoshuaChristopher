import React from "react";
import Header from "../../Components/molecules/header";
import {Content, InnerLeft} from "../templates";


export default function About() {
    return (
        <>
        <Header text={'About Me'}/>
            <Content>
                <InnerLeft>test</InnerLeft>
                <InnerLeft>test</InnerLeft>
            </Content>
        </>
    )
}