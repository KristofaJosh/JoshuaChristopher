import {createContext} from 'react';

const StyleContext = createContext({
        mode: "dark",
        changeTheme: () => {
        }
    }
);

export default StyleContext;