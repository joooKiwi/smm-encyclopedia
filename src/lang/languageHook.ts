import {useState} from 'react'

import {EveryLanguages} from 'lang/EveryLanguages'

const LanguageCompanion = EveryLanguages.CompanionEnum.get

/** @reactHook */
export function useCurrentLanguage(key: string,): NullOr<EveryLanguages> {
    const [currentValue, setCurrentValue,] = useState(LanguageCompanion.currentOrNull,)
    LanguageCompanion.setOnCurrentEvent(key, setCurrentValue,)
    return currentValue
}
