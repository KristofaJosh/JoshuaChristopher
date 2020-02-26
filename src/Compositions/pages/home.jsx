import React from "react";
import Text from '../../Components/atoms/typography';
import Button from '../../Components/atoms/button';
import Logo from '../../Components/atoms/logo';
import {Link} from "react-router-dom";


export default function Home() {
    return (
        <>
            <Text size={'big'}>Home Page</Text>
            <Text size={'med'}>Home Page</Text>
            <Text size={'default'}>Home Page</Text>
            <Text size={'sm'}>Home Page</Text>
            <Text size={'xsm'}>Home Page</Text>
            <Button variant={'primary'}>Contact Me</Button>
            <Button variant={'secondary'}>Brief Me</Button>
            <Logo variant={'logo'} text={'Joshua Christopher'}/>
            <Link to={'/about'}>About</Link>

        </>
    )
}