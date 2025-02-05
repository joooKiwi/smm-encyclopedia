import {ColorThemes} from 'color/ColorThemes'

export function getUserColorScheme() {
    /** A value that could be stored from another tab in the browser */
    const storedTheme = localStorage.getItem('theme',)
    if (storedTheme == null)
        if (ColorThemes.LIGHT.isMediaQuerySelected)
            return ColorThemes.LIGHT
        else if (ColorThemes.DARK.isMediaQuerySelected)
            return ColorThemes.DARK
        else
            return ColorThemes.AUTOMATIC

    if (storedTheme === 'auto')
        return ColorThemes.AUTOMATIC
    if (storedTheme === 'light')
        return ColorThemes.LIGHT
    if (storedTheme === 'dark')
        return ColorThemes.DARK
    return ColorThemes.AUTOMATIC
}
