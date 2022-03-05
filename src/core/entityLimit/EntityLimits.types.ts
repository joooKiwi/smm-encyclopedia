import type {EntityLimits as RealEnum}                                                                                                                                                                                                                     from './EntityLimits';
import type {EnumByName as OriginalEnumByName, EnumByNumber as OriginalEnumByNumber, EnumByOrdinal as OriginalEnumByOrdinal, EnumByPossibleString as OriginalEnumByPossibleString, EnumByString as OriginalEnumByString, SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';


export type PossibleNonNullableValue = | RealEnum | Ordinals | PossibleStringValue;
export type PossibleStringValue = | Names
                                  | PossibleStartingEnglishName | PossibleEnglishName | PossibleAlternativeEnglishName
                                  | PossibleAcronym | PossibleAlternativeAcronym;
export type PossibleValue = | RealEnum | number | string | null | undefined;

enum Enum {

    GENERAL_ENTITY_LIMIT_WHILE_PLAYING, POWER_UP_ENTITY_LIMIT_WHILE_PLAYING,

    LOOSE_COIN_LIMIT, SOUND_EFFECT_LIMIT, CORPSE_LIMIT, PROJECTILE_LIMIT, LIGHT_SOURCE_LIMIT,

    GROUND_LIMIT, BLOCK_LIMIT, PLATFORM_OR_SLOPE_OR_CONVEYOR_BELT_OR_PIPE_OR_VINE_LIMIT, CLEAR_PIPE_LIMIT,

    GROWN_VINE_LIMIT, CHECKPOINT_FLAG_LIMIT, TRACK_LIMIT,
    SNAKE_BLOCK_LIMIT, EXCLAMATION_BLOCK_LIMIT, TRACK_BLOCK_LIMIT,
    ICICLE_LIMIT, ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT,

    ENTITY_HELD_BY_A_TWISTER_LIMIT, SNOWBALL_THROWN_BY_A_SPIKE_LIMIT,
    CLEAR_CONDITION_ENTITY_AMOUNT_LIMIT, RENDERED_BLOCK_LIMIT,

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

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleAcronymInBothEditorAndWhilePlaying = `${| 'GE' | 'PE'}L (${| 'WP' | 'E'})`;
export type PossibleStartingEnglishNameInBothEditorAndWhilePlaying = `${| 'General' | 'Power-up'} Entity`;

export type PossibleAcronym = | PossibleAcronymInBothEditorAndWhilePlaying | `${| 'LC' | 'SE' | 'C' | 'PJ' | 'LS' | 'GV' | 'HY'}L`;
export type PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying =
    | 'Loose Coin' | 'Sound Effect' | 'Corpse' | 'Projectile' | 'Light Source'

    | 'Ground' | 'Block' | 'Platform / Slope / Conveyor Belt / Pipe / Vine' | 'Clear Pipe'

    | 'Grown Vine' | 'Checkpoint Flag' | 'Track' | `${| 'Snake ' | '! ' | 'Track '}Block`

    | 'Icicle' | 'One-Way Wall / Arrow Sign / Dash Block'

    | 'Entity Held By A Twister' | 'Snowball Thrown By A Spike'
    | 'Clear Condition Entity Amount' | 'Rendered Block'


    | `${| '[10- / 30- / 50-]' | 'Pink '}Coin`
    | 'Key Collected'

    | 'Power-up' | `Player's ${| `${| 'Fire' | 'Super'}ball` | 'Bomb' | 'Builder Box' | 'Boomerang' | 'Cannonball'}` | 'Hatched Yoshi'

    | 'Charvaargh' | 'Piranha Creeper'
    | 'Bowser (Jr.)' | 'Boom Boom / Pom Pom' | 'Koopaling'
    | 'Angry Sun / Moon' | 'Phanto' | 'Koopa Troopa Car'

    | `Warp ${| 'Door' | 'Box' | 'Pipe'}`;
export type PossibleStartingEnglishName = | PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying | PossibleStartingEnglishNameInBothEditorAndWhilePlaying;
export type PossibleEnglishName = | `${PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying} Limit` | `${PossibleStartingEnglishNameInBothEditorAndWhilePlaying} Limit (${| 'While Playing' | 'Editor'})`;

export type PossibleAlternativeAcronym = `EL${| 'B' | 'C'}`;
export type PossibleAlternativeEnglishName = | `Entity Limit ${| 'B' | 'C'}` | `Ground Limit ${| 1 | 2 | 3}` | 'General Enemy Limit' | 'Block Displayed Limit';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<E extends RealEnum = RealEnum, > = OriginalSimpleEnum<Names, E>;

export type EnumByOrdinal<O extends Ordinals, E extends RealEnum = RealEnum, > = OriginalEnumByOrdinal<EnumArray<E>, O, E>;
export type EnumByNumber<O extends number, E extends RealEnum = RealEnum, > = OriginalEnumByNumber<EnumArray<E>, O>;

export type EnumByName<N extends Names, E extends RealEnum = RealEnum, > = OriginalEnumByName<N, E>;
export type EnumByPossibleString<S extends PossibleStringValue, E extends RealEnum = RealEnum, > = OriginalEnumByPossibleString<S, Names, E>;
export type EnumByString<S extends string, E extends RealEnum = RealEnum, > = OriginalEnumByString<S, PossibleStringValue, Names, E>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends RealEnum = RealEnum, > = readonly [
    SimpleEnum<T>['GENERAL_ENTITY_LIMIT_WHILE_PLAYING'], SimpleEnum<T>['POWER_UP_ENTITY_LIMIT_WHILE_PLAYING'],

    SimpleEnum<T>['LOOSE_COIN_LIMIT'], SimpleEnum<T>['SOUND_EFFECT_LIMIT'], SimpleEnum<T>['CORPSE_LIMIT'],
    SimpleEnum<T>['PROJECTILE_LIMIT'], SimpleEnum<T>['LIGHT_SOURCE_LIMIT'],

    SimpleEnum<T>['GROUND_LIMIT'], SimpleEnum<T>['BLOCK_LIMIT'], SimpleEnum<T>['PLATFORM_OR_SLOPE_OR_CONVEYOR_BELT_OR_PIPE_OR_VINE_LIMIT'],
    SimpleEnum<T>['CLEAR_PIPE_LIMIT'],

    SimpleEnum<T>['GROWN_VINE_LIMIT'], SimpleEnum<T>['CHECKPOINT_FLAG_LIMIT'], SimpleEnum<T>['TRACK_LIMIT'],
    SimpleEnum<T>['SNAKE_BLOCK_LIMIT'], SimpleEnum<T>['EXCLAMATION_BLOCK_LIMIT'], SimpleEnum<T>['TRACK_BLOCK_LIMIT'],
    SimpleEnum<T>['ICICLE_LIMIT'], SimpleEnum<T>['ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT'],

    SimpleEnum<T>['ENTITY_HELD_BY_A_TWISTER_LIMIT'], SimpleEnum<T>['SNOWBALL_THROWN_BY_A_SPIKE_LIMIT'],
    SimpleEnum<T>['CLEAR_CONDITION_ENTITY_AMOUNT_LIMIT'], SimpleEnum<T>['RENDERED_BLOCK_LIMIT'],

    SimpleEnum<T>['_10_OR_30_OR_50_COIN_LIMIT'], SimpleEnum<T>['PINK_COIN_LIMIT'],
    SimpleEnum<T>['KEY_COLLECTED_LIMIT'],

    SimpleEnum<T>['POWER_UP_ENTITY_LIMIT_EDITOR'], SimpleEnum<T>['PLAYER_FIREBALL'], SimpleEnum<T>['PLAYER_SUPERBALL'],
    SimpleEnum<T>['PLAYER_BOMB'], SimpleEnum<T>['PLAYER_BUILDER_BOX'], SimpleEnum<T>['PLAYER_BOOMERANG'],
    SimpleEnum<T>['PLAYER_CANNONBALL'], SimpleEnum<T>['HATCHED_YOSHI_LIMIT'],

    SimpleEnum<T>['GENERAL_ENTITY_LIMIT_EDITOR'], SimpleEnum<T>['CHARVAARGH_LIMIT'], SimpleEnum<T>['PIRANHA_CREEPER_LIMIT'],
    SimpleEnum<T>['BOWSER_AND_BOWSER_JR_LIMIT'], SimpleEnum<T>['BOOM_BOOM_AND_POM_POM_LIMIT'], SimpleEnum<T>['KOOPALING_LIMIT'],
    SimpleEnum<T>['ANGRY_SUN_OR_MOON_LIMIT'], SimpleEnum<T>['PHANTO_LIMIT'], SimpleEnum<T>['KOOPA_TROOPA_CAR_LIMIT'],

    SimpleEnum<T>['WARP_DOOR_LIMIT'], SimpleEnum<T>['WARP_BOX_LIMIT'], SimpleEnum<T>['WARP_PIPE_LIMIT'],
];

//endregion -------------------- Array types --------------------
