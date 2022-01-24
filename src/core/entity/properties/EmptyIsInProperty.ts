import type {ClassWithNullObjectPattern, EmptyIsInPropertyName} from '../../../util/ClassWithNullObjectPattern';
import type {Property}                                          from './Property';

import {assert}             from '../../../util/utilitiesMethods';
import {EMPTY_MAP}          from '../../../util/emptyVariables';
import {EmptyLimitProperty} from './limit/EmptyLimitProperty';

/**
 * @singleton
 */
export class EmptyIsInProperty
    implements Property, ClassWithNullObjectPattern<EmptyIsInPropertyName> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EmptyIsInProperty;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    //region -------------------- Game properties --------------------

    public readonly gameContainer = this;
    public readonly isInSuperMarioMaker1 = false;
    public readonly isInSuperMarioMaker2 = false;

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    public readonly gameStyleContainer = this;
    public readonly isInSuperMarioBrosStyle = false;
    public readonly isInSuperMarioBros3Style = false;
    public readonly isInSuperMarioWorldStyle = false;
    public readonly isInNewSuperMarioBrosUStyle = false;
    public readonly isInSuperMario3DWorldStyle = null;

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public readonly themeContainer = this;
    public readonly isInGroundTheme = false;
    public readonly isInUndergroundTheme = false;
    public readonly isInUnderwaterTheme = false;
    public readonly isInDesertTheme = null;
    public readonly isInSnowTheme = null;
    public readonly isInSkyTheme = null;
    public readonly isInForestTheme = null;
    public readonly isInGhostHouseTheme = false;
    public readonly isInAirshipTheme = false;
    public readonly isInCastleTheme = false;

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public readonly timeContainer = this;
    public readonly isInDayTheme = false;
    public readonly isInNightTheme = null;

    //endregion -------------------- Time properties --------------------
    //region -------------------- Limit properties --------------------

    public readonly limitContainer = EmptyLimitProperty.get;

    public readonly editorLimitContainer = this.limitContainer.editorLimitContainer;
    public readonly editorLimit = this.limitContainer.editorLimit;
    public readonly isEditorLimitUnknown = this.limitContainer.isEditorLimitUnknown;

    public readonly isInGeneralLimitWhilePlayingContainer = this.limitContainer.isInGeneralLimitWhilePlayingContainer;
    public readonly isInGeneralLimitWhilePlaying = this.limitContainer.isInGeneralLimitWhilePlaying;
    public readonly isInGeneralLimitWhilePlayingComment = this.limitContainer.isInGeneralLimitWhilePlayingComment;

    public readonly isInGlobalGeneralLimitWhilePlayingContainer = this.limitContainer.isInGlobalGeneralLimitWhilePlayingContainer;
    public readonly isInGlobalGeneralLimitWhilePlaying = this.limitContainer.isInGlobalGeneralLimitWhilePlaying;
    public readonly isInGlobalGeneralLimitWhilePlayingComment = this.limitContainer.isInGlobalGeneralLimitWhilePlayingComment;

    public readonly isInPowerUpLimitWhilePlayingContainer = this.limitContainer.isInPowerUpLimitWhilePlayingContainer;
    public readonly isInPowerUpLimitWhilePlaying = this.limitContainer.isInPowerUpLimitWhilePlaying;
    public readonly isInPowerUpLimitWhilePlayingComment = this.limitContainer.isInPowerUpLimitWhilePlayingComment;

    public readonly isInProjectileLimitWhilePlayingContainer = this.limitContainer.isInProjectileLimitWhilePlayingContainer;
    public readonly isInProjectileLimitWhilePlaying = this.limitContainer.isInProjectileLimitWhilePlaying;
    public readonly isInProjectileLimitWhilePlayingUnknown = this.limitContainer.isInProjectileLimitWhilePlayingUnknown;
    public readonly isInProjectileLimitWhilePlayingComment = this.limitContainer.isInProjectileLimitWhilePlayingComment;

    public readonly otherLimitWhilePlayingContainer = this.limitContainer.otherLimitWhilePlayingContainer;
    public readonly otherLimitWhilePlaying = this.limitContainer.otherLimitWhilePlaying;
    public readonly isOtherLimitWhilePlayingUnknown = this.limitContainer.isOtherLimitWhilePlayingUnknown;
    public readonly otherLimitWhilePlayingComment = this.limitContainer.otherLimitWhilePlayingComment;

    //endregion -------------------- Limit properties --------------------

    public toGameStyleMap(): never {
        assert(false, `An ${this} cannot have a game style map.`,);
    }

    public toCourseThemeMap(): never {
        assert(false, `An ${this} cannot have a course theme map.`,);
    }

    public toTimeMap(): never {
        assert(false, `An ${this} cannot have a time map.`,);
    }

    public toLimitMap() {
        return EMPTY_MAP;
    }

    public toLimitInTheEditorMap() {
        return EMPTY_MAP;
    }

    public toLimitWhilePlayingMap() {
        return EMPTY_MAP;
    }


    public toString(): EmptyIsInPropertyName {
        return 'Empty "is in property"';
    }

}
