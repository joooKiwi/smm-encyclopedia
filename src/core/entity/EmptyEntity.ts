import type {ClassWithNullObjectPattern, EmptyEntityName} from '../../util/ClassWithNullObjectPattern'
import type {Entity}                                      from './Entity'

import {ClassContainingANameAndACategory} from '../../lang/name/ClassContainingANameAndACategory'
import {EMPTY_MAP}                        from '../../util/emptyVariables'
import {EmptyEntityReference}             from './properties/EmptyEntityReference'
import {EmptyEntityCategory}              from '../entityCategory/EmptyEntityCategory'
import {EmptyIsInProperty}                from './properties/EmptyIsInProperty'
import {EmptyStringName}                  from '../../lang/name/EmptyStringName'

/**
 * An empty entity with the default values of nothing
 *
 * @note A value that is equivalent to nothing can be false, null and itself
 * @singleton
 * @recursiveReference<{@link EmptyEntityReference}>
 */
export class EmptyEntity
    extends ClassContainingANameAndACategory<string, string, EmptyEntityCategory>
    implements Entity, ClassWithNullObjectPattern<EmptyEntityName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyEntity

    private constructor() {
        super(EmptyStringName.get, EmptyEntityCategory.get,)
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

    public readonly isInGeneralLimitWhilePlayingContainer = this.limitContainer.isInGeneralLimitWhilePlayingContainer
    public readonly isInGeneralLimitWhilePlaying = this.limitContainer.isInGeneralLimitWhilePlaying
    public readonly isInGeneralLimitWhilePlayingComment = this.limitContainer.isInGeneralLimitWhilePlayingComment

    public readonly isInGlobalGeneralLimitWhilePlayingContainer = this.limitContainer.isInGlobalGeneralLimitWhilePlayingContainer
    public readonly isInGlobalGeneralLimitWhilePlaying = this.limitContainer.isInGlobalGeneralLimitWhilePlaying
    public readonly isInGlobalGeneralLimitWhilePlayingComment = this.limitContainer.isInGlobalGeneralLimitWhilePlayingComment

    public readonly isInPowerUpLimitWhilePlayingContainer = this.limitContainer.isInPowerUpLimitWhilePlayingContainer
    public readonly isInPowerUpLimitWhilePlaying = this.limitContainer.isInPowerUpLimitWhilePlaying

    public readonly isInProjectileLimitWhilePlayingContainer = this.limitContainer.isInProjectileLimitWhilePlayingContainer
    public readonly isInProjectileLimitWhilePlaying = this.limitContainer.isInProjectileLimitWhilePlaying
    public readonly isInProjectileLimitWhilePlayingComment = this.limitContainer.isInProjectileLimitWhilePlayingComment

    public readonly otherLimitWhilePlayingContainer = this.limitContainer.otherLimitWhilePlayingContainer
    public readonly otherLimitWhilePlaying = this.limitContainer.otherLimitWhilePlaying
    public readonly otherLimitWhilePlayingComment = this.limitContainer.otherLimitWhilePlayingComment

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


    public get referenceInSuperMarioBrosStyle() {
        return this.referencesContainer.referenceInSuperMarioBrosStyle
    }

    public get referenceInSuperMarioBros3Style() {
        return this.referencesContainer.referenceInSuperMarioBros3Style
    }

    public get referenceInSuperMarioWorldStyle() {
        return this.referencesContainer.referenceInSuperMarioWorldStyle
    }

    public get referenceInNewSuperMarioBrosUStyle() {
        return this.referencesContainer.referenceInNewSuperMarioBrosUStyle
    }

    public get referenceInSuperMario3DWorldStyle() {
        return this.referencesContainer.referenceInSuperMario3DWorldStyle
    }


    public get referenceInGroundTheme() {
        return this.referencesContainer.referenceInGroundTheme
    }

    public get referenceInUndergroundTheme() {
        return this.referencesContainer.referenceInUndergroundTheme
    }

    public get referenceInUnderwaterTheme() {
        return this.referencesContainer.referenceInUnderwaterTheme
    }

    public get referenceInDesertTheme() {
        return this.referencesContainer.referenceInDesertTheme
    }

    public get referenceInSnowTheme() {
        return this.referencesContainer.referenceInSnowTheme
    }

    public get referenceInSkyTheme() {
        return this.referencesContainer.referenceInSkyTheme
    }

    public get referenceInForestTheme() {
        return this.referencesContainer.referenceInForestTheme
    }

    public get referenceInGhostHouseTheme() {
        return this.referencesContainer.referenceInGhostHouseTheme
    }

    public get referenceInAirshipTheme() {
        return this.referencesContainer.referenceInAirshipTheme
    }

    public get referenceInCastleTheme() {
        return this.referencesContainer.referenceInCastleTheme
    }


    public get referenceInDayTheme() {
        return this.referencesContainer.referenceInDayTheme
    }

    public get referenceInNightTheme() {
        return this.referencesContainer.referenceInNightTheme
    }

    public getReferenceFrom() {
        return this.referencesContainer.getReferenceFrom()
    }

    public readonly everyGameStyleReferences = this.referencesContainer.everyGameStyleReferences
    public readonly everyThemeReferences = this.referencesContainer.everyThemeReferences
    public readonly everyTimeReferences = this.referencesContainer.everyTimeReferences
    public readonly everyReferences = this.referencesContainer.everyReferences

    //endregion -------------------- References --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return EMPTY_MAP
    }

    public toGameStyleMap() {
        return EMPTY_MAP
    }

    public toCourseThemeMap() {
        return EMPTY_MAP
    }

    public toTimeMap() {
        return EMPTY_MAP
    }

    public toLimitMap() {
        return EMPTY_MAP
    }

    public toLimitInTheEditorMap() {
        return EMPTY_MAP
    }

    public toLimitWhilePlayingMap() {
        return EMPTY_MAP
    }

    //endregion -------------------- Convertor methods --------------------

    public override toString(): EmptyEntityName {
        return 'Empty entity'
    }

}
