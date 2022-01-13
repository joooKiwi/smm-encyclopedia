import type {EntityBehaviours}                 from './EntityBehaviours';
import type {SimpleEnum as OriginalSimpleEnum} from '../../util/enum/Enum.types';

export type PossibleNonNullableValue = | EntityBehaviours | Ordinals | PossibleStringValue;
export type PossibleStringValue = Names | PossibleTranslationKeys | PossibleAcronym;
export type PossibleValue = | EntityBehaviours | number | string | null | undefined;

enum Enum {

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

//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type PossibleTranslationKeys =
    | `Respawn ${'with Vine' | 'as ? Block'}`
    | `${'Always' | 'Never'} know visually # of Coin` | 'Only 1st sound of Pink Coin'

    | `Spawn ${'only 1 power-up' | '(1-4) power-up(s) from # of players'}`
    | 'Expelled power-up from Block' | 'Always final power-up'

    | 'Respawn after 10 sec.' | 'Can respawn at CP' | 'Respawn in Block (if player die)';

export type PossibleAcronym =
    | `R${'V' | 'B'}`
    | `${'A' | 'N'}C` | 'O1S'

    | `S${'1' | '1-4'}P`
    | 'EPB' | 'AFP'

    | 'R10' | 'CRCP' | 'RBD';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends EntityBehaviours = EntityBehaviours, > = OriginalSimpleEnum<Names, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EnumArray<T extends EntityBehaviours = EntityBehaviours, > = readonly [
    SimpleEnum<T>['RESPAWN_WITH_VINE'],
    SimpleEnum<T>['RESPAWN_AS_QUESTION_MARK_BLOCK'],
    SimpleEnum<T>['ALWAYS_KNOW_VISUALLY_AMOUNT_OF_COIN'],
    SimpleEnum<T>['NEVER_KNOW_VISUALLY_AMOUNT_OF_COIN'],
    SimpleEnum<T>['ONLY_1ST_SOUND_OF_PINK_COIN'],

    SimpleEnum<T>['SPAWN_ONLY_1_POWER_UP'],
    SimpleEnum<T>['SPAWN_1_TO_4_POWER_UPS_FROM_AMOUNT_OF_PLAYERS'],
    SimpleEnum<T>['EXPELLED_POWER_UP_FROM_BLOCK'],
    SimpleEnum<T>['ALWAYS_FINAL_POWER_UP'],

    SimpleEnum<T>['RESPAWN_AFTER_10_SEC'],
    SimpleEnum<T>['CAN_RESPAWN_AT_CP'],
    SimpleEnum<T>['RESPAWN_IN_BLOCK_IF_PLAYER_DIE'],
];

//endregion -------------------- Array types --------------------