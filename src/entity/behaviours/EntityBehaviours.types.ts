import type {EntityBehaviours} from './EntityBehaviours';
import type {SimpleEnum}       from '../../util/enum/Enum.types';

//region -------------------- Number types --------------------

export type EntityBehavioursOrdinals =
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    | 11;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type EntityBehavioursNames =
    | 'RESPAWN_WITH_VINE' | 'RESPAWN_AS_QUESTION_MARK_BLOCK'
    | `${'ALWAYS' | 'NEVER'}_KNOW_VISUALLY_AMOUNT_OF_COIN` | 'ONLY_1ST_SOUND_OF_PINK_COIN'

    | `SPAWN_${'ONLY_1_POWER_UP' | '1_TO_4_POWER_UPS_FROM_AMOUNT_OF_PLAYERS'}`
    | 'EXPELLED_POWER_UP_FROM_BLOCK' | 'ALWAYS_FINAL_POWER_UP'

    | 'RESPAWN_AFTER_10_SEC' | 'CAN_RESPAWN_AT_CP' | 'RESPAWN_IN_BLOCK_IF_PLAYER_DIE';

export type PossibleTranslationKeyEntityBehaviours =
    | `Respawn ${'with Vine' | 'as ? Block'}`
    | `${'Always' | 'Never'} know visually # of Coin` | 'Only 1st sound of Pink Coin'

    | `Spawn ${'only 1 power-up' | '(1-4) power-up(s) from # of players'}`
    | 'Expelled power-up from Block' | 'Always final power-up'

    | 'Respawn after 10 sec.' | 'Can respawn at CP' | 'Respawn in Block (if player die)';

export type PossibleAcronymEntityBehaviours =
    | `R${'V' | 'B'}`
    | `${'A' | 'N'}C` | 'O1S'

    | `S${'1' | '1-4'}P`
    | 'EPB' | 'AFP'

    | 'R10' | 'CRCP' | 'RBD';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEntityBehaviours<T = EntityBehaviours, > = SimpleEnum<EntityBehavioursNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EntityMultiplayerArray<T = EntityBehaviours, > = readonly [
    SimpleEntityBehaviours['RESPAWN_WITH_VINE'],
    SimpleEntityBehaviours['RESPAWN_AS_QUESTION_MARK_BLOCK'],
    SimpleEntityBehaviours['ALWAYS_KNOW_VISUALLY_AMOUNT_OF_COIN'],
    SimpleEntityBehaviours['NEVER_KNOW_VISUALLY_AMOUNT_OF_COIN'],
    SimpleEntityBehaviours['ONLY_1ST_SOUND_OF_PINK_COIN'],

    SimpleEntityBehaviours['SPAWN_ONLY_1_POWER_UP'],
    SimpleEntityBehaviours['SPAWN_1_TO_4_POWER_UPS_FROM_AMOUNT_OF_PLAYERS'],
    SimpleEntityBehaviours['EXPELLED_POWER_UP_FROM_BLOCK'],
    SimpleEntityBehaviours['ALWAYS_FINAL_POWER_UP'],

    SimpleEntityBehaviours['RESPAWN_AFTER_10_SEC'],
    SimpleEntityBehaviours['CAN_RESPAWN_AT_CP'],
    SimpleEntityBehaviours['RESPAWN_IN_BLOCK_IF_PLAYER_DIE'],
];

//endregion -------------------- Array types --------------------