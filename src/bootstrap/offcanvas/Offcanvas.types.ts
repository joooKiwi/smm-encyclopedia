import {OffcanvasInstance} from './OffcanvasInstance';

export interface OffcanvasConfiguration {

    elementId: string

    on?: Partial<OffcanvasEvents>

}

export interface OffcanvasEvents {

    show: OffcanvasEventCallback

    shown: OffcanvasEventCallback

    hide: OffcanvasEventCallback

    hidden: OffcanvasEventCallback

}

export type OffcanvasEventCallback = (instance: OffcanvasInstance, event: Event,) => void;
export type OffcanvasEventsReceived = | Partial<OffcanvasEvents> | null | undefined;
export type OffcanvasEventCallbackReceived = | OffcanvasEventCallback | null | undefined;
