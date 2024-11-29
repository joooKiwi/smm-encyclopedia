import type {Nullable, NullOr} from '@joookiwi/type'
import Tooltip                 from 'bootstrap/js/dist/tooltip'

import type {EventHolder}                                      from 'bootstrap/event/EventHolder'
import type {TooltipEvents}                                    from 'bootstrap/tooltip/TooltipEvents'
import type {TooltipEventCallback, TooltipInstanceDeclaration} from 'bootstrap/tooltip/TooltipInstance.declaration'

import {BootstrapWithBasicEventsInstance} from 'bootstrap/BootstrapWithBasicEventsInstance'
import {PassiveEventHolder}               from 'bootstrap/event/PassiveEventHolder'

/**
 * An instance holder for a {@link bootstrap.Tooltip Tooltip}
 *
 * @see https://getbootstrap.com/docs/5.2/components/tooltips
 */
export class TooltipInstance<const ELEMENT extends HTMLElement = HTMLElement,
    const ID extends string = string, >
    extends BootstrapWithBasicEventsInstance<Tooltip, Tooltip.Options, ELEMENT, ID, Tooltip.Events.show, Tooltip.Events.shown, Tooltip.Events.hide, Tooltip.Events.hidden>
    implements TooltipInstanceDeclaration<ELEMENT, ID> {

    //region -------------------- Fields --------------------

    public static DEFAULT_OPTIONS: Partial<Tooltip.Options> = {}

    #onShowEvent?: NullOr<EventHolder<ELEMENT, Tooltip.Events.show>>
    #onShownEvent?: NullOr<EventHolder<ELEMENT, Tooltip.Events.shown>>
    #onHideEvent?: NullOr<EventHolder<ELEMENT, Tooltip.Events.hide>>
    #onHiddenEvent?: NullOr<EventHolder<ELEMENT, Tooltip.Events.hidden>>
    #onInsertedEvent?: NullOr<EventHolder<ELEMENT, Tooltip.Events.inserted>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(element: | ID | ELEMENT, options: Partial<Tooltip.Options> = TooltipInstance.DEFAULT_OPTIONS, events: Nullable<Partial<TooltipEvents<TooltipInstance<ELEMENT, ID>>>> = null,) {
        super(element, options,)

        if (events == null)
            return
        this.onShow(events.show,)
            .onShown(events.shown,)
            .onHide(events.hide,)
            .onHidden(events.hidden,)
            .onInserted(events.inserted,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public override get onShowEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.show>> {
        return this.#onShowEvent ?? null
    }

    public override set onShowEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.show>>,) {
        if (value == null) {
            this.onShowEvent?.destroy()
            this.#onShowEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onShowEvent = new PassiveEventHolder(this.element, TooltipInstance.SHOW_EVENT, event => value(this, event,),)
            return
        }
        this.#onShowEvent = value
    }


    public override get onShownEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.shown>> {
        return this.#onShownEvent ?? null
    }

    public override set onShownEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.shown>>,) {
        if (value == null) {
            this.onShownEvent?.destroy()
            this.#onShownEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onShownEvent = new PassiveEventHolder(this.element, TooltipInstance.SHOWN_EVENT, event => value(this, event,),)
            return
        }
        this.#onShownEvent = value
    }


    public override get onHideEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.hide>> {
        return this.#onHideEvent ?? null
    }

    public override set onHideEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.hide>>,) {
        if (value == null) {
            this.onHideEvent?.destroy()
            this.#onHideEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHideEvent = new PassiveEventHolder(this.element, TooltipInstance.HIDE_EVENT, event => value(this, event,),)
            return
        }
        this.#onHideEvent = value
    }


    public override get onHiddenEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.hidden>> {
        return this.#onHiddenEvent ?? null
    }

    public override set onHiddenEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.hidden>>,) {
        if (value == null) {
            this.onHiddenEvent?.destroy()
            this.#onHiddenEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHiddenEvent = new PassiveEventHolder(this.element, TooltipInstance.HIDDEN_EVENT, event => value(this, event,),)
            return
        }
        this.#onHiddenEvent = value
    }


    public get onInsertedEvent(): NullOr<EventHolder<ELEMENT, Tooltip.Events.inserted>> {
        return this.#onInsertedEvent ?? null
    }

    public set onInsertedEvent(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.inserted>>,) {
        if (value == null) {
            this.onInsertedEvent?.destroy()
            this.#onInsertedEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onInsertedEvent = new PassiveEventHolder(this.element, TooltipInstance.INSERTED_EVENT, event => value(this, event,),)
            return
        }
        this.#onInsertedEvent = value
    }

    public onInserted(value: Nullable<| TooltipEventCallback<this> | EventHolder<ELEMENT, Tooltip.Events.inserted>>,): this {
        this.onInsertedEvent = value
        return this
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _createInstance(options: Partial<Tooltip.Options>,): Tooltip {
        return Tooltip.getOrCreateInstance(this.element, options,)
    }

    public override destroy(): void {
        this.onShowEvent = this.onShownEvent = this.onHideEvent = this.onHiddenEvent = this.onInsertedEvent = null

        // const element = this.element
        // element.addEventListener(TooltipInstance.HIDDEN_EVENT, () => Tooltip.getInstance(element,)?.dispose(), {once: true, passive: true,},)
    }

    //endregion -------------------- Methods --------------------

}

export namespace TooltipInstance {

    // export let DEFAULT_OPTIONS: Partial<Tooltip.Options> = {}
    /** @see Tooltip.Events.show */
    export const SHOW_EVENT = `show${Tooltip.EVENT_KEY}` as Tooltip.Events.show
    /** @see Tooltip.Events.shown */
    export const SHOWN_EVENT = `shown${Tooltip.EVENT_KEY}` as Tooltip.Events.shown
    /** @see Tooltip.Events.hide */
    export const HIDE_EVENT = `hide${Tooltip.EVENT_KEY}` as Tooltip.Events.hide
    /** @see Tooltip.Events.hidden */
    export const HIDDEN_EVENT = `hidden${Tooltip.EVENT_KEY}` as Tooltip.Events.hidden
    /** @see Tooltip.Events.inserted */
    export const INSERTED_EVENT = `inserted${Tooltip.EVENT_KEY}` as Tooltip.Events.inserted

}
