import type {TooltipEventCallback, TooltipInstanceDeclaration} from 'bootstrap/tooltip/TooltipInstance.declaration'

/**
 * The events associated to the {@link bootstrap.Tooltip Tooltip} events
 *
 * @see https://getbootstrap.com/docs/5.2/components/tooltips/#events
 */
export interface TooltipEvents<I extends TooltipInstanceDeclaration<any, any> = TooltipInstanceDeclaration, > {// eslint-disable-line @typescript-eslint/no-explicit-any

    /** @see Tooltip.Events.show */
    readonly show: TooltipEventCallback<I>

    /** @see Tooltip.Events.shown */
    readonly shown: TooltipEventCallback<I>

    /** @see Tooltip.Events.hide */
    readonly hide: TooltipEventCallback<I>

    /** @see Tooltip.Events.hidden */
    readonly hidden: TooltipEventCallback<I>

    /** @see Tooltip.Events.inserted */
    readonly inserted: TooltipEventCallback<I>

}
