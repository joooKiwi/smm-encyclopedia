import type {TooltipEventCallback, TooltipInstanceDeclaration} from 'bootstrap/tooltip/TooltipInstance.declaration'

/**
 * The events associated to the {@link bootstrap.Tooltip Tooltip} events
 *
 * @see https://getbootstrap.com/docs/5.2/components/tooltips/#events
 */
export interface TooltipEvents<I extends TooltipInstanceDeclaration<any, any> = TooltipInstanceDeclaration, > {

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
