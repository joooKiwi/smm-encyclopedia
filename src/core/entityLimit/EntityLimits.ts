import {Enum} from '@joookiwi/enumerable'

import type {ClassWithNullableAcronym}                                                                                                              from 'core/ClassWithAcronym'
import type {ClassWithEnglishName}                                                                                                                  from 'core/ClassWithEnglishName'
import type {ClassWithReference}                                                                                                                    from 'core/ClassWithReference'
import type {EntityLimit, EntityLimitWithPossibleAlternativeEntityLimit}                                                                            from 'core/entityLimit/EntityLimit'
import type {Names, Ordinals, PossibleAcronym, PossibleAlternativeAcronym, PossibleAlternativeEnglishName, PossibleEnglishName, PossibleEntityLink} from 'core/entityLimit/EntityLimits.types'
import type {CompanionEnumByNameSingleton}                                                                                                          from 'util/enumerable/Singleton.types'

import type {Entities}             from 'core/entity/Entities'
import {EntityLimitLoader}         from 'core/entityLimit/EntityLimit.loader'
import {Import}                    from 'util/DynamicImporter'
import {EMPTY_ARRAY, EMPTY_STRING} from 'util/emptyVariables'
import {StringContainer}           from 'util/StringContainer'
import {CompanionEnumByName}       from 'util/enumerable/companion/CompanionEnumByName'

/**
 * @classWithDynamicImport<{@link Entities}>
 */
export class EntityLimits
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityLimitWithPossibleAlternativeEntityLimit>,
        ClassWithNullableAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Sub class --------------------

    private static readonly WhilePlayingEntityLimits = class WhilePlayingEntityLimits extends EntityLimits {

        constructor(englishNameAndAcronym: readonly [PossibleEnglishName, PossibleAcronym?,], alternativeEnglishNameAndAcronym?: Nullable<readonly [PossibleAlternativeEnglishName, PossibleAlternativeAcronym?,]>) {
            super(false, englishNameAndAcronym, alternativeEnglishNameAndAcronym,)
        }

    }
    private static readonly EditorEntityLimits = class EditorEntityLimits extends EntityLimits {

        constructor(englishNameAndAcronym: readonly [PossibleEnglishName, PossibleAcronym?,], alternativeEnglishNameAndAcronym?: Nullable<readonly [PossibleAlternativeEnglishName, PossibleAlternativeAcronym?,]>) {
            super(true, englishNameAndAcronym, alternativeEnglishNameAndAcronym,)
        }

    }

    //endregion -------------------- Sub class --------------------
    //region -------------------- Enum instances --------------------

    public static readonly GENERAL_ENTITY_LIMIT =                           new EntityLimits.WhilePlayingEntityLimits(['General Entity Limit', 'GEL',], ['Entity Limit B', 'ELB',],)
    public static readonly POWER_UP_ENTITY_LIMIT =                          new EntityLimits.WhilePlayingEntityLimits(['Power-up Limit', 'PL',], ['Entity Limit C', 'ELC',],)

    public static readonly LOOSE_COIN_LIMIT =                               new class EntityLimits_LooseCoinLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.COIN
        }

    }(['Loose Coin Limit', 'LCL',],)
    public static readonly SOUND_EFFECT_LIMIT =                             new EntityLimits.EditorEntityLimits(['Sound Effect Limit','SEL',],)
    public static readonly CORPSE_LIMIT =                                   new EntityLimits.WhilePlayingEntityLimits(['Corpse Limit', 'CL',],)
    public static readonly PROJECTILE_LIMIT =                               new EntityLimits.WhilePlayingEntityLimits(['Projectile Limit', 'PJL',],)
    public static readonly LIGHT_SOURCE_LIMIT =                             new EntityLimits.WhilePlayingEntityLimits(['Light Source Limit', 'LSL',],)

    public static readonly GROUND_LIMIT =                                   new class EntityLimits_GroundLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.GROUND
        }

    }(['Ground Limit',], ['Ground Limit 1',],)
    public static readonly BLOCK_LIMIT =                                    new EntityLimits.EditorEntityLimits(['Block Limit',], ['Ground Limit 2',],)
    public static readonly EXTENDABLE_TERRAIN_LIMIT =                       new class EntityLimits_ExtensibleTerrainLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Platform / Slope / Conveyor Belt / Pipe / Vine" group
        }

    }(['Extendable Terrain Limit', 'ETL',], ['Ground Limit 3',],)
    public static readonly CLEAR_PIPE_LIMIT =                               new class EntityLimits_ClearPipeLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.CLEAR_PIPE
        }

    }(['Clear Pipe Limit',],)

    public static readonly GROWN_VINE_LIMIT =                               new class EntityLimits_GrownVineLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.VINE
        }

    }(['Grown Vine Limit', 'GVL',],)
    public static readonly CHECKPOINT_FLAG_LIMIT =                          new class EntityLimits_CheckpointFlagLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.CHECKPOINT_FLAG
        }

    }(['Checkpoint Flag Limit',],)
    public static readonly TRACK_LIMIT =                                    new class EntityLimits_TrackLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.TRACK
        }

    }(['Track Limit',],)
    public static readonly SNAKE_BLOCK_LIMIT =                              new class EntityLimits_SnakeBlockLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.SNAKE_BLOCK
        }

    }(['Snake Block Limit',],)
    public static readonly EXCLAMATION_BLOCK_LIMIT =                        new class EntityLimits_ExclamationBlockLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.EXCLAMATION_MARK_BLOCK
        }

    }(['! Block Limit',],)
    public static readonly TRACK_BLOCK_LIMIT =                              new class EntityLimits_TrackBlockLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.TRACK_BLOCK
        }

    }(['Track Block Limit',],)
    public static readonly ICICLE_LIMIT =                                   new class EntityLimits_IcicleLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.ICICLE
        }

    }(['Icicle Limit',],)
    public static readonly ONE_WAY_WALL_OR_ARROW_SIGN_OR_DASH_BLOCK_LIMIT = new class EntityLimits_OneWayWallOrArrowSignOrDashBlockLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "One-Way Wall / Arrow Sign / Dash Block" group
        }

    }(['One-Way Wall / Arrow Sign / Dash Block Limit',],)

    public static readonly ENTITY_HELD_BY_A_TWISTER_LIMIT =                 new class EntityLimits_EntityHeldByATwisterLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.TWISTER
        }

    }(['Entity Held By A Twister Limit',],)
    public static readonly SNOWBALL_THROWN_BY_A_SPIKE_LIMIT =               new class EntityLimits_SnowballThrownByASpikeLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return [Import.Entities.SNOWBALL, Import.Entities.SPIKE,] as const
        }

    }(['Snowball Thrown By A Spike Limit',],)
    public static readonly CLEAR_CONDITION_ENTITY_AMOUNT_LIMIT =            new EntityLimits.EditorEntityLimits(['Clear Condition Entity Amount Limit',],)
    public static readonly RENDERED_OBJECT_LIMIT =                          new EntityLimits.WhilePlayingEntityLimits(['Rendered Object Limit',], ['Object Displayed Limit',],)

    public static readonly BIG_COIN_LIMIT =                                 new class EntityLimits_BigCoinLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Big Coin" group
        }

    }(['Big Coin Limit',],)
    public static readonly PINK_COIN_LIMIT =                                new class EntityLimits_PinkCoinLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.PINK_COIN
        }

    }(['Pink Coin Limit',],)
    public static readonly COLLECTED_COIN_LIMIT =                           new class EntityLimits_CollectedCoinLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.COIN
        }

    }(['Collected Coin Limit', 'CCL',],)
    public static readonly COLLECTED_KEY_LIMIT =                            new class EntityLimits_CollectedKeyLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "(Cursed) Key" groups
        }

    }(['Collected Key Limit', 'CKL',],)

    public static readonly POWER_UP_LIMIT_EDITOR =                          new EntityLimits.EditorEntityLimits(['Power-up Limit (Editor)', 'PL (E)',],)
    public static readonly PLAYER_FIREBALL =                                new class EntityLimits_PlayerFireballLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.FIREBALL_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Fireball Limit',],)
    public static readonly PLAYER_SUPERBALL =                               new class EntityLimits_PlayerSuperballLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.SUPERBALL_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Superball Limit',],)
    public static readonly PLAYER_BOMB =                                    new class EntityLimits_PlayerBombLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.BOMB_THROWN_BY_A_LINK
        }

    }(['Player\'s Bomb Limit',],)
    public static readonly PLAYER_BUILDER_BOX =                             new class EntityLimits_PlayerBuilderBoxLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.BUILDER_BOX_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Builder Box Limit',],)
    public static readonly PLAYER_BOOMERANG =                               new class EntityLimits_PlayerBoomerangLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.BOOMERANG_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Boomerang Limit',],)
    public static readonly PLAYER_CANNONBALL =                              new class EntityLimits_PlayerCannonballLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.CANNONBALL_THROWN_BY_A_PLAYER
        }

    }(['Player\'s Cannonball Limit',],)
    public static readonly HATCHED_YOSHI_LIMIT =                            new class EntityLimits_HatchedYoshiLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "(Red) Yoshi" group
        }

    }(['Hatched Yoshi Limit', 'HYL',],)

    public static readonly GENERAL_ENTITY_LIMIT_EDITOR =                    new EntityLimits.EditorEntityLimits(['General Entity Limit (Editor)', 'GEL (E)',], ['General Enemy Limit',],)
    public static readonly CHARVAARGH_LIMIT =                               new class EntityLimits_CharvaarghLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.CHARVAARGH
        }

    }(['Charvaargh Limit',],)
    public static readonly PIRANHA_CREEPER_LIMIT =                          new class EntityLimits_PiranhaCreeperLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.PIRANHA_CREEPER
        }

    }(['Piranha Creeper Limit',],)
    public static readonly BOWSER_AND_BOWSER_JR_LIMIT =                     new class EntityLimits_BowserAndBowserJrLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Bowser (Jr.)" group
        }

    }(['Bowser (Jr.) Limit',],)
    public static readonly BOOM_BOOM_AND_POM_POM_LIMIT =                    new class EntityLimits_BoomBoomAndPomPomLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Boom Boom / Pom Pom" group
        }

    }(['Boom Boom / Pom Pom Limit',],)
    public static readonly KOOPALING_LIMIT =                                new class EntityLimits_KoopalingLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Koopalings" group
        }

    }(['Koopaling Limit',],)
    public static readonly ANGRY_SUN_OR_MOON_LIMIT =                        new class EntityLimits_AngrySunOrMoonLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Angry Sun / Moon" group
        }

    }(['Angry Sun / Moon Limit',],)
    public static readonly PHANTO_LIMIT =                                   new class EntityLimits_PhantoLimit extends EntityLimits.WhilePlayingEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.PHANTO
        }

    }(['Phanto Limit',],)
    public static readonly KOOPA_TROOPA_CAR_LIMIT =                         new class EntityLimits_KoopaTroopaCarLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.KOOPA_TROOPA_CAR
        }

    }(['Koopa Troopa Car Limit',],)

    public static readonly WARP_DOOR_LIMIT =                                new class EntityLimits_WarpDoorLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Warp Doors" group
        }

    }(['Warp Door Limit',],)
    public static readonly WARP_BOX_LIMIT =                                 new class EntityLimits_WarpBoxLimit extends EntityLimits.EditorEntityLimits {

        protected override get _groupLink(): PossibleGroupLinkInitialisation {
            return null//TODO change to "Warp Boxes" group
        }

    }(['Warp Box Limit',],)
    public static readonly WARP_PIPE_LIMIT =                                new class EntityLimits_WarpPipeLimit extends EntityLimits.EditorEntityLimits {

        protected override get _entityLink() {
            return Import.Entities.PIPE
        }

    } (['Warp Pipe Limit',],)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<EntityLimits, typeof EntityLimits> = class CompanionEnum_EntityLimits
        extends CompanionEnumByName<EntityLimits, typeof EntityLimits>{

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityLimits

        private constructor() {
            super(EntityLimits,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityLimits()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| EntityLimits | string>,): EntityLimits {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.find(it =>
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

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, EntityLimit>
    static #whilePlayingEntityLimits?: readonly EntityLimits[]
    static #editorEntityLimits?: readonly EntityLimits[]

    #reference?: EntityLimitWithPossibleAlternativeEntityLimit
    readonly #isEditorLimit
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

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, EntityLimit> {
        return this.#REFERENCE_MAP ??= EntityLimitLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): EntityLimitWithPossibleAlternativeEntityLimit {
        return this.#reference ??= EntityLimits.REFERENCE_MAP.get(this.englishName)! as EntityLimitWithPossibleAlternativeEntityLimit
    }


    /**
     * Tell whenever the {@link EntityLimits limit} is an editor limit (<b>true</b>) a limit while playing (<b>false</b>)
     *
     * @backingField
     * @see EntityLimit.type
     * @see EntityLimitTypes
     */
    public get isEditorLimit(): boolean {
        return this.#isEditorLimit
    }


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
        return this.#alternativeEnglishName?.getInHtml ?? ''
    }


    //region -------------------- Group link --------------------

    protected get _groupLink(): PossibleGroupLinkInitialisation {
        return null
    }

    public get groupLink(): object {
        if (this.#groupLink == null) {
            const link = this._groupLink
            this.#groupLink = link == null
                ? {}
                : link//.reference
        }
        return this.#groupLink
    }

    //endregion -------------------- Group link --------------------
    //region -------------------- Entity link --------------------

    protected get _entityLink(): PossibleEntityLinkInitialisation {
        return null
    }

    public get entityLink(): PossibleEntityLink {
        if (this.#entityLink == null) {
            const link = this._entityLink
            this.#entityLink = link == null
                ? EMPTY_ARRAY
                : link instanceof Array
                    ? [link[0].reference, link[1].reference,]
                    : [link.reference,]
        }
        return this.#entityLink
    }

    //endregion -------------------- Entity link --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get whilePlayingEntityLimits(): readonly EntityLimits[] {
        return this.#whilePlayingEntityLimits ??= this.CompanionEnum.get.values.filter(it => !it.isEditorLimit,).toArray()
    }

    public static get editorEntityLimits(): readonly EntityLimits[] {
        return this.#editorEntityLimits ??= this.CompanionEnum.get.values.filter(it => it.isEditorLimit).toArray()
    }

    //endregion -------------------- Methods --------------------

}

type PossibleGroupLinkInitialisation = NullOr<object>
type PossibleEntityLinkInitialisation = NullOr<| Entities | readonly [Entities, Entities,]>
