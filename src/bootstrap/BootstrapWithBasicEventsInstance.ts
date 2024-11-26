import type {Nullable, NullOr} from '@joookiwi/type'
import type BaseComponent      from 'bootstrap/js/dist/base-component'
import type {ComponentOptions} from 'bootstrap/js/dist/base-component'

import type {BootstrapWithBasicEventInstanceDeclaration, InstanceWithEventCallback} from 'bootstrap/BootstrapWithBasicEventInstance.declaration'
import type {EventHolder}                                                           from 'bootstrap/event/EventHolder'

import {BootstrapInstance} from 'bootstrap/BootstapInstance'

export abstract class BootstrapWithBasicEventsInstance<const out INSTANCE extends BaseComponent,
    const out OPTION extends ComponentOptions,
    const ELEMENT extends HTMLElement = HTMLElement,
    const out ID extends string = string,
    const SHOW_EVENT_TYPE extends string = string,
    const SHOWN_EVENT_TYPE extends string = string,
    const HIDE_EVENT_TYPE extends string = string,
    const HIDDEN_EVENT_TYPE extends string = string, >
    extends BootstrapInstance<INSTANCE, OPTION, ELEMENT, ID>
    implements BootstrapWithBasicEventInstanceDeclaration<INSTANCE, ELEMENT, ID, SHOW_EVENT_TYPE, SHOWN_EVENT_TYPE, HIDE_EVENT_TYPE, HIDDEN_EVENT_TYPE> {

    protected constructor(element: ID | ELEMENT, options: Partial<OPTION>,) {
        super(element, options,)
    }

    public abstract get onShowEvent(): NullOr<EventHolder<ELEMENT, SHOW_EVENT_TYPE>>
    public abstract set onShowEvent(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, SHOW_EVENT_TYPE>>,)

    public onShow(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, SHOW_EVENT_TYPE>>,): this {
        this.onShowEvent = value
        return this
    }


    public abstract get onShownEvent(): NullOr<EventHolder<ELEMENT, SHOWN_EVENT_TYPE>>
    public abstract set onShownEvent(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, SHOWN_EVENT_TYPE>>,)

    public onShown(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, SHOWN_EVENT_TYPE>>,): this {
        this.onShownEvent = value
        return this
    }


    public abstract get onHideEvent(): NullOr<EventHolder<ELEMENT, HIDE_EVENT_TYPE>>
    public abstract set onHideEvent(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, HIDE_EVENT_TYPE>>,)

    public onHide(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, HIDE_EVENT_TYPE>>,): this {
        this.onHideEvent = value
        return this
    }


    public abstract get onHiddenEvent(): NullOr<EventHolder<ELEMENT, HIDDEN_EVENT_TYPE>>
    public abstract set onHiddenEvent(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, HIDDEN_EVENT_TYPE>>,)

    public onHidden(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, HIDDEN_EVENT_TYPE>>,): this {
        this.onHiddenEvent = value
        return this
    }

}
