import {ReactProperty}      from '../../../util/react/ReactProperty';
import {HTMLSpanProperties} from '../../../util/react/html/HTMLSpanProperties';
import {Name}               from '../Name';

export type PopoverOrientation = | 'auto' | 'top' | 'bottom' | 'left' | 'right';

export interface NameProperties
    extends ReactProperty, Omit<HTMLSpanProperties, | 'key' | 'id' | 'name'> {

    popoverOrientation?: PopoverOrientation

    id: string

    name: Name

}