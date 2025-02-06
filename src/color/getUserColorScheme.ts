import {ColorThemes} from 'color/ColorThemes'

import Companion = ColorThemes.Companion

export function getUserColorScheme() {
    /** A value that could be stored from another tab in the browser */
    const storedTheme = localStorage.getItem('theme',)
    if (storedTheme == null)
        return Companion.defaultValue
    if (storedTheme === 'auto')
        return ColorThemes.AUTOMATIC
    if (storedTheme === 'light')
        return ColorThemes.LIGHT
    if (storedTheme === 'dark')
        return ColorThemes.DARK
    return Companion.defaultValue
}
