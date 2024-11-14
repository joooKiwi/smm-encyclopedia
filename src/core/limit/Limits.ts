import type {Array, Nullable, NullOr, StringOrNumeric} from '@joookiwi/type'
import {Enum}                                          from '@joookiwi/enumerable'
import {isArray}                                       from '@joookiwi/collection'

import type {ClassWithNullableAcronym}                                                                                                              from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                                  from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                    from 'core/ClassWithReference'
import type {Limit, LimitWithPossibleAlternativeLimit}                                                                                              from 'core/limit/Limit'
import type {Names, Ordinals, PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName, PossibleEntityLink} from 'core/limit/Limits.types'
import type {TranslationReplaceKeysMap}                                                                                                             from 'lang/components/TranslationProperty'
import type {CompanionEnumByNameSingleton}                                                                                                          from 'util/enumerable/Singleton.types'

import type {Entities}       from 'core/entity/Entities'
import {OtherWordInTheGames} from 'core/otherWordInTheGame/OtherWordInTheGames'
import {LimitLoader}         from 'core/limit/Limit.loader'
import {Import}              from 'util/DynamicImporter'
import {Empty}               from 'util/emptyVariables'
import {StringContainer}     from 'util/StringContainer'
import {CompanionEnumByName} from 'util/enumerable/companion/CompanionEnumByName'

import EMPTY_ARRAY  = Empty.EMPTY_ARRAY
import EMPTY_OBJECT = Empty.EMPTY_OBJECT
import EMPTY_STRING = Empty.EMPTY_STRING

/**
 * @classWithDynamicImport<{@link Entities}>
 * @recursiveReference<{@link LimitLoader}>
 */
export class Limits
    extends Enum<Ordinals, Names>
    implements ClassWithReference<LimitWithPossibleAlternativeLimit>,
        ClassWithNullableAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Sub class --------------------

    private static readonly PlayLimits = class PlayLimits extends Limits {

        constructor(englishNameAndAcronym: readonly [PossibleEnglishName, PossibleAcronym?,], alternativeEnglishNameAndAcronym?: Nullable<readonly [PossibleAlternativeEnglishName, PossibleAlternativeAcronym?,]>) {
            super(false, englishNameAndAcronym, alternativeEnglishNameAndAcronym,)
        }

    }
    private static readonly EditorLimits = class EditorLimits extends Limits {

        constructor(englishNameAndAcronym: readonly [PossibleEnglishName, PossibleAcronym?,], alternativeEnglishNameAndAcronym?: Nullable<readonly [PossibleAlternativeEnglishName, PossibleAlternativeAcronym?,]>) {
            super(true, englishNameAndAcronym, alternativeEnglishNameAndAcronym,)
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly GENERAL_ENTITY_LIMIT =                           new Limits.PlayLimits(['General Entity Limit', 'GEL',], ['Entity Limit B', 'ELB',],)
    public static readonly POWER_UP_ENTITY_LIMIT =                          new Limits.PlayLimits(['Power-up Limit', 'PL',], ['Entity Limit C', 'ELC',],)

    public static readonly LOOSE_COIN_LIMIT =                               new class Limits_LooseCoinLimit extends Limits.PlayLimits {

        protected override get _entityLink() {
            return Import.Entities.COIN
        }

    }(['Loose Coin Limit', 'LCL',],)
    public static readonly SOUND_EFFECT_LIMIT =                             new Limits.EditorLimits(['Sound Effect Limit','SEL',],)
    public static readonly CORPSE_LIMIT =                                   new class Limits_CorpseLimit extends Limits.PlayLimits {

        protected override _computeNoteForTranslation() {
            return {
                multiplayerVS: OtherWordInTheGames.MULTIPLAYER_VERSUS.singularLowerCaseNameOnReference,
                multiplayerCoop: OtherWordInTheGames.MULTIPLAYER_COOP.singularLowerCaseNameOnReference,
            } as const satisfies TranslationReplaceKeysMap<string>
        }

    }(['Corpse Limit', 'CL',],)
    public static readonly PROJECTILE_LIMIT =                               new Limits.PlayLimits(['Projectile Limit', 'PJL',],)
    public static readonly LIGHT_SOURCE_LIMIT =                             new Limits.PlayLimits(['Light Source Limit', 'LSL',],)

    public static readonly GROUND_LIMIT =                                   new class Limits_GroundLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.GROUND
        }

    }(['Ground Limit',], ['Ground Limit 1',],)
    public static readonly BLOCK_LIMIT =                                    new Limits.EditorLimits(['Block Limit',], ['Ground Limit 2',],)
    public static readonly EXTENDABLE_TERRAIN_LIMIT =                       new class Limits_ExtensibleTerrainLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Platform / Slope / Conveyor Belt / Pipe / Vine" group
        }

    }(['Extendable Terrain Limit', 'ETL',], ['Ground Limit 3',],)
    public static readonly CLEAR_PIPE_LIMIT =                               new class Limits_ClearPipeLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.CLEAR_PIPE
        }

    }(['Clear Pipe Limit',],)

    public static readonly GROWN_VINE_LIMIT =                               new class Limits_GrownVineLimit extends Limits.PlayLimits {

        protected override get _entityLink() {
            return Import.Entities.VINE
        }

    }(['Grown Vine Limit', 'GVL',],)
    public static readonly CHECKPOINT_FLAG_LIMIT =                          new class Limits_CheckpointFlagLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.CHECKPOINT_FLAG
        }

    }(['Checkpoint Flag Limit',],)
    public static readonly TRACK_LIMIT =                                    new class Limits_TrackLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.TRACK
        }

    }(['Track Limit',],)
    public static readonly SNAKE_BLOCK_LIMIT =                              new class Limits_SnakeBlockLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.SNAKE_BLOCK
        }

    }(['Snake Block Limit',],)
    public static readonly EXCLAMATION_BLOCK_LIMIT =                        new class Limits_ExclamationBlockLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.EXCLAMATION_MARK_BLOCK
        }

    }(['! Block Limit',],)
    public static readonly TRACK_BLOCK_LIMIT =                              new class Limits_TrackBlockLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.TRACK_BLOCK
        }

    }(['Track Block Limit',],)
    public static readonly ICICLE_LIMIT =                                   new class Limits_IcicleLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.ICICLE
        }

    }(['Icicle Limit',],)
    public static readonly ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT = new class Limits_OneWayWallOrArrowSignOrDashBlockLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "One-Way Wall / Arrow Sign / Dash Block" group
        }

    }(['One-Way Wall / Arrow Sign / Dash Block Limit',],)

    public static readonly ENTITY_HELD_BY_A_TWISTER_LIMIT =                 new class Limits_EntityHeldByATwisterLimit extends Limits.PlayLimits {

        protected override get _entityLink() {
            return Import.Entities.TWISTER
        }

    }(['Entity Held By A Twister Limit',],)
    public static readonly SNOWBALL_THROWN_BY_A_SPIKE_LIMIT =               new class Limits_SnowballThrownByASpikeLimit extends Limits.PlayLimits {

        protected override get _entityLink() {
            return [Import.Entities.SNOWBALL, Import.Entities.SPIKE,] as const
        }

    }(['Snowball Thrown By A Spike Limit',],)
    public static readonly CLEAR_CONDITION_ENTITY_AMOUNT_LIMIT =            new Limits.EditorLimits(['Clear Condition Entity Amount Limit',],)
    public static readonly RENDERED_OBJECT_LIMIT =                          new Limits.PlayLimits(['Rendered Object Limit',], ['Object Displayed Limit',],)

    public static readonly BIG_COIN_LIMIT =                                 new class Limits_BigCoinLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Big Coin" group
        }

    }(['Big Coin Limit',],)
    public static readonly PINK_COIN_LIMIT =                                new class Limits_PinkCoinLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.PINK_COIN
        }

    }(['Pink Coin Limit',],)
    public static readonly COLLECTED_COIN_LIMIT =                           new class Limits_CollectedCoinLimit extends Limits.PlayLimits {

        protected override get _entityLink() {
            return Import.Entities.COIN
        }

    }(['Collected Coin Limit', 'CCL',],)
    public static readonly COLLECTED_KEY_LIMIT =                            new class Limits_CollectedKeyLimit extends Limits.PlayLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "(Cursed) Key" groups
        }

    }(['Collected Key Limit', 'CKL',],)

    public static readonly POWER_UP_LIMIT_EDITOR =                          new Limits.EditorLimits(['Power-up Limit (Editor)', 'PL (E)',],)
    public static readonly PLAYER_FIREBALL =                                new class Limits_PlayerFireballLimit extends Limits.PlayLimits {

        protected override _computeNoteForTranslation() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override get _entityLink() {
            return Import.Entities.FIREBALL_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Fireball Limit',],)
    public static readonly PLAYER_SUPERBALL =                               new class Limits_PlayerSuperballLimit extends Limits.PlayLimits {

        protected override _computeNoteForTranslation() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override get _entityLink() {
            return Import.Entities.SUPERBALL_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Superball Limit',],)
    public static readonly PLAYER_BOMB =                                    new class Limits_PlayerBombLimit extends Limits.PlayLimits {

        protected override _computeNoteForTranslation() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override get _entityLink() {
            return Import.Entities.BOMB_THROWN_BY_A_LINK
        }

    }(['Player\'s Bomb Limit',],)
    public static readonly PLAYER_BUILDER_BOX =                             new class Limits_PlayerBuilderBoxLimit extends Limits.PlayLimits {

        protected override _computeNoteForTranslation() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override get _entityLink() {
            return Import.Entities.BUILDER_BOX_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Builder Box Limit',],)
    public static readonly PLAYER_BOOMERANG =                               new class Limits_PlayerBoomerangLimit extends Limits.PlayLimits {

        protected override _computeNoteForTranslation() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override get _entityLink() {
            return Import.Entities.BOOMERANG_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Boomerang Limit',],)
    public static readonly PLAYER_CANNONBALL =                              new class Limits_PlayerCannonballLimit extends Limits.PlayLimits {

        protected override _computeNoteForTranslation() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override get _entityLink() {
            return Import.Entities.CANNONBALL_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Cannonball Limit',],)
    public static readonly HATCHED_YOSHI_LIMIT =                            new class Limits_HatchedYoshiLimit extends Limits.PlayLimits {

        protected override _computeNoteForTranslation() {
            return {
                amount: this.reference.limitAmountInSMM2!,
            } as const satisfies TranslationReplaceKeysMap<StringOrNumeric>
        }

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "(Red) Yoshi" group
        }

    }(['Hatched Yoshi Limit', 'HYL',],)

    public static readonly GENERAL_ENTITY_LIMIT_EDITOR =                    new Limits.EditorLimits(['General Entity Limit (Editor)', 'GEL (E)',], ['General Enemy Limit',],)
    public static readonly CHARVAARGH_LIMIT =                               new class Limits_CharvaarghLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.CHARVAARGH
        }

    }(['Charvaargh Limit',],)
    public static readonly PIRANHA_CREEPER_LIMIT =                          new class Limits_PiranhaCreeperLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.PIRANHA_CREEPER
        }

    }(['Piranha Creeper Limit',],)
    public static readonly BOWSER_AND_BOWSER_JR_LIMIT =                     new class Limits_BowserAndBowserJrLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Bowser (Jr.)" group
        }

    }(['Bowser (Jr.) Limit',],)
    public static readonly BOOM_BOOM_AND_POM_POM_LIMIT =                    new class Limits_BoomBoomAndPomPomLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Boom Boom / Pom Pom" group
        }

    }(['Boom Boom / Pom Pom Limit',],)
    public static readonly KOOPALING_LIMIT =                                new class Limits_KoopalingLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Koopalings" group
        }

    }(['Koopaling Limit',],)
    public static readonly ANGRY_SUN_OR_MOON_LIMIT =                        new class Limits_AngrySunOrMoonLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Angry Sun / Moon" group
        }

    }(['Angry Sun / Moon Limit',],)
    public static readonly PHANTO_LIMIT =                                   new class Limits_PhantoLimit extends Limits.PlayLimits {

        protected override get _entityLink() {
            return Import.Entities.PHANTO
        }

    }(['Phanto Limit',],)
    public static readonly KOOPA_TROOPA_CAR_LIMIT =                         new class Limits_KoopaTroopaCarLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.KOOPA_TROOPA_CAR
        }

    }(['Koopa Troopa Car Limit',],)

    public static readonly WARP_DOOR_LIMIT =                                new class Limits_WarpDoorLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Warp Doors" group
        }

    }(['Warp Door Limit',],)
    public static readonly WARP_BOX_LIMIT =                                 new class Limits_WarpBoxLimit extends Limits.EditorLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Warp Boxes" group
        }

    }(['Warp Box Limit',],)
    public static readonly WARP_PIPE_LIMIT =                                new class Limits_WarpPipeLimit extends Limits.EditorLimits {

        protected override get _entityLink() {
            return Import.Entities.PIPE
        }

    } (['Warp Pipe Limit',],)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<Limits, typeof Limits> = class CompanionEnum_Limits
        extends CompanionEnumByName<Limits, typeof Limits> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Limits

        private constructor() {
            super(Limits,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Limits()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| Limits | string>,): Limits {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it =>
                it.englishName === value
                || it.englishName.replace(' Limit', EMPTY_STRING,) === value
                || it.englishName.replace(' Limit (Editor)', EMPTY_STRING,) === value
                || it.alternativeEnglishName === value
                || it.alternativeEnglishName?.replace(' Limit', EMPTY_STRING,) === value
                || it.alternativeEnglishName?.replace(' Limit (Editor)', EMPTY_STRING,) === value,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, Limit>
    static #playLimits?: Array<Limits>
    static #editorLimits?: Array<Limits>

    #reference?: LimitWithPossibleAlternativeLimit
    readonly #isEditorLimit
    #noteForTranslation?: TranslationReplaceKeysMap<StringOrNumeric>
    readonly #acronym: NullOr<PossibleAcronym>
    readonly #englishName: StringContainer<PossibleEnglishName>
    readonly #alternativeEnglishName: NullOr<StringContainer<PossibleAlternativeEnglishName>>
    readonly #alternativeAcronym: NullOr<PossibleAlternativeAcronym>
    #entityLink?: PossibleEntityLink
    #groupLink?: object

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(isEditorLimit: boolean, [englishName, acronym,]: readonly [PossibleEnglishName, PossibleAcronym?,], alternativeEnglishNameAndAcronym: Nullable<readonly [PossibleAlternativeEnglishName, PossibleAlternativeAcronym?,]> = null,) {
        super()
        this.#isEditorLimit = isEditorLimit
        this.#englishName = new StringContainer(englishName,)
        this.#acronym = acronym ?? null
        if (alternativeEnglishNameAndAcronym == null)
            this.#alternativeEnglishName = this.#alternativeAcronym = null
        else {
            const [alternativeEnglishName, alternativeAcronym = null,] = alternativeEnglishNameAndAcronym
            this.#alternativeEnglishName = new StringContainer(alternativeEnglishName,)
            this.#alternativeAcronym = alternativeAcronym
        }
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Reference --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, Limit> {
        return this.#REFERENCE_MAP ??= LimitLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): LimitWithPossibleAlternativeLimit {
        return this.#reference ??= Limits.REFERENCE_MAP.get(this.englishName)! as LimitWithPossibleAlternativeLimit
    }

    //endregion -------------------- Reference --------------------

    /**
     * Tell whenever the {@link Limits} is an editor limit (<b>true</b>) a play limit (<b>false</b>)
     *
     * @backingField
     * @see Limit.type
     * @see LimitTypes
     */
    public get isEditorLimit(): boolean {
        return this.#isEditorLimit
    }

    //region -------------------- Acronym / english name --------------------

    public get acronym(): NullOr<PossibleAcronym> {
        return this.#acronym
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get alternativeAcronym(): NullOr<PossibleAlternativeAcronym> {
        return this.#alternativeAcronym
    }

    public get alternativeEnglishName(): NullOr<PossibleAlternativeEnglishName> {
        return this.#alternativeEnglishName?.get ?? null
    }

    public get alternativeEnglishNameInHtml(): string {
        return this.#alternativeEnglishName?.getInHtml ?? EMPTY_STRING
    }

    //endregion -------------------- Acronym / english name --------------------
    //region -------------------- Translation --------------------

    protected _computeNoteForTranslation(): TranslationReplaceKeysMap<StringOrNumeric> {
        return EMPTY_OBJECT
    }

    /**
     * Retrieve the {@link Limit.amountComment} ready for the translation
     * as {@link Object} of {@link StringOrNumeric}
     *
     * @lateInititialization
     */
    public get noteForTranslation(): TranslationReplaceKeysMap<StringOrNumeric> {
        return this.#noteForTranslation ??= this._computeNoteForTranslation()
    }

    //endregion -------------------- Translation --------------------
    //region -------------------- Group link --------------------

    protected get _groupLink(): PossibleGroupLinkInitialisation {
        return null
    }

    public get groupLink(): object {
        if (this.#groupLink != null)
            return this.#groupLink

        const link = this._groupLink
        return this.#groupLink = link == null
            ? {}
            : link//.reference
    }

    //endregion -------------------- Group link --------------------
    //region -------------------- Entity link --------------------

    protected get _entityLink(): PossibleEntityLinkInitialisation {
        return null
    }

    public get entityLink(): PossibleEntityLink {
        if (this.#entityLink != null)
            return this.#entityLink

        const link = this._entityLink
        return this.#entityLink = link == null
            ? EMPTY_ARRAY
            : isArray(link,)
                ? [link[0].reference, link[1].reference,]
                : [link.reference,]
    }

    //endregion -------------------- Entity link --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace Limits {

    const values = Limits.CompanionEnum.get.values

    export const all = values.toArray()
    export const playLimits = values.filter(it => !it.isEditorLimit,).toArray()
    export const editorLimits = values.filter(it => it.isEditorLimit,).toArray()

}

type PossibleGroupLinkInitialisation = NullOr<object>
type PossibleEntityLinkInitialisation = NullOr<| Entities | readonly [Entities, Entities,]>
