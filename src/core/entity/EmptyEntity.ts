import type {Entity}                                      from 'core/entity/Entity'
import type {EmptyEntityCategory}                         from 'core/entityCategory/EmptyEntityCategory'
import type {ClassWithNullObjectPattern, EmptyEntityName} from 'util/ClassWithNullObjectPattern'

import {EmptyEntityReference}             from 'core/entity/properties/EmptyEntityReference'
import {EmptyIsInProperty}                from 'core/entity/properties/EmptyIsInProperty'
import {LAZY_EMPTY_ENTITY_CATEGORY}       from 'core/entityCategory/EmptyEntityCategory.lazy'
import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'
import {EmptyStringName}                  from 'lang/name/EmptyStringName'
import {EMPTY_MAP}                        from 'util/emptyVariables'

/**
 * An empty entity with the default values of nothing
 *
 * @note A value that is equivalent to nothing can be false, null and itself
 * @singleton
 */
export class EmptyEntity
    extends ClassContainingANameAndACategory<string, string, EmptyEntityCategory>
    implements Entity, ClassWithNullObjectPattern<EmptyEntityName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntity

    private constructor() {
        super(EmptyStringName.get, LAZY_EMPTY_ENTITY_CATEGORY,)
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Properties --------------------

    public readonly propertyContainer = EmptyIsInProperty.get

    //region -------------------- Game properties --------------------

    public readonly gameContainer = this.propertyContainer.gameContainer

    public readonly isInSuperMarioMaker1 = this.gameContainer.isInSuperMarioMaker1
    public readonly isInSuperMarioMakerFor3DS = this.gameContainer.isInSuperMarioMakerFor3DS
    public readonly isInSuperMarioMaker2 = this.gameContainer.isInSuperMarioMaker2

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    public readonly gameStyleContainer = this.propertyContainer.gameStyleContainer

    public readonly isInSuperMarioBrosStyle = this.gameStyleContainer.isInSuperMarioBrosStyle
    public readonly isInSuperMarioBros3Style = this.gameStyleContainer.isInSuperMarioBros3Style
    public readonly isInSuperMarioWorldStyle = this.gameStyleContainer.isInSuperMarioWorldStyle
    public readonly isInNewSuperMarioBrosUStyle = this.gameStyleContainer.isInNewSuperMarioBrosUStyle
    public readonly isInSuperMario3DWorldStyle = this.gameStyleContainer.isInSuperMario3DWorldStyle

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public readonly themeContainer = this.propertyContainer.themeContainer

    public readonly isInGroundTheme = this.themeContainer.isInGroundTheme
    public readonly isInUndergroundTheme = this.themeContainer.isInUndergroundTheme
    public readonly isInUnderwaterTheme = this.themeContainer.isInUnderwaterTheme
    public readonly isInDesertTheme = this.themeContainer.isInDesertTheme
    public readonly isInSnowTheme = this.themeContainer.isInSnowTheme
    public readonly isInSkyTheme = this.themeContainer.isInSkyTheme
    public readonly isInForestTheme = this.themeContainer.isInForestTheme
    public readonly isInGhostHouseTheme = this.themeContainer.isInGhostHouseTheme
    public readonly isInAirshipTheme = this.themeContainer.isInAirshipTheme
    public readonly isInCastleTheme = this.themeContainer.isInCastleTheme

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public readonly timeContainer = this.propertyContainer.timeContainer

    public readonly isInDayTheme = this.timeContainer.isInDayTheme
    public readonly isInNightTheme = this.timeContainer.isInNightTheme

    //endregion -------------------- Time properties --------------------
    //region -------------------- Limit properties --------------------

    public readonly limitContainer = this.propertyContainer.limitContainer

    public readonly editorLimitContainer = this.limitContainer.editorLimitContainer
    public readonly editorLimit_smm1And3ds = this.limitContainer.editorLimit_smm1And3ds
    public readonly editorLimit_smm2 = this.limitContainer.editorLimit_smm2
    public readonly isUnknown_editorLimit_smm2 = this.limitContainer.isUnknown_editorLimit_smm2

    public readonly isInGeneralLimitContainer = this.limitContainer.isInGeneralLimitContainer
    public readonly isInGeneralLimit = this.limitContainer.isInGeneralLimit
    public readonly isInGeneralLimitComment = this.limitContainer.isInGeneralLimitComment

    public readonly isInGlobalGeneralLimitContainer = this.limitContainer.isInGlobalGeneralLimitContainer
    public readonly isInGlobalGeneralLimit = this.limitContainer.isInGlobalGeneralLimit
    public readonly isInGlobalGeneralLimitComment = this.limitContainer.isInGlobalGeneralLimitComment

    public readonly isInPowerUpLimitContainer = this.limitContainer.isInPowerUpLimitContainer
    public readonly isInPowerUpLimit = this.limitContainer.isInPowerUpLimit

    public readonly isInProjectileLimitContainer = this.limitContainer.isInProjectileLimitContainer
    public readonly isInProjectileLimit = this.limitContainer.isInProjectileLimit
    public readonly isInProjectileLimitComment = this.limitContainer.isInProjectileLimitComment

    public readonly isInRenderedObjectLimitContainer = this.limitContainer.isInRenderedObjectLimitContainer
    public readonly isInRenderedObjectLimit = this.limitContainer.isInRenderedObjectLimit
    public readonly isInRenderedObjectLimitComment = this.limitContainer.isInRenderedObjectLimitComment

    public readonly isInCollectedCoinLimitContainer = this.limitContainer.isInCollectedCoinLimitContainer
    public readonly isInCollectedCoinLimit = this.limitContainer.isInCollectedCoinLimit

    public readonly otherLimitContainer = this.limitContainer.otherLimitContainer
    public readonly otherLimit = this.limitContainer.otherLimit
    public readonly otherLimitComment = this.limitContainer.otherLimitComment

    //endregion -------------------- Limit properties --------------------
    //region -------------------- Instrument properties --------------------

    public readonly instrumentContainer = this.propertyContainer.instrumentContainer

    public readonly instruments = this.instrumentContainer.instruments

    public readonly canMakeASoundOutOfAMusicBlockContainer = this.instrumentContainer.canMakeASoundOutOfAMusicBlockContainer
    public readonly canMakeASoundOutOfAMusicBlock = this.instrumentContainer.canMakeASoundOutOfAMusicBlock
    public readonly canMakeASoundOutOfAMusicBlockComment = this.instrumentContainer.canMakeASoundOutOfAMusicBlockComment

    //endregion -------------------- Instrument properties --------------------

    //endregion -------------------- Properties --------------------
    //region -------------------- References --------------------

    public readonly referencesContainer = EmptyEntityReference.get


    public readonly referenceInSuperMarioBrosStyle = this.referencesContainer.referenceInSuperMarioBrosStyle
    public readonly referenceInSuperMarioBros3Style = this.referencesContainer.referenceInSuperMarioBros3Style
    public readonly referenceInSuperMarioWorldStyle = this.referencesContainer.referenceInSuperMarioWorldStyle
    public readonly referenceInNewSuperMarioBrosUStyle = this.referencesContainer.referenceInNewSuperMarioBrosUStyle
    public readonly referenceInSuperMario3DWorldStyle = this.referencesContainer.referenceInSuperMario3DWorldStyle

    public readonly referenceInGroundTheme = this.referencesContainer.referenceInGroundTheme
    public readonly referenceInUndergroundTheme = this.referencesContainer.referenceInUndergroundTheme
    public readonly referenceInUnderwaterTheme = this.referencesContainer.referenceInUnderwaterTheme
    public readonly referenceInDesertTheme = this.referencesContainer.referenceInDesertTheme
    public readonly referenceInSnowTheme = this.referencesContainer.referenceInSnowTheme
    public readonly referenceInSkyTheme = this.referencesContainer.referenceInSkyTheme
    public readonly referenceInForestTheme = this.referencesContainer.referenceInForestTheme
    public readonly referenceInGhostHouseTheme = this.referencesContainer.referenceInGhostHouseTheme
    public readonly referenceInAirshipTheme = this.referencesContainer.referenceInAirshipTheme
    public readonly referenceInCastleTheme = this.referencesContainer.referenceInCastleTheme


    public readonly referenceInDayTheme = this.referencesContainer.referenceInDayTheme
    public readonly referenceInNightTheme = this.referencesContainer.referenceInNightTheme

    public getReferenceFrom(): EmptyArray {
        return this.referencesContainer.getReferenceFrom()
    }

    public readonly everyGameStyleReferences = this.referencesContainer.everyGameStyleReferences
    public readonly everyThemeReferences = this.referencesContainer.everyThemeReferences
    public readonly everyTimeReferences = this.referencesContainer.everyTimeReferences
    public readonly everyReferences = this.referencesContainer.everyReferences

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): EmptyMap {
        return EMPTY_MAP
    }

    public toGameStyleMap(): EmptyMap {
        return EMPTY_MAP
    }

    public toCourseThemeMap(): EmptyMap {
        return EMPTY_MAP
    }

    public toTimeMap(): EmptyMap {
        return EMPTY_MAP
    }

    public toLimitMap(): EmptyMap {
        return EMPTY_MAP
    }

    public toLimitInTheEditorMap(): EmptyMap {
        return EMPTY_MAP
    }

    public toLimitWhilePlayingMap(): EmptyMap {
        return EMPTY_MAP
    }

    //endregion -------------------- Convertor methods --------------------

    public override toString(): EmptyEntityName {
        return 'Empty entity'
    }

}
