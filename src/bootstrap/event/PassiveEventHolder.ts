import type {Nullable} from '@joookiwi/type'

import {AbstractEventHolder} from 'bootstrap/event/AbstractEventHolder'
import {passiveEventOption}  from 'bootstrap/event/EventOptions'

export class PassiveEventHolder<const ELEMENT extends Element,
    const TYPE extends string, >
    extends AbstractEventHolder<ELEMENT, TYPE, typeof passiveEventOption> {

    public constructor(element: ELEMENT, type: TYPE, eventListener: Nullable<EventListener> = null,) {
        super(element, type, passiveEventOption, eventListener,)
    }

}
