import type {PopoverEventCallback, PopoverInstanceDeclaration} from 'bootstrap/popover/PopoverInstance.declaration'

/**
 * The events associated to the {@link bootstrap.Popover Popover} events
 *
 * @see https://getbootstrap.com/docs/5.2/components/popovers/#events
 */
export interface PopoverEvents<I extends PopoverInstanceDeclaration<any, any> = PopoverInstanceDeclaration, > {// eslint-disable-line @typescript-eslint/no-explicit-any

    /** @see Popover.Events.show*/
    readonly show: PopoverEventCallback<I>

    /** @see Popover.Events.shown */
    readonly shown: PopoverEventCallback<I>

    /** @see Popover.Events.hide */
    readonly hide: PopoverEventCallback<I>

    /** @see Popover.Events.hidden */
    readonly hidden: PopoverEventCallback<I>

    /** @see Popover.Events.inserted */
    readonly inserted: PopoverEventCallback<I>

}
