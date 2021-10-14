import type {ClassWithNullObjectPattern, EmptyIsInPropertyName} from '../../util/ClassWithNullObjectPattern';
import type {Property}                                          from './Property';

/**
 * @singleton
 */
export class EmptyIsInProperty
    implements Property, ClassWithNullObjectPattern<EmptyIsInPropertyName> {

    static #instance?: EmptyIsInProperty;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }


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

    public readonly limitContainer = this;

    public readonly editorLimitContainer = null;
    public readonly editorLimit = null;
    public readonly isEditorLimitUnknown = true;

    public readonly isInGeneralLimitWhilePlayingContainer = null;
    public readonly isInGeneralLimitWhilePlaying = null;
    public readonly isInGeneralLimitWhilePlayingComment = null;

    public readonly isInGlobalGeneralLimitWhilePlayingContainer = null;
    public readonly isInGlobalGeneralLimitWhilePlaying = null;
    public readonly isInGlobalGeneralLimitWhilePlayingComment = null;

    public readonly isInPowerUpLimitWhilePlayingContainer = null;
    public readonly isInPowerUpLimitWhilePlaying = null;
    public readonly isInPowerUpLimitWhilePlayingComment = null;

    public readonly isInProjectileLimitWhilePlayingContainer = null;
    public readonly isInProjectileLimitWhilePlaying = null;
    public readonly isInProjectileLimitWhilePlayingUnknown = true;
    public readonly isInProjectileLimitWhilePlayingComment = null;

    public readonly customLimitWhilePlayingContainer = null;
    public readonly customLimitWhilePlaying = null;
    public readonly isCustomLimitWhilePlayingUnknown = true;
    public readonly customLimitWhilePlayingComment = null;

    //endregion -------------------- Limit properties --------------------

    public toGameStyleMap(): never {
        throw new ReferenceError(`An ${this} cannot have a game style map.`);
    }

    public toCourseThemeMap(): never {
        throw new ReferenceError(`An ${this} cannot have a course theme map.`);
    }

    public toTimeMap(): never {
        throw new ReferenceError(`An ${this} cannot have a time map.`);
    }

    public toString(): EmptyIsInPropertyName {
        return 'Empty "is in property"';
    }

}
