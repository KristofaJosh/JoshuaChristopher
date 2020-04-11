import theme from 'styled-theming';
import {Color, TextSize} from './constants';

export const backgroundColor = theme.variants('mode', 'variant', {
    default: {light: Color.WHITE, dark: Color.NAVY},
    primary: {light: Color.WHITE, dark: Color.NAVY},
    card: {light: Color.CARDGREY, dark: Color.CARDNAVY},
});

export const footerBackgroundColor = theme.variants('mode', 'variant', {
    default: {light: Color.NAVY, dark: Color.GREEN},
    primary: {light: Color.NAVY, dark: Color.GREEN},
});

export const textColor = theme.variants("mode", "variant", {
    default: {light: Color.NAVY, dark: Color.WHITE},
    primary: {light: Color.NAVY, dark: Color.WHITE},
    footer: {light: Color.WHITE, dark: Color.NAVY},
    logo: {light: Color.NAVY, dark: Color.GREEN},
});

export const footerTextColor = theme.variants("mode", "variant", {
    default: {light: Color.WHITE, dark: Color.NAVY},
    primary: {light: Color.WHITE, dark: Color.NAVY},
});

export const buttonBackground = theme.variants("mode", "variant", {
    default: {light: Color.DEFAULT, dark: Color.WHITE},
    primary: {light: Color.DEFAULT, dark: Color.WHITE},
    secondary: {light: Color.WHITE, dark: Color.GREEN},
});

export const buttonText = theme.variants("mode", "variant", {
    default: {light: Color.WHITE, dark: Color.NAVY},
    primary: {light: Color.WHITE, dark: Color.NAVY},
    secondary: {light: Color.NAVY, dark: Color.NAVY},
});

export const buttonBorder = theme.variants("mode", "variant", {
    default: {light: Color.WHITE, dark: Color.NAVY},
    primary: {light: Color.WHITE, dark: Color.NAVY},
    secondary: {light: Color.NAVY, dark: Color.NAVY},
});


export const hover = theme.variants("mode", "variant", {
    default: {light: Color.NAVY, dark: Color.GREEN},
    primary: {light: Color.NAVY, dark: Color.GREEN},
    secondary: {light: Color.WHITE, dark: Color.GREEN},
});


export const fontSize = theme.variants('mode', 'size', {
    default: {light: TextSize.NORMAL, dark: TextSize.NORMAL,},
    big: {light: TextSize.BIG, dark: TextSize.BIG,},
    med: {light: TextSize.MEDIUM, dark: TextSize.MEDIUM,},
    sm: {light: TextSize.SMALL, dark: TextSize.SMALL,},
    xsm: {light: TextSize.X_SMALL, dark: TextSize.X_SMALL,},
    xxsm: {light: TextSize.XX_SMALL, dark: TextSize.X_SMALL,},
    logo: {light: TextSize.NORMAL, dark: TextSize.NORMAL},
});
