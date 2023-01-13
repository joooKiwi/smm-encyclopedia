import type {Property}                                          from 'core/entity/properties/Property'
import type {ClassWithNullObjectPattern, EmptyIsInPropertyName} from 'util/ClassWithNullObjectPattern'
import type {EmptyMap}                                          from 'util/types/variables'

import {EmptyInstrumentProperty} from 'core/entity/properties/instrument/EmptyInstrumentProperty'
import {EmptyLimitProperty}      from 'core/entity/properties/limit/EmptyLimitProperty'
import {EMPTY_MAP}               from 'util/emptyVariables'

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

    public readonly instrumentContainer = EmptyInstrumentProperty.get

    public readonly instruments = this.instrumentContainer.instruments

    public readonly canMakeASoundOutOfAMusicBlockContainer = this.instrumentContainer.canMakeASoundOutOfAMusicBlockContainer
    public readonly canMakeASoundOutOfAMusicBlock = this.instrumentContainer.canMakeASoundOutOfAMusicBlock
    public readonly canMakeASoundOutOfAMusicBlockComment = this.instrumentContainer.canMakeASoundOutOfAMusicBlockComment

    //endregion -------------------- Instrument properties --------------------

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

    public toString(): EmptyIsInPropertyName {
        return 'Empty "is in property"'
    }

}
