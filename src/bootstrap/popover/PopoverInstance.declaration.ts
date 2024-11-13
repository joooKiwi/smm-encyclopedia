import type {Nullable, NullOr} from '@joookiwi/type'
import type Popover            from 'bootstrap/js/dist/popover'

import type {BootstrapWithBasicEventInstanceDeclaration} from 'bootstrap/BootstrapWithBasicEventInstance.declaration'
import type {EventHolder}                                from 'bootstrap/event/EventHolder'

export interface PopoverInstanceDeclaration<ELEMENT extends HTMLElement = HTMLElement,
    out ID extends string = string, >
    extends BootstrapWithBasicEventInstanceDeclaration<Popover, ELEMENT, ID, Popover.Events.show, Popover.Events.shown, Popover.Events.hide, Popover.Events.hidden> {


    /**
     * The 'show.bs.popover' event holder
     * @see Popover.Events.show
     */
    get onShowEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.show>>

    /**
     * Set the 'show.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.show
     */
    set onShowEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.show>>,)

    /**
     * Set the 'show.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.show
     */
    onShow(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.show>>,): this


    /**
     * The 'shown.bs.popover' event holder
     * @see Popover.Events.shown
     */
    get onShownEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.shown>>

    /**
     * Set the 'shown.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.shown
     */
    set onShownEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.shown>>,)

    /**
     * Set the 'shown.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.shown
     */
    onShown(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.shown>>,): this


    /**
     * The 'hide.bs.popover' event holder
     * @see Popover.Events.hide
     */
    get onHideEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.hide>>

    /**
     * Set the 'hide.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.hide
     */
    set onHideEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.hide>>,)

    /**
     * Set the 'hide.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.hide
     */
    onHide(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.hide>>,): this


    /**
     * The 'hidden.bs.popover' event holder
     * @see Popover.Events.hidden
     */
    get onHiddenEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.hidden>>

    /**
     * Set the 'hidden.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.hidden
     */
    set onHiddenEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.hidden>>,)

    /**
     * Set the 'hidden.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.hidden
     */
    onHidden(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.hidden>>,): this


    /**
     * The 'inserted.bs.popover' event holder
     * @see Popover.Events.inserted
     */
    get onInsertedEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.inserted>>

    /**
     * Set the 'inserted.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.inserted
     */
    set onInsertedEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.inserted>>,)

    /**
     * Set the 'inserted.bs.popover' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Popover.Events.inserted
     */
    onInserted(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.inserted>>,): this

}


export type PopoverEventCallback<I extends PopoverInstanceDeclaration<any, any> = PopoverInstanceDeclaration, > = (instance: I, event: Event,) => void
