import {useState} from 'react'

import {ViewDisplays} from 'app/withInterpreter/ViewDisplays'

/** @reactHook */
export function useCurrentViewDisplay(key: string,): NullOr<ViewDisplays> {
    const [currentValue, setCurrentValue,] = useState(ViewDisplays.CompanionEnum.get.currentOrNull,)
    ViewDisplays.CompanionEnum.get.setOnCurrentEvent(key, setCurrentValue,)
    return currentValue
}
