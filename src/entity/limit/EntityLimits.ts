import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                              from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                                                                                                from '../ClassWithReference';
import type {EntityLimitWithPossibleAlternativeEntityLimit}                                                                                                                                                                                                                                                                                                                                                     from './EntityLimit';
import type {EntityLimitsArray, EntityLimitsNames, EntityLimitsOrdinals, PossibleAcronymEntityLimits, PossibleAcronymEntityLimitsInBothEditorAndWhilePlaying, PossibleAlternativeAcronymEntityLimits, PossibleAlternativeEntityLimits, PossibleEntityLimits, PossibleStartingEntityLimits, PossibleStartingEntityLimitsInBothEditorAndWhilePlaying, PossibleStartingEntityLimitsNotInBothEditorAndWhilePlaying} from './EntityLimits.types';

import {EntityLimitLoader} from './EntityLimitLoader';
import {EntityLimitTypes}  from './EntityLimitTypes';
import {Enum}              from '../../util/enum/Enum';

type EnglishNameReceived = | PossibleStartingEntityLimits | [englishName: PossibleAcronymEntityLimits, englishAcronym: PossibleStartingEntityLimits,] | [englishName: PossibleAcronymEntityLimitsInBothEditorAndWhilePlaying, englishAcronym: PossibleStartingEntityLimitsInBothEditorAndWhilePlaying, isWhilePlaying: boolean,];
type AlternativeEnglishNameReceived = | PossibleAlternativeEntityLimits | [alternativeEnglishName: PossibleAlternativeAcronymEntityLimits, alternativeEnglishAcronym: PossibleAlternativeEntityLimits,];

/**
 * @recursiveReferenceVia<{@link EntityLimitBuilder}, {@link EntityLimitLoader}>
 * @recursiveReference<{@link EntityLimitLoader}>
 */
export class EntityLimits
    extends Enum<EntityLimitsOrdinals, EntityLimitsNames>
    implements ClassWithEnglishName<PossibleEntityLimits>, ClassWithReference<EntityLimitWithPossibleAlternativeEntityLimit> {

    //region -------------------- Enum instances --------------------

    public static readonly GENERAL_ENTITY_LIMIT_WHILE_PLAYING =             new EntityLimits(['GEL (WP)', 'General Entity', true,],  ['ELB', 'Entity Limit B',],        );
    public static readonly POWER_UP_ENTITY_LIMIT_WHILE_PLAYING =            new EntityLimits(['PEL (WP)', 'Power-up Entity', true,], ['ELC', 'Entity Limit C',],        );

    public static readonly LOOSE_COIN_LIMIT =                               new EntityLimits(['LCL', 'Loose Coin',],                                                                      );
    public static readonly SOUND_EFFECT_LIMIT =                             new EntityLimits(['SEL', 'Sound Effect',],                                                                    );
    public static readonly CORPSE_LIMIT =                                   new EntityLimits(['CL', 'Corpse',],                                                                           );
    public static readonly PROJECTILE_LIMIT =                               new EntityLimits(['PJL', 'Projectile',],                                                                      );

    public static readonly GROUND_LIMIT =                                   new EntityLimits('Ground',                   'Ground Limit 1',                              );
    public static readonly BLOCK_LIMIT =                                    new EntityLimits('Block',                    'Ground Limit 2',                              );
    public static readonly OTHER_GROUND_AND_VINE_LIMIT =                    new EntityLimits('Other Ground + Vine',      'Ground Limit 3',                              );
    public static readonly CLEAR_PIPE_LIMIT =                               new EntityLimits('Clear Pipe',                                                                                );

    public static readonly GROWN_VINE_LIMIT =                               new EntityLimits(['GVL', 'Grown Vine',],                                                                      );
    public static readonly CHECKPOINT_FLAG_LIMIT =                          new EntityLimits('Checkpoint Flag',                                                                                );
    public static readonly TRACK_LIMIT =                                    new EntityLimits('Track',                                                                                     );
    public static readonly SNAKE_BLOCK_LIMIT =                              new EntityLimits('Snake Block',                                                                               );
    public static readonly EXCLAMATION_BLOCK_LIMIT =                        new EntityLimits('! Block',                                                                                   );
    public static readonly TRACK_BLOCK_LIMIT =                              new EntityLimits('Track Block',                                                                               );
    public static readonly ICICLE_LIMIT =                                   new EntityLimits('Icicle',                                                                                    );
    public static readonly ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT = new EntityLimits('One-Way Wall / Arrow Sign / Dash Block',                                                    );
    public static readonly ENTITY_HELD_BY_A_TWISTER_LIMIT =                 new EntityLimits('Entity Held By A Twister',                                                                    );

    public static readonly _10_OR_30_OR_50_COIN_LIMIT =                     new EntityLimits('10 / 30 / 50 Coin',                                                                         );
    public static readonly PINK_COIN_LIMIT =                                new EntityLimits('Pink Coin',                                                                                 );
    public static readonly KEY_LIMIT =                                      new EntityLimits('Key',                                                                                       );

    public static readonly POWER_UP_ENTITY_LIMIT_EDITOR =                   new EntityLimits(['PEL (E)', 'Power-up Entity', false,],                                                      );
    public static readonly PLAYER_FIREBALL_LIMIT =                          new EntityLimits('Player\'s Fireball',                                                                        );
    public static readonly PLAYER_SUPERBALL_LIMIT =                         new EntityLimits('Player\'s Superball',                                                                       );
    public static readonly LINK_BOMB_LIMIT =                                new EntityLimits('Link\'s Bomb',                                                                              );
    public static readonly PLAYER_CRATE_LIMIT =                             new EntityLimits('Player\'s Crate',                                                                           );
    public static readonly PLAYER_BOOMERANG_LIMIT =                         new EntityLimits('Player\'s Boomerang',                                                                       );
    public static readonly PLAYER_CANNONBALL_LIMIT =                        new EntityLimits('Player\'s Cannonball',                                                                      );
    public static readonly HATCHED_YOSHI_LIMIT =                            new EntityLimits(['HYL', 'Hatched Yoshi',],                                                                   );

    public static readonly GENERAL_ENTITY_LIMIT_EDITOR =                    new EntityLimits(['GEL (WP)', 'General Entity', false, ],            'General Enemy Limit', );
    public static readonly CHARVAARGH_LIMIT =                               new EntityLimits('Charvaargh',                                                                                );
    public static readonly PIRANHA_CREEPER_LIMIT =                          new EntityLimits('Piranha Creeper',                                                                           );
    public static readonly BOWSER_AND_BOWSER_JR_LIMIT =                     new EntityLimits('Bowser (Jr.)',                                                                              );
    public static readonly BOOM_BOOM_AND_POM_POM_LIMIT =                    new EntityLimits('Boom Boom / Pom Pom',                                                                       );
    public static readonly KOOPALING_LIMIT =                                new EntityLimits('Koopaling',                                                                                 );
    public static readonly ANGRY_SUN_MOON_LIMIT =                           new EntityLimits('Angry Sun / Moon',                                                                          );
    public static readonly PHANTO_LIMIT =                                   new EntityLimits('Phanto',                                                                                    );
    public static readonly KOOPA_TROOPA_CAR_LIMIT =                         new EntityLimits('Koopa Troopa Car',                                                                          );

    public static readonly WARP_DOOR_LIMIT =                                new EntityLimits('Warp Door',                                                                                 );
    public static readonly WARP_BOX_LIMIT =                                 new EntityLimits('Warp Box',                                                                                  );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EntityLimitsArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static readonly #LIMIT_LENGTH = ' Limit'.length;

    #reference?: EntityLimitWithPossibleAlternativeEntityLimit;
    readonly #acronym: PossibleAcronymEntityLimits | null;
    readonly #englishName: PossibleEntityLimits;
    readonly #alternativeAcronym: PossibleAlternativeAcronymEntityLimits | null;
    readonly #alternativeEnglishName: PossibleAlternativeEntityLimits | null;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: EnglishNameReceived, alternativeEnglishName: | AlternativeEnglishNameReceived | null = null,) {
        super(EntityLimits);
        if (typeof englishName == 'string') {
            this.#acronym = null;
            this.#englishName = `${englishName as PossibleStartingEntityLimitsNotInBothEditorAndWhilePlaying} Limit`;
        } else {
            this.#acronym = englishName[0];
            const isWhilePlaying = englishName[2];
            this.#englishName = isWhilePlaying == null
                ? `${englishName[1] as PossibleStartingEntityLimitsNotInBothEditorAndWhilePlaying} Limit`
                : `${englishName[1] as PossibleStartingEntityLimitsInBothEditorAndWhilePlaying} Limit (${isWhilePlaying ? EntityLimitTypes.WHILE_PLAYING.englishName : EntityLimitTypes.EDITOR.englishName})`;
        }
        if (alternativeEnglishName instanceof Array) {
            this.#alternativeAcronym = alternativeEnglishName[0];
            this.#alternativeEnglishName = alternativeEnglishName[1];
        } else {
            this.#alternativeAcronym = null;
            this.#alternativeEnglishName = alternativeEnglishName;
        }
    }

    //region -------------------- Getter methods --------------------

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
        return this.#reference ??= EntityLimitLoader.get.load().get(this.englishName)! as EntityLimitWithPossibleAlternativeEntityLimit;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

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
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends EntityLimitsOrdinals = EntityLimitsOrdinals>(ordinal: O,): EntityLimitsArray[O]
    public static getValue<O extends number = number>(ordinal: O,): | NonNullable<EntityLimitsArray[O]> | null
    public static getValue(name: | EntityLimitsNames | PossibleStartingEntityLimits | PossibleEntityLimits | PossibleAlternativeEntityLimits | PossibleAcronymEntityLimits | PossibleAlternativeAcronymEntityLimits,): EntityLimits
    public static getValue(name: string,): | EntityLimits | null
    public static getValue<I extends EntityLimits = EntityLimits, >(instance: I,): I
    public static getValue(value: | EntityLimits | string | number | null | undefined,): | EntityLimits | null
    public static getValue(value: | EntityLimits | string | number | null | undefined,): | EntityLimits | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(theme => theme.englishName === value)
                    ?? this.values.find(theme => theme.englishName.substring(0, theme.englishName.length - this.#LIMIT_LENGTH) === value)
                    ?? this.values.find(theme => theme.alternativeEnglishName === value)
                    ?? this.values.find(theme => theme.acronym === value)
                    ?? this.values.find(theme => theme.alternativeAcronym === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EntityLimitsArray {
        return this.#VALUES ??= [
            this.GENERAL_ENTITY_LIMIT_WHILE_PLAYING, this.POWER_UP_ENTITY_LIMIT_WHILE_PLAYING,

            this.LOOSE_COIN_LIMIT, this.SOUND_EFFECT_LIMIT, this.CORPSE_LIMIT, this.PROJECTILE_LIMIT,

            this.GROUND_LIMIT, this.BLOCK_LIMIT, this.OTHER_GROUND_AND_VINE_LIMIT, this.CLEAR_PIPE_LIMIT,

            this.GROWN_VINE_LIMIT, this.CHECKPOINT_FLAG_LIMIT, this.TRACK_LIMIT,
            this.SNAKE_BLOCK_LIMIT, this.EXCLAMATION_BLOCK_LIMIT, this.TRACK_BLOCK_LIMIT,
            this.ICICLE_LIMIT, this.ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT, this.ENTITY_HELD_BY_A_TWISTER_LIMIT,

            this._10_OR_30_OR_50_COIN_LIMIT, this.PINK_COIN_LIMIT, this.KEY_LIMIT,

            this.POWER_UP_ENTITY_LIMIT_EDITOR,
            this.PLAYER_FIREBALL_LIMIT, this.PLAYER_SUPERBALL_LIMIT,
            this.LINK_BOMB_LIMIT, this.PLAYER_CRATE_LIMIT, this.PLAYER_BOOMERANG_LIMIT, this.PLAYER_CANNONBALL_LIMIT,
            this.HATCHED_YOSHI_LIMIT,

            this.GENERAL_ENTITY_LIMIT_EDITOR,
            this.CHARVAARGH_LIMIT, this.PIRANHA_CREEPER_LIMIT,
            this.BOWSER_AND_BOWSER_JR_LIMIT, this.BOOM_BOOM_AND_POM_POM_LIMIT, this.KOOPALING_LIMIT,
            this.ANGRY_SUN_MOON_LIMIT, this.PHANTO_LIMIT, this.KOOPA_TROOPA_CAR_LIMIT,

            this.WARP_DOOR_LIMIT, this.WARP_BOX_LIMIT,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
