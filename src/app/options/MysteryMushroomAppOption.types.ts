enum Enum {

    CONDITION_TO_UNLOCK_IT,
    GAME,
    NAME,

    IMAGES_AND_SOUNDS,
    POWER_UP_COLLECTED,
    WAITING,
    TAUNT,
    PRESSING_DOWN,
    WALK,
    RUNNING,
    SWIMMING,
    JUMP, FALLING_AFTER_JUMP, ON_GROUND_AFTER_JUMP,
    TURNING,
    CLIMBING,
    GOAL_POLE,
    LOST_A_LIFE,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum


export type PossibleMysteryMushroomType =
    | 'power-up collected'
    | 'waiting'
    | 'taunt'
    | 'pressing ↓'
    | 'walk'
    | 'running'
    | 'swimming'
    | `${| '' | `${| 'falling' | 'ground'} after `}jump`
    | 'turning'
    | 'climbing'
    | 'goal pole'
    | 'lost a life'
    | null
