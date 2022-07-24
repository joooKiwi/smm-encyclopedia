import type {GameProperty}       from './GameProperty';
import type {GameStyleProperty}  from './GameStyleProperty';
import type {InstrumentProperty} from './instrument/InstrumentProperty';
import type {LimitProperty}      from './limit/LimitProperty';
import type {ObjectHolder}       from '../../../util/holder/ObjectHolder';
import type {Property}           from './Property';
import type {ThemeProperty}      from './ThemeProperty';
import type {TimeProperty}       from './TimeProperty';

export class PropertyContainer
    implements Property {

    //region -------------------- Fields --------------------

    readonly #gameContainer;
    readonly #gameStyleContainer;
    readonly #themeContainer;
    readonly #timeContainer;
    readonly #limitContainer;
    readonly #instrumentHolder;

    //endregion -------------------- Fields --------------------

    public constructor(game: ObjectHolder<GameProperty>, gameStyle: ObjectHolder<GameStyleProperty>, theme: ObjectHolder<ThemeProperty>, time: ObjectHolder<TimeProperty>, limit: ObjectHolder<LimitProperty>, instrument: ObjectHolder<InstrumentProperty>,) {
        this.#gameContainer = game;
        this.#gameStyleContainer = gameStyle;
        this.#themeContainer = theme;
        this.#timeContainer = time;
        this.#limitContainer = limit;
        this.#instrumentHolder = instrument;
    }

    //region -------------------- Game properties --------------------

    public get gameContainer() {
        return this.#gameContainer.get;
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
        return this.#gameStyleContainer.get;
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
        return this.#themeContainer.get;
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
        return this.#timeContainer.get;
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
        return this.#limitContainer.get;
    }

    //region -------------------- Editor limit --------------------

    public get editorLimitContainer() {
        return this.limitContainer.editorLimitContainer;
    }

    public get editorLimit_smm1And3ds() {
        return this.limitContainer.editorLimit_smm1And3ds;
    }

    public get editorLimit_smm2() {
        return this.limitContainer.editorLimit_smm2;
    }

    public get isUnknown_editorLimit_smm2() {
        return this.limitContainer.isUnknown_editorLimit_smm2;
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

    //endregion -------------------- Power-up limit --------------------
    //region -------------------- Projectile limit --------------------

    public get isInProjectileLimitWhilePlayingContainer() {
        return this.limitContainer.isInProjectileLimitWhilePlayingContainer;
    }

    public get isInProjectileLimitWhilePlaying() {
        return this.limitContainer.isInProjectileLimitWhilePlaying;
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

    public get otherLimitWhilePlayingComment() {
        return this.limitContainer.otherLimitWhilePlayingComment;
    }

    //endregion -------------------- Custom limit --------------------
    //endregion -------------------- Limit properties --------------------
    //region -------------------- Instrument properties --------------------

    public get instrumentContainer() {
        return this.#instrumentHolder.get;
    }


    public get instruments() {
        return this.instrumentContainer.instruments;
    }

    //region -------------------- Can make a sound out of a music block --------------------

    public get canMakeASoundOutOfAMusicBlockContainer() {
        return this.instrumentContainer.canMakeASoundOutOfAMusicBlockContainer;
    }

    public get canMakeASoundOutOfAMusicBlock() {
        return this.canMakeASoundOutOfAMusicBlockContainer.value;
    }

    public get canMakeASoundOutOfAMusicBlockComment() {
        return this.canMakeASoundOutOfAMusicBlockContainer.comment;
    }

    //endregion -------------------- Can make a sound out of a music block --------------------

    //endregion -------------------- Instrument properties --------------------

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
