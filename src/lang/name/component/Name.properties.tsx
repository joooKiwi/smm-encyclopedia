import type {Dispatch, SetStateAction} from 'react';

import type {HTMLSpanProperties} from '../../../util/react/html/HTMLSpanProperties';
import type {Name}               from '../Name';
import type {ReactProperty}      from '../../../util/react/ReactProperty';

export type PopoverOrientation = | 'auto' | 'top' | 'bottom' | 'left' | 'right';

export interface NameProperties
    extends ReactProperty, Omit<HTMLSpanProperties, | 'key' | 'id' | 'name'> {

    popoverOrientation?: PopoverOrientation

    id: string

    name: Name<string>

}

export interface NamePopoverProperties
    extends ReactProperty {

    id: string

    listId: string

    doesDisplaySpan: boolean

    setDoesDisplayPopover: Dispatch<SetStateAction<boolean>>

    otherProperties: Omit<NameProperties, 'id'>

}

export interface NameListProperties
    extends ReactProperty {

    id: string

    listId: string

    name: Name<string>

    doesDisplayPopover: boolean

}
