import type {CollectionHolder}     from '@joookiwi/collection'
import type {NullOr, NullOrString} from '@joookiwi/type'
import {lazyOf}                    from '@joookiwi/lazy'

import type {Entity}                                                                                                                                                            from 'core/entity/Entity'
import type {LCL_Play, OnlySomeVariants}                                                                                                                                        from 'core/entity/properties/loader.types'
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment}                                                                                                                     from 'core/entity/properties/instrument/loader.types'
import type {PossibleGeneralGlobalLimitComment, PossibleGeneralLimitComment, PossibleOtherLimitComment, PossibleProjectileLimitComment, PossibleRenderedObjectLimitTypeComment} from 'core/entity/properties/limit/loader.types'
import type {EntityCategory}                                                                                                                                                    from 'core/entityCategory/EntityCategory'
import type {Games}                                                                                                                                                             from 'core/game/Games'
import type {GameStyles}                                                                                                                                                        from 'core/gameStyle/GameStyles'
import type {Instrument}                                                                                                                                                        from 'core/instrument/Instrument'
import type {Limits}                                                                                                                                                            from 'core/limit/Limits'
import type {Themes}                                                                                                                                                            from 'core/theme/Themes'
import type {Times}                                                                                                                                                             from 'core/time/Times'
import type {Name}                                                                                                                                                              from 'lang/name/Name'

import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'
import {GameMap}                          from 'util/collection/GameMap'
import {GameStyleMap}                     from 'util/collection/GameStyleMap'
import {LimitMapHolder}                   from 'util/collection/LimitMapHolder'
import {ThemeMap}                         from 'util/collection/ThemeMap'
import {TimeMap}                          from 'util/collection/TimeMap'

/** A class made to be a representation of the csv data on an {@link Entities} */
export class EntityContainer
    extends ClassContainingANameAndACategory<string, string, EntityCategory>
    implements Entity {

    //region -------------------- Fields --------------------

    readonly #isInDayTime
    readonly #isInNightTime

    readonly #referencesInDayTime
    readonly #referencesInNightTime

    #gameMap?: GameMap<Entity>
    #gameStyleMap?: GameStyleMap<Entity>
    #themeMap?: ThemeMap<Entity>
    #timeMap?: TimeMap<Entity>
    #limitMap?: LimitMapHolder<Entity>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(
        name: Name<string>, category: EntityCategory,

        public readonly hasAMushroomVariant: boolean,
        public readonly canBeInAParachute: boolean, public readonly canBeInAParachuteComment: NullOrString<LCL_Play>,
        public readonly canHaveWings: boolean, public readonly canHaveWingsComment: NullOrString<LCL_Play>,

        public readonly canContainOrSpawnAKey: boolean,
        public readonly isAffectDirectlyByAnOnOffState: boolean, public readonly isAffectDirectlyByAnOnOffStateComment: NullOrString<OnlySomeVariants>,
        public readonly canSpawnOutOfAPipe: boolean,
        public readonly canBePutOnASwingingClaw: boolean,
        public readonly canBeThrownByALakitu: BooleanOrUnknownCharacter,
        public readonly canBePutInALakituCloud: BooleanOrUnknownCharacter,
        public readonly canBePutInAClownCar: boolean,
        public readonly canBeFiredOutOfABillBlaster: boolean,
        public readonly canComeOutOfABlock: boolean,
        public readonly canBePutInATree: boolean,

        public readonly canBeStacked: boolean,
        public readonly isGlobalGroundOrGlobal: boolean, public readonly isGlobalGroundOrGlobalInSm3dw: boolean,

        public readonly isInSuperMarioMaker1: boolean,
        public readonly isInSuperMarioMakerFor3DS: boolean,
        public readonly isInSuperMarioMaker2: boolean,

        public readonly isInSuperMarioBrosStyle: boolean, public readonly isInSuperMarioBros3Style: boolean,
        public readonly isInSuperMarioWorldStyle: boolean, public readonly isInNewSuperMarioBrosUStyle: boolean,
        public readonly isInSuperMario3DWorldStyle: boolean,

        public readonly isInGroundTheme: boolean, public readonly isInUndergroundTheme: boolean,
        public readonly isInUnderwaterTheme: boolean, public readonly isInDesertTheme: boolean,
        public readonly isInSnowTheme: boolean, public readonly isInSkyTheme: boolean,
        public readonly isInForestTheme: boolean, public readonly isInGhostHouseTheme: boolean,
        public readonly isInAirshipTheme: boolean, public readonly isInCastleTheme: boolean,

        isInDayTime: boolean, isInNightTime: boolean,

        public readonly editorLimit_smm1And3ds: NullOr<| NotApplicable | Limits>, public readonly editorLimit_smm2: NullOr<| NotApplicable | Limits>, public readonly isUnknown_editorLimit_smm2: boolean,
        public readonly isInGeneralLimit: boolean, public readonly isInGeneralLimitComment: NullOrString<PossibleGeneralLimitComment>,
        public readonly isInGlobalGeneralLimit: boolean, public readonly isInGlobalGeneralLimitComment: NullOrString<PossibleGeneralGlobalLimitComment>,
        public readonly isInPowerUpLimit: boolean,
        public readonly isInProjectileLimit: boolean, public readonly isInProjectileLimitComment: NullOrString<PossibleProjectileLimitComment>,
        public readonly isInDynamicRenderedObjectLimit: boolean, public readonly isInDynamicRenderedObjectLimitComment: NullOrString<PossibleRenderedObjectLimitTypeComment>,
        public readonly isInCollectedLooseCoinLimit: boolean,
        public readonly otherLimit: NullOr<Limits>, public readonly otherLimitComment: NullOrString<PossibleOtherLimitComment>, public readonly isUnknown_otherLimit: boolean,

        public readonly instruments: CollectionHolder<Instrument>,
        public readonly canMakeASoundOutOfAMusicBlock: boolean, public readonly canMakeASoundOutOfAMusicBlockComment: NullOrString<PossibleCanMakeASoundOutOfAMusicBlock_Comment>,

        public readonly referencesInSuperMarioBrosStyle: CollectionHolder<Entity>, public readonly referencesInSuperMarioBros3Style: CollectionHolder<Entity>,
        public readonly referencesInSuperMarioWorldStyle: CollectionHolder<Entity>, public readonly referencesInNewSuperMarioBrosUStyle: CollectionHolder<Entity>,
        public readonly referencesInSuperMario3DWorldStyle: CollectionHolder<Entity>,

        public readonly referencesInGroundTheme: CollectionHolder<Entity>, public readonly referencesInUndergroundTheme: CollectionHolder<Entity>,
        public readonly referencesInUnderwaterTheme: CollectionHolder<Entity>, public readonly referencesInDesertTheme: CollectionHolder<Entity>,
        public readonly referencesInSnowTheme: CollectionHolder<Entity>, public readonly referencesInSkyTheme: CollectionHolder<Entity>,
        public readonly referencesInForestTheme: CollectionHolder<Entity>, public readonly referencesInGhostHouseTheme: CollectionHolder<Entity>,
        public readonly referencesInAirshipTheme: CollectionHolder<Entity>, public readonly referencesInCastleTheme: CollectionHolder<Entity>,

        referencesInDayTime: CollectionHolder<Entity>, referencesInNightTime: CollectionHolder<Entity>,

        public readonly everyGameStyleReferences: CollectionHolder<Entity>,
        public readonly everyThemeReferences: CollectionHolder<Entity>,
        public readonly everyTimeReferences: CollectionHolder<Entity>,
        public readonly everyReferences: CollectionHolder<Entity>,
    ) {
        super(name, lazyOf(category,),)
        this.#isInDayTime = isInDayTime
        this.#isInNightTime = isInNightTime

        this.#referencesInDayTime = referencesInDayTime
        this.#referencesInNightTime = referencesInNightTime
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isInDayTheme() {   return this.#isInDayTime }
    public get isInNightTheme() { return this.#isInNightTime }

    public get referencesInDayTheme() {    return this.#referencesInDayTime }
    public get referencesInNightTheme() { return this.#referencesInNightTime }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getReferencesFrom(theme: Themes,): CollectionHolder<Entity>
    public getReferencesFrom(time: Times,): CollectionHolder<Entity>
    public getReferencesFrom(gameStyle: GameStyles,): CollectionHolder<Entity>
    public getReferencesFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): CollectionHolder<Entity>
    public getReferencesFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,) {
        return gameStyleOrThemeOrTime.getReference(this,)
    }

    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    public toGameStyleMap(): ReadonlyMap<GameStyles, boolean> {
        return this.#gameStyleMap ??= new GameStyleMap(this,)
    }

    public toCourseThemeMap(): ReadonlyMap<Themes, boolean> {
        return this.#themeMap ??= new ThemeMap(this,)
    }

    public toTimeMap(): ReadonlyMap<Times, boolean> {
        return this.#timeMap ??= new TimeMap(this,)
    }

    public toLimitMap(): ReadonlyMap<Limits, boolean> {
        return (this.#limitMap ??= new LimitMapHolder(this,)).toLimitMap()
    }

    public toEditorLimitMap(): ReadonlyMap<Limits, boolean> {
        return (this.#limitMap ??= new LimitMapHolder(this,)).toEditorLimitMap()
    }

    public toPlayLimitMap(): ReadonlyMap<Limits, boolean> {
        return (this.#limitMap ??= new LimitMapHolder(this,)).toPlayLimitMap()
    }

    //endregion -------------------- Convertor methods --------------------

    //endregion -------------------- Methods --------------------

}
