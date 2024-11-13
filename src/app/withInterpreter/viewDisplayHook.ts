import type {NullOr} from '@joookiwi/type'
import {useState}    from 'react'

import {ViewDisplays} from 'app/withInterpreter/ViewDisplays'

const ViewDisplayCompanion = ViewDisplays.CompanionEnum.get

/** @reactHook */
export function useCurrentViewDisplay(key: string,): NullOr<ViewDisplays> {
    const [currentValue, setCurrentValue,] = useState(ViewDisplayCompanion.currentOrNull,)
    ViewDisplayCompanion.setOnCurrentEvent(key, setCurrentValue,)
    return currentValue
}
