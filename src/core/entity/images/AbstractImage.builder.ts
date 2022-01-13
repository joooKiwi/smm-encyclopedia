import type {Builder}                          from '../../../util/Builder';
import type {ExtendedList}                     from '../../../util/extended/ExtendedList';
import type {Image}                            from './Image';
import type {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles';

import {ExtendedSet} from '../../../util/extended/ExtendedSet';
import {GameStyles}  from './GameStyles';

export abstract class AbstractImageBuilder<NAME extends string = string, AMOUNT extends number = number, >
    implements Builder<Image> {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_SET: ExtendedList<never> = new ExtendedSet();
    static readonly #GAME_STYLE_ARRAY = GameStyles.values;

    readonly #simpleImageName;
    readonly #imageNumber;

    #gameStyles?: ExtendedList<GameStyles>;

    //endregion -------------------- Attributes --------------------

    protected constructor(simpleImageName: NAME, imageNumber?: AMOUNT,)
    protected constructor(simpleImageName: NAME, imageNumber: | AMOUNT | null = null,) {
        this.#simpleImageName = simpleImageName;
        this.#imageNumber = imageNumber;

    }

    //region -------------------- Getter & setter methods --------------------

    public get simpleImageName(): NAME {
        return this.#simpleImageName;
    }

    public get imageNumber(): | AMOUNT | null {
        return this.#imageNumber;
    }

    //region -------------------- Game Style --------------------

    private get __gameStyles(): ExtendedList<GameStyles> {
        return this.#gameStyles ??= new ExtendedSet();
    }

    protected get _gameStyles(): ExtendedList<GameStyles> {
        return this.#gameStyles ?? AbstractImageBuilder.#EMPTY_SET;
    }

    protected _clearGameStyle(): this {
        this.__gameStyles.clear();
        return this;
    }

    protected _addGameStyle(gameStyle: OriginalGameStyles,): this
    protected _addGameStyle(gameStyles: readonly OriginalGameStyles[],): this
    protected _addGameStyle(gameStyles: | OriginalGameStyles | readonly OriginalGameStyles[],): this {
        if (!(gameStyles instanceof Array))
            return this._addGameStyle([gameStyles]);
        this.__gameStyles.add(...gameStyles.map(gameStyle => GameStyles.getValue(gameStyle)));

        return this;
    }

    protected _setGameStyle(gameStyle: OriginalGameStyles,): this
    protected _setGameStyle(gameStyles: readonly OriginalGameStyles[],): this
    protected _setGameStyle(gameStyles: readonly OriginalGameStyles[], notGameStyles: readonly OriginalGameStyles[],): this
    protected _setGameStyle(gameStyles: | OriginalGameStyles | readonly OriginalGameStyles[], notGameStyles?: readonly OriginalGameStyles[],): this
    protected _setGameStyle(gameStyles: | OriginalGameStyles | readonly OriginalGameStyles[], notGameStyles: readonly OriginalGameStyles[] = [],): this {
        if (!(gameStyles instanceof Array))
            return this._setGameStyle([gameStyles], notGameStyles,);

        const _gameStyles = gameStyles.map(gameStyle => GameStyles.getValue(gameStyle));
        const _notGameStyles = notGameStyles.map(gameStyle => GameStyles.getValue(gameStyle));

        return this._clearGameStyle()
            ._addGameStyle(_gameStyles.filter(gameStyle => !_notGameStyles.includes(gameStyle)),);
    }


    public setGameStyle(): never
    public setGameStyle(...gameStyles: readonly OriginalGameStyles[]): this
    public setGameStyle(...gameStyles: readonly OriginalGameStyles[]): this {
        return this._setGameStyle(gameStyles,);
    }

    public setNotGameStyle(): never
    public setNotGameStyle(...gameStyles: readonly OriginalGameStyles[]): this
    public setNotGameStyle(...gameStyles: readonly OriginalGameStyles[]): this {
        return this._setGameStyle(AbstractImageBuilder.#GAME_STYLE_ARRAY, gameStyles,);
    }


    public setAllGameStyles(): this {
        return this._setGameStyle(AbstractImageBuilder.#GAME_STYLE_ARRAY);
    }

    public setOnlySM3DW(): this {
        return this.setGameStyle(GameStyles.SUPER_MARIO_3D_WORLD,);
    }

    public setNotSM3DW(): this {
        return this.setNotGameStyle(GameStyles.SUPER_MARIO_3D_WORLD,);
    }

    //endregion -------------------- Game Style --------------------

    //endregion -------------------- Getter & setter methods --------------------

    public abstract build(): Image;

}
