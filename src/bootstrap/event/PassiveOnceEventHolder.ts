import type {Nullable} from '@joookiwi/type'

import {AbstractEventHolder}    from 'bootstrap/event/AbstractEventHolder'
import {passiveOnceEventOption} from 'bootstrap/event/EventOptions'

export class PassiveOnceEventHolder<const ELEMENT extends Element,
    const TYPE extends string, >
    extends AbstractEventHolder<ELEMENT, TYPE, typeof passiveOnceEventOption> {

    public constructor(element: ELEMENT, type: TYPE, eventListener: Nullable<EventListener> = null,) {
        super(element, type, passiveOnceEventOption, eventListener,)
    }

}
