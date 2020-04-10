import React, {useState} from "react";
import StyleContext from "./styleContext";
import { ThemeProvider } from 'styled-components';

export default function StyleProvider(props) {

    function createCookie(mode) {
        let date = new Date();
        const expires = date.setMinutes(date.getMinutes() + 1);
        document.cookie = `mode=${mode}; max-age=3600; expires=${expires};`;
    }

    function getCookie() {
        let name = 'mode=';
        let allCookieArray = document.cookie.split(';');
        for (let i = 0; i < allCookieArray.length; i++) {
            let temp = allCookieArray[i].trim();
            if (temp.indexOf(name) === 0)
                return (temp.substring(name.length, temp.length));
        }
    }


    const [mode, setMode] = useState(getCookie() || 'dark');

    function changeTheme() {
        mode === 'light' ? setMode('dark') : setMode('light');
    }
    createCookie(mode);

    return (

        <StyleContext.Provider value={{changeTheme}}>

            <ThemeProvider theme={{mode}}>
                {props.children}
            </ThemeProvider>

        </StyleContext.Provider>
    )
}