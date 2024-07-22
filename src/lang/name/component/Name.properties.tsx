import type {Dispatch, SetStateAction} from 'react'

import type {PopoverOrientation} from 'bootstrap/popover/PopoverInstance.declaration'
import type {Name}               from 'lang/name/Name'
import type {ReactProperties}    from 'util/react/ReactProperties'
import type {ReactState}         from 'util/react/ReactState'
import type {HTMLSpanProperties} from 'util/react/html/HTMLSpanProperties'

export interface NameProperties
    extends ReactProperties, Omit<HTMLSpanProperties, | 'key' | 'id' | 'name'> {

    readonly popoverOrientation?: PopoverOrientation

    readonly id: string

    readonly name: Name<string>

}

export interface NamePopoverProperties
    extends ReactProperties {

    readonly id: string

    readonly listId: string

    readonly setDoesDisplayPopover: Dispatch<SetStateAction<boolean>>

    readonly otherProperties: Omit<NameProperties, 'id'>

}

export interface NamePopoverStates
    extends ReactState {

    readonly element: NonNullReactElement

}

export interface NameListProperties
    extends ReactProperties {

    /** The key applicable to every component */
    readonly id: string

    /** The container ID */
    readonly listId: string

    /** The class having a {@link Name} to retrieve its languages values */
    readonly name: Name<string>

    /** The popover is displayed */
    readonly doesDisplayPopover: boolean

}
