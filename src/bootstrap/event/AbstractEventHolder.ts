import type {Nullable, NullOr} from '@joookiwi/type'

import {EventHolder} from 'bootstrap/event/EventHolder'

export abstract class AbstractEventHolder<const ELEMENT extends Element,
    const TYPE extends string = string,
    const OPTION extends AddEventListenerOptions = AddEventListenerOptions, >
    implements EventHolder<ELEMENT, TYPE> {

    readonly #element
    #event: NullOr<EventListener>
    readonly #type
    readonly #option

    protected constructor(element: ELEMENT, type: TYPE, option: OPTION, eventListener: Nullable<EventListener> = null,) {
        this.#element = element
        this.#type = type
        this.#option = option
        if (eventListener == null)
            this.#event = null
        else
            element.addEventListener(type, this.#event = eventListener, option,)
    }


    public get element(): ELEMENT {
        return this.#element
    }

    public get type(): TYPE {
        return this.#type
    }

    public get option(): OPTION {
        return this.#option
    }

    public get value(): NullOr<EventListener> {
        return this.#event
    }

    public set value(value: Nullable<EventListener>,) {
        if (value != null) {
            this.element.addEventListener(this.type, this.#event = value, this.option,)
            return
        }

        this.#event = null
        const eventListener = this.value
        if (eventListener == null)
            return
        this.element.removeEventListener(this.type, eventListener,)
    }

    public setValue(value: Nullable<EventListener>,): this {
        this.value = value
        return this
    }

    public destroy(): void {
        this.value = null
    }

}
