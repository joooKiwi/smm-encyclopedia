import type {Dispatch, SetStateAction} from 'react'

import type {PopoverOrientation} from 'bootstrap/popover/Popover.types'
import type {Name}               from 'lang/name/Name'
import type {ReactProperties}    from 'util/react/ReactProperties'
import type {ReactState}         from 'util/react/ReactState'
import type {HTMLSpanProperties} from 'util/react/html/HTMLSpanProperties'

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

    /** The key applicable to every component */
    id: string

    /** The container ID */
    listId: string

    /** The class having a {@link Name} to retrieve its languages values */
    name: Name<string>

    /** The popover is displayed */
    doesDisplayPopover: boolean

}
