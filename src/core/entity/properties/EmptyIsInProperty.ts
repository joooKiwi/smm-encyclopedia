import type {ClassWithNullObjectPattern, EmptyIsInPropertyName} from '../../../util/ClassWithNullObjectPattern'
import type {Property}                                          from './Property'

import {EMPTY_MAP}               from '../../../util/emptyVariables'
import {EmptyInstrumentProperty} from './instrument/EmptyInstrumentProperty'
import {EmptyLimitProperty}      from './limit/EmptyLimitProperty'

/**
 * @singleton
 */
export class EmptyIsInProperty
    implements Property, ClassWithNullObjectPattern<EmptyIsInPropertyName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyIsInProperty

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Game properties --------------------

    public readonly gameContainer = this
    public readonly isInSuperMarioMaker1 = false
    public readonly isInSuperMarioMakerFor3DS = false
    public readonly isInSuperMarioMaker2 = false

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    public readonly gameStyleContainer = this
    public readonly isInSuperMarioBrosStyle = false
    public readonly isInSuperMarioBros3Style = false
    public readonly isInSuperMarioWorldStyle = false
    public readonly isInNewSuperMarioBrosUStyle = false
    public readonly isInSuperMario3DWorldStyle = null

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public readonly themeContainer = this
    public readonly isInGroundTheme = false
    public readonly isInUndergroundTheme = false
    public readonly isInUnderwaterTheme = false
    public readonly isInDesertTheme = null
    public readonly isInSnowTheme = null
    public readonly isInSkyTheme = null
    public readonly isInForestTheme = null
    public readonly isInGhostHouseTheme = false
    public readonly isInAirshipTheme = false
    public readonly isInCastleTheme = false

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public readonly timeContainer = this
    public readonly isInDayTheme = false
    public readonly isInNightTheme = null

    //endregion -------------------- Time properties --------------------
    //region -------------------- Limit properties --------------------

    public readonly limitContainer = EmptyLimitProperty.get

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

    public readonly instrumentContainer = EmptyInstrumentProperty.get

    public readonly instruments = this.instrumentContainer.instruments

    public readonly canMakeASoundOutOfAMusicBlockContainer = this.instrumentContainer.canMakeASoundOutOfAMusicBlockContainer
    public readonly canMakeASoundOutOfAMusicBlock = this.instrumentContainer.canMakeASoundOutOfAMusicBlock
    public readonly canMakeASoundOutOfAMusicBlockComment = this.instrumentContainer.canMakeASoundOutOfAMusicBlockComment

    //endregion -------------------- Instrument properties --------------------

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

    public toString(): EmptyIsInPropertyName {
        return 'Empty "is in property"'
    }

}
