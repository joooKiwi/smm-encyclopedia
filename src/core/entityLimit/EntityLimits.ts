import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                   from '../ClassWithEnglishName';
import type {ClassWithNullableAcronym}                                                                                                                                                                                                                                                                                                                                                               from '../ClassWithAcronym';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                                                                                     from '../ClassWithReference';
import type {EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit}                                                                                                                                                                                                                                                                                                                             from './EntityLimit';
import type {EnumArray, Names, Ordinals, PossibleAcronym, PossibleAcronymInBothEditorAndWhilePlaying, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName, PossibleNonNullableValue, PossibleStartingEnglishName, PossibleStartingEnglishNameInBothEditorAndWhilePlaying, PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying, PossibleStringValue, PossibleValue} from './EntityLimits.types';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                        from '../../util/enum/Enum.types';

import {EntityLimitTypes} from './EntityLimitTypes';
import {Enum}             from '../../util/enum/Enum';
import {StringContainer}  from '../../util/StringContainer';

/**
 * @recursiveReferenceVia<{@link EntityLimitBuilder}, {@link EntityLimitLoader}>
 * @recursiveReference<{@link EntityLimitLoader}>
 */
export class EntityLimits
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityLimitWithPossibleAlternativeEntityLimit>,
        ClassWithNullableAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly GENERAL_ENTITY_LIMIT_WHILE_PLAYING =                       new EntityLimits(['GEL (WP)', 'General Entity', true,], ['ELB', 'Entity Limit B',], );
    public static readonly POWER_UP_ENTITY_LIMIT_WHILE_PLAYING =                      new EntityLimits(['PEL (WP)', 'Power-up Entity', true,], ['ELC', 'Entity Limit C',],);

    public static readonly LOOSE_COIN_LIMIT =                                         new EntityLimits(['LCL', 'Loose Coin',],                                                              );
    public static readonly SOUND_EFFECT_LIMIT =                                       new EntityLimits(['SEL', 'Sound Effect',],                                                            );
    public static readonly CORPSE_LIMIT =                                             new EntityLimits(['CL', 'Corpse',],                                                                   );
    public static readonly PROJECTILE_LIMIT =                                         new EntityLimits(['PJL', 'Projectile',],                                                              );
    public static readonly LIGHT_SOURCE_LIMIT =                                       new EntityLimits(['LSL', 'Light Source',],                                                            );

    public static readonly GROUND_LIMIT =                                             new EntityLimits('Ground', 'Ground Limit 1',                                        );
    public static readonly BLOCK_LIMIT =                                              new EntityLimits('Block', 'Ground Limit 2',                                         );
    public static readonly PLATFORM_OR_SLOPE_OR_CONVEYOR_BELT_OR_PIPE_OR_VINE_LIMIT = new EntityLimits('Platform / Slope / Conveyor Belt / Pipe / Vine', 'Ground Limit 3',);
    public static readonly CLEAR_PIPE_LIMIT =                                         new EntityLimits('Clear Pipe',                                                                        );

    public static readonly GROWN_VINE_LIMIT =                                         new EntityLimits(['GVL', 'Grown Vine',],                                                              );
    public static readonly CHECKPOINT_FLAG_LIMIT =                                    new EntityLimits('Checkpoint Flag',                                                                   );
    public static readonly TRACK_LIMIT =                                              new EntityLimits('Track',                                                                             );
    public static readonly SNAKE_BLOCK_LIMIT =                                        new EntityLimits('Snake Block',                                                                       );
    public static readonly EXCLAMATION_BLOCK_LIMIT =                                  new EntityLimits('! Block',                                                                           );
    public static readonly TRACK_BLOCK_LIMIT =                                        new EntityLimits('Track Block',                                                                       );
    public static readonly ICICLE_LIMIT =                                             new EntityLimits('Icicle',                                                                            );
    public static readonly ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT =           new EntityLimits('One-Way Wall / Arrow Sign / Dash Block',                                            );
    public static readonly ENTITY_HELD_BY_A_TWISTER_LIMIT =                           new EntityLimits('Entity Held By A Twister',                                                          );

    public static readonly _10_OR_30_OR_50_COIN_LIMIT =                               new EntityLimits('[10- / 30- / 50-]Coin',                                                            );
    public static readonly PINK_COIN_LIMIT =                                          new EntityLimits('Pink Coin',                                                                         );
    public static readonly KEY_COLLECTED_LIMIT =                                      new EntityLimits('Key Collected',                                                                     );

    public static readonly POWER_UP_ENTITY_LIMIT_EDITOR =                             new EntityLimits(['PEL (E)', 'Power-up Entity', false,],                                              );
    public static readonly FIREBALL_THROWN_BY_A_PLAYER_LIMIT =                        new EntityLimits('Fireball thrown by a player',                                                       );
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER_LIMIT =                       new EntityLimits('Superball thrown by a player',                                                      );
    public static readonly BOMB_THROWN_BY_A_LINK_LIMIT =                              new EntityLimits('Bomb thrown by a Link',                                                             );
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER_LIMIT =                     new EntityLimits('Builder Box thrown by a player',                                                    );
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER_LIMIT =                       new EntityLimits('Boomerang thrown by a player',                                                      );
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER_LIMIT =                      new EntityLimits('Cannonball thrown by a player',                                                     );
    public static readonly HATCHED_YOSHI_LIMIT =                                      new EntityLimits(['HYL', 'Hatched Yoshi',],                                                           );

    public static readonly GENERAL_ENTITY_LIMIT_EDITOR =                              new EntityLimits(['GEL (WP)', 'General Entity', false,], 'General Enemy Limit',     );
    public static readonly CHARVAARGH_LIMIT =                                         new EntityLimits('Charvaargh',                                                                        );
    public static readonly PIRANHA_CREEPER_LIMIT =                                    new EntityLimits('Piranha Creeper',                                                                   );
    public static readonly BOWSER_AND_BOWSER_JR_LIMIT =                               new EntityLimits('Bowser (Jr.)',                                                                      );
    public static readonly BOOM_BOOM_AND_POM_POM_LIMIT =                              new EntityLimits('Boom Boom / Pom Pom',                                                               );
    public static readonly KOOPALING_LIMIT =                                          new EntityLimits('Koopaling',                                                                         );
    public static readonly ANGRY_SUN_MOON_LIMIT =                                     new EntityLimits('Angry Sun / Moon',                                                                  );
    public static readonly PHANTO_LIMIT =                                             new EntityLimits('Phanto',                                                                            );
    public static readonly KOOPA_TROOPA_CAR_LIMIT =                                   new EntityLimits('Koopa Troopa Car',                                                                  );

    public static readonly WARP_DOOR_LIMIT =                                          new EntityLimits('Warp Door',                                                                         );
    public static readonly WARP_BOX_LIMIT =                                           new EntityLimits('Warp Box',                                                                          );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: EntityLimits;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #map?: ReadonlyMap<PossibleEnglishName, EntityLimit>;
    static readonly #LIMIT_LENGTH = ' Limit'.length;
    static readonly #LIMIT_WHILE_PLAYING_LENGTH = ` Limit (${EntityLimitTypes.WHILE_PLAYING.englishName})`.length;
    static readonly #LIMIT_IN_EDITOR_LENGTH = ` Limit (${EntityLimitTypes.EDITOR.englishName})`.length;

    #reference?: EntityLimitWithPossibleAlternativeEntityLimit;
    readonly #acronym: PossibleAcronym | null;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #alternativeAcronym: PossibleAlternativeAcronym | null;
    readonly #alternativeEnglishName: StringContainer<PossibleAlternativeEnglishName> | null;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: EnglishNameReceived, alternativeEnglishName: | AlternativeEnglishNameReceived | null = null,) {
        super();
        if (typeof englishName == 'string') {
            this.#acronym = null;
            this.#englishName = new StringContainer(`${englishName as PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying} Limit`);
        } else {
            this.#acronym = englishName[0];
            const isWhilePlaying = englishName[2];
            this.#englishName = new StringContainer(isWhilePlaying == null
                ? `${englishName[1] as PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying} Limit`
                : `${englishName[1] as PossibleStartingEnglishNameInBothEditorAndWhilePlaying} Limit (${isWhilePlaying ? EntityLimitTypes.WHILE_PLAYING.englishName : EntityLimitTypes.EDITOR.englishName})`
            );
        }
        if (alternativeEnglishName instanceof Array) {
            this.#alternativeAcronym = alternativeEnglishName[0];
            this.#alternativeEnglishName = new StringContainer(alternativeEnglishName[1]);
        } else {
            this.#alternativeAcronym = null;
            this.#alternativeEnglishName = alternativeEnglishName == null ? null : new StringContainer(alternativeEnglishName);
        }
    }

    //region -------------------- Getter methods --------------------

    private static get __map() {
        return this.#map ??= require('./EntityLimit.loader').EntityLimitLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): EntityLimitWithPossibleAlternativeEntityLimit {
        return this.#reference ??= EntityLimits.__map.get(this.englishName)! as EntityLimitWithPossibleAlternativeEntityLimit;
    }


    public get acronym(): | PossibleAcronym | null {
        return this.#acronym;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get alternativeAcronym(): | PossibleAlternativeAcronym | null {
        return this.#alternativeAcronym;
    }

    public get alternativeEnglishName(): | PossibleAlternativeEnglishName | null {
        return this.#alternativeEnglishName?.get ?? null;
    }

    public get alternativeEnglishNameInHtml(): string {
        return this.#alternativeEnglishName?.getInHtml ?? '';
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyAcronyms(): readonly PossibleAcronym[] {
        return this.values.map(limit => limit.acronym).filter(acronym => acronym != null) as PossibleAcronym[];
    }

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(limit => limit.englishName);
    }

    public static get everyAlternativeAcronyms(): readonly PossibleAlternativeAcronym[] {
        return this.values.map(limit => limit.alternativeAcronym).filter(alternativeAcronym => alternativeAcronym != null) as PossibleAlternativeAcronym[];
    }

    public static get everyAlternativeEnglishNames(): readonly PossibleAlternativeEnglishName[] {
        return this.values.map(limit => limit.alternativeEnglishName).filter(alternativeEnglishName => alternativeEnglishName != null) as PossibleAlternativeEnglishName[];
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<EntityLimits> {
        return EntityLimits;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof EntityLimits[N]
    public static getValue(name: PossibleStringValue,): EntityLimits
    public static getValue(name: string,): | EntityLimits | null
    public static getValue<I extends EntityLimits = EntityLimits, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EntityLimits
    public static getValue(value: PossibleValue,): | EntityLimits | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                ?? this.values.find(theme => theme.englishName === value)
                    ?? this.values.find(theme => theme.englishName.substring(0, theme.englishName.length - this.#LIMIT_LENGTH) === value)
                    ?? this.values.find(theme => theme.englishName.substring(0, theme.englishName.length - this.#LIMIT_IN_EDITOR_LENGTH) === value)
                    ?? this.values.find(theme => theme.englishName.substring(0, theme.englishName.length - this.#LIMIT_WHILE_PLAYING_LENGTH) === value)
                    ?? this.values.find(theme => theme.alternativeEnglishName === value)
                    ?? this.values.find(theme => theme.acronym === value)
                    ?? this.values.find(theme => theme.alternativeAcronym === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type EnglishNameReceived = | PossibleStartingEnglishName | [englishName: PossibleAcronym, englishAcronym: PossibleStartingEnglishName,] | [englishName: PossibleAcronymInBothEditorAndWhilePlaying, englishAcronym: PossibleStartingEnglishNameInBothEditorAndWhilePlaying, isWhilePlaying: boolean,];
type AlternativeEnglishNameReceived = | PossibleAlternativeEnglishName | [alternativeEnglishName: PossibleAlternativeAcronym, alternativeEnglishAcronym: PossibleAlternativeEnglishName,];
