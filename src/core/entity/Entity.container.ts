import type {Lazy}                        from '@joookiwi/lazy'
import type {Array, NullOr, NullOrString} from '@joookiwi/type'
import {lazyOf}                           from '@joookiwi/lazy'

import type {Entity, PossibleOtherEntities}                                                                                                                                     from 'core/entity/Entity'
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

    readonly #instruments

    readonly #referencesInSuperMarioBrosStyle
    readonly #referencesInSuperMarioBros3Style
    readonly #referencesInSuperMarioWorldStyle
    readonly #referencesInNewSuperMarioBrosUStyle
    readonly #referencesInSuperMario3DWorldStyle

    readonly #referencesInGroundTheme
    readonly #referencesInUndergroundTheme
    readonly #referencesInUnderwaterTheme
    readonly #referencesInDesertTheme
    readonly #referencesInSnowTheme
    readonly #referencesInSkyTheme
    readonly #referencesInForestTheme
    readonly #referencesInGhostHouseTheme
    readonly #referencesInAirshipTheme
    readonly #referencesInCastleTheme

    readonly #referencesInDayTime
    readonly #referencesInNightTime

    readonly #everyGameStyleReferences
    readonly #everyThemeReferences
    readonly #everyTimeReferences
    readonly #everyReferences

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
        public readonly isInGeneralLimit: BooleanOrNotApplicable, public readonly isInGeneralLimitComment: NullOrString<PossibleGeneralLimitComment>,
        public readonly isInGlobalGeneralLimit: BooleanOrNotApplicable, public readonly isInGlobalGeneralLimitComment: NullOrString<PossibleGeneralGlobalLimitComment>,
        public readonly isInPowerUpLimit: BooleanOrNotApplicable,
        public readonly isInProjectileLimit: BooleanOrNotApplicable, public readonly isInProjectileLimitComment: NullOrString<PossibleProjectileLimitComment>,
        public readonly isInDynamicRenderedObjectLimit: BooleanOrNotApplicable, public readonly isInDynamicRenderedObjectLimitComment: NullOrString<PossibleRenderedObjectLimitTypeComment>,
        public readonly isInCollectedLooseCoinLimit: BooleanOrNotApplicable,
        public readonly otherLimit: NullOr<| NotApplicable | Limits>, public readonly otherLimitComment: NullOrString<PossibleOtherLimitComment>, public readonly isUnknown_otherLimit: boolean,

        instruments: Lazy<Array<Instrument>>,
        public readonly canMakeASoundOutOfAMusicBlock: boolean, public readonly canMakeASoundOutOfAMusicBlockComment: NullOrString<PossibleCanMakeASoundOutOfAMusicBlock_Comment>,

        referencesInSuperMarioBrosStyle: Lazy<PossibleOtherEntities>, referencesInSuperMarioBros3Style: Lazy<PossibleOtherEntities>,
        referencesInSuperMarioWorldStyle: Lazy<PossibleOtherEntities>, referencesInNewSuperMarioBrosUStyle: Lazy<PossibleOtherEntities>,
        referencesInSuperMario3DWorldStyle: Lazy<PossibleOtherEntities>,

        referencesInGroundTheme: Lazy<PossibleOtherEntities>, referencesInUndergroundTheme: Lazy<PossibleOtherEntities>,
        referencesInUnderwaterTheme: Lazy<PossibleOtherEntities>, referencesInDesertTheme: Lazy<PossibleOtherEntities>,
        referencesInSnowTheme: Lazy<PossibleOtherEntities>, referencesInSkyTheme: Lazy<PossibleOtherEntities>,
        referencesInForestTheme: Lazy<PossibleOtherEntities>, referencesInGhostHouseTheme: Lazy<PossibleOtherEntities>,
        referencesInAirshipTheme: Lazy<PossibleOtherEntities>, referencesInCastleTheme: Lazy<PossibleOtherEntities>,

        referencesInDayTime: Lazy<PossibleOtherEntities>, referencesInNightTime: Lazy<PossibleOtherEntities>,

        everyGameStyleReferences: Lazy<Array<Entity>>,
        everyThemeReferences: Lazy<Array<Entity>>,
        everyTimeReferences: Lazy<Array<Entity>>,
        everyReferences: Lazy<Array<Entity>>,
    ) {
        super(name, lazyOf(category,),)
        this.#isInDayTime = isInDayTime
        this.#isInNightTime = isInNightTime

        this.#instruments = instruments

        this.#referencesInSuperMarioBrosStyle = referencesInSuperMarioBrosStyle
        this.#referencesInSuperMarioBros3Style = referencesInSuperMarioBros3Style
        this.#referencesInSuperMarioWorldStyle = referencesInSuperMarioWorldStyle
        this.#referencesInNewSuperMarioBrosUStyle = referencesInNewSuperMarioBrosUStyle
        this.#referencesInSuperMario3DWorldStyle = referencesInSuperMario3DWorldStyle

        this.#referencesInGroundTheme = referencesInGroundTheme
        this.#referencesInUndergroundTheme = referencesInUndergroundTheme
        this.#referencesInUnderwaterTheme = referencesInUnderwaterTheme
        this.#referencesInDesertTheme = referencesInDesertTheme
        this.#referencesInSnowTheme = referencesInSnowTheme
        this.#referencesInSkyTheme = referencesInSkyTheme
        this.#referencesInForestTheme = referencesInForestTheme
        this.#referencesInGhostHouseTheme = referencesInGhostHouseTheme
        this.#referencesInAirshipTheme = referencesInAirshipTheme
        this.#referencesInCastleTheme = referencesInCastleTheme

        this.#referencesInDayTime = referencesInDayTime
        this.#referencesInNightTime = referencesInNightTime

        this.#everyGameStyleReferences = everyGameStyleReferences
        this.#everyThemeReferences = everyThemeReferences
        this.#everyTimeReferences = everyTimeReferences
        this.#everyReferences = everyReferences
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isInDayTheme() {   return this.#isInDayTime }
    public get isInNightTheme() { return this.#isInNightTime }

    public get instruments() { return this.#instruments.value }

    //region -------------------- References --------------------

    public get referenceInSuperMarioBrosStyle() {     return this.#referencesInSuperMarioBrosStyle.value }
    public get referenceInSuperMarioBros3Style() {    return this.#referencesInSuperMarioBros3Style.value }
    public get referenceInSuperMarioWorldStyle() {    return this.#referencesInSuperMarioWorldStyle.value }
    public get referenceInNewSuperMarioBrosUStyle() { return this.#referencesInNewSuperMarioBrosUStyle.value }
    public get referenceInSuperMario3DWorldStyle() {  return this.#referencesInSuperMario3DWorldStyle.value }

    public get referenceInGroundTheme() {      return this.#referencesInGroundTheme.value }
    public get referenceInUndergroundTheme() { return this.#referencesInUndergroundTheme.value }
    public get referenceInUnderwaterTheme() {  return this.#referencesInUnderwaterTheme.value }
    public get referenceInDesertTheme() {      return this.#referencesInDesertTheme.value }
    public get referenceInSnowTheme() {        return this.#referencesInSnowTheme.value }
    public get referenceInSkyTheme() {         return this.#referencesInSkyTheme.value }
    public get referenceInForestTheme() {      return this.#referencesInForestTheme.value }
    public get referenceInGhostHouseTheme() {  return this.#referencesInGhostHouseTheme.value }
    public get referenceInAirshipTheme() {     return this.#referencesInAirshipTheme.value }
    public get referenceInCastleTheme() {      return this.#referencesInCastleTheme.value }

    public get referenceInDayTheme() {    return this.#referencesInDayTime.value }
    public get referenceInNightTheme() { return this.#referencesInNightTime.value }

    public get everyGameStyleReferences() { return this.#everyGameStyleReferences.value }
    public get everyThemeReferences() {     return this.#everyThemeReferences.value }
    public get everyTimeReferences() {      return this.#everyTimeReferences.value }
    public get everyReferences() {          return this.#everyReferences.value }

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getReferenceFrom(theme: Themes,): PossibleOtherEntities
    public getReferenceFrom(time: Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,) {
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
