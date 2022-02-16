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
    _10_OR_30_OR_50_COIN_LIMIT, PINK_COIN_LIMIT, KEY_COLLECTED_LIMIT,

    POWER_UP_ENTITY_LIMIT_EDITOR,
    FIREBALL_THROWN_BY_A_PLAYER_LIMIT, SUPERBALL_THROWN_BY_A_PLAYER_LIMIT,
    BOMB_THROWN_BY_A_LINK_LIMIT, BUILDER_BOX_THROWN_BY_A_PLAYER_LIMIT, BOOMERANG_THROWN_BY_A_PLAYER_LIMIT, CANNONBALL_THROWN_BY_A_PLAYER_LIMIT,
    HATCHED_YOSHI_LIMIT,

    GENERAL_ENTITY_LIMIT_EDITOR,
    CHARVAARGH_LIMIT, PIRANHA_CREEPER_LIMIT,
    BOWSER_AND_BOWSER_JR_LIMIT, BOOM_BOOM_AND_POM_POM_LIMIT, KOOPALING_LIMIT,
    ANGRY_SUN_OR_MOON_LIMIT, PHANTO_LIMIT, KOOPA_TROOPA_CAR_LIMIT,

    WARP_DOOR_LIMIT, WARP_BOX_LIMIT,

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
    | `${| '[10- / 30- / 50-]' | 'Pink '}Coin` | 'Key Collected'

    | 'Power-up' | `${| `${| 'Fire' | 'Super'}ball` | 'Builder Box' | 'Boomerang' | 'Cannonball'} thrown by a player` | 'Bomb thrown by a Link' | 'Hatched Yoshi'

    | 'Charvaargh' | 'Piranha Creeper'
    | 'Bowser (Jr.)' | 'Boom Boom / Pom Pom' | 'Koopaling'
    | 'Angry Sun / Moon' | 'Phanto' | 'Koopa Troopa Car'

    | `Warp ${| 'Door' | 'Box'}`;
export type PossibleStartingEnglishName = | PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying | PossibleStartingEnglishNameInBothEditorAndWhilePlaying;
export type PossibleEnglishName = | `${PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying} Limit` | `${PossibleStartingEnglishNameInBothEditorAndWhilePlaying} Limit (${| 'While Playing' | 'Editor'})`;

export type PossibleAlternativeAcronym = `EL${| 'B' | 'C'}`;
export type PossibleAlternativeEnglishName = | `Entity Limit ${| 'B' | 'C'}` | `Ground Limit ${| 1 | 2 | 3}` | 'General Enemy Limit';

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

    SimpleEnum<T>['_10_OR_30_OR_50_COIN_LIMIT'], SimpleEnum<T>['PINK_COIN_LIMIT'], SimpleEnum<T>['KEY_COLLECTED_LIMIT'],

    SimpleEnum<T>['POWER_UP_ENTITY_LIMIT_EDITOR'], SimpleEnum<T>['FIREBALL_THROWN_BY_A_PLAYER_LIMIT'], SimpleEnum<T>['SUPERBALL_THROWN_BY_A_PLAYER_LIMIT'],
    SimpleEnum<T>['BOMB_THROWN_BY_A_LINK_LIMIT'], SimpleEnum<T>['BUILDER_BOX_THROWN_BY_A_PLAYER_LIMIT'], SimpleEnum<T>['BOOMERANG_THROWN_BY_A_PLAYER_LIMIT'],
    SimpleEnum<T>['CANNONBALL_THROWN_BY_A_PLAYER_LIMIT'], SimpleEnum<T>['HATCHED_YOSHI_LIMIT'],

    SimpleEnum<T>['GENERAL_ENTITY_LIMIT_EDITOR'], SimpleEnum<T>['CHARVAARGH_LIMIT'], SimpleEnum<T>['PIRANHA_CREEPER_LIMIT'],
    SimpleEnum<T>['BOWSER_AND_BOWSER_JR_LIMIT'], SimpleEnum<T>['BOOM_BOOM_AND_POM_POM_LIMIT'], SimpleEnum<T>['KOOPALING_LIMIT'],
    SimpleEnum<T>['ANGRY_SUN_OR_MOON_LIMIT'], SimpleEnum<T>['PHANTO_LIMIT'], SimpleEnum<T>['KOOPA_TROOPA_CAR_LIMIT'],

    SimpleEnum<T>['WARP_DOOR_LIMIT'], SimpleEnum<T>['WARP_BOX_LIMIT'],
];

//endregion -------------------- Array types --------------------
