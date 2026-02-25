import type {Nullable} from '@joookiwi/type'

import {AbstractEventHolder} from 'event/AbstractEventHolder.ts'
import {onceEventOption}     from 'event/EventOptions.ts'

export class OnceEventHolder<const ELEMENT extends Element,
    const TYPE extends string, >
    extends AbstractEventHolder<ELEMENT, TYPE, typeof onceEventOption> {

    public constructor(element: ELEMENT, type: TYPE, eventListener: Nullable<EventListener> = null,) {
        super(element, type, onceEventOption, eventListener,)
    }

}
