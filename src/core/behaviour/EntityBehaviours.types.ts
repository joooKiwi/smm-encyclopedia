declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars

    RESPAWN_WITH_VINE,
    RESPAWN_AS_QUESTION_MARK_BLOCK,
    ALWAYS_KNOW_VISUALLY_AMOUNT_OF_COIN,
    NEVER_KNOW_VISUALLY_AMOUNT_OF_COIN,
    ONLY_1ST_SOUND_OF_PINK_COIN,

    SPAWN_ONLY_1_POWER_UP,
    SPAWN_1_TO_4_POWER_UPS_FROM_AMOUNT_OF_PLAYERS,
    EXPELLED_POWER_UP_FROM_BLOCK,
    ALWAYS_FINAL_POWER_UP,

    RESPAWN_AFTER_10_SEC,
    CAN_RESPAWN_AT_CP,
    RESPAWN_IN_BLOCK_IF_PLAYER_DIE,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Translation key types --------------------

export type PossibleTranslationKeys =
    | `Respawn ${'with Vine' | 'as ? Block'}`
    | `${'Always' | 'Never'} know visually # of Coins` | 'Only 1st sound of Pink Coin'

    | `Spawn ${'only 1 power-up' | '(1-4) power-up(s) from # of players'}`
    | 'Expelled power-up from Block' | 'Always final power-up'

    | 'Respawn after 10 sec.' | 'Can respawn at CP' | 'Respawn in Block (if player die)'

//endregion -------------------- Translation key types --------------------
//region -------------------- Acronym types --------------------

export type PossibleAcronym =
    | `R${'V' | 'B'}`
    | `${'A' | 'N'}C` | 'O1S'

    | `S${'1' | '1-4'}P`
    | 'EPB' | 'AFP'

    | 'R10' | 'CRCP' | 'RBD'

//endregion -------------------- Acronym types --------------------
