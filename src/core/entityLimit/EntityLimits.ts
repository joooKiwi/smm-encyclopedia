import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                                                                                                                                                                                from '../ClassWithEnglishName';
import type {ClassWithNullableAcronym}                                                                                                                                                                                                                                                                                                                                                                                                                                            from '../ClassWithAcronym';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                                                                                                                                                                                  from '../ClassWithReference';
import type {Entity}                                                                                                                                                                                                                                                                                                                                                                                                                                                              from '../entity/Entity';
import type {EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit}                                                                                                                                                                                                                                                                                                                                                                                                          from './EntityLimit';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAcronym, PossibleAcronymInBothEditorAndWhilePlaying, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName, PossibleNonNullableValue, PossibleStartingEnglishName, PossibleStartingEnglishNameInBothEditorAndWhilePlaying, PossibleStartingEnglishNameNotInBothEditorAndWhilePlaying, PossibleStringValue, PossibleValue} from './EntityLimits.types';
import type {StaticReference}                                                                                                                                                                                                                                                                                                                                                                                                                                                     from '../../util/enum/Enum.types';

import {Enum}             from '../../util/enum/Enum';
import {EmptyEntity}      from '../entity/EmptyEntity';
import type {Entities}    from '../entity/Entities';
import {EntityLimitTypes} from './EntityLimitTypes';
import {Import}           from '../../util/DynamicImporter';
import {StringContainer}  from '../../util/StringContainer';

/**
 * @recursiveReferenceVia {@link EntityLimitBuilder} → {@link EntityLimitLoader}
 * @recursiveReference {@link EntityLimitLoader}
 * @classWithDynamicImport {@link EntityLimitLoader}, {@link Entities}
 */
export class EntityLimits
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityLimitWithPossibleAlternativeEntityLimit>,
        ClassWithNullableAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly GENERAL_ENTITY_LIMIT_WHILE_PLAYING =                       new EntityLimits(['GEL (WP)', 'General Entity', true,], ['ELB', 'Entity Limit B',],);
    public static readonly POWER_UP_ENTITY_LIMIT_WHILE_PLAYING =                      new EntityLimits(['PEL (WP)', 'Power-up Entity', true,], ['ELC', 'Entity Limit C',],);

    public static readonly LOOSE_COIN_LIMIT =                                         new class EntityLimits_LooseCoinLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.COIN;
        }

    }(['LCL', 'Loose Coin',],);
    public static readonly SOUND_EFFECT_LIMIT =                                       new EntityLimits(['SEL', 'Sound Effect',],);
    public static readonly CORPSE_LIMIT =                                             new EntityLimits(['CL', 'Corpse',],);
    public static readonly PROJECTILE_LIMIT =                                         new EntityLimits(['PJL', 'Projectile',],);
    public static readonly LIGHT_SOURCE_LIMIT =                                       new EntityLimits(['LSL', 'Light Source',],);

    public static readonly GROUND_LIMIT =                                             new class EntityLimits_GroundLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.GROUND;
        }

    }('Ground', 'Ground Limit 1',);
    public static readonly BLOCK_LIMIT =                                              new EntityLimits('Block', 'Ground Limit 2',);
    public static readonly PLATFORM_OR_SLOPE_OR_CONVEYOR_BELT_OR_PIPE_OR_VINE_LIMIT = new class EntityLimits_PlatformOrSlopeOrConveyorBeltOrPipeOrVineLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Platform / Slope / Conveyor Belt / Pipe / Vine" group
        }

    }('Platform / Slope / Conveyor Belt / Pipe / Vine', 'Ground Limit 3',);
    public static readonly CLEAR_PIPE_LIMIT =                                         new class EntityLimits_ClearPipeLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.CLEAR_PIPE;
        }

    }('Clear Pipe',);

    public static readonly GROWN_VINE_LIMIT =                                         new class EntityLimits_GrownVineLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.VINE;
        }

    }(['GVL', 'Grown Vine',],);
    public static readonly CHECKPOINT_FLAG_LIMIT =                                    new class EntityLimits_CheckpointFlagLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.CHECKPOINT_FLAG;
        }

    }('Checkpoint Flag',);
    public static readonly TRACK_LIMIT =                                              new class EntityLimits_TrackLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.TRACK;
        }

    }('Track',);
    public static readonly SNAKE_BLOCK_LIMIT =                                        new class EntityLimits_SnakeBlockLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.SNAKE_BLOCK;
        }

    }('Snake Block',);
    public static readonly EXCLAMATION_BLOCK_LIMIT =                                  new class EntityLimits_ExclamationBlockLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.EXCLAMATION_MARK_BLOCK;
        }

    }('! Block',);
    public static readonly TRACK_BLOCK_LIMIT =                                        new class EntityLimits_TrackBlockLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.TRACK_BLOCK;
        }

    }('Track Block',);
    public static readonly ICICLE_LIMIT =                                             new class EntityLimits_IcicleLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.ICICLE;
        }

    }('Icicle',);
    public static readonly ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT =           new class EntityLimits_OneWayWallOrArrowSignOrDashBlockLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "One-Way Wall / Arrow Sign / Dash Block" group
        }

    }('One-Way Wall / Arrow Sign / Dash Block',);

    public static readonly ENTITY_HELD_BY_A_TWISTER_LIMIT =                           new class EntityLimits_EntityHeldByATwisterLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.TWISTER;
        }

    }('Entity Held By A Twister',);
    public static readonly SNOWBALL_THROWN_BY_A_SPIKE_LIMIT =                         new class EntityLimits_SnowballThrownByASpikeLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return [Import.Entities.SNOWBALL, Import.Entities.SPIKE,];
        }

    }('Snowball Thrown By A Spike',);
    public static readonly CLEAR_CONDITION_ENTITY_AMOUNT_LIMIT =                      new EntityLimits('Clear Condition Entity Amount',);
    public static readonly RENDERED_OBJECT_LIMIT =                                    new EntityLimits('Rendered Object', 'Object Displayed Limit',);

    public static readonly KEY_COLLECTED_LIMIT =                                      new class EntityLimits_KeyCollectedLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "(Cursed) Key" groups
        }

    }('Key Collected',);
    public static readonly _10_OR_30_OR_50_COIN_LIMIT =                               new class EntityLimits_PlatformOrSlopeOrConveyorBeltOrPipeOrVineLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "[10- / 30- / 50-]Coin" group
        }

    }('[10- / 30- / 50-]Coin',);
    public static readonly PINK_COIN_LIMIT =                                          new class EntityLimits_PinkCoinLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.PINK_COIN;
        }

    }('Pink Coin',);

    public static readonly POWER_UP_ENTITY_LIMIT_EDITOR =                             new EntityLimits(['PEL (E)', 'Power-up Entity', false,],);
    public static readonly PLAYER_FIREBALL =                                          new class EntityLimits_FireballThrownByAPlayerLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.FIREBALL_THROWN_BY_A_PLAYER;
        }

    }('Player\'s Fireball',);
    public static readonly PLAYER_SUPERBALL =                                         new class EntityLimits_SuperballThrownByAPlayerLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.SUPERBALL_THROWN_BY_A_PLAYER;
        }

    }('Player\'s Superball',);
    public static readonly PLAYER_BOMB =                                              new class EntityLimits_BombThrownByALinkLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.BOMB_THROWN_BY_A_LINK;
        }

    }('Player\'s Bomb',);
    public static readonly PLAYER_BUILDER_BOX =                                       new class EntityLimits_BuilderBoxThrownByAPlayerLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.BUILDER_BOX_THROWN_BY_A_PLAYER;
        }

    }('Player\'s Builder Box',);
    public static readonly PLAYER_BOOMERANG =                                         new class EntityLimits_BoomerangThrownByAPlayerLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.BOOMERANG_THROWN_BY_A_PLAYER;
        }

    }('Player\'s Boomerang',);
    public static readonly PLAYER_CANNONBALL =                                        new class EntityLimits_CannonballThrownByAPlayerLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.CANNONBALL_THROWN_BY_A_PLAYER;
        }

    }('Player\'s Cannonball',);
    public static readonly HATCHED_YOSHI_LIMIT =                                      new class EntityLimits_HatchedYoshiLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "(Red) Yoshi" group
        }

    }(['HYL', 'Hatched Yoshi',],);

    public static readonly GENERAL_ENTITY_LIMIT_EDITOR =                              new EntityLimits(['GEL (WP)', 'General Entity', false,], 'General Enemy Limit',);
    public static readonly CHARVAARGH_LIMIT =                                         new class EntityLimits_CharvaarghLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.CHARVAARGH;
        }

    }('Charvaargh',);
    public static readonly PIRANHA_CREEPER_LIMIT =                                    new class EntityLimits_PiranhaCreeperLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.PIRANHA_CREEPER;
        }

    }('Piranha Creeper',);
    public static readonly BOWSER_AND_BOWSER_JR_LIMIT =                               new class EntityLimits_BowserAndBowserJrLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Bowser (Jr.)" group
        }

    }('Bowser (Jr.)',);
    public static readonly BOOM_BOOM_AND_POM_POM_LIMIT =                              new class EntityLimits_BoomBoomAndPomPomLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Boom Boom / Pom Pom" group
        }

    }('Boom Boom / Pom Pom',);
    public static readonly KOOPALING_LIMIT =                                          new class EntityLimits_KoopalingLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Koopalings" group
        }

    }('Koopaling',);
    public static readonly ANGRY_SUN_OR_MOON_LIMIT =                                  new class EntityLimits_AngrySunOrMoonLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Angry Sun / Moon" group
        }

    }('Angry Sun / Moon',);
    public static readonly PHANTO_LIMIT =                                             new class EntityLimits_PhantoLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.PHANTO;
        }

    }('Phanto',);
    public static readonly KOOPA_TROOPA_CAR_LIMIT =                                   new class EntityLimits_KoopaTroopaCarLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.KOOPA_TROOPA_CAR;
        }

    }('Koopa Troopa Car',);

    public static readonly WARP_DOOR_LIMIT =                                          new class EntityLimits_WarpDoorLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Warp Doors" group
        }

    }('Warp Door',);
    public static readonly WARP_BOX_LIMIT =                                           new class EntityLimits_WarpBoxLimit extends EntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null;//TODO change to "Warp Boxes" group
        }

    }('Warp Box',);
    public static readonly WARP_PIPE_LIMIT =                                          new class EntityLimits_WarpBoxLimit extends EntityLimits {

        protected override get _entityLink(): PossibleEntityLinkInitialisation {
            return Import.Entities.PIPE;
        }

    } ('Warp Pipe',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityLimits;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, EntityLimit>;
    static readonly #LIMIT_LENGTH = ' Limit'.length;
    static readonly #LIMIT_WHILE_PLAYING_LENGTH = ` Limit (While Playing)`.length;
    static readonly #LIMIT_IN_EDITOR_LENGTH = ` Limit (Editor)`.length;

    #reference?: EntityLimitWithPossibleAlternativeEntityLimit;
    readonly #acronym: PossibleAcronym | null;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #alternativeAcronym: PossibleAlternativeAcronym | null;
    readonly #alternativeEnglishName: StringContainer<PossibleAlternativeEnglishName> | null;
    #entityLink?: | readonly [Entity] | readonly [Entity, Entity,];
    #groupLink?: object;

    //endregion -------------------- Fields --------------------

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

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, EntityLimit> {
        return this.#REFERENCE_MAP ??= Import.EntityLimitLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): EntityLimitWithPossibleAlternativeEntityLimit {
        return this.#reference ??= EntityLimits.REFERENCE_MAP.get(this.englishName)! as EntityLimitWithPossibleAlternativeEntityLimit;
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

    protected override get _static(): StaticReference<EntityLimits> {
        return EntityLimits;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
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

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleGroupLinkInitialisation = | object | null;
type PossibleEntityLinkInitialisation = | Entities | readonly [Entities, Entities,] | null;
type EnglishNameReceived = | PossibleStartingEnglishName | [englishName: PossibleAcronym, englishAcronym: PossibleStartingEnglishName,] | [englishName: PossibleAcronymInBothEditorAndWhilePlaying, englishAcronym: PossibleStartingEnglishNameInBothEditorAndWhilePlaying, isWhilePlaying: boolean,];
type AlternativeEnglishNameReceived = | PossibleAlternativeEnglishName | [alternativeEnglishName: PossibleAlternativeAcronym, alternativeEnglishAcronym: PossibleAlternativeEnglishName,];
