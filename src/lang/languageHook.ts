import {useState} from 'react'

import {EveryLanguages} from 'lang/EveryLanguages'

/** @reactHook */
export function useCurrentLanguage(key: string,): NullOr<EveryLanguages> {
    const [currentValue, setCurrentValue,] = useState(EveryLanguages.CompanionEnum.get.currentOrNull,)
    EveryLanguages.CompanionEnum.get.setOnCurrentEvent(key, setCurrentValue,)
    return currentValue
}
