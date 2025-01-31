declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

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
