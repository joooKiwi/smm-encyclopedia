import type {Builder}                     from '../../../util/Builder';
import type {Image}                       from './Image';
import {ExtendedList}                     from '../../../util/extended/ExtendedList';
import {GameStyles}                       from './GameStyles';
import {ExtendedSet}                      from '../../../util/extended/ExtendedSet';
import {GameStyles as OriginalGameStyles} from '../../gameStyle/GameStyles';
import {PossibleGameStyle}                from './GameStyles.types';

export abstract class AbstractImageBuilder<NAME extends string = string, AMOUNT extends number = number, >
    implements Builder<Image> {

    //region -------------------- Attributes --------------------

    static readonly #EMPTY_SET: ExtendedList<never> = new ExtendedSet();
    static readonly #GAME_STYLE_ARRAY = OriginalGameStyles.values;

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

    protected _addGameStyle(gameStyle: PossibleGameStyle,): this
    protected _addGameStyle(gameStyles: readonly PossibleGameStyle[],): this
    protected _addGameStyle(gameStyles: | PossibleGameStyle | readonly PossibleGameStyle[],): this {
        if (!(gameStyles instanceof Array))
            return this._addGameStyle([gameStyles]);
        this.__gameStyles.add(...gameStyles.map(gameStyle => GameStyles.getValue(gameStyle)));

        return this;
    }

    protected _setGameStyle(gameStyle: PossibleGameStyle,): this
    protected _setGameStyle(gameStyles: readonly PossibleGameStyle[],): this
    protected _setGameStyle(gameStyles: readonly PossibleGameStyle[], notGameStyles: readonly PossibleGameStyle[],): this
    protected _setGameStyle(gameStyles: | PossibleGameStyle | readonly PossibleGameStyle[], notGameStyles?: readonly PossibleGameStyle[],): this
    protected _setGameStyle(gameStyles: | PossibleGameStyle | readonly PossibleGameStyle[], notGameStyles: readonly PossibleGameStyle[] = [],): this {
        if (!(gameStyles instanceof Array))
            return this._setGameStyle([gameStyles], notGameStyles,);
        return this._clearGameStyle()
            ._addGameStyle(gameStyles.filter(gameStyle => !notGameStyles.includes(gameStyle)),);
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
        return this.setGameStyle(OriginalGameStyles.SUPER_MARIO_3D_WORLD,);
    }

    public setNotSM3DW(): this {
        return this.setNotGameStyle(OriginalGameStyles.SUPER_MARIO_3D_WORLD,);
    }

    //endregion -------------------- Game Style --------------------

    //endregion -------------------- Getter & setter methods --------------------

    public abstract build(): Image;

}
