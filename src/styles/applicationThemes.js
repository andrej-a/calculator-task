import sharedOptions from "./sharedOptions";

export const themeOptions = {
    darkTheme: {
        MAIN_BACKGROUND_COLOR: '#000',
        MAIN_COLOR: '#434343',
        BORDER_COLOR: '#707070',
        SECOND_BORDER_COLOR: '#ebebeb',
        FONT_COLOR: '#fff',
        SECOND_FONT_COLOR: '#fefefe',
        BUTTON_BACKGROUND_COLOR: '#F2F2F2',
        BUTTON_COLOR: '#000',
        CLEAR_HISTORY_BUTTON_COLOR: '#000',
        ...sharedOptions
    },

    lightTheme: {
        MAIN_BACKGROUND_COLOR: '#FFFFFF',
        MAIN_COLOR: '#434343',
        BORDER_COLOR: '#707070',
        SECOND_BORDER_COLOR: '#434343',
        FONT_COLOR: '#000',
        SECOND_FONT_COLOR: '#fff',
        BUTTON_BACKGROUND_COLOR: '#F2F2F2',
        BUTTON_COLOR: '#000',
        CLEAR_HISTORY_BUTTON_COLOR: '#000',
        ...sharedOptions
    }
};

export const activeStyle = {
    borderBottom: `2px solid #fefefe`
};
export const nonActive = {
    opacity: '0.7'
};
