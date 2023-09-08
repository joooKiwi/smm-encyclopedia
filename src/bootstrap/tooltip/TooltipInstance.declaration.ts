import type {Tooltip} from 'bootstrap'

import type {EventHolder}                                from 'bootstrap/event/EventHolder'
import type {BootstrapWithBasicEventInstanceDeclaration} from 'bootstrap/BootstrapWithBasicEventInstance.declaration'

export interface TooltipInstanceDeclaration<ELEMENT extends Element = Element,
    out ID extends string = string, >
    extends BootstrapWithBasicEventInstanceDeclaration<Tooltip, ELEMENT, ID, Tooltip.Events.show, Tooltip.Events.shown, Tooltip.Events.hide, Tooltip.Events.hidden> {

    /**
     * The 'show.bs.tooltip' event holder
     * @see Tooltip.Events.show
     */
    get onShowEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.show>>

    /**
     * Set the 'show.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.show
     */
    set onShowEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.show>>,)

    /**
     * Set the 'show.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.show
     */
    onShow(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.show>>,): this


    /**
     * The 'shown.bs.tooltip' event holder
     * @see Tooltip.Events.shown
     */
    get onShownEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.shown>>

    /**
     * Set the 'shown.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.shown
     */
    set onShownEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.shown>>,)

    /**
     * Set the 'shown.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.shown
     */
    onShown(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.shown>>,): this


    /**
     * The 'hide.bs.tooltip' event holder
     * @see Tooltip.Events.hide
     */
    get onHideEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.hide>>

    /**
     * Set the 'hide.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.hide
     */
    set onHideEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.hide>>,)

    /**
     * Set the 'hide.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.hide
     */
    onHide(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.hide>>,): this


    /**
     * The 'hidden.bs.tooltip' event holder
     * @see Tooltip.Events.hidden
     */
    get onHiddenEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.hidden>>

    /**
     * Set the 'hidden.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.hidden
     */
    set onHiddenEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.hidden>>,)

    /**
     * Set the 'hidden.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.hidden
     */
    onHidden(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.hidden>>,): this


    /**
     * The 'inserted.bs.tooltip' event holder
     * @see Tooltip.Events.inserted
     */
    get onInsertedEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.inserted>>

    /**
     * Set the 'inserted.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.inserted
     */
    set onInsertedEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.inserted>>,)

    /**
     * Set the 'inserted.bs.tooltip' event to an {@link EventHolder} or <b>null</b>
     *
     * @param value The listener or the event
     * @see Tooltip.Events.inserted
     */
    onInserted(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.inserted>>,): this

}

export type TooltipEventCallback<INSTANCE extends TooltipInstanceDeclaration<any, any> = TooltipInstanceDeclaration, > = (instance: INSTANCE, event: Event,) => void
