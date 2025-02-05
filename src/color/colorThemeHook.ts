import type {NullOr} from '@joookiwi/type'
import {useState}    from 'react'

import {ColorThemes} from 'color/ColorThemes'

import Companion = ColorThemes.Companion

/** @reactHook */
export function useCurrentColorTheme(key: string,): NullOr<ColorThemes> {
    const [currentValue, setCurrentValue,] = useState(Companion.currentOrNull,)
    Companion.setOnCurrentEvent(key, setCurrentValue,)
    return currentValue
}
