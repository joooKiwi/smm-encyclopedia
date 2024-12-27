import type {NullOr} from '@joookiwi/type'
import {useState}    from 'react'

import {ViewDisplays} from 'display/ViewDisplays'

import Companion = ViewDisplays.Companion

/** @reactHook */
export function useCurrentViewDisplay(key: string,): NullOr<ViewDisplays> {
    const [currentValue, setCurrentValue,] = useState(Companion.currentOrNull,)
    Companion.setOnCurrentEvent(key, setCurrentValue,)
    return currentValue
}
