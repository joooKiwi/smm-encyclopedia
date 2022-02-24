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