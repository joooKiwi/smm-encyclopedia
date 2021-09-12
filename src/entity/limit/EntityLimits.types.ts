import type {EntityLimits} from './EntityLimits';
import type {SimpleEnum}   from '../../util/enum/Enum.types';

//region -------------------- Number types --------------------

export type EntityLimitsOrdinals =
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
    | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
    | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type EntityLimitsNames =
    | `${| 'GENERAL' | 'POWER_UP'}_ENTITY_LIMIT_${| 'WHILE_PLAYING' | 'EDITOR'}`

    | `${| 'LOOSE_COIN' | 'SOUND_EFFECT' | 'CORPSE' | 'PROJECTILE'

         | 'GROUND' | 'BLOCK' | 'OTHER_GROUND_AND_VINE' | 'CLEAR_PIPE'

         | 'GROWN_VINE' | 'CHECKPOINT_FLAG' | 'TRACK' | `${| 'SNAKE' | 'EXCLAMATION' | 'TRACK'}_BLOCK`

         | 'ICICLE' | 'ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK' | 'ENTITY_HELD_BY_A_TWISTER'

         | `${| '_10_OR_30_OR_50' | 'PINK'}_COIN` | 'KEY'

         | `${`${| 'FIRE' | 'SUPER'}BALL` | 'BOOMERANG' | 'CANNONBALL'}_THROWN_BY_A_PLAYER` | 'LINK_BOMB' | 'PLAYER_CRATE' | 'HATCHED_YOSHI'

         | 'CHARVAARGH' | 'PIRANHA_CREEPER'
         | 'BOWSER_AND_BOWSER_JR' | 'BOOM_BOOM_AND_POM_POM' | 'KOOPALING'
         | 'ANGRY_SUN_MOON' | 'PHANTO' | 'KOOPA_TROOPA_CAR'

         | `WARP_${| 'DOOR' | 'BOX'}`}_LIMIT`;

export type PossibleAcronymEntityLimitsInBothEditorAndWhilePlaying = `${| 'GE' | 'PE'}L (${| 'WP' | 'E'})`;
export type PossibleStartingEntityLimitsInBothEditorAndWhilePlaying = `${| 'General' | 'Power-up'} Entity`;

export type PossibleAcronymEntityLimits = | PossibleAcronymEntityLimitsInBothEditorAndWhilePlaying | `${| 'LC' | 'SE' | 'C' | 'PJ' | 'GV' | 'HY'}L`;
export type PossibleStartingEntityLimitsNotInBothEditorAndWhilePlaying =
    | 'Loose Coin' | 'Sound Effect' | 'Corpse' | 'Projectile'

    | 'Ground' | 'Block' | 'Other Ground + Vine' | 'Clear Pipe'

    | 'Grown Vine' | 'Checkpoint Flag' | 'Track' | `${| 'Snake ' | '! ' | 'Track '}Block`

    | 'Icicle' | 'One-Way Wall / Arrow Sign / Dash Block' | 'Entity Held By A Twister'

    | `${| '10 / 30 / 50' | 'Pink'} Coin` | 'Key'

    | 'Power-up' | `${| `${| 'Fire' | 'Super'}ball` | 'Cannonball' | 'Boomerang'} thrown by a player` | 'Player\'s Crate' | 'Link\'s Bomb' | 'Hatched Yoshi'

    | 'Enemy + Other' | 'Charvaargh' | 'Piranha Creeper'
    | 'Bowser (Jr.)' | 'Boom Boom / Pom Pom' | 'Koopaling'
    | 'Angry Sun / Moon' | 'Phanto' | 'Koopa Troopa Car'

    | `Warp ${| 'Door' | 'Box'}`;
export type PossibleStartingEntityLimits = | PossibleStartingEntityLimitsNotInBothEditorAndWhilePlaying | PossibleStartingEntityLimitsInBothEditorAndWhilePlaying;
export type PossibleEntityLimits = | `${PossibleStartingEntityLimitsNotInBothEditorAndWhilePlaying} Limit` | `${PossibleStartingEntityLimitsInBothEditorAndWhilePlaying} Limit (${| 'While Playing' | 'Editor'})`;

export type PossibleAlternativeAcronymEntityLimits = `EL${| 'B' | 'C'}`;
export type PossibleAlternativeEntityLimits = | `Entity Limit ${| 'B' | 'C'}` | `Ground Limit ${| 1 | 2 | 3}` | 'General Enemy Limit';

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEntityLimits<T = EntityLimits, > = SimpleEnum<EntityLimitsNames, T>;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

export type EntityLimitsArray<T = EntityLimits, > = readonly [
    SimpleEntityLimits<T>['GENERAL_ENTITY_LIMIT_WHILE_PLAYING'], SimpleEntityLimits<T>['GENERAL_ENTITY_LIMIT_WHILE_PLAYING'],

    SimpleEntityLimits<T>['LOOSE_COIN_LIMIT'], SimpleEntityLimits<T>['SOUND_EFFECT_LIMIT'], SimpleEntityLimits<T>['CORPSE_LIMIT'], SimpleEntityLimits<T>['PROJECTILE_LIMIT'],

    SimpleEntityLimits<T>['GROUND_LIMIT'], SimpleEntityLimits<T>['BLOCK_LIMIT'], SimpleEntityLimits<T>['OTHER_GROUND_AND_VINE_LIMIT'], SimpleEntityLimits<T>['CLEAR_PIPE_LIMIT'],

    SimpleEntityLimits<T>['GROWN_VINE_LIMIT'], SimpleEntityLimits<T>['CHECKPOINT_FLAG_LIMIT'], SimpleEntityLimits<T>['TRACK_LIMIT'], SimpleEntityLimits<T>['SNAKE_BLOCK_LIMIT'], SimpleEntityLimits<T>['EXCLAMATION_BLOCK_LIMIT'], SimpleEntityLimits<T>['TRACK_BLOCK_LIMIT'],

    SimpleEntityLimits<T>['ICICLE_LIMIT'], SimpleEntityLimits<T>['ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT'], SimpleEntityLimits<T>['ENTITY_HELD_BY_A_TWISTER_LIMIT'],

    SimpleEntityLimits<T>['_10_OR_30_OR_50_COIN_LIMIT'], SimpleEntityLimits<T>['PINK_COIN_LIMIT'], SimpleEntityLimits<T>['KEY_LIMIT'],

    SimpleEntityLimits<T>['POWER_UP_ENTITY_LIMIT_EDITOR'], SimpleEntityLimits<T>['FIREBALL_THROWN_BY_A_PLAYER_LIMIT'], SimpleEntityLimits<T>['SUPERBALL_THROWN_BY_A_PLAYER_LIMIT'],
    SimpleEntityLimits<T>['LINK_BOMB_LIMIT'], SimpleEntityLimits<T>['PLAYER_CRATE_LIMIT'],
    SimpleEntityLimits<T>['BOOMERANG_THROWN_BY_A_PLAYER_LIMIT'], SimpleEntityLimits<T>['CANNONBALL_THROWN_BY_A_PLAYER_LIMIT'],
    SimpleEntityLimits<T>['HATCHED_YOSHI_LIMIT'],

    SimpleEntityLimits<T>['GENERAL_ENTITY_LIMIT_EDITOR'], SimpleEntityLimits<T>['CHARVAARGH_LIMIT'], SimpleEntityLimits<T>['PIRANHA_CREEPER_LIMIT'],
    SimpleEntityLimits<T>['BOWSER_AND_BOWSER_JR_LIMIT'], SimpleEntityLimits<T>['BOOM_BOOM_AND_POM_POM_LIMIT'], SimpleEntityLimits<T>['KOOPALING_LIMIT'],
    SimpleEntityLimits<T>['ANGRY_SUN_MOON_LIMIT'], SimpleEntityLimits<T>['PHANTO_LIMIT'], SimpleEntityLimits<T>['KOOPA_TROOPA_CAR_LIMIT'],

    SimpleEntityLimits<T>['WARP_DOOR_LIMIT'], SimpleEntityLimits<T>['WARP_BOX_LIMIT'],
];

//endregion -------------------- Array types --------------------
