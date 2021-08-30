import type {AbstractExclusiveSMM2Property, ExclusiveSMM1Property, ExclusiveSMM2Property, ExclusiveSMM2PropertyInSM3DW, Property} from '../properties/Property';
import type {EntityReferences}                                                                                                      from '../properties/EntityReferences';
import type {EntityCategory}                                                                                                        from '../category/EntityCategory';
import type {GameProperty}                                                                                                          from '../properties/GameProperty';
import type {GameStyleProperty}                                                                                                   from '../properties/GameStyleProperty';
import type {ThemeProperty}                                                                                                       from '../properties/ThemeProperty';
import type {TimeProperty}                                                                                                          from '../properties/TimeProperty';
import type {Name}                                                                                                                  from '../../lang/name/Name';

export interface Entity<PROPERTY extends Property = Property, >
    extends Name,
        Property<PROPERTY['gameContainer'], PROPERTY['gameStyleContainer'], PROPERTY['themeContainer'], PROPERTY['timeContainer']>,
        GameProperty<PROPERTY['isInSuperMarioMaker1'], PROPERTY['isInSuperMarioMaker2']>,
        GameStyleProperty<PROPERTY['isInSuperMarioBrosStyle'], PROPERTY['isInSuperMarioBros3Style'], PROPERTY['isInSuperMarioWorldStyle'], PROPERTY['isInNewSuperMarioBrosUStyle'], PROPERTY['isInSuperMario3DWorldStyle']>,
        ThemeProperty<PROPERTY['isInGroundTheme'], PROPERTY['isInUndergroundTheme'], PROPERTY['isInUnderwaterTheme'], PROPERTY['isInDesertTheme'], PROPERTY['isInSnowTheme'], PROPERTY['isInSkyTheme'], PROPERTY['isInForestTheme'], PROPERTY['isInGhostHouseTheme'], PROPERTY['isInAirshipTheme'], PROPERTY['isInCastleTheme']>,
        TimeProperty<PROPERTY['isInDayTheme'], PROPERTY['isInNightTheme']>,
        EntityReferences {

    //region -------------------- Name properties --------------------

    get name(): Name


    get languageValue(): this['name']['languageValue']


    get originalEnglish(): this['name']['originalEnglish']

    get english(): this['name']['english']

    get americanEnglish(): this['name']['americanEnglish']

    get europeanEnglish(): this['name']['europeanEnglish']


    get originalFrench(): this['name']['originalFrench']

    get french(): this['name']['french']

    get canadianFrench(): this['name']['canadianFrench']

    get europeanFrench(): this['name']['europeanFrench']


    get german(): this['name']['german']


    get originalSpanish(): this['name']['originalSpanish']

    get spanish(): this['name']['spanish']

    get americanSpanish(): this['name']['americanSpanish']

    get europeanSpanish(): this['name']['europeanSpanish']


    get italian(): this['name']['italian']


    get dutch(): this['name']['dutch']


    get originalPortuguese(): this['name']['originalPortuguese']

    get portuguese(): this['name']['portuguese']

    get americanPortuguese(): this['name']['americanPortuguese']

    get europeanPortuguese(): this['name']['europeanPortuguese']


    get russian(): this['name']['russian']


    get japanese(): this['name']['japanese']


    get originalChinese(): this['name']['originalChinese']

    get chinese(): this['name']['chinese']

    get simplifiedChinese(): this['name']['simplifiedChinese']

    get traditionalChinese(): this['name']['traditionalChinese']


    get korean(): this['name']['korean']


    get individualValues(): this['name']['individualValues']

    //endregion -------------------- Name properties --------------------
    //region -------------------- Category properties --------------------

    get category(): EntityCategory


    get categoryName(): this['category']['name']


    get categoryLanguageValue(): this['categoryName']['languageValue']


    get categoryOriginalEnglish(): this['categoryName']['originalEnglish']

    get categoryEnglish(): this['categoryName']['english']

    get categoryAmericanEnglish(): this['categoryName']['americanEnglish']

    get categoryEuropeanEnglish(): this['categoryName']['europeanEnglish']


    get categoryOriginalFrench(): this['categoryName']['originalFrench']

    get categoryFrench(): this['categoryName']['french']

    get categoryCanadianFrench(): this['categoryName']['canadianFrench']

    get categoryEuropeanFrench(): this['categoryName']['europeanFrench']


    get categoryGerman(): this['categoryName']['german']


    get categoryOriginalSpanish(): this['categoryName']['originalSpanish']

    get categorySpanish(): this['categoryName']['spanish']

    get categoryAmericanSpanish(): this['categoryName']['americanSpanish']

    get categoryEuropeanSpanish(): this['categoryName']['europeanSpanish']


    get categoryItalian(): this['categoryName']['italian']


    get categoryDutch(): this['categoryName']['dutch']


    get categoryOriginalPortuguese(): this['categoryName']['originalPortuguese']

    get categoryPortuguese(): this['categoryName']['portuguese']

    get categoryAmericanPortuguese(): this['categoryName']['americanPortuguese']

    get categoryEuropeanPortuguese(): this['categoryName']['europeanPortuguese']


    get categoryRussian(): this['categoryName']['russian']


    get categoryJapanese(): this['categoryName']['japanese']


    get categoryOriginalChinese(): this['categoryName']['originalChinese']

    get categoryChinese(): this['categoryName']['chinese']

    get categorySimplifiedChinese(): this['categoryName']['simplifiedChinese']

    get categoryTraditionalChinese(): this['categoryName']['traditionalChinese']


    get categoryKorean(): this['categoryName']['korean']

    //endregion -------------------- Category properties --------------------
    //region -------------------- Properties --------------------

    get propertyContainer(): PROPERTY

    //region -------------------- Game properties --------------------

    get gameContainer(): this['propertyContainer']['gameContainer']

    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

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

    get editorLimit(): this['limitContainer']['editorLimit']

    get isEditorLimitKnown(): this['limitContainer']['isEditorLimitKnown']

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

    get isInPowerUpLimitWhilePlayingComment(): this['limitContainer']['isInPowerUpLimitWhilePlayingComment']

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    get isInProjectileLimitWhilePlayingContainer(): this['limitContainer']['isInProjectileLimitWhilePlayingContainer']

    get isInProjectileLimitWhilePlaying(): this['limitContainer']['isInProjectileLimitWhilePlaying']

    get isInProjectileLimitWhilePlayingKnown(): this['limitContainer']['isInProjectileLimitWhilePlayingKnown']

    get isInProjectileLimitWhilePlayingComment(): this['limitContainer']['isInProjectileLimitWhilePlayingComment']

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    get customLimitWhilePlayingContainer(): this['limitContainer']['customLimitWhilePlayingContainer']

    get customLimitWhilePlaying(): this['limitContainer']['customLimitWhilePlaying']

    get isCustomLimitWhilePlayingKnown(): this['limitContainer']['isCustomLimitWhilePlayingKnown']

    get customLimitWhilePlayingComment(): this['limitContainer']['customLimitWhilePlayingComment']

    //endregion -------------------- Custom limit --------------------

    //endregion -------------------- Limit properties --------------------

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

export type ExclusiveSMM1Entity = Entity<ExclusiveSMM1Property> & ExclusiveSMM1Property;
export type AbstractExclusiveSMM2Entity<PROPERTY extends AbstractExclusiveSMM2Property = AbstractExclusiveSMM2Property, > = Entity<PROPERTY> & AbstractExclusiveSMM2Property;
export type ExclusiveSM3DWEntity = AbstractExclusiveSMM2Entity<ExclusiveSMM2PropertyInSM3DW> & ExclusiveSMM2PropertyInSM3DW;
export type ExclusiveSMM2Entity = AbstractExclusiveSMM2Entity<ExclusiveSMM2Property> & ExclusiveSMM2Property;
