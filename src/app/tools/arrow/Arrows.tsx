import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleContainer, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Arrows.types';
import type {ReactElement}                                                                                                                                                                             from '../../../util/react/ReactProperty';
import type {StaticReference}                                                                                                                                                                          from '../../../util/enum/Enum.types';

import {Enum}                from '../../../util/enum/Enum';
import {EMPTY_REACT_ELEMENT} from '../../../util/emptyReactVariables';
import {ArrowDirections}     from './ArrowDirections';

const {VERTICAL, HORIZONTAL} = ArrowDirections;

/**
 * Every possible arrow direction. It can be a single arrow, joined & bi-directional.<br/>
 * <ol>
 *  <li>Single direction ({@link Arrows.UP up}, {@link Arrows.DOWN down}, {@link Arrows.LEFT left} & {@link Arrows.RIGHT right})</li>
 *  <li>Joined direction ({@link Arrows.VERTICAL_JOINED vertical}, {@link Arrows.HORIZONTAL_JOINED horizontal})</li>
 *  <li>Bi-directional ({@link Arrows.VERTICAL_SEPARATED vertical}, {@link Arrows.HORIZONTAL_SEPARATED horizontal})</li>
 * </ol>
 *
 * @see ArrowDirections
 */
export abstract class Arrows
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static /*readonly*/ UP;
    public static /*readonly*/ DOWN;
    public static /*readonly*/ LEFT;
    public static /*readonly*/ RIGHT;
    public static /*readonly*/ VERTICAL_JOINED;
    public static /*readonly*/ VERTICAL_SEPARATED;
    public static /*readonly*/ HORIZONTAL_JOINED;
    public static /*readonly*/ HORIZONTAL_SEPARATED;

    static {
        this.UP =                   new class ArrowDirections_Up extends Arrows {

            public createCardinalArrow(): ReactElement {
                return <div className="arrow up"/>;
            }

            protected _createArrow(): PossibleArrowCreation {
                return [this.createCardinalArrow(), null,];
            }

        }('arrow-container', VERTICAL, true,);
        this.DOWN =                 new class ArrowDirections_Down extends Arrows {

            public createCardinalArrow(): ReactElement {
                return <div className="arrow down"/>;
            }

            protected _createArrow(): PossibleArrowCreation {
                return [null, this.createCardinalArrow(),];
            }

        }('arrow-container', VERTICAL, true,);
        this.LEFT =                 new class ArrowDirections_Left extends Arrows {

            public createCardinalArrow(): ReactElement {
                return <div className="arrow left"/>;
            }

            protected _createArrow(): PossibleArrowCreation {
                return [this.createCardinalArrow(), null,];
            }

        }('arrow-container', HORIZONTAL, true,);
        this.RIGHT =                new class ArrowDirections_Right extends Arrows {

            public createCardinalArrow(): ReactElement {
                return <div className="arrow right"/>;
            }

            protected _createArrow(): PossibleArrowCreation {
                return [null, this.createCardinalArrow(),];
            }

        }('arrow-container', HORIZONTAL, true,);
        this.VERTICAL_JOINED =      new class ArrowDirections_Vertical extends Arrows {

            protected _createArrow(): PossibleArrowCreation {
                return [Arrows.UP.createCardinalArrow(), Arrows.DOWN.createCardinalArrow(),];
            }

        }('arrow-container', VERTICAL, false,);
        this.VERTICAL_SEPARATED =   new class ArrowDirections_VerticalSeparated extends Arrows {

            protected _createArrow(): PossibleArrowCreation {
                return [Arrows.UP.createArrow(), Arrows.DOWN.createArrow(),];
            }

        }('arrows-container', VERTICAL, false,);
        this.HORIZONTAL_JOINED =    new class ArrowDirections_Horizontal extends Arrows {

            protected _createArrow(): PossibleArrowCreation {
                return [Arrows.LEFT.createCardinalArrow(), Arrows.RIGHT.createCardinalArrow(),];
            }

        }('arrow-container', HORIZONTAL, true,);
        this.HORIZONTAL_SEPARATED = new class ArrowDirections_HorizontalSeparated extends Arrows {

            protected _createArrow(): PossibleArrowCreation {
                return [Arrows.LEFT.createArrow(), Arrows.RIGHT.createArrow(),];
            }

        }('arrows-container', HORIZONTAL, false,);
    }

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: Arrows;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #container;
    readonly #direction;
    readonly #doesDisplayLine;
    #arrows?: PossibleArrowCreation;

    //endregion -------------------- Attributes --------------------

    private constructor(container: PossibleContainer, direction: ArrowDirections, doesDisplayLine: boolean,) {
        super();
        this.#direction = direction;
        this.#container = container;
        this.#doesDisplayLine = doesDisplayLine;
    }

    //region -------------------- Getter methods --------------------

    private get __container(): PossibleContainer {
        return this.#container;
    }

    /**
     * Get the arrow direction object.
     */
    public get direction(): ArrowDirections {
        return this.#direction;
    }

    private get __doesDisplayLine(): boolean {
        return this.#doesDisplayLine;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Create a cardinal arrow. Meaning that it can be {@link Arrows.UP up}, {@link Arrows.DOWN down},
     * {@link Arrows.LEFT left} & {@link Arrows.RIGHT right}.<br/>
     * The other combinations (vertical & horizontal) will throw an {@link EvalError}.
     *
     * @throws EvalError if the arrow contained is not {@link Arrows.UP up}, {@link Arrows.DOWN down}, {@link Arrows.LEFT left} or {@link Arrows.RIGHT right}.
     */
    public createCardinalArrow(): ReactElement {
        throw new EvalError('This method should never be called from a non-cardinal direction.');
    }

    private get __arrows(): PossibleArrowCreation {
        return this.#arrows ??= this._createArrow();
    }

    protected abstract _createArrow(): PossibleArrowCreation;

    /**
     * Create an arrow contained in a {@link HTMLDivElement div} having the class "arrow-container" or "arrows-container"
     * combined with the {@link ArrowDirections direction}.
     */
    public createArrow(): ReactElement {
        const [firstArrow, secondArrow,] = this.__arrows;

        return <div className={`${this.__container} ${this.direction.value}`}>
            {firstArrow ?? EMPTY_REACT_ELEMENT}
            {this.__doesDisplayLine ? <div className="line"/> : EMPTY_REACT_ELEMENT}
            {secondArrow ?? EMPTY_REACT_ELEMENT}
        </div>;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Arrows> {
        return Arrows;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(value: | null | undefined,): null
    public static getValue<O extends Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(nameOrCharacter: S,): EnumByPossibleString<S>
    public static getValue<S extends string, >(nameOrCharacter: S,): EnumByString<S>
    public static getValue<I extends Arrows, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Arrows
    public static getValue(value: PossibleValue,): | Arrows | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleArrowCreation = | readonly [ReactElement, null,] | readonly [null, ReactElement,] | readonly [ReactElement, ReactElement,];
