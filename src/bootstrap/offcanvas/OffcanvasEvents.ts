import type {OffcanvasEventCallback, OffcanvasInstanceDeclaration} from 'bootstrap/offcanvas/OffcanvasInstance.declaration'

/**
 * The events associated to the {@link bootstrap.Offcanvas Offcanvas} events
 *
 * @see https://getbootstrap.com/docs/5.2/components/offcanvas/#events
 */
export interface OffcanvasEvents<I extends OffcanvasInstanceDeclaration<any, any> = OffcanvasInstanceDeclaration, > {

    /** @see Offcanvas.Events.show */
    show: OffcanvasEventCallback<I>

    /** @see Offcanvas.Events.shown */
    shown: OffcanvasEventCallback<I>

    /** @see Offcanvas.Events.hide */
    hide: OffcanvasEventCallback<I>

    /** @see Offcanvas.Events.hidden */
    hidden: OffcanvasEventCallback<I>

}
