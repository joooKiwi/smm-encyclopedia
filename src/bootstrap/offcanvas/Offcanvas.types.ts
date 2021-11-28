import type {BootstrapConfigurationWithNoOption} from '../Bootstrap.types';
import type {OffcanvasInstance}                  from './OffcanvasInstance';

export type OffcanvasConfiguration = BootstrapConfigurationWithNoOption<OffcanvasEvents>;

/**
 * @see https://getbootstrap.com/docs/5.1/components/offcanvas/#events
 */
export interface OffcanvasEvents {

    /**
     * @see Offcanvas.Events.show
     */
    show: OffcanvasEventCallback

    /**
     * @see Offcanvas.Events.shown
     */
    shown: OffcanvasEventCallback

    /**
     * @see Offcanvas.Events.hide
     */
    hide: OffcanvasEventCallback

    /**
     * @see Offcanvas.Events.hidden
     */
    hidden: OffcanvasEventCallback

}

export type OffcanvasEventCallback = (instance: OffcanvasInstance, event: Event,) => void;
export type OffcanvasEventsReceived = | Partial<OffcanvasEvents> | null | undefined;
export type OffcanvasEventCallbackReceived = | OffcanvasEventCallback | null | undefined;
