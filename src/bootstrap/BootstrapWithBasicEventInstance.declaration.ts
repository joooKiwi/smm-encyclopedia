import type {Nullable, NullOr} from '@joookiwi/type'
import type BaseComponent      from 'bootstrap/js/dist/base-component'

import type {BootstrapInstanceDeclaration} from 'bootstrap/BootstrapInstance.declaration'
import type {EventHolder}                  from 'bootstrap/event/EventHolder'

export interface BootstrapWithBasicEventInstanceDeclaration<out INSTANCE extends BaseComponent = BaseComponent,
    ELEMENT extends Element = Element,
    out ID extends string = string,
    SHOW_EVENT_TYPE extends string = string,
    SHOWN_EVENT_TYPE extends string = string,
    HIDE_EVENT_TYPE extends string = string,
    HIDDEN_EVENT_TYPE extends string = string, >
    extends BootstrapInstanceDeclaration<INSTANCE, ELEMENT, ID> {

    get onShowEvent(): NullOr<EventHolder<ELEMENT, SHOW_EVENT_TYPE>>

    set onShowEvent(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, SHOW_EVENT_TYPE>>,)

    onShow(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, SHOW_EVENT_TYPE>>,): this


    get onShownEvent(): NullOr<EventHolder<ELEMENT, SHOWN_EVENT_TYPE>>

    set onShownEvent(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, SHOWN_EVENT_TYPE>>,)

    onShown(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, SHOWN_EVENT_TYPE>>,): this


    get onHideEvent(): NullOr<EventHolder<ELEMENT, HIDE_EVENT_TYPE>>

    set onHideEvent(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, HIDE_EVENT_TYPE>>,)

    onHide(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, HIDE_EVENT_TYPE>>,): this


    get onHiddenEvent(): NullOr<EventHolder<ELEMENT, HIDDEN_EVENT_TYPE>>

    set onHiddenEvent(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, HIDDEN_EVENT_TYPE>>,)

    onHidden(value: Nullable<| InstanceWithEventCallback<this> | EventHolder<ELEMENT, HIDDEN_EVENT_TYPE>>,): this

}

export type InstanceWithEventCallback<INSTANCE extends BootstrapWithBasicEventInstanceDeclaration<any, any, any, any, any, any, any> = BootstrapWithBasicEventInstanceDeclaration, > = (instance: INSTANCE, event: Event,) => void
