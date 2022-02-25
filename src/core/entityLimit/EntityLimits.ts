import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                from '../ClassWithEnglishName';
import type {ClassWithNullableAcronym}                                                                                                                                                                                                                                                                                                                                                                                                                                            from '../ClassWithAcronym';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                                                                                                                                                                  from '../ClassWithReference';
import type {EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit}                                                                                                                                                                                                                                                                                                                                                                                                          from './EntityLimit';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAcronym, PossibleAcronymInBothEditorAndWhilePlaying, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName, PossibleNonNullableValue, PossibleStartingEnglishName, PossibleStartingEnglishNameInBothEditorAndWhilePlaying, PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying, PossibleStringValue, PossibleValue} from './EntityLimits.types';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                                                     from '../../util/enum/Enum.types';

import {EmptyEntity}      from '../entity/EmptyEntity';
import {Enum}             from '../../util/enum/Enum';
import type {Entities}    from '../entity/Entities';
import {Entity}           from '../entity/Entity';
import {EntityLimitTypes} from './EntityLimitTypes';
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

    public static readonly GENERAL_ENTITY_LIMIT_WHILE_PLAYING =                       new EntityLimits                                                                                (['GEL (WP)', 'General Entity', true,], ['ELB', 'Entity Limit B',], );
    public static readonly POWER_UP_ENTITY_LIMIT_WHILE_PLAYING =                      new EntityLimits                                                                                (['PEL (WP)', 'Power-up Entity', true,], ['ELC', 'Entity Limit C',],);

    public static readonly LOOSE_COIN_LIMIT =                                         new class EntityLimits_LooseCoinLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.COIN;
        }

    }                                (['LCL', 'Loose Coin',],                                                                         );
    public static readonly SOUND_EFFECT_LIMIT =                                       new EntityLimits                                                                                (['SEL', 'Sound Effect',],                                                            );
    public static readonly CORPSE_LIMIT =                                             new EntityLimits                                                                                (['CL', 'Corpse',],                                                                   );
    public static readonly PROJECTILE_LIMIT =                                         new EntityLimits                                                                                (['PJL', 'Projectile',],                                                              );
    public static readonly LIGHT_SOURCE_LIMIT =                                       new EntityLimits                                                                                (['LSL', 'Light Source',],                                                            );

    public static readonly GROUND_LIMIT =                                             new class EntityLimits_GroundLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.GROUND;
        }

    }                                ('Ground', 'Ground Limit 1',                                        );
    public static readonly BLOCK_LIMIT =                                              new EntityLimits                                                                                ('Block', 'Ground Limit 2',                                         );
    public static readonly PLATFORM_OR_SLOPE_OR_CONVEYOR_BELT_OR_PIPE_OR_VINE_LIMIT = new class EntityLimits_PlatformOrSlopeOrConveyorBeltOrPipeOrVineLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Platform / Slope / Conveyor Belt / Pipe / Vine" group
        }

    }('Platform / Slope / Conveyor Belt / Pipe / Vine', 'Ground Limit 3',                             );
    public static readonly CLEAR_PIPE_LIMIT =                                         new class EntityLimits_ClearPipeLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.CLEAR_PIPE;
        }

    }                                ('Clear Pipe',                                                                                   );

    public static readonly GROWN_VINE_LIMIT =                                         new class EntityLimits_GrownVineLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.VINE;
        }

    }                                (['GVL', 'Grown Vine',],                                                                         );
    public static readonly CHECKPOINT_FLAG_LIMIT =                                    new class EntityLimits_CheckpointFlagLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.CHECKPOINT_FLAG;
        }

    }                           ('Checkpoint Flag',                                                                              );
    public static readonly TRACK_LIMIT =                                              new class EntityLimits_TrackLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.TRACK;
        }

    }                                    ('Track',                                                                                        );
    public static readonly SNAKE_BLOCK_LIMIT =                                        new class EntityLimits_SnakeBlockLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.SNAKE_BLOCK;
        }

    }                               ('Snake Block',                                                                                  );
    public static readonly EXCLAMATION_BLOCK_LIMIT =                                  new class EntityLimits_ExclamationBlockLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.EXCLAMATION_MARK_BLOCK;
        }

    }                         ('! Block',                                                                                      );
    public static readonly TRACK_BLOCK_LIMIT =                                        new class EntityLimits_TrackBlockLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.TRACK_BLOCK;
        }

    }                               ('Track Block',                                                                                  );
    public static readonly ICICLE_LIMIT =                                             new class EntityLimits_IcicleLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.ICICLE;
        }

    }                                   ('Icicle',                                                                                       );
    public static readonly ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT =           new class EntityLimits_OneWayWallOrArrowSignOrDashBlockLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "One-Way Wall / Arrow Sign / Dash Block" group
        }

    }         ('One-Way Wall / Arrow Sign / Dash Block',                                                       );

    public static readonly ENTITY_HELD_BY_A_TWISTER_LIMIT =                           new class EntityLimits_EntityHeldByATwisterLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.TWISTER;
        }

    }                     ('Entity Held By A Twister',                                                                     );
    public static readonly SNOWBALL_THROWN_BY_A_SPIKE_LIMIT =                         new class EntityLimits_SnowballThrownByASpikeLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return [EntityLimits._entities.SNOWBALL, EntityLimits._entities.SPIKE,];
        }

    }                   ('Snowball Thrown By A Spike',                                                                   );

    public static readonly _10_OR_30_OR_50_COIN_LIMIT =                               new class EntityLimits_PlatformOrSlopeOrConveyorBeltOrPipeOrVineLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "[10- / 30- / 50-]Coin" group
        }

    }('[10- / 30- / 50-]Coin',                                                                        );
    public static readonly PINK_COIN_LIMIT =                                          new class EntityLimits_PinkCoinLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.PINK_COIN;
        }

    }                                 ('Pink Coin',                                                                                    );
    public static readonly KEY_COLLECTED_LIMIT =                                      new class EntityLimits_KeyCollectedLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "(Cursed) Key" groups
        }

    }                             ('Key Collected',                                                                                );

    public static readonly POWER_UP_ENTITY_LIMIT_EDITOR =                             new EntityLimits                                                                                (['PEL (E)', 'Power-up Entity', false,],                                              );
    public static readonly FIREBALL_THROWN_BY_A_PLAYER_LIMIT =                        new class EntityLimits_FireballThrownByAPlayerLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.FIREBALL_THROWN_BY_A_PLAYER;
        }

    }                  ('Fireball thrown by a player',                                                                  );
    public static readonly SUPERBALL_THROWN_BY_A_PLAYER_LIMIT =                       new class EntityLimits_SuperballThrownByAPlayerLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.SUPERBALL_THROWN_BY_A_PLAYER;
        }

    }                 ('Superball thrown by a player',                                                                 );
    public static readonly BOMB_THROWN_BY_A_LINK_LIMIT =                              new class EntityLimits_BombThrownByALinkLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.BOMB_THROWN_BY_A_LINK;
        }

    }                        ('Bomb thrown by a Link',                                                                        );
    public static readonly BUILDER_BOX_THROWN_BY_A_PLAYER_LIMIT =                     new class EntityLimits_BuilderBoxThrownByAPlayerLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.BUILDER_BOX_THROWN_BY_A_PLAYER;
        }

    }                ('Builder Box thrown by a player',                                                               );
    public static readonly BOOMERANG_THROWN_BY_A_PLAYER_LIMIT =                       new class EntityLimits_BoomerangThrownByAPlayerLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.BOOMERANG_THROWN_BY_A_PLAYER;
        }

    }                 ('Boomerang thrown by a player',                                                                 );
    public static readonly CANNONBALL_THROWN_BY_A_PLAYER_LIMIT =                      new class EntityLimits_CannonballThrownByAPlayerLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.CANNONBALL_THROWN_BY_A_PLAYER;
        }

    }                ('Cannonball thrown by a player',                                                                );
    public static readonly HATCHED_YOSHI_LIMIT =                                      new class EntityLimits_HatchedYoshiLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "(Red) Yoshi" group
        }

    }                             (['HYL', 'Hatched Yoshi',],                                                                      );

    public static readonly GENERAL_ENTITY_LIMIT_EDITOR =                              new EntityLimits                                                                                (['GEL (WP)', 'General Entity', false,], 'General Enemy Limit',     );
    public static readonly CHARVAARGH_LIMIT =                                         new class EntityLimits_CharvaarghLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.CHARVAARGH;
        }

    }                               ('Charvaargh',                                                                                   );
    public static readonly PIRANHA_CREEPER_LIMIT =                                    new class EntityLimits_PiranhaCreeperLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.PIRANHA_CREEPER;
        }

    }                           ('Piranha Creeper',                                                                              );
    public static readonly BOWSER_AND_BOWSER_JR_LIMIT =                               new class EntityLimits_BowserAndBowserJrLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Bowser (Jr.)" group
        }

    }                        ('Bowser (Jr.)',                                                                                 );
    public static readonly BOOM_BOOM_AND_POM_POM_LIMIT =                              new class EntityLimits_BoomBoomAndPomPomLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Boom Boom / Pom Pom" group
        }

    }                        ('Boom Boom / Pom Pom',                                                                          );
    public static readonly KOOPALING_LIMIT =                                          new class EntityLimits_KoopalingLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Koopalings" group
        }

    }                                ('Koopaling',                                                                                    );
    public static readonly ANGRY_SUN_OR_MOON_LIMIT =                                  new class EntityLimits_AngrySunOrMoonLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Angry Sun / Moon" group
        }

    }                           ('Angry Sun / Moon',                                                                             );
    public static readonly PHANTO_LIMIT =                                             new class EntityLimits_PhantoLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.PHANTO;
        }

    }                                   ('Phanto',                                                                                       );
    public static readonly KOOPA_TROOPA_CAR_LIMIT =                                   new class EntityLimits_KoopaTroopaCarLimit extends EntityLimits {

        protected get _entityLink(): PossibleEntityLinkInitialisation {
            return EntityLimits._entities.KOOPA_TROOPA_CAR;
        }

    }                           ('Koopa Troopa Car',                                                                             );

    public static readonly WARP_DOOR_LIMIT =                                          new class EntityLimits_WarpDoorLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Warp Doors" group
        }

    }                                 ('Warp Door',                                                                                    );
    public static readonly WARP_BOX_LIMIT =                                           new class EntityLimits_WarpBoxLimit extends EntityLimits {

        protected get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Warp Boxes" group
        }

    }                                  ('Warp Box',                                                                                     );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: EntityLimits;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #map?: ReadonlyMap<PossibleEnglishName, EntityLimit>;
    static #entities?: typeof Entities;
    static readonly #LIMIT_LENGTH = ' Limit'.length;
    static readonly #LIMIT_WHILE_PLAYING_LENGTH = ` Limit (${EntityLimitTypes.WHILE_PLAYING.englishName})`.length;
    static readonly #LIMIT_IN_EDITOR_LENGTH = ` Limit (${EntityLimitTypes.EDITOR.englishName})`.length;

    #reference?: EntityLimitWithPossibleAlternativeEntityLimit;
    readonly #acronym: PossibleAcronym | null;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #alternativeAcronym: PossibleAlternativeAcronym | null;
    readonly #alternativeEnglishName: StringContainer<PossibleAlternativeEnglishName> | null;
    #entityLink?: | readonly [Entity] | readonly [Entity, Entity,];
    #groupLink?: object;

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

    protected static get _entities(): typeof Entities {
        return this.#entities ??= require('../entity/Entities').Entities;
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


    //region -------------------- Group link --------------------

    protected get _groupLink(): PossibleGroupLinkInitialisation {
        return null;
    }

    public get groupLink(): object {
        if (this.#groupLink == null) {
            const link = this._groupLink;
            this.#groupLink = link == null
                ? {}
                : link;//.reference;
        }
        return this.#groupLink;
    }

    //endregion -------------------- Group link --------------------
    //region -------------------- Entity link --------------------

    protected get _entityLink(): PossibleEntityLinkInitialisation {
        return null;
    }

    public get entityLink(): readonly [Entity] | readonly [Entity, Entity,] {
        if (this.#entityLink == null) {
            const link = this._entityLink;
            this.#entityLink = link == null
                ? [EmptyEntity.get]
                : link instanceof Array
                    ? [link[0].reference, link[1].reference,]
                    : [link.reference,];
        }
        return this.#entityLink;
    }

    //endregion -------------------- Entity link --------------------

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


    protected static _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.englishName.substring(0, enumerable.englishName.length - this.#LIMIT_LENGTH) === value
                || enumerable.englishName.substring(0, enumerable.englishName.length - this.#LIMIT_IN_EDITOR_LENGTH) === value
                || enumerable.englishName.substring(0, enumerable.englishName.length - this.#LIMIT_WHILE_PLAYING_LENGTH) === value
                || enumerable.alternativeEnglishName === value
                || enumerable.acronym === value
                || enumerable.alternativeAcronym === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends EntityLimits = EntityLimits, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): EntityLimits
    public static getValue(value: PossibleValue,): | EntityLimits | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleGroupLinkInitialisation = | object | null;
type PossibleEntityLinkInitialisation = | Entities | readonly [Entities, Entities,] | null;
type EnglishNameReceived = | PossibleStartingEnglishName | [englishName: PossibleAcronym, englishAcronym: PossibleStartingEnglishName,] | [englishName: PossibleAcronymInBothEditorAndWhilePlaying, englishAcronym: PossibleStartingEnglishNameInBothEditorAndWhilePlaying, isWhilePlaying: boolean,];
type AlternativeEnglishNameReceived = | PossibleAlternativeEnglishName | [alternativeEnglishName: PossibleAlternativeAcronym, alternativeEnglishAcronym: PossibleAlternativeEnglishName,];
