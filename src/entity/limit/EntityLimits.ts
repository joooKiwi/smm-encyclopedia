import type {EntityLimit} from './EntityLimit';
import type {SimpleEnum}  from '../../util/enum/EnumTypes';

import {EntityLimitLoader} from './EntityLimitLoader';

//region -------------------- limit texts --------------------

export type PossibleAcronymEntityLimits = `${'GE' | 'PE' | 'LC' | 'SE' | 'C' | 'PJ' | 'GV' | 'HY'}L`;
export type PossibleStartingEntityLimits =
    | `${| 'General' | 'Power-up'} Entity`

    | 'Loose Coin' | 'Sound Effect' | 'Corpse' | 'Projectile'

    | 'Ground' | 'Block' | 'Other Ground + Vine' | 'Clear Pipe'

    | 'Grown Vine' | 'Checkpoint' | 'Track' | `${| 'Snake ' | '!-' | 'Track '}Block`

    | 'Icicle' | 'One-Way Wall / Arrow Sign / Dash Block' | 'Entity Held By Twister'

    | `${| '10 / 30 / 50' | 'Pink'} Coin` | 'Key'

    | 'Power-up' | `${| 'Fire' | 'Super'}ball` | 'Link\'s Bomb' | `Player ${| 'Crate' | 'Cannonball'}` | 'Boomerang' | 'Hatched Yoshi'

    | 'Enemy + Other' | 'Charvaargh' | 'Piranha Creeper'
    | 'Bowser / Bowser Jr.' | 'Boom Boom / Pom Pom' | 'Koopaling'
    | 'Angry Sun / Moon' | 'Phanto' | 'Koopa Troopa Car'

    | `Warp ${| 'Door' | 'Box'}`;
export type PossibleEntityLimits = `${PossibleStartingEntityLimits} Limit`;

export type PossibleAlternativeAcronymEntityLimits = `EL${'B' | 'C'}`
export type PossibleAlternativeEntityLimits = `Entity Limit ${'B' | 'C'}` | `Ground Limit ${1 | 2 | 3}` | 'General Enemy Limit';

//endregion -------------------- limit texts --------------------
//region -------------------- Enum types --------------------

export type EntityLimitsOrdinals =
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
    | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30
    | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
export type EntityLimitsNames =
    `${| `${| 'GENERAL' | 'POWER_UP'}_ENTITY`

        | 'LOOSE_COIN' | 'SOUND_EFFECT' | 'CORPSE' | 'PROJECTILE'

        | 'GROUND' | 'BLOCK' | 'OTHER_GROUND_AND_VINE' | 'CLEAR_PIPE'

        | 'GROWN_VINE' | 'CHECKPOINT' | 'TRACK' | `${| 'SNAKE' | 'EXCLAMATION' | 'TRACK'}_BLOCK`

        | 'ICICLE' | 'ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK' | 'ENTITY_HELD_BY_TWISTER'

        | `${| '_10_OR_30_OR_50' | 'PINK'}_COIN` | 'KEY'

        | 'POWER_UP' | `${| 'FIRE' | 'SUPER'}BALL` | 'LINK_BOMB' | `PLAYER_${| 'CRATE' | 'CANNONBALL'}` | 'BOOMERANG' | 'HATCHED_YOSHI'

        | 'ENEMY_AND_OTHER' | 'CHARVAARGH' | 'PIRANHA_CREEPER'
        | 'BOWSER_AND_BOWSER_JR' | 'BOOM_BOOM_AND_POM_POM' | 'KOOPALING'
        | 'ANGRY_SUN_MOON' | 'PHANTO' | 'KOOPA_TROOPA_CAR'

        | `WARP_${| 'DOOR' | 'BOX'}`}_LIMIT`;
export type SimpleEntityLimits<T = EntityLimits, > = SimpleEnum<EntityLimitsNames, T>;
export type EntityLimitsArray<T = EntityLimits, > = readonly [
    SimpleEntityLimits<T>[ 'GENERAL_ENTITY_LIMIT' ], SimpleEntityLimits<T>[ 'POWER_UP_ENTITY_LIMIT'    ],
    SimpleEntityLimits<T>[ 'LOOSE_COIN_LIMIT' ], SimpleEntityLimits<T>[ 'SOUND_EFFECT_LIMIT' ], SimpleEntityLimits<T>[ 'CORPSE_LIMIT' ], SimpleEntityLimits<T>[ 'PROJECTILE_LIMIT'],

    SimpleEntityLimits<T>[ 'GROUND_LIMIT' ], SimpleEntityLimits<T>[ 'BLOCK_LIMIT' ], SimpleEntityLimits<T>[ 'OTHER_GROUND_AND_VINE_LIMIT' ], SimpleEntityLimits<T>[ 'CLEAR_PIPE_LIMIT'],

    SimpleEntityLimits<T>[ 'GROWN_VINE_LIMIT' ], SimpleEntityLimits<T>[ 'CHECKPOINT_LIMIT' ], SimpleEntityLimits<T>[ 'TRACK_LIMIT' ], SimpleEntityLimits<T>[ 'SNAKE_BLOCK_LIMIT' ], SimpleEntityLimits<T>[ 'EXCLAMATION_BLOCK_LIMIT' ], SimpleEntityLimits<T>[ 'TRACK_BLOCK_LIMIT'],

    SimpleEntityLimits<T>[ 'ICICLE_LIMIT' ], SimpleEntityLimits<T>[ 'ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT' ], SimpleEntityLimits<T>[ 'ENTITY_HELD_BY_TWISTER_LIMIT'],

    SimpleEntityLimits<T>[ '_10_OR_30_OR_50_COIN_LIMIT' ], SimpleEntityLimits<T>[ 'PINK_COIN_LIMIT' ], SimpleEntityLimits<T>[ 'KEY_LIMIT'],

    SimpleEntityLimits<T>[ 'POWER_UP_LIMIT' ], SimpleEntityLimits<T>[ 'FIREBALL_LIMIT' ], SimpleEntityLimits<T>[ 'SUPERBALL_LIMIT' ], SimpleEntityLimits<T>[ 'LINK_BOMB_LIMIT' ], SimpleEntityLimits<T>[ 'PLAYER_CRATE_LIMIT' ], SimpleEntityLimits<T>[ 'BOOMERANG_LIMIT' ], SimpleEntityLimits<T>[ 'PLAYER_CANNONBALL_LIMIT' ], SimpleEntityLimits<T>[ 'HATCHED_YOSHI_LIMIT'],

    SimpleEntityLimits<T>[ 'ENEMY_AND_OTHER_LIMIT' ], SimpleEntityLimits<T>[ 'CHARVAARGH_LIMIT' ], SimpleEntityLimits<T>[ 'PIRANHA_CREEPER_LIMIT'],
    SimpleEntityLimits<T>[ 'BOWSER_AND_BOWSER_JR_LIMIT' ], SimpleEntityLimits<T>[ 'BOOM_BOOM_AND_POM_POM_LIMIT' ], SimpleEntityLimits<T>[ 'KOOPALING_LIMIT'],
    SimpleEntityLimits<T>[ 'ANGRY_SUN_MOON_LIMIT' ], SimpleEntityLimits<T>[ 'PHANTO_LIMIT' ], SimpleEntityLimits<T>[ 'KOOPA_TROOPA_CAR_LIMIT'],

    SimpleEntityLimits<T>[ 'WARP_DOOR_LIMIT' ], SimpleEntityLimits<T>[ 'WARP_BOX_LIMIT'],
];

//endregion -------------------- Enum types --------------------

/**
 * @enum
 * @recursiveReference {@link EntityLimitLoader}
 */
export class EntityLimits {

    //region -------------------- enum instances --------------------

    public static readonly GENERAL_ENTITY_LIMIT =                           new EntityLimits(['GEL', 'General Entity',], ['ELB', 'Entity Limit B',],);
    public static readonly POWER_UP_ENTITY_LIMIT =                          new EntityLimits(['PEL', 'Power-up Entity'], ['ELC', 'Entity Limit C',],);

    public static readonly LOOSE_COIN_LIMIT =                               new EntityLimits(['LCL', 'Loose Coin',],);
    public static readonly SOUND_EFFECT_LIMIT =                             new EntityLimits(['SEL', 'Sound Effect',],);
    public static readonly CORPSE_LIMIT =                                   new EntityLimits(['CL', 'Corpse',],);
    public static readonly PROJECTILE_LIMIT =                               new EntityLimits(['PJL', 'Projectile',],);

    public static readonly GROUND_LIMIT =                                   new EntityLimits('Ground', 'Ground Limit 1',);
    public static readonly BLOCK_LIMIT =                                    new EntityLimits('Block', 'Ground Limit 2',);
    public static readonly OTHER_GROUND_AND_VINE_LIMIT =                    new EntityLimits('Other Ground + Vine', 'Ground Limit 3',);
    public static readonly CLEAR_PIPE_LIMIT =                               new EntityLimits('Clear Pipe',);

    public static readonly GROWN_VINE_LIMIT =                               new EntityLimits('Grown Vine',);
    public static readonly CHECKPOINT_LIMIT =                               new EntityLimits('Checkpoint',);
    public static readonly TRACK_LIMIT =                                    new EntityLimits('Track',);
    public static readonly SNAKE_BLOCK_LIMIT =                              new EntityLimits('Snake Block',);
    public static readonly EXCLAMATION_BLOCK_LIMIT =                        new EntityLimits('!-Block',);
    public static readonly TRACK_BLOCK_LIMIT =                              new EntityLimits('Track Block',);
    public static readonly ICICLE_LIMIT =                                   new EntityLimits('Icicle',);
    public static readonly ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT = new EntityLimits('One-Way Wall / Arrow Sign / Dash Block',);
    public static readonly ENTITY_HELD_BY_TWISTER_LIMIT =                   new EntityLimits('Entity Held By Twister',);

    public static readonly _10_OR_30_OR_50_COIN_LIMIT =                     new EntityLimits('10 / 30 / 50 Coin',);
    public static readonly PINK_COIN_LIMIT =                                new EntityLimits('Pink Coin',);
    public static readonly KEY_LIMIT =                                      new EntityLimits('Key',);

    public static readonly POWER_UP_LIMIT =                                 new EntityLimits('Power-up',);
    public static readonly FIREBALL_LIMIT =                                 new EntityLimits('Fireball',);
    public static readonly SUPERBALL_LIMIT =                                new EntityLimits('Superball',);
    public static readonly LINK_BOMB_LIMIT =                                new EntityLimits('Link\'s Bomb',);
    public static readonly PLAYER_CRATE_LIMIT =                             new EntityLimits('Player Crate',);
    public static readonly BOOMERANG_LIMIT =                                new EntityLimits('Boomerang',);
    public static readonly PLAYER_CANNONBALL_LIMIT =                        new EntityLimits('Player Cannonball',);
    public static readonly HATCHED_YOSHI_LIMIT =                            new EntityLimits('Hatched Yoshi',);

    public static readonly ENEMY_AND_OTHER_LIMIT =                          new EntityLimits('Enemy + Other', 'General Enemy Limit',);
    public static readonly CHARVAARGH_LIMIT =                               new EntityLimits('Charvaargh',);
    public static readonly PIRANHA_CREEPER_LIMIT =                          new EntityLimits('Piranha Creeper',);
    public static readonly BOWSER_AND_BOWSER_JR_LIMIT =                     new EntityLimits('Bowser / Bowser Jr.',);
    public static readonly BOOM_BOOM_AND_POM_POM_LIMIT =                    new EntityLimits('Boom Boom / Pom Pom',);
    public static readonly KOOPALING_LIMIT =                                new EntityLimits('Koopaling',);
    public static readonly ANGRY_SUN_MOON_LIMIT =                           new EntityLimits('Angry Sun / Moon',);
    public static readonly PHANTO_LIMIT =                                   new EntityLimits('Phanto',);
    public static readonly KOOPA_TROOPA_CAR_LIMIT =                         new EntityLimits('Koopa Troopa Car',);

    public static readonly WARP_DOOR_LIMIT =                                new EntityLimits('Warp Door',);
    public static readonly WARP_BOX_LIMIT =                                 new EntityLimits('Warp Box',);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EntityLimitsArray;
    static #LAST_ORDINAL: EntityLimitsOrdinals = 0;
    readonly #ordinal: EntityLimitsOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static readonly #LIMIT_LENGTH = ' Limit'.length;

    #reference?: EntityLimit;
    readonly #acronym: PossibleAcronymEntityLimits | null;
    readonly #englishName: PossibleEntityLimits;
    readonly #alternativeAcronym: PossibleAlternativeAcronymEntityLimits | null;
    readonly #alternativeEnglishName: PossibleAlternativeEntityLimits | null;

    //endregion -------------------- Attributes --------------------

    private constructor(
        englishName: PossibleStartingEntityLimits | [englishName: PossibleAcronymEntityLimits, englishAcronym: PossibleStartingEntityLimits,],
        alternativeEnglishName: PossibleAlternativeEntityLimits | [alternativeEnglishName: PossibleAlternativeAcronymEntityLimits, alternativeEnglishAcronym: PossibleAlternativeEntityLimits,] | null = null,
    ) {
        this.#ordinal = EntityLimits.#LAST_ORDINAL++ as EntityLimitsOrdinals;
        if (typeof englishName == 'string') {
            this.#acronym = null;
            this.#englishName = `${englishName} Limit`;
        } else {
            this.#acronym = englishName[0];
            this.#englishName = `${englishName[1]} Limit`;
        }
        if (alternativeEnglishName instanceof Array) {
            this.#alternativeAcronym = alternativeEnglishName[0];
            this.#alternativeEnglishName = alternativeEnglishName[1];
        } else {
            this.#alternativeAcronym = null;
            this.#alternativeEnglishName = alternativeEnglishName;
        }
    }

    //region -------------------- Methods --------------------

    public get acronym(): PossibleAcronymEntityLimits | null {
        return this.#acronym;
    }

    public get englishName(): PossibleEntityLimits {
        return this.#englishName;
    }

    public get alternativeAcronym(): PossibleAlternativeAcronymEntityLimits | null {
        return this.#alternativeAcronym;
    }

    public get alternativeEnglishName(): PossibleAlternativeEntityLimits | null {
        return this.#alternativeEnglishName;
    }

    public get reference() {
        return this.#reference ??= EntityLimitLoader.get.load().get(this.englishName)!;
    }


    public static get everyAcronyms(): readonly PossibleAcronymEntityLimits[] {
        return this.values.map(limit => limit.acronym).filter(acronym => acronym != null) as PossibleAcronymEntityLimits[];
    }

    public static get everyEnglishNames(): readonly PossibleEntityLimits[] {
        return this.values.map(limit => limit.englishName);
    }

    public static get everyAlternativeAcronyms(): readonly PossibleAlternativeAcronymEntityLimits[] {
        return this.values.map(limit => limit.alternativeAcronym).filter(alternativeAcronym => alternativeAcronym != null) as PossibleAlternativeAcronymEntityLimits[];
    }

    public static get everyAlternativeEnglishNames(): readonly PossibleAlternativeEntityLimits[] {
        return this.values.map(limit => limit.alternativeEnglishName).filter(alternativeEnglishName => alternativeEnglishName != null) as PossibleAlternativeEntityLimits[];
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): EntityLimitsOrdinals {
        return this.#ordinal;
    }

    public static getValue(value: | EntityLimits | PossibleStartingEntityLimits | PossibleEntityLimits | PossibleAlternativeEntityLimits,): EntityLimits
    public static getValue(value: string,): | EntityLimits | null
    public static getValue(value: | EntityLimits | string,): | EntityLimits | null
    public static getValue(value: | EntityLimits | string,): | EntityLimits | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value)
                ?? this.values.find(theme => theme.englishName.substring(0, theme.englishName.length - this.#LIMIT_LENGTH) === value)
                ?? this.values.find(theme => theme.alternativeEnglishName === value)
                ?? null
            : value;
    }

    public static get values(): EntityLimitsArray {
        return this.#VALUES ??= [
            this.GENERAL_ENTITY_LIMIT, this.POWER_UP_ENTITY_LIMIT,

            this.LOOSE_COIN_LIMIT, this.SOUND_EFFECT_LIMIT, this.CORPSE_LIMIT, this.PROJECTILE_LIMIT,

            this.GROUND_LIMIT, this.BLOCK_LIMIT, this.OTHER_GROUND_AND_VINE_LIMIT, this.CLEAR_PIPE_LIMIT,

            this.GROWN_VINE_LIMIT, this.CHECKPOINT_LIMIT, this.TRACK_LIMIT,
            this.SNAKE_BLOCK_LIMIT, this.EXCLAMATION_BLOCK_LIMIT, this.TRACK_BLOCK_LIMIT,
            this.ICICLE_LIMIT, this.ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT, this.ENTITY_HELD_BY_TWISTER_LIMIT,

            this._10_OR_30_OR_50_COIN_LIMIT, this.PINK_COIN_LIMIT, this.KEY_LIMIT,

            this.POWER_UP_LIMIT,
            this.FIREBALL_LIMIT, this.SUPERBALL_LIMIT,
            this.LINK_BOMB_LIMIT, this.PLAYER_CRATE_LIMIT, this.BOOMERANG_LIMIT, this.PLAYER_CANNONBALL_LIMIT,
            this.HATCHED_YOSHI_LIMIT,

            this.ENEMY_AND_OTHER_LIMIT,
            this.CHARVAARGH_LIMIT, this.PIRANHA_CREEPER_LIMIT,
            this.BOWSER_AND_BOWSER_JR_LIMIT, this.BOOM_BOOM_AND_POM_POM_LIMIT, this.KOOPALING_LIMIT,
            this.ANGRY_SUN_MOON_LIMIT, this.PHANTO_LIMIT, this.KOOPA_TROOPA_CAR_LIMIT,

            this.WARP_DOOR_LIMIT, this.WARP_BOX_LIMIT,
        ];
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}