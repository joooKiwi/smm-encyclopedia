import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Names, Ordinals} from 'app/tools/arrow/Arrows.types'

import {ArrowDirections} from 'app/tools/arrow/ArrowDirections'

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

    public static readonly UP =                   new class ArrowDirections_Up extends Arrows {

        public override createArrow(): ReactJSXElement {
            return <div className="arrow-container vertical">
                <div className="arrow up"/>
                <div className="line"/>
            </div>
        }

    }(ArrowDirections.VERTICAL,)
    public static readonly DOWN =                 new class ArrowDirections_Down extends Arrows {

        public override createArrow(): ReactJSXElement {
            return <div className="arrow-container vertical">
                <div className="line"/>
                <div className="arrow down"/>
            </div>
        }

    }(ArrowDirections.VERTICAL,)
    public static readonly LEFT =                 new class ArrowDirections_Left extends Arrows {

        public override createArrow(): ReactJSXElement {
            return <div className="arrow-container horizontal">
                <div className="arrow left"/>
                <div className="line"/>
            </div>
        }

    }(ArrowDirections.HORIZONTAL,)
    public static readonly RIGHT =                new class ArrowDirections_Right extends Arrows {

        public override createArrow(): ReactJSXElement {
            return <div className="arrow-container horizontal">
                <div className="line"/>
                <div className="arrow right"/>
            </div>
        }

    }(ArrowDirections.HORIZONTAL,)
    public static readonly VERTICAL_JOINED =      new class ArrowDirections_Vertical extends Arrows {

        public override createArrow(): ReactJSXElement {
            return <div className="arrow-container vertical">
                <div className="arrow up"/>
                <div className="line"/>
                <div className="arrow down"/>
            </div>
        }

    }(ArrowDirections.VERTICAL,)
    public static readonly VERTICAL_SEPARATED =   new class ArrowDirections_VerticalSeparated extends Arrows {

        public override createArrow(): ReactJSXElement {
            return <div className="arrows-container vertical">
                <div className="arrow-container vertical">
                    <div className="arrow up"/>
                    <div className="line"/>
                </div>
                <div className="arrow-container vertical">
                    <div className="line"/>
                    <div className="arrow down"/>
                </div>
            </div>
        }

    }(ArrowDirections.VERTICAL,)
    public static readonly HORIZONTAL_JOINED =    new class ArrowDirections_Horizontal extends Arrows {

        public override createArrow(): ReactJSXElement {
            return <div className="arrow-container horizontal">
                <div className="arrow left"/>
                <div className="line"/>
                <div className="arrow right"/>
            </div>
        }

    }(ArrowDirections.HORIZONTAL,)
    public static readonly HORIZONTAL_SEPARATED = new class ArrowDirections_HorizontalSeparated extends Arrows {

        public override createArrow(): ReactJSXElement {
            return <div className="arrows-container horizontal">
                <div className="arrow-container horizontal">
                    <div className="arrow left"/>
                    <div className="line"/>
                </div>
                <div className="arrow-container horizontal">
                    <div className="line"/>
                    <div className="arrow right"/>
                </div>
            </div>
        }

    }(ArrowDirections.HORIZONTAL,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<Arrows, typeof Arrows> = class CompanionEnum_Arrows
        extends CompanionEnum<Arrows, typeof Arrows> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Arrows

        private constructor() {
            super(Arrows,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Arrows()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #direction

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(direction: ArrowDirections,) {
        super()
        this.#direction = direction
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    /**
     * Get the arrow direction object.
     */
    public get direction(): ArrowDirections {
        return this.#direction
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Create an arrow contained in a {@link HTMLDivElement div} having the class "arrow-container" or "arrows-container"
     * combined with the {@link ArrowDirections direction}.
     */
    public abstract createArrow(): ReactJSXElement

    //endregion -------------------- Methods --------------------

}
