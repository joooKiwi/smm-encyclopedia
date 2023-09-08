import {Popover} from 'bootstrap'

import type {EventHolder}                                      from 'bootstrap/event/EventHolder'
import type {PopoverEvents}                                    from 'bootstrap/popover/PopoverEvents'
import type {PopoverEventCallback, PopoverInstanceDeclaration} from 'bootstrap/popover/PopoverInstance.declaration'

import {BootstrapWithBasicEventsInstance} from 'bootstrap/BootstrapWithBasicEventsInstance'
import {PassiveEventHolder}               from 'bootstrap/event/PassiveEventHolder'

/**
 * A simple instance holder for a {@link bootstrap.Popover Popover}
 *
 * @see https://getbootstrap.com/docs/5.2/components/popover
 */
export class PopoverInstance<const ELEMENT extends HTMLElement = HTMLElement,
    const out ID extends string = string, >
    extends BootstrapWithBasicEventsInstance<Popover, Popover.Options, ELEMENT, ID, Popover.Events.show, Popover.Events.shown, Popover.Events.hide, Popover.Events.hidden>
    implements PopoverInstanceDeclaration<ELEMENT, ID> {

    //region -------------------- Fields --------------------

    public static DEFAULT_OPTIONS: Partial<Popover.Options> = {}
    /** @see Popover.Events.show */
    public static readonly SHOW_EVENT = `show${Popover.EVENT_KEY}` as Popover.Events.show
    /** @see Popover.Events.shown */
    public static readonly SHOWN_EVENT = `shown${Popover.EVENT_KEY}` as Popover.Events.shown
    /** @see Popover.Events.hide */
    public static readonly HIDE_EVENT = `hide${Popover.EVENT_KEY}` as Popover.Events.hide
    /** @see Popover.Events.hidden */
    public static readonly HIDDEN_EVENT = `hidden${Popover.EVENT_KEY}` as Popover.Events.hidden
    /** @see Popover.Events.inserted */
    public static readonly INSERTED_EVENT = `inserted${Popover.EVENT_KEY}` as Popover.Events.inserted

    #onShowEvent?: NullOr<EventHolder<ELEMENT, Popover.Events.show>>
    #onShownEvent?: NullOr<EventHolder<ELEMENT, Popover.Events.shown>>
    #onHideEvent?: NullOr<EventHolder<ELEMENT, Popover.Events.hide>>
    #onHiddenEvent?: NullOr<EventHolder<ELEMENT, Popover.Events.hidden>>
    #onInsertedEvent?: NullOr<EventHolder<ELEMENT, Popover.Events.inserted>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(element: | ID | ELEMENT, options: Partial<Popover.Options> = PopoverInstance.DEFAULT_OPTIONS, events: Nullable<Partial<PopoverEvents<PopoverInstance<ELEMENT, ID>>>> = null,) {
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

    public override get onShowEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.show>> {
        return this.#onShowEvent ?? null
    }

    public override set onShowEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.show>>,) {
        if (value == null) {
            this.onShowEvent?.destroy()
            this.#onShowEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onShowEvent = new PassiveEventHolder(this.element, PopoverInstance.SHOW_EVENT, event => value(this, event,),)
            return
        }
        this.#onShowEvent = value
    }


    public override get onShownEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.shown>> {
        return this.#onShownEvent ?? null
    }

    public override set onShownEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.shown>>,) {
        if (value == null) {
            this.onShownEvent?.destroy()
            this.#onShownEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onShownEvent = new PassiveEventHolder(this.element, PopoverInstance.SHOWN_EVENT, event => value(this, event,),)
            return
        }
        this.#onShownEvent = value
    }


    public override get onHideEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.hide>> {
        return this.#onHideEvent ?? null
    }

    public override set onHideEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.hide>>,) {
        if (value == null) {
            this.onHideEvent?.destroy()
            this.#onHideEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHideEvent = new PassiveEventHolder(this.element, PopoverInstance.HIDE_EVENT, event => value(this, event,),)
            return
        }
        this.#onHideEvent = value
    }


    public override get onHiddenEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.hidden>> {
        return this.#onHiddenEvent ?? null
    }

    public override set onHiddenEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.hidden>>,) {
        if (value == null) {
            this.onHiddenEvent?.destroy()
            this.#onHiddenEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onHiddenEvent = new PassiveEventHolder(this.element, PopoverInstance.HIDDEN_EVENT, event => value(this, event,),)
            return
        }
        this.#onHiddenEvent = value
    }


    public get onInsertedEvent(): NullOr<EventHolder<ELEMENT, Popover.Events.inserted>> {
        return this.#onInsertedEvent ?? null
    }

    public set onInsertedEvent(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.inserted>>,) {
        if (value == null) {
            this.onInsertedEvent?.destroy()
            this.#onInsertedEvent = null
            return
        }
        if (value instanceof Function) {
            this.#onInsertedEvent = new PassiveEventHolder(this.element, PopoverInstance.INSERTED_EVENT, event => value(this, event,),)
            return
        }
        this.#onInsertedEvent = value
    }

    public onInserted(value: Nullable<| PopoverEventCallback<this> | EventHolder<ELEMENT, Popover.Events.inserted>>,): this {
        this.onInsertedEvent = value
        return this
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected override _createInstance(options: Partial<Popover.Options>,): Popover {
        return Popover.getOrCreateInstance(this.element, options,)
    }

    public override destroy(): void {
        this.onShowEvent = this.onShownEvent = this.onHideEvent = this.onHiddenEvent = this.onInsertedEvent = null

        // const element = this.element
        // element.addEventListener(PopoverInstance.HIDDEN_EVENT, () => Popover.getInstance(element,)?.dispose(), {once: true, passive: true,},)
    }

    //endregion -------------------- Methods --------------------

}
