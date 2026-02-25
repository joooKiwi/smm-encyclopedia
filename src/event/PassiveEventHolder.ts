import type {Nullable} from '@joookiwi/type'

import {AbstractEventHolder} from 'event/AbstractEventHolder.ts'
import {passiveEventOption}  from 'event/EventOptions.ts'

export class PassiveEventHolder<const ELEMENT extends Element,
    const TYPE extends string, >
    extends AbstractEventHolder<ELEMENT, TYPE, typeof passiveEventOption> {

    public constructor(element: ELEMENT, type: TYPE, eventListener: Nullable<EventListener> = null,) {
        super(element, type, passiveEventOption, eventListener,)
    }

}
