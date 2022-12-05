import type {PlayerSoundEffectTriggers} from 'core/soundEffect/property/PlayerSoundEffectTriggers'

enum Enum {

    JUMP_AFTER_LANDING,
    TURN_AROUND_AFTER_BEING_AT_FULL_SPEED,
    ON_CROUCH,
    AFTER_3_SECONDS_OF_NON_MOVEMENT,

    COLLECT_POWER_UP,
    GET_INTO_AN_ENTITY,

    AT_SPAWN,
    TAKE_DAMAGE,
    LOSE_A_LIFE,
    TAKE_DAMAGE_OR_LOSE_A_LIFE,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Translation key --------------------

export type PossibleTranslationKey =
    | 'After land + jump'
    | 'Turn after full speed'
    | 'Crouch'
    | 'After 3 seconds → no movement (continuous)'

    | 'Power-up collected'
    | 'Get in entity'

    | 'Spawn'
    | 'Take damage'
    | 'Lose life'
    | 'Take damage | Lose life'

//endregion -------------------- Translation key --------------------

export type PlayerSoundEffectTriggersByTranslation<T extends string, > = T extends PossibleTranslationKey ? PlayerSoundEffectTriggers : never
