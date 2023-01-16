import type {Dispatch, SetStateAction} from 'react'

import type {PopoverOrientation}            from 'bootstrap/popover/Popover.types'
import type {Name}                          from 'lang/name/Name'
import type {ReactElement, ReactProperties} from 'util/react/ReactProperties'
import type {ReactState}                    from 'util/react/ReactState'
import type {HTMLSpanProperties}            from 'util/react/html/HTMLSpanProperties'

export interface NameProperties
    extends ReactProperties, Omit<HTMLSpanProperties, | 'key' | 'id' | 'name'> {

    popoverOrientation?: PopoverOrientation

    id: string

    name: Name<string>

}

export interface NamePopoverProperties
    extends ReactProperties {

    id: string

    listId: string

    setDoesDisplayPopover: Dispatch<SetStateAction<boolean>>

    otherProperties: Omit<NameProperties, 'id'>

}

export interface NamePopoverStates
    extends ReactState {

    element: NonNullable<ReactElement>

}

export interface NameListProperties
    extends ReactProperties {

    id: string

    listId: string

    name: Name<string>

    doesDisplayPopover: boolean

}
