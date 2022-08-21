import type {Dispatch, SetStateAction} from 'react';

import type {HTMLSpanProperties}            from '../../../util/react/html/HTMLSpanProperties';
import type {Name}                          from '../Name';
import type {ReactElement, ReactProperties} from '../../../util/react/ReactProperties';
import type {ReactState}                    from '../../../util/react/ReactState';

export type PopoverOrientation = | 'auto' | 'top' | 'bottom' | 'left' | 'right';

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

    element: ReactElement

}

export interface NameListProperties
    extends ReactProperties {

    id: string

    listId: string

    name: Name<string>

    doesDisplayPopover: boolean

}
