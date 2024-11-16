import type {NullOr} from '@joookiwi/type'
import {useState}    from 'react'

import {EveryLanguages} from 'lang/EveryLanguages'

import Companion = EveryLanguages.Companion

/** @reactHook */
export function useCurrentLanguage(key: string,): NullOr<EveryLanguages> {
    const [currentValue, setCurrentValue,] = useState(Companion.currentOrNull,)
    Companion.setOnCurrentEvent(key, setCurrentValue,)
    return currentValue
}
