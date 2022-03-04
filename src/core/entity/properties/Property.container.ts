import type {EditorLimitReceived, GeneralLimitReceived, OtherLimitReceived, PowerUpLimitReceived, ProjectileLimitReceived} from './limit/LimitProperty.types';
import type {GameProperty}                                                                                                 from './GameProperty';
import type {GameStyleProperty}                                                                                            from './GameStyleProperty';
import type {PossibleLimitProperty, Property}                                                                              from './Property';
import type {ThemeProperty}                                                                                                from './ThemeProperty';
import type {TimeProperty}                                                                                                 from './TimeProperty';

import {GamePropertyContainer}      from './GameProperty.container';
import {GameStylePropertyContainer} from './GameStyleProperty.container';
import {ThemePropertyContainer}     from './ThemeProperty.container';
import {TimePropertyContainer}      from './TimeProperty.container';
import {LimitPropertyContainer}     from './limit/LimitProperty.container';

export class PropertyContainer
    implements Property {

    //region -------------------- Attributes --------------------

    readonly #gameContainer: GameProperty;
    readonly #gameStyleContainer: GameStyleProperty;
    readonly #themeContainer: ThemeProperty;
    readonly #timeContainer: TimeProperty;
    readonly #limitContainer: PossibleLimitProperty;

    //endregion -------------------- Attributes --------------------

    public constructor(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,
                       isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: | boolean | null,
                       isInGroundTheme: boolean, isInUndergroundTheme: boolean, isInUnderwaterTheme: boolean, isInDesertTheme: | boolean | null, isInSnowTheme: | boolean | null, isInSkyTheme: | boolean | null, isInForestTheme: | boolean | null, isInGhostHouseTheme: boolean, isInAirshipTheme: boolean, isInCastleTheme: boolean,
                       isInDayTheme: boolean, isInNightTheme: | boolean | null,
                       editorLimit: EditorLimitReceived, generalLimit: GeneralLimitReceived, powerUpLimit: PowerUpLimitReceived, projectileLimit: ProjectileLimitReceived, otherLimit: OtherLimitReceived,) {
        this.#gameContainer = GamePropertyContainer.get(isInSuperMarioMaker1, isInSuperMarioMaker2,);
        this.#gameStyleContainer = GameStylePropertyContainer.get(isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,);
        this.#themeContainer = ThemePropertyContainer.get(isInGroundTheme, isInUndergroundTheme, isInUnderwaterTheme, isInDesertTheme, isInSnowTheme, isInSkyTheme, isInForestTheme, isInGhostHouseTheme, isInAirshipTheme, isInCastleTheme,);
        this.#timeContainer = TimePropertyContainer.get(isInDayTheme, isInNightTheme,);
        this.#limitContainer = LimitPropertyContainer.get(editorLimit, generalLimit, powerUpLimit, projectileLimit, otherLimit,) as PossibleLimitProperty;
    }

    //region -------------------- Game properties --------------------

    public get gameContainer() {
        return this.#gameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMakerFor3DS() {
        return this.gameContainer.isInSuperMarioMakerFor3DS;
    }

    public get isInSuperMarioMaker2() {
        return this.gameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- Game style properties --------------------

    public get gameStyleContainer() {
        return this.#gameStyleContainer;
    }

    public get isInSuperMarioBrosStyle() {
        return this.gameStyleContainer.isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.gameStyleContainer.isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.gameStyleContainer.isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.gameStyleContainer.isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.gameStyleContainer.isInSuperMario3DWorldStyle;
    }

    //endregion -------------------- Game style properties --------------------
    //region -------------------- Theme properties --------------------

    public get themeContainer() {
        return this.#themeContainer;
    }

    public get isInGroundTheme() {
        return this.themeContainer.isInGroundTheme;
    }

    public get isInUndergroundTheme() {
        return this.themeContainer.isInUndergroundTheme;
    }

    public get isInUnderwaterTheme() {
        return this.themeContainer.isInUnderwaterTheme;
    }

    public get isInDesertTheme() {
        return this.themeContainer.isInDesertTheme;
    }

    public get isInSnowTheme() {
        return this.themeContainer.isInSnowTheme;
    }

    public get isInSkyTheme() {
        return this.themeContainer.isInSkyTheme;
    }

    public get isInForestTheme() {
        return this.themeContainer.isInForestTheme;
    }

    public get isInGhostHouseTheme() {
        return this.themeContainer.isInGhostHouseTheme;
    }

    public get isInAirshipTheme() {
        return this.themeContainer.isInAirshipTheme;
    }

    public get isInCastleTheme() {
        return this.themeContainer.isInCastleTheme;
    }

    //endregion -------------------- Theme properties --------------------
    //region -------------------- Time properties --------------------

    public get timeContainer() {
        return this.#timeContainer;
    }

    public get isInDayTheme() {
        return this.timeContainer.isInDayTheme;
    }

    public get isInNightTheme() {
        return this.timeContainer.isInNightTheme;
    }

    //endregion -------------------- Time properties --------------------
    //region -------------------- Limit properties --------------------

    public get limitContainer() {
        return this.#limitContainer;
    }

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer() {
        return this.limitContainer.editorLimitContainer;
    }

    public get editorLimit() {
        return this.limitContainer.editorLimit;
    }

    public get isEditorLimitUnknown() {
        return this.limitContainer.isEditorLimitUnknown;
    }

    //endregion -------------------- Editor limit --------------------
    //region -------------------- General limit --------------------

    public get isInGeneralLimitWhilePlayingContainer() {
        return this.limitContainer.isInGeneralLimitWhilePlayingContainer;
    }

    public get isInGeneralLimitWhilePlaying() {
        return this.limitContainer.isInGeneralLimitWhilePlaying;
    }

    public get isInGeneralLimitWhilePlayingComment() {
        return this.limitContainer.isInGeneralLimitWhilePlayingComment;
    }

    //region -------------------- Global general limit --------------------

    public get isInGlobalGeneralLimitWhilePlayingContainer() {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlayingContainer;
    }

    public get isInGlobalGeneralLimitWhilePlaying() {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlaying;
    }

    public get isInGlobalGeneralLimitWhilePlayingComment() {
        return this.limitContainer.isInGlobalGeneralLimitWhilePlayingComment;
    }

    //endregion -------------------- Global general limit --------------------

    //endregion -------------------- General limit --------------------
    //region -------------------- Power-up limit --------------------

    public get isInPowerUpLimitWhilePlayingContainer() {
        return this.limitContainer.isInPowerUpLimitWhilePlayingContainer;
    }

    public get isInPowerUpLimitWhilePlaying() {
        return this.limitContainer.isInPowerUpLimitWhilePlaying;
    }

    public get isInPowerUpLimitWhilePlayingComment() {
        return this.limitContainer.isInPowerUpLimitWhilePlayingComment;
    }

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitWhilePlayingContainer() {
        return this.limitContainer.isInProjectileLimitWhilePlayingContainer;
    }

    public get isInProjectileLimitWhilePlaying() {
        return this.limitContainer.isInProjectileLimitWhilePlaying;
    }

    public get isInProjectileLimitWhilePlayingUnknown() {
        return this.limitContainer.isInProjectileLimitWhilePlayingUnknown;
    }

    public get isInProjectileLimitWhilePlayingComment() {
        return this.limitContainer.isInProjectileLimitWhilePlayingComment;
    }

    //endregion -------------------- Projectile limit --------------------
    //region -------------------- Custom limit --------------------

    public get otherLimitWhilePlayingContainer() {
        return this.limitContainer.otherLimitWhilePlayingContainer;
    }

    public get otherLimitWhilePlaying() {
        return this.limitContainer.otherLimitWhilePlaying;
    }

    public get isOtherLimitWhilePlayingUnknown() {
        return this.limitContainer.isOtherLimitWhilePlayingUnknown;
    }

    public get otherLimitWhilePlayingComment() {
        return this.limitContainer.otherLimitWhilePlayingComment;
    }

    //endregion -------------------- Custom limit --------------------
    //endregion -------------------- Limit properties --------------------

    public toGameMap() {
        return this.gameContainer.toGameMap();
    }

    public toGameStyleMap() {
        return this.gameStyleContainer.toGameStyleMap();
    }

    public toCourseThemeMap() {
        return this.themeContainer.toCourseThemeMap();
    }

    public toTimeMap() {
        return this.timeContainer.toTimeMap();
    }

    public toLimitMap() {
        return this.limitContainer.toLimitMap();
    }

    public toLimitInTheEditorMap() {
        return this.limitContainer.toLimitInTheEditorMap();
    }

    public toLimitWhilePlayingMap() {
        return this.limitContainer.toLimitWhilePlayingMap();
    }

}
