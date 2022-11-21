import type {Builder}             from '../../../../util/builder/Builder'
import type {ClearConditionImage} from '../clearCondition/ClearConditionImage'
import type {EditorImage}         from '../editor/EditorImage'
import type {InGameImage}         from '../inGame/InGameImage'
import type {UniqueImage}         from './UniqueImage'

import {assert}                     from '../../../../util/utilitiesMethods'
import {ClearConditionImageFactory} from '../clearCondition/ClearConditionImage.factory'
import {EditorImageFactory}         from '../editor/EditorImage.factory'
import {EMPTY_ARRAY, EMPTY_MAP}     from '../../../../util/emptyVariables'
import {GameStyles}                 from '../../../gameStyle/GameStyles'
import {InGameImageFactory}         from '../inGame/InGameImage.factory'
import {Themes}                     from '../../../theme/Themes'
import {Times}                      from '../../../time/Times'
import {UniqueImageContainer}       from './UniqueImage.container'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,} = GameStyles
const {GROUND,} = Themes

//endregion -------------------- Import from deconstruction --------------------

export class UniqueImageBuilder
    implements Builder<UniqueImage> {

    //region -------------------- Fields --------------------

    #editorImage?: EditorImage
    #clearConditionImage?: ClearConditionImage
    #whilePlayingImage?: InGameImage

    #referenceType?: | ReferenceType | null

    #gameStyles?: GameStyles[]
    #themes?: Map<GameStyles, readonly Themes[]>

    //endregion -------------------- Fields --------------------

    //region -------------------- Getter methods --------------------

    private get __editorImage(): | EditorImage | null {
        return this.#editorImage ?? null
    }

    private get __clearConditionImage(): | ClearConditionImage | null {
        return this.#clearConditionImage ?? null
    }

    private get __whilePlayingImage(): | InGameImage | null {
        return this.#whilePlayingImage ?? null
    }


    public get referenceType(): | ReferenceType | null {
        return this.__referenceType
    }

    private get __referenceType(): | ReferenceType | null {
        return this.#referenceType ?? null
    }

    private set __referenceType(value: | ReferenceType | null | undefined,) {
        this.#referenceType = value ?? null
    }


    private get __gameStyles(): GameStyles[] {
        return this.#gameStyles ??= []
    }

    private set __gameStyles(value: readonly GameStyles[]) {
        this.#gameStyles = [...value,]
    }

    protected get _gameStyles(): readonly GameStyles[] {
        return this.#gameStyles ?? GameStyles.values.toArray()
    }


    private get __themes(): ReadonlyMap<GameStyles, readonly Themes[]> {
        return this.#themes ?? new Map(this._gameStyles.map(gameStyle => [gameStyle, Themes.courseThemes,]))
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public setEditor(image: EditorImage,): this {
        this.#editorImage = image
        return this
    }

    public setClearCondition(image: ClearConditionImage,): this {
        this.#clearConditionImage = image
        return this
    }

    public setWhilePlaying(image: InGameImage,): this {
        this.#whilePlayingImage = image
        return this
    }


    private __forceType(type: ReferenceType,) {
        this.__referenceType = type
        return this
    }

    public forceEditor(): this {
        return this.__forceType('editor')
    }

    public forceClearCondition(): this {
        return this.__forceType('clear condition')
    }

    public forceWhilePlaying(): this {
        return this.__forceType('while playing')
    }


    public __addGameStyle(gameStyle: readonly GameStyles[]): this {
        const array = this.__gameStyles
        gameStyle.filter(gameStyle => !array.includes(gameStyle)).forEach(gameStyle => array.push(gameStyle))
        return this
    }

    public addGameStyle(...gameStyle: readonly GameStyles[]): this {
        return this.__addGameStyle(gameStyle)
    }

    public setGameStyle(...gameStyle: readonly GameStyles[]): this {
        this.__gameStyles = gameStyle
        return this
    }

    public setTheme(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        (this.#themes ??= new Map()).set(gameStyle, themes,)
        return this
    }


    public __setOnGameStyleAnd(gameStyle: GameStyles, themes: readonly Themes[]): this {
        return this.setTheme(gameStyle, ...themes,)
    }

    public setOnGameStyleAnd(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        return this.addGameStyle(gameStyle).__setOnGameStyleAnd(gameStyle, themes,)
    }

    public setOnSMBAnd(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(SUPER_MARIO_BROS, themes,)
    }

    public setOnSMB3And(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(SUPER_MARIO_BROS_3, themes,)
    }

    public setOnSMWAnd(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(SUPER_MARIO_WORLD, themes,)
    }

    public setOnNSMBUAnd(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(NEW_SUPER_MARIO_BROS_U, themes,)
    }

    public setOnSM3DWAnd(...themes: readonly Themes[]): this {
        return this.__setOnGameStyleAnd(SUPER_MARIO_3D_WORLD, themes,)
    }


    private __setToOnlyGameStyleAnd(gameStyle: GameStyles, themes: readonly Themes[]): this {
        return this.setGameStyle(gameStyle,)
            .setTheme(gameStyle, ...themes,)
    }

    public setToOnlyGameStyleAnd(gameStyle: GameStyles, ...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(gameStyle, themes,)
    }

    public setToOnlySMBAnd(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(SUPER_MARIO_BROS, themes,)
    }

    public setToOnlySMB3And(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(SUPER_MARIO_BROS_3, themes,)
    }

    public setToOnlySMWAnd(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(SUPER_MARIO_WORLD, themes,)
    }

    public setToOnlyNSMBUAnd(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(NEW_SUPER_MARIO_BROS_U, themes,)
    }

    public setToOnlySM3DWAnd(...themes: readonly Themes[]): this {
        return this.__setToOnlyGameStyleAnd(SUPER_MARIO_3D_WORLD, themes,)
    }


    public setOnGameStyleAndAllThemes(gameStyle: GameStyles,): this {
        return this.__setOnGameStyleAnd(gameStyle, Themes.courseThemes,)
    }

    public setOnSMBAndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(SUPER_MARIO_BROS,)
    }

    public setOnSMB3AndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(SUPER_MARIO_BROS_3,)
    }

    public setOnSMWAndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(SUPER_MARIO_WORLD,)
    }

    public setOnNSMBUAndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(NEW_SUPER_MARIO_BROS_U,)
    }

    public setOnSM3DWAndAllThemes(): this {
        return this.setOnGameStyleAndAllThemes(SUPER_MARIO_3D_WORLD,)
    }


    public setToOnlyGameStyleAndAllThemes(gameStyle: GameStyles,): this {
        return this.__setToOnlyGameStyleAnd(gameStyle, Themes.courseThemes,)
    }

    public setToOnlySMBAndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(SUPER_MARIO_BROS,)
    }

    public setToOnlySMB3AndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(SUPER_MARIO_BROS_3,)
    }

    public setToOnlySMWAndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(SUPER_MARIO_WORLD,)
    }

    public setToOnlyNSMBUAndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(NEW_SUPER_MARIO_BROS_U,)
    }

    public setToOnlySM3DWAndAllThemes(): this {
        return this.setToOnlyGameStyleAndAllThemes(SUPER_MARIO_3D_WORLD,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Builder helper methods --------------------

    #createEditorImageMap(image: EditorImage,): ReadonlyMap<GameStyles, readonly string[]> {
        const themes = this.__themes,
            times = Times.values.toArray()

        return new Map(this._gameStyles.map(gameStyle =>
            [
                gameStyle,
                (themes.get(gameStyle) ?? EMPTY_ARRAY).map(theme =>
                    times.map(time =>
                        image.get(true, gameStyle, theme, time,))).flat(2),
            ]))
    }

    #createClearConditionImageMap(image: ClearConditionImage,): ReadonlyMap<GameStyles, readonly string[]> {
        return new Map(
            this._gameStyles.map(gameStyle => [gameStyle, image.get(gameStyle),] as const)
                .filter(([, images,]) => images.length !== 0)
        )
    }

    #createWhilePlayingImageMap(image: InGameImage,): ReadonlyMap<GameStyles, readonly string[]> {
        return new Map(
            this._gameStyles.map(gameStyle => [gameStyle, image.get(false, gameStyle, GROUND,),] as const)
                .filter(([, images,]) => images.length !== 0)
        )
    }

    #createMap(editorImage: | EditorImage | null, clearConditionImage: | ClearConditionImage | null, whilePlayingImage: | InGameImage | null,): ReadonlyMap<GameStyles, readonly string[]> {
        const type = this.__referenceType

        if (type === 'editor' || (editorImage != null && clearConditionImage == null && whilePlayingImage == null)) {
            assert(editorImage != null, 'The editor image cannot be null when being forced.',)
            return this.#createEditorImageMap(editorImage)
        } else if (type === 'clear condition' || (editorImage == null && clearConditionImage != null && whilePlayingImage == null)) {
            assert(clearConditionImage != null, 'The "clear condition" image cannot be null when being forced.',)
            return this.#createClearConditionImageMap(clearConditionImage)
        } else if (type === 'while playing' || (editorImage == null && clearConditionImage == null && whilePlayingImage != null)) {
            assert(whilePlayingImage != null, 'The "while playing" image cannot be null when being forced.',)
            return this.#createWhilePlayingImageMap(whilePlayingImage)
        }

        assert(true, `More than one image is being set, the builder cannot determine between (${editorImage == null ? '' : 'editor,'}${clearConditionImage == null ? '' : 'clear condition,'}${whilePlayingImage == null ? '' : 'while playing,'})`,)
        return EMPTY_MAP
    }

    //endregion -------------------- Builder helper methods --------------------

    public build(): UniqueImage {
        const editorImage = this.__editorImage
        const clearConditionImage = this.__clearConditionImage
        const whilePlayingImage = this.__whilePlayingImage
        const map = this.#createMap(editorImage, clearConditionImage, whilePlayingImage,)

        return new UniqueImageContainer(
            editorImage ?? EditorImageFactory.EMPTY_EDITOR_IMAGE,
            clearConditionImage ?? ClearConditionImageFactory.EMPTY_CLEAR_CONDITION_IMAGE,
            whilePlayingImage ?? InGameImageFactory.EMPTY_IN_GAME_IMAGE,
            map.size === 0 ? EMPTY_MAP : map,
        )
    }

}

type ReferenceType = | 'editor' | 'clear condition' | 'while playing'
