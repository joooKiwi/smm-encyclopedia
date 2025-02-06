import type {EmptyString} from '@joookiwi/type'

declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    ALL,
    POWER_UP_AND_RIDE,
    POWER_UP_AND_HAT,
    RIDE_AND_HAT,
    POWER_UP,
    RIDE,
    HAT,
    NONE,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleType = 'all' | 'power-up' | 'ride' | 'hat' | `power-up & ${| 'ride' | 'hat'}` | 'ride & hat'
/** A possible route name (not forwarded to the {@link EveryPossibleRouteNames variable}) */
export type PossibleRouteName = `every${| `PowerUp${| EmptyString | `&${| `Ride${| EmptyString | '&Hat'}` | 'Hat'}`}` | `Ride${| EmptyString | '&Hat'}` | 'Hat'}Priority` | 'noPriority'
