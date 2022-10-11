import type {AbstractExclusiveSMM2Property, ExclusiveSMM1Property, ExclusiveSMM2Property, ExclusiveSMM2PropertyInSM3DW, Property} from './properties/Property'
import type {EntityReferences}                                                                                                    from './properties/EntityReferences'
import type {EntityCategory}                                                                                                      from '../entityCategory/EntityCategory'
import type {EmptyEntityCategory}                                                                                                 from '../entityCategory/EmptyEntityCategory'
import type {GameProperty}                                                                                                        from './properties/game/GameProperty'
import type {GameStyleProperty}                                                                                                   from './properties/gameStyle/GameStyleProperty'
import type {NameTrait}                                                                                                           from '../../lang/name/NameTrait'
import type {NameTraitFromACategory}                                                                                              from '../../lang/name/NameTraitFromACategory'
import type {ThemeProperty}                                                                                                       from './properties/theme/ThemeProperty'
import type {TimeProperty}                                                                                                        from './properties/time/TimeProperty'

export interface Entity<CATEGORY extends EntityCategory = EntityCategory, PROPERTY extends Property = Property, >
    extends NameTrait<string>,
        NameTraitFromACategory<string, CATEGORY>,
        Property<PROPERTY['gameContainer'], PROPERTY['gameStyleContainer'], PROPERTY['themeContainer'], PROPERTY['timeContainer']>,
        GameProperty<PROPERTY['isInSuperMarioMaker1'], PROPERTY['isInSuperMarioMakerFor3DS'], PROPERTY['isInSuperMarioMaker2']>,
        GameStyleProperty<PROPERTY['isInSuperMarioBrosStyle'], PROPERTY['isInSuperMarioBros3Style'], PROPERTY['isInSuperMarioWorldStyle'], PROPERTY['isInNewSuperMarioBrosUStyle'], PROPERTY['isInSuperMario3DWorldStyle']>,
        ThemeProperty<PROPERTY['isInGroundTheme'], PROPERTY['isInUndergroundTheme'], PROPERTY['isInUnderwaterTheme'], PROPERTY['isInDesertTheme'], PROPERTY['isInSnowTheme'], PROPERTY['isInSkyTheme'], PROPERTY['isInForestTheme'], PROPERTY['isInGhostHouseTheme'], PROPERTY['isInAirshipTheme'], PROPERTY['isInCastleTheme']>,
        TimeProperty<PROPERTY['isInDayTheme'], PROPERTY['isInNightTheme']>,
        EntityReferences {

    //region -------------------- Properties --------------------

    get propertyContainer(): PROPERTY

    //region -------------------- Game properties --------------------

    get gameContainer(): this['propertyContainer']['gameContainer']

    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

    get isInSuperMarioMakerFor3DS(): this['gameContainer']['isInSuperMarioMakerFor3DS']

    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    get gameStyleContainer(): this['propertyContainer']['gameStyleContainer']

    get isInSuperMarioBrosStyle(): this['gameStyleContainer']['isInSuperMarioBrosStyle']

    get isInSuperMarioBros3Style(): this['gameStyleContainer']['isInSuperMarioBros3Style']

    get isInSuperMarioWorldStyle(): this['gameStyleContainer']['isInSuperMarioWorldStyle']

    get isInNewSuperMarioBrosUStyle(): this['gameStyleContainer']['isInNewSuperMarioBrosUStyle']

    get isInSuperMario3DWorldStyle(): this['gameStyleContainer']['isInSuperMario3DWorldStyle']

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    get themeContainer(): this['propertyContainer']['themeContainer']

    get isInGroundTheme(): this['themeContainer']['isInGroundTheme']

    get isInUndergroundTheme(): this['themeContainer']['isInUndergroundTheme']

    get isInUnderwaterTheme(): this['themeContainer']['isInUnderwaterTheme']

    get isInDesertTheme(): this['themeContainer']['isInDesertTheme']

    get isInSnowTheme(): this['themeContainer']['isInSnowTheme']

    get isInSkyTheme(): this['themeContainer']['isInSkyTheme']

    get isInForestTheme(): this['themeContainer']['isInForestTheme']

    get isInGhostHouseTheme(): this['themeContainer']['isInGhostHouseTheme']

    get isInAirshipTheme(): this['themeContainer']['isInAirshipTheme']

    get isInCastleTheme(): this['themeContainer']['isInCastleTheme']

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    get timeContainer(): this['propertyContainer']['timeContainer']

    get isInDayTheme(): this['timeContainer']['isInDayTheme']

    get isInNightTheme(): this['timeContainer']['isInNightTheme']

    //endregion -------------------- Time properties --------------------
    //region -------------------- Limit properties --------------------

    get limitContainer(): this['propertyContainer']['limitContainer']

    //region -------------------- Editor limit --------------------

    get editorLimitContainer(): this['limitContainer']['editorLimitContainer']

    get editorLimit_smm1And3ds(): this['limitContainer']['editorLimit_smm1And3ds']

    get editorLimit_smm2(): this['limitContainer']['editorLimit_smm2']

    get isUnknown_editorLimit_smm2(): this['limitContainer']['isUnknown_editorLimit_smm2']

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    get isInGeneralLimitWhilePlayingContainer(): this['limitContainer']['isInGeneralLimitWhilePlayingContainer']

    get isInGeneralLimitWhilePlaying(): this['limitContainer']['isInGeneralLimitWhilePlaying']

    get isInGeneralLimitWhilePlayingComment(): this['limitContainer']['isInGeneralLimitWhilePlayingComment']

    //region -------------------- Global general limit --------------------

    get isInGlobalGeneralLimitWhilePlayingContainer(): this['limitContainer']['isInGlobalGeneralLimitWhilePlayingContainer']

    get isInGlobalGeneralLimitWhilePlaying(): this['limitContainer']['isInGlobalGeneralLimitWhilePlaying']

    get isInGlobalGeneralLimitWhilePlayingComment(): this['limitContainer']['isInGlobalGeneralLimitWhilePlayingComment']

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    get isInPowerUpLimitWhilePlayingContainer(): this['limitContainer']['isInPowerUpLimitWhilePlayingContainer']

    get isInPowerUpLimitWhilePlaying(): this['limitContainer']['isInPowerUpLimitWhilePlaying']

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitWhilePlayingContainer(): this['limitContainer']['isInProjectileLimitWhilePlayingContainer']

    get isInProjectileLimitWhilePlaying(): this['limitContainer']['isInProjectileLimitWhilePlaying']

    get isInProjectileLimitWhilePlayingComment(): this['limitContainer']['isInProjectileLimitWhilePlayingComment']

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    get otherLimitWhilePlayingContainer(): this['limitContainer']['otherLimitWhilePlayingContainer']

    get otherLimitWhilePlaying(): this['limitContainer']['otherLimitWhilePlaying']

    get otherLimitWhilePlayingComment(): this['limitContainer']['otherLimitWhilePlayingComment']

    //endregion -------------------- Custom limit --------------------

    //endregion -------------------- Limit properties --------------------
    //region -------------------- Instrument properties --------------------

    get instrumentContainer(): this['propertyContainer']['instrumentContainer']


    get instruments(): this['instrumentContainer']['instruments']

    //region -------------------- Can make a sound out of a music block --------------------

    get canMakeASoundOutOfAMusicBlockContainer(): this['instrumentContainer']['canMakeASoundOutOfAMusicBlockContainer']

    get canMakeASoundOutOfAMusicBlock(): this['instrumentContainer']['canMakeASoundOutOfAMusicBlock']

    get canMakeASoundOutOfAMusicBlockComment(): this['instrumentContainer']['canMakeASoundOutOfAMusicBlockComment']

    //endregion -------------------- Can make a sound out of a music block --------------------

    //endregion -------------------- Instrument properties --------------------

    //endregion -------------------- Properties --------------------
    //region -------------------- References properties --------------------

    get referencesContainer(): EntityReferences

    //region -------------------- Game style references properties --------------------

    get referenceInSuperMarioBrosStyle(): this['referencesContainer']['referenceInSuperMarioBrosStyle']

    get referenceInSuperMarioBros3Style(): this['referencesContainer']['referenceInSuperMarioBros3Style']

    get referenceInSuperMarioWorldStyle(): this ['referencesContainer']['referenceInSuperMarioWorldStyle']

    get referenceInNewSuperMarioBrosUStyle(): this['referencesContainer']['referenceInNewSuperMarioBrosUStyle']

    get referenceInSuperMario3DWorldStyle(): this ['referencesContainer']['referenceInSuperMario3DWorldStyle']

    //endregion -------------------- Game style references properties --------------------
    //region -------------------- Theme references properties --------------------

    get referenceInGroundTheme(): this['referencesContainer']['referenceInGroundTheme']

    get referenceInUndergroundTheme(): this['referencesContainer']['referenceInUndergroundTheme']

    get referenceInUnderwaterTheme(): this['referencesContainer']['referenceInUnderwaterTheme']

    get referenceInDesertTheme(): this['referencesContainer']['referenceInDesertTheme']

    get referenceInSnowTheme(): this['referencesContainer']['referenceInSnowTheme']

    get referenceInSkyTheme(): this['referencesContainer']['referenceInSkyTheme']

    get referenceInForestTheme(): this['referencesContainer']['referenceInForestTheme']

    get referenceInGhostHouseTheme(): this['referencesContainer']['referenceInGhostHouseTheme']

    get referenceInAirshipTheme(): this['referencesContainer']['referenceInAirshipTheme']

    get referenceInCastleTheme(): this['referencesContainer']['referenceInCastleTheme']

    //endregion -------------------- Theme references properties --------------------
    //region -------------------- Time references properties --------------------

    get referenceInDayTheme(): this['referencesContainer']['referenceInDayTheme']

    get referenceInNightTheme(): this['referencesContainer']['referenceInNightTheme']

    //endregion -------------------- Time references properties --------------------

    get everyReferences(): this['referencesContainer']['everyReferences']

    //endregion -------------------- References properties --------------------

}

/**@deprecated*/export type ExclusiveSMM1Entity = Entity<EmptyEntityCategory, ExclusiveSMM1Property> & ExclusiveSMM1Property
/**@deprecated*/export type AbstractExclusiveSMM2Entity<CATEGORY extends EntityCategory = EntityCategory, PROPERTY extends AbstractExclusiveSMM2Property = AbstractExclusiveSMM2Property, > = Entity<CATEGORY, PROPERTY> & AbstractExclusiveSMM2Property
/**@deprecated*/export type ExclusiveSM3DWEntity<CATEGORY extends EntityCategory = EntityCategory, > = AbstractExclusiveSMM2Entity<CATEGORY, ExclusiveSMM2PropertyInSM3DW> & ExclusiveSMM2PropertyInSM3DW
/**@deprecated*/export type ExclusiveSMM2Entity<CATEGORY extends EntityCategory = EntityCategory, > = AbstractExclusiveSMM2Entity<CATEGORY, ExclusiveSMM2Property> & ExclusiveSMM2Property

export type PossibleOtherEntities = readonly [Entity,] | readonly [Entity, Entity,]
