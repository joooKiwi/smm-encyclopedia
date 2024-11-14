import type {EmptyString, NullOrString} from '@joookiwi/type'

enum Enum {

    CONDITION_TO_UNLOCK_IT,
    GAME,
    NAME,

    POWER_UP_COLLECTED,
    WAITING,
    TAUNT,
    PRESSING_DOWN,
    WALK,
    RUNNING,
    SWIMMING,
    JUMP, FALLING_AFTER_A_JUMP, ON_GROUND_AFTER_A_JUMP,
    TURNING,
    CLIMBING,
    GOAL_POLE,
    LOST_A_LIFE,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum


export type PossibleMysteryMushroomType =
    NullOrString<| 'power-up collected'
                 | 'waiting'
                 | 'taunt'
                 | 'pressing ↓'
                 | 'walk'
                 | 'running'
                 | 'swimming'
                 | `${| EmptyString | `${| 'falling' | 'ground'} after a `}jump`
                 | 'turning'
                 | 'climbing'
                 | 'goal pole'
                 | 'lost a life'>
