enum Enum {

    GENERAL_ENTITY_LIMIT_WHILE_PLAYING, POWER_UP_ENTITY_LIMIT_WHILE_PLAYING,

    LOOSE_COIN_LIMIT, SOUND_EFFECT_LIMIT, CORPSE_LIMIT, PROJECTILE_LIMIT, LIGHT_SOURCE_LIMIT,

    GROUND_LIMIT, BLOCK_LIMIT, PLATFORM_OR_SLOPE_OR_CONVEYOR_BELT_OR_PIPE_OR_VINE_LIMIT, CLEAR_PIPE_LIMIT,

    GROWN_VINE_LIMIT, CHECKPOINT_FLAG_LIMIT, TRACK_LIMIT,
    SNAKE_BLOCK_LIMIT, EXCLAMATION_BLOCK_LIMIT, TRACK_BLOCK_LIMIT,
    ICICLE_LIMIT, ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT,

    ENTITY_HELD_BY_A_TWISTER_LIMIT, SNOWBALL_THROWN_BY_A_SPIKE_LIMIT,
    CLEAR_CONDITION_ENTITY_AMOUNT_LIMIT, RENDERED_OBJECT_LIMIT,

    _10_OR_30_OR_50_COIN_LIMIT, PINK_COIN_LIMIT,
    KEY_COLLECTED_LIMIT,

    POWER_UP_ENTITY_LIMIT_EDITOR,
    PLAYER_FIREBALL, PLAYER_SUPERBALL,
    PLAYER_BOMB, PLAYER_BUILDER_BOX, PLAYER_BOOMERANG, PLAYER_CANNONBALL,
    HATCHED_YOSHI_LIMIT,

    GENERAL_ENTITY_LIMIT_EDITOR,
    CHARVAARGH_LIMIT, PIRANHA_CREEPER_LIMIT,
    BOWSER_AND_BOWSER_JR_LIMIT, BOOM_BOOM_AND_POM_POM_LIMIT, KOOPALING_LIMIT,
    ANGRY_SUN_OR_MOON_LIMIT, PHANTO_LIMIT, KOOPA_TROOPA_CAR_LIMIT,

    WARP_DOOR_LIMIT, WARP_BOX_LIMIT, WARP_PIPE_LIMIT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name / acronym --------------------

export type PossibleAcronymInBothEditorAndWhilePlaying = `${| 'GE' | 'PE'}L (${| 'WP' | 'E'})`
export type PossibleStartingEnglishNameInBothEditorAndWhilePlaying = `${| 'General' | 'Power-up'} Entity`

export type PossibleAcronym = | PossibleAcronymInBothEditorAndWhilePlaying | `${| 'LC' | 'SE' | 'C' | 'PJ' | 'LS' | 'GV' | 'KC' | 'HY'}L`
export type PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying =
    | 'Loose Coin' | 'Sound Effect' | 'Corpse' | 'Projectile' | 'Light Source'

    | 'Ground' | 'Block' | 'Platform / Slope / Conveyor Belt / Pipe / Vine' | 'Clear Pipe'

    | 'Grown Vine' | 'Checkpoint Flag' | 'Track' | `${| 'Snake ' | '! ' | 'Track '}Block`

    | 'Icicle' | 'One-Way Wall / Arrow Sign / Dash Block'

    | 'Entity Held By A Twister' | 'Snowball Thrown By A Spike'
    | 'Clear Condition Entity Amount' | 'Rendered Object'


    | `${| '[10- / 30- / 50-]' | 'Pink '}Coin`
    | 'Key Collected'

    | 'Power-up' | `Player's ${| `${| 'Fire' | 'Super'}ball` | 'Bomb' | 'Builder Box' | 'Boomerang' | 'Cannonball'}` | 'Hatched Yoshi'

    | 'Charvaargh' | 'Piranha Creeper'
    | 'Bowser (Jr.)' | 'Boom Boom / Pom Pom' | 'Koopaling'
    | 'Angry Sun / Moon' | 'Phanto' | 'Koopa Troopa Car'

    | `Warp ${| 'Door' | 'Box' | 'Pipe'}`
export type PossibleStartingEnglishName = | PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying | PossibleStartingEnglishNameInBothEditorAndWhilePlaying
export type PossibleEnglishName = | `${PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying} Limit` | `${PossibleStartingEnglishNameInBothEditorAndWhilePlaying} Limit (${| 'While Playing' | 'Editor'})`

export type PossibleAlternativeAcronym = `EL${| 'B' | 'C'}`
export type PossibleAlternativeEnglishName = | `Entity Limit ${| 'B' | 'C'}` | `Ground Limit ${| 1 | 2 | 3}` | 'General Enemy Limit' | 'Object Displayed Limit'

//endregion -------------------- Name / acronym --------------------
