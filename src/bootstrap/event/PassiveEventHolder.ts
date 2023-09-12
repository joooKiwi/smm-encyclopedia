import {EventHolder} from 'bootstrap/event/EventHolder'

export class PassiveEventHolder<const out ELEMENT extends Element, const out EVENT_TYPE extends string, >
    implements EventHolder<ELEMENT, EVENT_TYPE> {

    readonly #element
    #event: | NullOr<EventListener>
    readonly #eventType

    public constructor(element: ELEMENT, type: EVENT_TYPE, eventListener: Nullable<EventListener> = null,) {
        this.#element = element
        this.#eventType = type
        if(eventListener == null)
            this.#event = eventListener
        else
            element.addEventListener(type, this.#event = eventListener, {passive: true,},)
    }


    public get element(): ELEMENT {
        return this.#element
    }

    public get eventType(): EVENT_TYPE {
        return this.#eventType
    }

    public get value(): NullOr<EventListener> {
        return this.#event
    }

    public set value(value: Nullable<EventListener>,) {
        if (value != null) {
            this.element.addEventListener(this.eventType, this.#event = value, {passive: true,},)
            return
        }

        this.#event = null
        const eventListener = this.value
        if (eventListener == null)
            return
        this.element.removeEventListener(this.eventType, eventListener,)
    }

    public setValue(value: Nullable<EventListener>,): this {
        this.value = value
        return this
    }

    public destroy(): void {
        this.value = null
    }

}
