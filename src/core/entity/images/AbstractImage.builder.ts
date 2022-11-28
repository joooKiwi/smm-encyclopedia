import type {Builder}                          from '../../../util/builder/Builder'
import type {ExtendedList}                     from '../../../util/extended/ExtendedList'
import type {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles'
import type {Image}                            from './Image'
import type {NullOr}                           from '../../../util/types'

import {ExtendedSetContainer} from '../../../util/extended/ExtendedSet.container'
import {GameStyles}           from './GameStyles'

//region -------------------- Import from deconstruction --------------------

const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

export abstract class AbstractImageBuilder<NAME extends string = string, AMOUNT extends number = number, >
    implements Builder<Image> {

    //region -------------------- Fields --------------------

    static readonly #GAME_STYLE_ARRAY = GameStyles.values.toArray()

    readonly #simpleImageName
    readonly #imageNumber

    #gameStyles?: ExtendedList<GameStyles>

    //endregion -------------------- Fields --------------------

    protected constructor(simpleImageName: NAME, imageNumber?: AMOUNT,)
    protected constructor(simpleImageName: NAME, imageNumber: NullOr<AMOUNT> = null,) {
        this.#simpleImageName = simpleImageName
        this.#imageNumber = imageNumber

    }

    //region -------------------- Getter & setter methods --------------------

    public get simpleImageName(): NAME {
        return this.#simpleImageName
    }

    public get imageNumber(): NullOr<AMOUNT> {
        return this.#imageNumber
    }

    //region -------------------- Game Style --------------------

    private get __gameStyles(): ExtendedList<GameStyles> {
        return this.#gameStyles ??= new ExtendedSetContainer()
    }

    protected get _gameStyles(): ExtendedList<GameStyles> {
        return this.#gameStyles ?? ExtendedSetContainer.EMPTY
    }

    protected _clearGameStyle(): this {
        this.__gameStyles.clear()
        return this
    }

    protected _addGameStyle(gameStyle: OriginalGameStyles,): this
    protected _addGameStyle(gameStyles: readonly OriginalGameStyles[],): this
    protected _addGameStyle(gameStyles: | OriginalGameStyles | readonly OriginalGameStyles[],): this {
        if (!(gameStyles instanceof Array))
            return this._addGameStyle([gameStyles])
        this.__gameStyles.add(...gameStyles.map(gameStyle => GameStyles.getValue(gameStyle)))

        return this
    }

    protected _setGameStyle(gameStyle: OriginalGameStyles,): this
    protected _setGameStyle(gameStyles: readonly OriginalGameStyles[],): this
    protected _setGameStyle(gameStyles: readonly OriginalGameStyles[], notGameStyles: readonly OriginalGameStyles[],): this
    protected _setGameStyle(gameStyles: | OriginalGameStyles | readonly OriginalGameStyles[], notGameStyles?: readonly OriginalGameStyles[],): this
    protected _setGameStyle(gameStyles: | OriginalGameStyles | readonly OriginalGameStyles[], notGameStyles: readonly OriginalGameStyles[] = [],): this {
        if (!(gameStyles instanceof Array))
            return this._setGameStyle([gameStyles], notGameStyles,)

        const _gameStyles = gameStyles.map(gameStyle => GameStyles.getValue(gameStyle))
        const _notGameStyles = notGameStyles.map(gameStyle => GameStyles.getValue(gameStyle))

        return this._clearGameStyle()
            ._addGameStyle(_gameStyles.filter(gameStyle => !_notGameStyles.includes(gameStyle)),)
    }


    public setGameStyle(): never
    public setGameStyle(...gameStyles: readonly OriginalGameStyles[]): this
    public setGameStyle(...gameStyles: readonly OriginalGameStyles[]): this {
        return this._setGameStyle(gameStyles,)
    }

    public setNotGameStyle(): never
    public setNotGameStyle(...gameStyles: readonly OriginalGameStyles[]): this
    public setNotGameStyle(...gameStyles: readonly OriginalGameStyles[]): this {
        return this._setGameStyle(AbstractImageBuilder.#GAME_STYLE_ARRAY, gameStyles,)
    }


    public setAllGameStyles(): this {
        return this._setGameStyle(AbstractImageBuilder.#GAME_STYLE_ARRAY)
    }


    //region -------------------- Set specific game style --------------------

    public setOnlySMB(): this {
        return this.setGameStyle(SUPER_MARIO_BROS,)
    }

    public setNotSMB(): this {
        return this.setNotGameStyle(SUPER_MARIO_BROS,)
    }

    public setOnlySMB3(): this {
        return this.setGameStyle(SUPER_MARIO_BROS_3,)
    }

    public setNotSMB3(): this {
        return this.setNotGameStyle(SUPER_MARIO_BROS_3,)
    }

    public setOnlySMW(): this {
        return this.setGameStyle(SUPER_MARIO_WORLD,)
    }

    public setNotSMW(): this {
        return this.setNotGameStyle(SUPER_MARIO_WORLD,)
    }

    public setOnlyNSMBU(): this {
        return this.setGameStyle(NEW_SUPER_MARIO_BROS_U,)
    }

    public setNotNSMBU(): this {
        return this.setNotGameStyle(NEW_SUPER_MARIO_BROS_U,)
    }

    public setOnlySM3DW(): this {
        return this.setGameStyle(SUPER_MARIO_3D_WORLD,)
    }

    public setNotSM3DW(): this {
        return this.setNotGameStyle(SUPER_MARIO_3D_WORLD,)
    }


    public setOnlySMBAndSMB3(): this {
        return this.setGameStyle(SUPER_MARIO_BROS, SUPER_MARIO_BROS_3,)
    }

    public setOnlySMWAndNSMBU(): this {
        return this.setGameStyle(SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U,)
    }

    public setNotSMWAndNSMBU(): this {
        return this.setNotGameStyle(SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U,)
    }

    public setNotSMWAndSM3DW(): this {
        return this.setNotGameStyle(SUPER_MARIO_WORLD, SUPER_MARIO_3D_WORLD,)
    }

    public setNotNSMBUAndSM3DW(): this {
        return this.setNotGameStyle(NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD,)
    }

    //endregion -------------------- Set specific game style --------------------

    //endregion -------------------- Game Style --------------------

    //endregion -------------------- Getter & setter methods --------------------

    public abstract build(): Image

}
