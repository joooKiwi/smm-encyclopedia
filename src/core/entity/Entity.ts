import type {CollectionHolder}     from '@joookiwi/collection'
import type {NullOr, NullOrString} from '@joookiwi/type'

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
        GameStyleProperty,
        ThemeProperty,
        TimeProperty {

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
    readonly canBeFiredOutOfABillBlaster: boolean//TODO add amount in a bunch + maximum amount
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

    readonly canBeAffectedByATwister: boolean
    readonly canBeAffectedByATwisterWhenItIsWithAParachute: boolean
    readonly canBeAffectedByATwisterWhenInAFallingState: boolean

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

    readonly isInGeneralLimit: boolean
    readonly isInGeneralLimitComment: NullOrString<PossibleGeneralLimitComment>

    readonly isInGlobalGeneralLimit: boolean
    readonly isInGlobalGeneralLimitComment: NullOrString<PossibleGeneralGlobalLimitComment>

    readonly isInPowerUpLimit: boolean

    readonly isInProjectileLimit: boolean
    readonly isInProjectileLimitComment: NullOrString<PossibleProjectileLimitComment>

    readonly isInDynamicRenderedObjectLimit: boolean
    readonly isInDynamicRenderedObjectLimitComment: NullOrString<PossibleRenderedObjectLimitTypeComment>

    readonly isInCollectedLooseCoinLimit: boolean

    readonly otherLimit: NullOr<Limits>
    readonly otherLimitComment: NullOrString<PossibleOtherLimitComment>
    readonly isUnknown_otherLimit: boolean

    //endregion -------------------- Limit properties --------------------
    //region -------------------- Instrument properties --------------------

    readonly instruments: CollectionHolder<Instrument>

    readonly canMakeASoundOutOfAMusicBlock: boolean
    readonly canMakeASoundOutOfAMusicBlockComment: NullOrString<PossibleCanMakeASoundOutOfAMusicBlock_Comment>

    //endregion -------------------- Instrument properties --------------------
    //region -------------------- Reference properties --------------------

    readonly referencesInSuperMarioBrosStyle: CollectionHolder<Entity>
    readonly referencesInSuperMarioBros3Style: CollectionHolder<Entity>
    readonly referencesInSuperMarioWorldStyle: CollectionHolder<Entity>
    readonly referencesInNewSuperMarioBrosUStyle: CollectionHolder<Entity>
    readonly referencesInSuperMario3DWorldStyle: CollectionHolder<Entity>

    readonly referencesInGroundTheme: CollectionHolder<Entity>
    readonly referencesInUndergroundTheme: CollectionHolder<Entity>
    readonly referencesInUnderwaterTheme: CollectionHolder<Entity>
    readonly referencesInDesertTheme: CollectionHolder<Entity>
    readonly referencesInSnowTheme: CollectionHolder<Entity>
    readonly referencesInSkyTheme: CollectionHolder<Entity>
    readonly referencesInForestTheme: CollectionHolder<Entity>
    readonly referencesInGhostHouseTheme: CollectionHolder<Entity>
    readonly referencesInAirshipTheme: CollectionHolder<Entity>
    readonly referencesInCastleTheme: CollectionHolder<Entity>

    readonly referencesInDayTheme: CollectionHolder<Entity>
    readonly referencesInNightTheme: CollectionHolder<Entity>

    getReferencesFrom(gameStyle: GameStyles,): CollectionHolder<Entity>

    getReferencesFrom(theme: Themes,): CollectionHolder<Entity>

    getReferencesFrom(time: Times,): CollectionHolder<Entity>

    getReferencesFrom(gameStyleOrThemeOrTime: | GameStyles | Themes | Times,): CollectionHolder<Entity>


    readonly everyReferences: CollectionHolder<Entity>
    readonly everyGameStyleReferences: CollectionHolder<Entity>
    readonly everyThemeReferences: CollectionHolder<Entity>
    readonly everyTimeReferences: CollectionHolder<Entity>

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
