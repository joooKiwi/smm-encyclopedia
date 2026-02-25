export const passiveEventOption =     {passive: true,  once: false,} as const satisfies AddEventListenerOptions
export const onceEventOption =        {passive: false, once: true, } as const satisfies AddEventListenerOptions
export const passiveOnceEventOption = {passive: true,  once: true, } as const satisfies AddEventListenerOptions
