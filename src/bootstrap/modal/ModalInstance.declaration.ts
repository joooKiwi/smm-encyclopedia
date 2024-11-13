import type {Nullable, NullOr} from '@joookiwi/type'
import type Modal              from 'bootstrap/js/dist/modal'

import type {BootstrapWithBasicEventInstanceDeclaration} from 'bootstrap/BootstrapWithBasicEventInstance.declaration'
import type {EventHolder}                                from 'bootstrap/event/EventHolder'

export interface ModalInstanceDeclaration<ELEMENT extends Element = Element,
    out ID extends string = string, >
    extends BootstrapWithBasicEventInstanceDeclaration<Modal, ELEMENT, ID, Modal.Events.show, Modal.Events.shown, Modal.Events.hide, Modal.Events.hidden> {

    /**
     * The 'show.bs.modal' event holder
     * @see Modal.Events.show
     */
    get onShowEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.show>>

    /**
     * Set the 'show.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.show
     */
    set onShowEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.show>>,)

    /**
     * Set the 'show.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.show
     */
    onShow(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.show>>,): this


    /**
     * The 'shown.bs.modal' event holder
     * @see Modal.Events.shown
     */
    get onShownEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.shown>>

    /**
     * Set the 'shown.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.shown
     */
    set onShownEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.shown>>,)

    /**
     * Set the 'shown.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.shown
     */
    onShown(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.shown>>,): this


    /**
     * The 'hide.bs.modal' event holder
     * @see Modal.Events.hide
     */
    get onHideEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.hide>>

    /**
     * Set the 'hide.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.hide
     */
    set onHideEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hide>>,)

    /**
     * Set the 'hide.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.hide
     */
    onHide(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hide>>,): this


    /**
     * The 'hidden.bs.modal' event holder
     * @see Modal.Events.hidden
     */
    get onHiddenEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.hidden>>

    /**
     * Set the 'hidden.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.hidden
     */
    set onHiddenEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hidden>>,)

    /**
     * Set the 'hidden.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.hidden
     */
    onHidden(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hidden>>,): this


    /**
     * The 'hidePrevented.bs.modal' event holder
     * @see Modal.Events.hidePrevented
     */
    get onHidePreventedEvent(): NullOr<EventHolder<ELEMENT, Modal.Events.hidePrevented>>

    /**
     * Set the 'hidePrevented.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.hidePrevented
     */
    set onHidePreventedEvent(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hidePrevented>>,)

    /**
     * Set the 'hidePrevented.bs.modal' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Modal.Events.hidePrevented
     */
    onHidePrevented(value: Nullable<| ModalEventCallback<this> | EventHolder<ELEMENT, Modal.Events.hidePrevented>>,): this

}


export type PossibleModalSize = | 'sm' | 'md' | 'lg' | 'xl'

export type ModalEventCallback<I extends ModalInstanceDeclaration<any, any> = ModalInstanceDeclaration, > = (instance: I, event: Event,) => void