import type {Nullable, NullOr} from '@joookiwi/type'

/** The structure of an {@link EventListener} holder for a selected {@link EventHolder.element element} */
export interface EventHolder<out ELEMENT extends Element, out EVENT_TYPE extends string, > {

    /**
     * The element to {@link Element.addEventListener add} and {@link Element.removeEventListener remove}
     * an {@link EventListener event listener} with its {@link eventType type}
     */
    get element(): ELEMENT

    /** The type of event associated to the {@link EventListener event listener} */
    get eventType(): EVENT_TYPE

    /** The {@link EventListener event listener} associated to the current instance */
    get value(): NullOr<EventListener>

    /**
     * Set the {@link EventListener event listener} or remove it (if <b>null</b>)
     *
     * @param value The {@link Nullable nullable} {@link EventListener event listener}
     */
    set value(value: Nullable<EventListener>,)

    /**
     * Set the event listener or remove it (if <b>null</b>)
     * And continue the execution in the instance
     *
     * @param value The {@link Nullable nullable} {@link EventListener event listener}
     */
    setValue(value: Nullable<EventListener>,): this

    /** Destroy everything in the current instance */
    destroy(): void

}
