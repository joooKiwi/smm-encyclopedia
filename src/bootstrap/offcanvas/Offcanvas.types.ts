import type {BootstrapConfigurationWithNoOption}                                                                         from 'bootstrap/Bootstrap.types'
import type {BootstrapWithBasicEventCallback, BootstrapWithBasicEventCallbackReceived, BootstrapWithBasicEventsReceived} from 'bootstrap/BootstrapWithBasicEventsInstance.types'
import type {OffcanvasInstance}                                                                                          from 'bootstrap/offcanvas/OffcanvasInstance'

export type OffcanvasConfiguration = BootstrapConfigurationWithNoOption<OffcanvasEvents>

/**
 * @see https://getbootstrap.com/docs/5.1/components/offcanvas/#events
 */
export interface OffcanvasEvents<I extends OffcanvasInstance = OffcanvasInstance, > {

    /** @see Offcanvas.Events.show */
    show: OffcanvasEventCallback<I>

    /** @see Offcanvas.Events.shown */
    shown: OffcanvasEventCallback<I>

    /** @see Offcanvas.Events.hide */
    hide: OffcanvasEventCallback<I>

    /** @see Offcanvas.Events.hidden */
    hidden: OffcanvasEventCallback<I>

}

export type OffcanvasEventCallback<I extends OffcanvasInstance = OffcanvasInstance, > = BootstrapWithBasicEventCallback<I>
export type OffcanvasEventsReceived<I extends OffcanvasInstance = OffcanvasInstance, > = BootstrapWithBasicEventsReceived<I, OffcanvasEvents<I>>
export type OffcanvasEventCallbackReceived<I extends OffcanvasInstance = OffcanvasInstance, > = BootstrapWithBasicEventCallbackReceived<I, OffcanvasEventCallback<I>>
