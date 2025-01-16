declare global {
    interface EventListenerOptions {
        once?: boolean
        passive?: boolean
        signal?: AbortSignal
    }
}

/** An {@link EventListenerOptions} that only has the passive as <b>true</b> */
export const PASSIVE_ONLY_OPTION = {passive: true,} as const satisfies EventListenerOptions
/** An {@link EventListenerOptions} that only has the "once" as <b>true</b> */
export const ONCE_ONLY_OPTION = {once: true,} as const satisfies EventListenerOptions
/** An {@link EventListenerOptions} that has the passive and "once" as <b>true</b> */
export const PASSIVE_AND_ONCE_OPTION = {passive: true, once: true,} as const satisfies EventListenerOptions
