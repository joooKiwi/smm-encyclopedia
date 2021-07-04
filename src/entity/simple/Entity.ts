import {EntityReferences} from '../properties/EntityReferences';
import {EntityCategory}   from '../category/EntityCategory';
import {Name}             from '../../lang/name/Name';
import {Property}         from '../properties/Property';

export interface Entity
    extends Name, Property, EntityReferences {

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

    get propertyContainer(): Property

    //endregion -------------------- Properties --------------------
    //region -------------------- References properties --------------------

    get referencesContainer(): EntityReferences


    get referenceInSuperMarioBrosStyle(): this['referencesContainer']['referenceInSuperMarioBrosStyle']

    get referenceInSuperMarioBros3Style(): this['referencesContainer']['referenceInSuperMarioBros3Style']

    get referenceInSuperMarioWorldStyle(): this ['referencesContainer']['referenceInSuperMarioWorldStyle']

    get referenceInNewSuperMarioBrosUStyle(): this['referencesContainer']['referenceInNewSuperMarioBrosUStyle']

    get referenceInSuperMario3DWorldStyle(): this ['referencesContainer']['referenceInSuperMario3DWorldStyle']


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


    get referenceInDayTheme(): this['referencesContainer']['referenceInDayTheme']

    get referenceInNightTheme(): this['referencesContainer']['referenceInNightTheme']


    get everyReferences(): this['referencesContainer']['everyReferences']

    //endregion -------------------- References properties --------------------

}
