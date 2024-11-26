import type {Nullable, NullOr} from '@joookiwi/type'
import type {Offcanvas}        from 'bootstrap'

import type {BootstrapWithBasicEventInstanceDeclaration} from 'bootstrap/BootstrapWithBasicEventInstance.declaration'
import type {EventHolder}                                from 'bootstrap/event/EventHolder'

export interface OffcanvasInstanceDeclaration<ELEMENT extends Element = Element,
    out ID extends string = string, >
    extends BootstrapWithBasicEventInstanceDeclaration<Offcanvas, ELEMENT, ID, Offcanvas.Events.show, Offcanvas.Events.shown, Offcanvas.Events.hide, Offcanvas.Events.hidden> {

    /**
     * The 'show.bs.offcanvas' event holder
     * @see Offcanvas.Events.show
     */
    get onShowEvent(): NullOr<EventHolder<ELEMENT, Offcanvas.Events.show>>

    /**
     * Set the 'show.bs.offcanvas' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Offcanvas.Events.show
     */
    set onShowEvent(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.show>>,)

    /**
     * Set the 'show.bs.offcanvas' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Offcanvas.Events.show
     */
    onShow(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.show>>,): this


    /**
     * The 'shown.bs.offcanvas' event holder
     * @see Offcanvas.Events.shown
     */
    get onShownEvent(): NullOr<EventHolder<ELEMENT, Offcanvas.Events.shown>>

    /**
     * Set the 'shown.bs.offcanvas' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Offcanvas.Events.shown
     */
    set onShownEvent(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.shown>>,)

    /**
     * Set the 'shown.bs.offcanvas' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Offcanvas.Events.shown
     */
    onShown(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.shown>>,): this


    /**
     * The 'hide.bs.offcanvas' event holder
     * @see Offcanvas.Events.hide
     */
    get onHideEvent(): NullOr<EventHolder<ELEMENT, Offcanvas.Events.hide>>

    /**
     * Set the 'hide.bs.offcanvas' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Offcanvas.Events.hide
     */
    set onHideEvent(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.hide>>,)

    /**
     * Set the 'hide.bs.offcanvas' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Offcanvas.Events.hide
     */
    onHide(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.hide>>,): this


    /**
     * The 'hidden.bs.offcanvas' event holder
     * @see Offcanvas.Events.hidden
     */
    get onHiddenEvent(): NullOr<EventHolder<ELEMENT, Offcanvas.Events.hidden>>

    /**
     * Set the 'hidden.bs.offcanvas' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Offcanvas.Events.hidden
     */
    set onHiddenEvent(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.hidden>>,)

    /**
     * Set the 'hidden.bs.offcanvas' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Offcanvas.Events.hidden
     */
    onHidden(value: Nullable<| OffcanvasEventCallback<this> | EventHolder<ELEMENT, Offcanvas.Events.hidden>>,): this

}

export type OffcanvasEventCallback<I extends OffcanvasInstanceDeclaration<any, any> = OffcanvasInstanceDeclaration, > = (instance: I, event: Event,) => void
