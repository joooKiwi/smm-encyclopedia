import type {Array, NullOr, NullOrString} from '@joookiwi/type'

import type {LCL_Play, OnlySomeVariants}                                                                                                                                        from 'core/entity/properties/loader.types'
import type {GameProperty}                                                                                                                                                      from 'core/entity/properties/game/GameProperty'
import type {GameStyleProperty}                                                                                                                                                 from 'core/entity/properties/gameStyle/GameStyleProperty'
import type {PossibleCanMakeASoundOutOfAMusicBlock_Comment}                                                                                                                     from 'core/entity/properties/instrument/loader.types'
import type {PossibleGeneralGlobalLimitComment, PossibleGeneralLimitComment, PossibleOtherLimitComment, PossibleProjectileLimitComment, PossibleRenderedObjectLimitTypeComment} from 'core/entity/properties/limit/loader.types'
import type {ThemeProperty}                                                                                                                                                     from 'core/entity/properties/theme/ThemeProperty'
import type {TimeProperty}                                                                                                                                                      from 'core/entity/properties/time/TimeProperty'
import type {EntityCategory}                                                                                                                                                    from 'core/entityCategory/EntityCategory'
import type {Instrument}                                                                                                                                                        from 'core/instrument/Instrument'
import type {Limits}                                                                                                                                                            from 'core/limit/Limits'
import type {NameTrait}                                                                                                                                                         from 'lang/name/NameTrait'
import type {NameTraitFromACategory}                                                                                                                                            from 'lang/name/NameTraitFromACategory'
import type {GameStyles}                                                                                                                                                        from 'core/gameStyle/GameStyles'
import type {Themes}                                                                                                                                                            from 'core/theme/Themes'
import type {Times}                                                                                                                                                             from 'core/time/Times'

export interface Entity
    extends NameTrait<string>, NameTraitFromACategory<string, EntityCategory>,
        GameProperty,
        GameStyleProperty<boolean, boolean, boolean, boolean, BooleanOrNotApplicable>,
        ThemeProperty<boolean, boolean, boolean, BooleanOrNotApplicable, BooleanOrNotApplicable, BooleanOrNotApplicable, BooleanOrNotApplicable>,
        TimeProperty<boolean, BooleanOrNotApplicable> {

    //region -------------------- Basic properties --------------------

    readonly hasAMushroomVariant: boolean

    readonly canBeInAParachute: boolean
    readonly canBeInAParachuteComment: NullOrString<LCL_Play>

    readonly canHaveWings: boolean
    readonly canHaveWingsComment: NullOrString<LCL_Play>

    //endregion -------------------- Basic properties --------------------
    //region -------------------- Directly affected properties --------------------

    readonly canContainOrSpawnAKey: boolean //TODO add Chain Chomp comment to tell that only the "Unchained" contain it. Only the head of the Pokey is affected

    readonly isAffectDirectlyByAnOnOffState: boolean
    readonly isAffectDirectlyByAnOnOffStateComment: NullOrString<OnlySomeVariants>

    // can be put on a Track (+ limit editor/in game)
    readonly canSpawnOutOfAPipe: boolean//TODO add amount in a bunch + maximum amount
    readonly canBePutOnASwingingClaw: boolean//TODO add when it has wing
    readonly canBeThrownByALakitu: BooleanOrUnknownCharacter
    readonly canBePutInALakituCloud: BooleanOrUnknownCharacter
    readonly canBePutInAClownCar: boolean
    readonly canBeFiredOutOfABulletLauncher: boolean//TODO add amount in a bunch + maximum amount
    readonly canComeOutOfABlock: boolean//TODO add maximum amount
    readonly canBePutInATree: boolean

    //endregion -------------------- Directly affected properties --------------------
    //region -------------------- Indirect properties --------------------

    // weight

    // light source emitted
    // light source emitted (in SMB)

    // can survive in the lava or poison
    // can ignite a Bob-omb
    // can be broken or killed by a Bob-omb
    // can be affected by a Twister

    // can go through walls
    // can go through walls (in SM3DW)

    readonly canBeStacked: boolean

    readonly isGlobalGroundOrGlobal: boolean
    readonly isGlobalGroundOrGlobalInSm3dw: boolean

    //endregion -------------------- Indirect properties --------------------
    //region -------------------- Limit properties --------------------

    readonly editorLimit_smm1And3ds: NullOr<| Limits | NotApplicable>
    readonly editorLimit_smm2: NullOr<| Limits | NotApplicable>
    readonly isUnknown_editorLimit_smm2: boolean

    readonly isInGeneralLimit: BooleanOrNotApplicable
    readonly isInGeneralLimitComment: NullOrString<PossibleGeneralLimitComment>

    readonly isInGlobalGeneralLimit: BooleanOrNotApplicable
    readonly isInGlobalGeneralLimitComment: NullOrString<PossibleGeneralGlobalLimitComment>

    readonly isInPowerUpLimit: NullOrBooleanOrNotApplicable

    readonly isInProjectileLimit: NullOrBooleanOrNotApplicable
    readonly isInProjectileLimitComment: NullOrString<PossibleProjectileLimitComment>

    readonly isInRenderedObjectLimit: NullOrBooleanOrNotApplicable
    readonly isInRenderedObjectLimitComment: NullOrString<PossibleRenderedObjectLimitTypeComment>

    readonly isInCollectedCoinLimit: NullOrBooleanOrNotApplicable

    readonly otherLimit: NullOr<| Limits | NotApplicable>
    readonly otherLimitComment: NullOrString<PossibleOtherLimitComment>
    readonly isUnknown_otherLimit: boolean

    //endregion -------------------- Limit properties --------------------
    //region -------------------- Instrument properties --------------------

    readonly instruments: Array<Instrument>

    readonly canMakeASoundOutOfAMusicBlock: boolean
    readonly canMakeASoundOutOfAMusicBlockComment: NullOrString<PossibleCanMakeASoundOutOfAMusicBlock_Comment>

    //endregion -------------------- Instrument properties --------------------
    //region -------------------- Reference properties --------------------

    readonly referenceInSuperMarioBrosStyle: PossibleOtherEntities
    readonly referenceInSuperMarioBros3Style: PossibleOtherEntities
    readonly referenceInSuperMarioWorldStyle: PossibleOtherEntities
    readonly referenceInNewSuperMarioBrosUStyle: PossibleOtherEntities
    readonly referenceInSuperMario3DWorldStyle: PossibleOtherEntities

    readonly referenceInGroundTheme: PossibleOtherEntities
    readonly referenceInUndergroundTheme: PossibleOtherEntities
    readonly referenceInUnderwaterTheme: PossibleOtherEntities
    readonly referenceInDesertTheme: PossibleOtherEntities
    readonly referenceInSnowTheme: PossibleOtherEntities
    readonly referenceInSkyTheme: PossibleOtherEntities
    readonly referenceInForestTheme: PossibleOtherEntities
    readonly referenceInGhostHouseTheme: PossibleOtherEntities
    readonly referenceInAirshipTheme: PossibleOtherEntities
    readonly referenceInCastleTheme: PossibleOtherEntities

    readonly referenceInDayTheme: PossibleOtherEntities
    readonly referenceInNightTheme: PossibleOtherEntities

    getReferenceFrom(gameStyle: GameStyles,): PossibleOtherEntities

    getReferenceFrom(theme: Themes,): PossibleOtherEntities

    getReferenceFrom(time: Times,): PossibleOtherEntities

    getReferenceFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): PossibleOtherEntities


    readonly everyReferences: Array<Entity>
    readonly everyGameStyleReferences: Array<Entity>
    readonly everyThemeReferences: Array<Entity>
    readonly everyTimeReferences: Array<Entity>

    //endregion -------------------- Reference properties --------------------

    //region -------------------- Conversion properties --------------------

    /**
     * Return a {@link Map} based on the enum {@link Limits}
     * with every value stored inside {@link LimitProperty this instance}
     * as a boolean.
     *
     * @note It contain every value of the {@link Limits}
     */
    toLimitMap(): ReadonlyMap<Limits, boolean>

    /**
     * Return a {@link Map} based on the enum {@link Limits},
     * but with only the <u>editor limit</u> as possible true value.
     *
     * @see toLimitMap
     */
    toEditorLimitMap(): ReadonlyMap<Limits, boolean>

    /**
     * Return a {@link Map} based on the enum {@link Limits},
     * but with only the <u>play limit</u> as possible true value.
     *
     * @see toLimitMap
     */
    toPlayLimitMap(): ReadonlyMap<Limits, boolean>

    //endregion -------------------- Conversion properties --------------------

}

export type PossibleOtherEntities = | EmptyArray | readonly [Entity,] | readonly [Entity, Entity,]
