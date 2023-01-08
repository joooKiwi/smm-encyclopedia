import type {ClassWithEntityEnglishName}              from 'core/ClassWithEnglishName'
import type {EditorImageFile}                         from 'core/entity/file/EditorImageFile'
import type {PossibleAmountOfImages, SimpleImageName} from 'core/entity/images/editor/EditorImage.types'
import type {GameStyles}                              from 'core/gameStyle/GameStyles'
import type {Nullable}                                from 'util/types/nullable'

import {Times}                      from 'core/time/Times'
import {AbstractEditorImageBuilder} from 'core/entity/images/editor/AbstractEditorImage.builder'
import {Themes}                     from 'core/theme/Themes'
import {EMPTY_MAP}                  from 'util/emptyVariables'

//region -------------------- Import from deconstruction --------------------

const {GROUND,} = Themes

//endregion -------------------- Import from deconstruction --------------------

export class GenericEditorImageBuilder<NAME extends NonNullable<SimpleImageName> = NonNullable<SimpleImageName>, >
    extends AbstractEditorImageBuilder<NAME> {

    //region -------------------- Fields --------------------

    readonly #amountOfImages

    #overrideDefaultAmount?: Map<GameStyles, PossibleAmountOfImages>
    #overrideMap?: Map<Times, Map<GameStyles, Map<Themes, PossibleAmountOfImages>>>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(entity: ClassWithEntityEnglishName, simpleImageName: NAME, amountOfImages: PossibleAmountOfImages = 1,) {
        super(entity, simpleImageName,)
        this.#amountOfImages = amountOfImages
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    //region -------------------- Override images --------------------

    private get __overrideImages(): Map<Times, Map<GameStyles, Map<Themes, PossibleAmountOfImages>>> {
        return this.#overrideMap ??= new Map()
    }

    protected get _overrideImages(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, PossibleAmountOfImages>>> {
        return this.#overrideMap ?? EMPTY_MAP
    }

    #setOverrideImages(imageNumber: PossibleAmountOfImages, time: Nullable<Times>, gameStyle: GameStyles, theme: Nullable<Themes>,): this {
        const times = time == null ? Times.values : [time] as const
        const themes = theme == null ? Themes.courseThemes : [theme] as const

        const overrideMap = this.__overrideImages

        times.forEach(time => {
            if (!overrideMap.has(time))
                overrideMap.set(time, new Map())
            const timeMap = overrideMap.get(time)!

            if (!timeMap.has(gameStyle))
                timeMap.set(gameStyle, new Map())
            const gameStyleMap = timeMap.get(gameStyle)!

            themes.forEach(theme => gameStyleMap.set(theme, imageNumber,))
        })

        return this
    }


    private get __overrideDefaultAmounts(): Map<GameStyles, PossibleAmountOfImages> {
        return this.#overrideDefaultAmount ??= new Map()
    }

    protected get _overrideDefaultAmounts(): ReadonlyMap<GameStyles, PossibleAmountOfImages> {
        return this.#overrideDefaultAmount ?? EMPTY_MAP
    }

    protected _setOverrideDefaultAmounts(number: PossibleAmountOfImages, gameStyle: GameStyles,): this {
        this.__overrideDefaultAmounts.set(gameStyle, number,)
        return this
    }


    /**
     * Set the image number for the specific {@link GameStyles game style}, {@link Themes theme} & {@link Times time}.
     *
     * @param gameStyle the game style
     * @param theme the theme or every theme if <b>null</b> is received
     * @param time the time or every time if <b>null</b> is received
     * @param imageNumber the image number
     */
    public setImage(gameStyle: GameStyles, theme: Nullable<Themes>, time: Nullable<Times>, imageNumber: PossibleAmountOfImages,): this {
        return this.#setOverrideImages(imageNumber, time, gameStyle, theme,)
    }

    /**
     * Set the default amount for the selected {@link GameStyles game style}.
     *
     * @note This will do nothing if there is only 1 image.
     *
     * @param gameStyle the game style
     * @param number the default amount
     */
    public setDefaultAmount(gameStyle: GameStyles, number: PossibleAmountOfImages,): this {
        return this._setOverrideDefaultAmounts(number, gameStyle,)
    }

    //endregion -------------------- Override images --------------------
    protected get _amountOfImages(): PossibleAmountOfImages {
        return this.#amountOfImages
    }

    //endregion -------------------- Getter & setter methods --------------------
    //region -------------------- Build utility methods --------------------

    /**
     * Return an array based on the amount of images received.
     * They need to be in the specific override of {@link _overrideImages}.
     *
     * @param time the time
     * @param gameStyle the game style
     * @param theme the theme
     * @param amountOfImages the amount of images
     * @protected
     */
    protected _getAmountBasedOnValue(time: Times, gameStyle: GameStyles, theme: Themes, amountOfImages: PossibleAmountOfImages,): readonly PossibleAmountOfImages[]
    /**
     * Return an array based on the amount of images received.
     * But it can be overridden by {@link _overrideImages} if there is one.
     *
     * @param time the game style in every possible time (there can only be one)
     * @param gameStyle the game style
     * @param theme The game style in every possible theme (there can only be one)
     * @param amountOfImages the amount of images
     * @protected
     */
    protected _getAmountBasedOnValue(time: null, gameStyle: GameStyles, theme: null, amountOfImages: PossibleAmountOfImages,): readonly PossibleAmountOfImages[]
    protected _getAmountBasedOnValue(time: Nullable<Times>, gameStyle: GameStyles, theme: Nullable<Themes>, amountOfImages: PossibleAmountOfImages,): readonly PossibleAmountOfImages[] {
        if (time == null || theme == null) {
            const timeIterator = Times[Symbol.iterator]()
            let nextTime = timeIterator.next()
            while (!nextTime.done) {
                const amount = this._overrideImages.get(nextTime.value)?.get(gameStyle)?.get(GROUND)
                if (amount != null)
                    return [amount,]
                nextTime = timeIterator.next()
            }
        } else {
            const amount = this._overrideImages.get(time)?.get(gameStyle)?.get(theme)
            if (amount != null)
                return [amount,]
        }
        return [...new Array(this._overrideDefaultAmounts.get(gameStyle) ?? amountOfImages)]
            .map((_, index,) => index + 1 as PossibleAmountOfImages)
    }

    protected _createDefaultImages(): ReadonlyMap<GameStyles, readonly EditorImageFile[]> {
        const amountOfImages = this._amountOfImages

        return new Map(this._gameStyles.map(gameStyle => [gameStyle, this._getAmountBasedOnValue(null, gameStyle, null, amountOfImages,).map(index => this._createImageFile(gameStyle, null, false, index,)),]))
    }

    protected _createImages(): ReadonlyMap<Times, ReadonlyMap<GameStyles, ReadonlyMap<Themes, readonly EditorImageFile[]>>> {
        const amountOfImages = this._amountOfImages
        return this._createNewMap((time, gameStyle, theme,) => this._getAmountBasedOnValue(time, gameStyle, theme, amountOfImages,),)
    }

    //endregion -------------------- Build utility methods --------------------


}
