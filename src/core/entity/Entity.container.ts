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

    readonly #hasAMushroomVariant
    readonly #canBeInAParachute
    readonly #canBeInAParachuteComment
    readonly #canHaveWings
    readonly #canHaveWingsComment

    readonly #canContainOrSpawnAKey

    readonly #isAffectDirectlyByAnOnOffState
    readonly #isAffectDirectlyByAnOnOffStateComment

    readonly #canSpawnOutOfAPipe
    readonly #canBePutOnASwingingClaw
    readonly #canBeThrownByALakitu
    readonly #canBePutInALakituCloud
    readonly #canBePutInAClownCar
    readonly #canBeFiredOutOfABulletLauncher
    readonly #canComeOutOfABlock
    readonly #canBePutInATree

    readonly #canBeStacked

    readonly #isGlobalGroundOrGlobal
    readonly #isGlobalGroundOrGlobalInSm3dw


    readonly #isInSuperMarioMaker1
    readonly #isInSuperMarioMakerFor3DS
    readonly #isInSuperMarioMaker2

    readonly #isInSuperMarioBrosStyle
    readonly #isInSuperMarioBros3Style
    readonly #isInSuperMarioWorldStyle
    readonly #isInNewSuperMarioBrosUStyle
    readonly #isInSuperMario3DWorldStyle

    readonly #isInGroundTheme
    readonly #isInUndergroundTheme
    readonly #isInUnderwaterTheme
    readonly #isInDesertTheme
    readonly #isInSnowTheme
    readonly #isInSkyTheme
    readonly #isInForestTheme
    readonly #isInGhostHouseTheme
    readonly #isInAirshipTheme
    readonly #isInCastleTheme

    readonly #isInDayTime
    readonly #isInNightTime


    readonly #editorLimitInSuperMarioMaker1And3DS
    readonly #editorLimitInSuperMarioMaker2
    readonly #isUnknownInEditorLimitInSuperMarioMaker2

    readonly #isInGeneralLimit
    readonly #isInGeneralLimitComment

    readonly #isInGlobalGeneralLimit
    readonly #isInGlobalGeneralLimitComment

    readonly #isInPowerUpLimit

    readonly #isInProjectileLimit
    readonly #isInProjectileLimitComment

    readonly #isInRenderedObjectLimit
    readonly #isInRenderedObjectLimitComment

    readonly #isInCollectedCoinLimit

    readonly #otherLimit
    readonly #otherLimitComment
    readonly #isUnknownInOtherLimit


    readonly #instruments
    readonly #canMakeASoundOutOfAMusicBlock
    readonly #canMakeASoundOutOfAMusicBlockComment


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


    #gameMap?: GameMap<boolean, Entity>
    #gameStyleMap?: GameStyleMap<Entity>
    #themeMap?: ThemeMap<Entity>
    #timeMap?: TimeMap<Entity>
    #limitMap?: LimitMapHolder<Entity>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(
        name: Name<string>, category: EntityCategory,

        hasAMushroomVariant: boolean,
        canBeInAParachute: boolean, canBeInAParachuteComment: NullOrString<LCL_Play>,
        canHaveWings: boolean, canHaveWingsComment: NullOrString<LCL_Play>,

        canContainOrSpawnAKey: boolean,
        isAffectDirectlyByAnOnOffState: boolean, isAffectDirectlyByAnOnOffStateComment: NullOrString<OnlySomeVariants>,
        canSpawnOutOfAPipe: boolean,
        canBePutOnASwingingClaw: boolean,
        canBeThrownByALakitu: BooleanOrUnknownCharacter,
        canBePutInALakituCloud: BooleanOrUnknownCharacter,
        canBePutInAClownCar: boolean,
        canBeFiredOutOfABulletLauncher: boolean, canComeOutOfABlock: boolean, canBePutInATree: boolean,

        canBeStacked: boolean,
        isGlobalGroundOrGlobal: boolean, isGlobalGroundOrGlobalInSm3dw: boolean,

        isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean, isInSuperMarioMaker2: boolean,
        isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: BooleanOrNotApplicable,
        isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: BooleanOrNotApplicable, isInSnowTheme: BooleanOrNotApplicable, isInSkyTheme: BooleanOrNotApplicable, isInForestTheme: BooleanOrNotApplicable, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,
        isInDayTime: boolean, isInNightTime: BooleanOrNotApplicable,

        editorLimitInSuperMarioMaker1And3DS: NullOr<| NotApplicable | Limits>, editorLimitInSuperMarioMaker2: NullOr<| NotApplicable | Limits>, isUnknownInEditorLimitInSuperMarioMaker2: boolean,
        isInGeneralLimit: BooleanOrNotApplicable, isInGeneralLimitComment: NullOrString<PossibleGeneralLimitComment>,
        isInGlobalGeneralLimit: BooleanOrNotApplicable, isInGlobalGeneralLimitComment: NullOrString<PossibleGeneralGlobalLimitComment>,
        isInPowerUpLimit: BooleanOrNotApplicable,
        isInProjectileLimit: BooleanOrNotApplicable, isInProjectileLimitComment: NullOrString<PossibleProjectileLimitComment>,
        isInRenderedObjectLimit: BooleanOrNotApplicable, isInRenderedObjectLimitComment: NullOrString<PossibleRenderedObjectLimitTypeComment>,
        isInCollectedCoinLimit: BooleanOrNotApplicable,
        otherLimit: NullOr<| NotApplicable | Limits>, otherLimitComment: NullOrString<PossibleOtherLimitComment>, isUnknownInOtherLimit: boolean,

        instruments: Lazy<Array<Instrument>>, canMakeASoundOutOfAMusicBlock: boolean, canMakeASoundOutOfAMusicBlockComment: NullOrString<PossibleCanMakeASoundOutOfAMusicBlock_Comment>,

        referencesInSuperMarioBrosStyle: Lazy<PossibleOtherEntities>, referencesInSuperMarioBros3Style: Lazy<PossibleOtherEntities>, referencesInSuperMarioWorldStyle: Lazy<PossibleOtherEntities>, referencesInNewSuperMarioBrosUStyle: Lazy<PossibleOtherEntities>, referencesInSuperMario3DWorldStyle: Lazy<PossibleOtherEntities>,
        referencesInGroundTheme: Lazy<PossibleOtherEntities>, referencesInUndergroundTheme: Lazy<PossibleOtherEntities>, referencesInUnderwaterTheme: Lazy<PossibleOtherEntities>, referencesInDesertTheme: Lazy<PossibleOtherEntities>, referencesInSnowTheme: Lazy<PossibleOtherEntities>, referencesInSkyTheme: Lazy<PossibleOtherEntities>, referencesInForestTheme: Lazy<PossibleOtherEntities>, referencesInGhostHouseTheme: Lazy<PossibleOtherEntities>, referencesInAirshipTheme: Lazy<PossibleOtherEntities>, referencesInCastleTheme: Lazy<PossibleOtherEntities>,
        referencesInDayTime: Lazy<PossibleOtherEntities>, referencesInNightTime: Lazy<PossibleOtherEntities>,
        everyGameStyleReferences: Lazy<Array<Entity>>, everyThemeReferences: Lazy<Array<Entity>>, everyTimeReferences: Lazy<Array<Entity>>, everyReferences: Lazy<Array<Entity>>,
    ) {
        super(name, lazyOf(category,),)
        this.#hasAMushroomVariant = hasAMushroomVariant

        this.#canBeInAParachute = canBeInAParachute
        this.#canBeInAParachuteComment = canBeInAParachuteComment

        this.#canHaveWings = canHaveWings
        this.#canHaveWingsComment = canHaveWingsComment

        this.#canContainOrSpawnAKey = canContainOrSpawnAKey

        this.#isAffectDirectlyByAnOnOffState = isAffectDirectlyByAnOnOffState
        this.#isAffectDirectlyByAnOnOffStateComment = isAffectDirectlyByAnOnOffStateComment

        this.#canSpawnOutOfAPipe = canSpawnOutOfAPipe
        this.#canBePutOnASwingingClaw = canBePutOnASwingingClaw
        this.#canBeThrownByALakitu = canBeThrownByALakitu
        this.#canBePutInALakituCloud = canBePutInALakituCloud
        this.#canBePutInAClownCar = canBePutInAClownCar
        this.#canBeFiredOutOfABulletLauncher = canBeFiredOutOfABulletLauncher
        this.#canComeOutOfABlock = canComeOutOfABlock
        this.#canBePutInATree = canBePutInATree

        this.#canBeStacked = canBeStacked

        this.#isGlobalGroundOrGlobal = isGlobalGroundOrGlobal
        this.#isGlobalGroundOrGlobalInSm3dw = isGlobalGroundOrGlobalInSm3dw


        this.#isInSuperMarioMaker1 = isInSuperMarioMaker1
        this.#isInSuperMarioMakerFor3DS = isInSuperMarioMakerFor3DS
        this.#isInSuperMarioMaker2 = isInSuperMarioMaker2

        this.#isInSuperMarioBrosStyle = isInSuperMarioBrosStyle
        this.#isInSuperMarioBros3Style = isInSuperMarioBros3Style
        this.#isInSuperMarioWorldStyle = isInSuperMarioWorldStyle
        this.#isInNewSuperMarioBrosUStyle = isInNewSuperMarioBrosUStyle
        this.#isInSuperMario3DWorldStyle = isInSuperMario3DWorldStyle

        this.#isInGroundTheme = isInGroundTheme
        this.#isInUndergroundTheme = isInUndergroundTheme
        this.#isInUnderwaterTheme = isInUnderwaterTheme
        this.#isInDesertTheme = isInDesertTheme
        this.#isInSnowTheme = isInSnowTheme
        this.#isInSkyTheme = isInSkyTheme
        this.#isInForestTheme = isInForestTheme
        this.#isInGhostHouseTheme = isInGhostHouseTheme
        this.#isInAirshipTheme = isInAirshipTheme
        this.#isInCastleTheme = isInCastleTheme

        this.#isInDayTime = isInDayTime
        this.#isInNightTime = isInNightTime


        this.#editorLimitInSuperMarioMaker1And3DS = editorLimitInSuperMarioMaker1And3DS
        this.#editorLimitInSuperMarioMaker2 = editorLimitInSuperMarioMaker2
        this.#isUnknownInEditorLimitInSuperMarioMaker2 = isUnknownInEditorLimitInSuperMarioMaker2

        this.#isInGeneralLimit = isInGeneralLimit
        this.#isInGeneralLimitComment = isInGeneralLimitComment

        this.#isInGlobalGeneralLimit = isInGlobalGeneralLimit
        this.#isInGlobalGeneralLimitComment = isInGlobalGeneralLimitComment

        this.#isInPowerUpLimit = isInPowerUpLimit

        this.#isInProjectileLimit = isInProjectileLimit
        this.#isInProjectileLimitComment = isInProjectileLimitComment

        this.#isInRenderedObjectLimit = isInRenderedObjectLimit
        this.#isInRenderedObjectLimitComment = isInRenderedObjectLimitComment

        this.#isInCollectedCoinLimit = isInCollectedCoinLimit

        this.#otherLimit = otherLimit
        this.#otherLimitComment = otherLimitComment
        this.#isUnknownInOtherLimit = isUnknownInOtherLimit


        this.#instruments = instruments
        this.#canMakeASoundOutOfAMusicBlock = canMakeASoundOutOfAMusicBlock
        this.#canMakeASoundOutOfAMusicBlockComment = canMakeASoundOutOfAMusicBlockComment


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

    //region -------------------- Basic --------------------

    public get hasAMushroomVariant() {      return this.#hasAMushroomVariant }
    public get canBeInAParachute() {        return this.#canBeInAParachute }
    public get canBeInAParachuteComment() { return this.#canBeInAParachuteComment }
    public get canHaveWings() {             return this.#canHaveWings }
    public get canHaveWingsComment() {      return this.#canHaveWingsComment }

    //endregion -------------------- Basic --------------------
    //region -------------------- Directly affected --------------------

    public get canContainOrSpawnAKey() {                 return this.#canContainOrSpawnAKey }

    public get isAffectDirectlyByAnOnOffState() {        return this.#isAffectDirectlyByAnOnOffState }
    public get isAffectDirectlyByAnOnOffStateComment() { return this.#isAffectDirectlyByAnOnOffStateComment }

    public get canSpawnOutOfAPipe() {                    return this.#canSpawnOutOfAPipe }
    public get canBePutOnASwingingClaw() {               return this.#canBePutOnASwingingClaw }
    public get canBeThrownByALakitu() {                  return this.#canBeThrownByALakitu }
    public get canBePutInALakituCloud() {                return this.#canBePutInALakituCloud }
    public get canBePutInAClownCar() {                   return this.#canBePutInAClownCar }
    public get canBeFiredOutOfABulletLauncher() {        return this.#canBeFiredOutOfABulletLauncher }
    public get canComeOutOfABlock() {                    return this.#canComeOutOfABlock }
    public get canBePutInATree() {                       return this.#canBePutInATree }

    //endregion -------------------- Directly affected --------------------
    //region -------------------- Indirect --------------------

    public get canBeStacked() {                  return this.#canBeStacked }

    public get isGlobalGroundOrGlobal() {        return this.#isGlobalGroundOrGlobal }
    public get isGlobalGroundOrGlobalInSm3dw() { return this.#isGlobalGroundOrGlobalInSm3dw }

    //endregion -------------------- Indirect --------------------
    //region -------------------- Game --------------------

    public get isInSuperMarioMaker1() {      return this.#isInSuperMarioMaker1 }
    public get isInSuperMarioMakerFor3DS() { return this.#isInSuperMarioMakerFor3DS }
    public get isInSuperMarioMaker2() {      return this.#isInSuperMarioMaker2 }

    //endregion -------------------- Game --------------------
    //region -------------------- Game style --------------------

    public get isInSuperMarioBrosStyle() {     return this.#isInSuperMarioBrosStyle }
    public get isInSuperMarioBros3Style() {    return this.#isInSuperMarioBros3Style }
    public get isInSuperMarioWorldStyle() {    return this.#isInSuperMarioWorldStyle }
    public get isInNewSuperMarioBrosUStyle() { return this.#isInNewSuperMarioBrosUStyle }
    public get isInSuperMario3DWorldStyle() {  return this.#isInSuperMario3DWorldStyle }

    //endregion -------------------- Game style --------------------
    //region -------------------- Theme --------------------

    public get isInGroundTheme() {      return this.#isInGroundTheme }
    public get isInUndergroundTheme() { return this.#isInUndergroundTheme }
    public get isInUnderwaterTheme() {  return this.#isInUnderwaterTheme }
    public get isInDesertTheme() {      return this.#isInDesertTheme }
    public get isInSnowTheme() {        return this.#isInSnowTheme }
    public get isInSkyTheme() {         return this.#isInSkyTheme }
    public get isInForestTheme() {      return this.#isInForestTheme }
    public get isInGhostHouseTheme() {  return this.#isInGhostHouseTheme }
    public get isInAirshipTheme() {     return this.#isInAirshipTheme }
    public get isInCastleTheme() {      return this.#isInCastleTheme }

    //endregion -------------------- Theme --------------------
    //region -------------------- Time --------------------

    public get isInDayTheme() {   return this.#isInDayTime }
    public get isInNightTheme() { return this.#isInNightTime }

    //endregion -------------------- Time --------------------
    //region -------------------- Limit --------------------

    public get editorLimit_smm1And3ds() {     return this.#editorLimitInSuperMarioMaker1And3DS }
    public get editorLimit_smm2() {           return this.#editorLimitInSuperMarioMaker2 }
    public get isUnknown_editorLimit_smm2() { return this.#isUnknownInEditorLimitInSuperMarioMaker2 }

    public get isInGeneralLimit() {        return this.#isInGeneralLimit }
    public get isInGeneralLimitComment() { return this.#isInGeneralLimitComment }

    public get isInGlobalGeneralLimit() {        return this.#isInGlobalGeneralLimit }
    public get isInGlobalGeneralLimitComment() { return this.#isInGlobalGeneralLimitComment }

    public get isInPowerUpLimit() { return this.#isInPowerUpLimit }

    public get isInProjectileLimit() {        return this.#isInProjectileLimit }
    public get isInProjectileLimitComment() { return this.#isInProjectileLimitComment }

    public get isInRenderedObjectLimit() {        return this.#isInRenderedObjectLimit }
    public get isInRenderedObjectLimitComment() { return this.#isInRenderedObjectLimitComment }

    public get isInCollectedCoinLimit() { return this.#isInCollectedCoinLimit }

    public get otherLimit() {           return this.#otherLimit }
    public get otherLimitComment() {    return this.#otherLimitComment }
    public get isUnknown_otherLimit() { return this.#isUnknownInOtherLimit }

    //endregion -------------------- Limit --------------------
    //region -------------------- Instrument --------------------

    public get instruments() {                          return this.#instruments.value }
    public get canMakeASoundOutOfAMusicBlock() {        return this.#canMakeASoundOutOfAMusicBlock }
    public get canMakeASoundOutOfAMusicBlockComment() { return this.#canMakeASoundOutOfAMusicBlockComment }

    //endregion -------------------- Instrument --------------------
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


    public getReferenceFrom(theme: Themes,): PossibleOtherEntities
    public getReferenceFrom(time: Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities
    public getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,) {
        return gameStyleOrThemeOrTime.getReference(this,)
    }

    public get everyGameStyleReferences() { return this.#everyGameStyleReferences.value }
    public get everyThemeReferences() {     return this.#everyThemeReferences.value }
    public get everyTimeReferences() {      return this.#everyTimeReferences.value }
    public get everyReferences() {          return this.#everyReferences.value }

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
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

}
