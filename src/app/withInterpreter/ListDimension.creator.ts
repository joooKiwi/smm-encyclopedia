import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {DimensionOnList}                                                                                                                                                                                           from 'app/interpreter/DimensionOnList'
import type {DefaultDefaultDimension, DefaultDimensionOnCardList, DefaultExtraExtraLargeDimension, DefaultExtraLargeDimension, DefaultLargeDimension, DefaultMediumDimension, DefaultSmallDimension, PossibleDimension} from 'app/withInterpreter/ListDimension.creator.types'

export class ListDimensionCreator<DEFAULT extends PossibleDimension = PossibleDimension,
    SMALL extends PossibleDimension = PossibleDimension,
    MEDIUM extends PossibleDimension = PossibleDimension,
    LARGE extends PossibleDimension = PossibleDimension,
    EXTRA_LARGE extends PossibleDimension = PossibleDimension,
    EXTRA_EXTRA_LARGE extends PossibleDimension = PossibleDimension, >
    implements DimensionOnList<| NonNullable<DEFAULT> | DefaultDefaultDimension, | SMALL | DefaultSmallDimension, | MEDIUM | DefaultMediumDimension, | LARGE | DefaultLargeDimension, | EXTRA_LARGE | DefaultExtraLargeDimension, | EXTRA_EXTRA_LARGE | DefaultExtraExtraLargeDimension> {

    //region -------------------- Fields --------------------

    public static readonly DEFAULT_DIMENSION: DefaultDimensionOnCardList = {
        default: 12,
        small: 4,
        medium: 3,
        large: 2,
        extraLarge: null,
        extraExtraLarge: null,
    }

    readonly #dimension
    #smallHolder: Lazy<| SMALL | DefaultSmallDimension>
    #mediumHolder: Lazy<| MEDIUM | DefaultMediumDimension>
    #largeHolder: Lazy<| LARGE | DefaultLargeDimension>
    #extraLargeHolder: Lazy<| EXTRA_LARGE | DefaultExtraLargeDimension>
    #extraExtraLargeHolder: Lazy<| EXTRA_EXTRA_LARGE | DefaultExtraExtraLargeDimension>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(dimension: NullOr<Partial<DimensionOnList<DEFAULT, SMALL, MEDIUM, LARGE, EXTRA_LARGE, EXTRA_EXTRA_LARGE>>>,) {
        this.#dimension = dimension
        this.#smallHolder = lazy(() => {
            const value = this.dimensionOrDefault.small
            return value === undefined ? this.defaultSmall : value
        },)
        this.#mediumHolder = lazy(() => {
            const value = this.dimensionOrDefault.medium
            return value === undefined ? ListDimensionCreator.defaultMedium : value
        },)
        this.#largeHolder = lazy(() => {
            const value = this.dimensionOrDefault.large
            return value === undefined ? this.defaultLarge : value
        },)
        this.#extraLargeHolder = lazy(() => {
            const value = this.dimensionOrDefault.extraLarge
            return value === undefined ? this.defaultExtraLarge : value
        },)
        this.#extraExtraLargeHolder = lazy(() => {
            const value = this.dimensionOrDefault.extraExtraLarge
            return value === undefined ? this.defaultExtraExtraLarge : value
        },)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    /** The dimension to interpret */
    public get dimension(): NullOr<Partial<DimensionOnList<DEFAULT, SMALL, MEDIUM, LARGE, EXTRA_LARGE>>> {
        return this.#dimension
    }

    /** Get the dimension stored or the default dimension if null */
    public get dimensionOrDefault(): this['dimension'] extends null ? DefaultDimensionOnCardList : Partial<DimensionOnList<DEFAULT, SMALL, MEDIUM, LARGE, EXTRA_LARGE, EXTRA_EXTRA_LARGE>> {
        return (this.dimension ?? ListDimensionCreator.DEFAULT_DIMENSION) as (this['dimension'] extends null ? DefaultDimensionOnCardList : Partial<DimensionOnList<DEFAULT, SMALL, MEDIUM, LARGE, EXTRA_LARGE, EXTRA_EXTRA_LARGE>>)
    }

    //region -------------------- Default dimension --------------------

    public get default(): | NonNullable<DEFAULT> | DefaultDefaultDimension {
        return this.dimension?.default ?? ListDimensionCreator.DEFAULT_DIMENSION.default
    }

    public static get defaultDefault(): DefaultDefaultDimension {
        return this.DEFAULT_DIMENSION.default
    }

    public get defaultDefault(): DefaultDefaultDimension {
        return ListDimensionCreator.defaultDefault
    }

    //endregion -------------------- Default dimension --------------------
    //region -------------------- Small dimension --------------------

    public get small(): | SMALL | DefaultSmallDimension {
        return this.#smallHolder.value
    }

    public static get defaultSmall(): DefaultSmallDimension {
        return this.DEFAULT_DIMENSION.small
    }

    public get defaultSmall(): DefaultSmallDimension {
        return ListDimensionCreator.defaultSmall
    }

    //endregion -------------------- Small dimension --------------------
    //region -------------------- Medium dimension --------------------

    public get medium(): | MEDIUM | DefaultMediumDimension {
        return this.#mediumHolder.value
    }

    public static get defaultMedium(): DefaultMediumDimension {
        return this.DEFAULT_DIMENSION.medium
    }

    public get defaultMedium(): DefaultMediumDimension {
        return ListDimensionCreator.defaultMedium
    }

    //endregion -------------------- Medium dimension --------------------
    //region -------------------- Large dimension --------------------

    public get large(): | LARGE | DefaultLargeDimension {
        return this.#largeHolder.value
    }

    public static get defaultLarge(): DefaultLargeDimension {
        return this.DEFAULT_DIMENSION.large
    }

    public get defaultLarge(): DefaultLargeDimension {
        return ListDimensionCreator.defaultLarge
    }

    //endregion -------------------- Large dimension --------------------
    //region -------------------- Extra large dimension --------------------

    public get extraLarge(): | EXTRA_LARGE | DefaultExtraLargeDimension {
        return this.#extraLargeHolder.value
    }

    public static get defaultExtraLarge(): DefaultExtraLargeDimension {
        return this.DEFAULT_DIMENSION.extraLarge
    }

    public get defaultExtraLarge(): DefaultExtraLargeDimension {
        return ListDimensionCreator.defaultExtraLarge
    }

    //endregion -------------------- Extra large dimension --------------------
    //region -------------------- Extra extra large dimension --------------------

    public get extraExtraLarge(): | EXTRA_EXTRA_LARGE | DefaultExtraExtraLargeDimension {
        return this.#extraExtraLargeHolder.value
    }

    public static get defaultExtraExtraLarge(): DefaultExtraExtraLargeDimension {
        return this.DEFAULT_DIMENSION.extraExtraLarge
    }

    public get defaultExtraExtraLarge(): DefaultExtraExtraLargeDimension {
        return ListDimensionCreator.defaultExtraExtraLarge
    }

    //endregion -------------------- Extra extra large dimension --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    // public createDimensions(): PossibleClassDimension<this['default'], this['small'], this['medium'], this['large'], this['extraLarge'], this['extraExtraLarge']>
    /**
     * <p>
     *     Create the dimension of "card-list-container".
     * </p>
     *
     * <p>
     *     It create the attribute col-<b>[DIMENSION]</b>-<b>[AMOUNT]</b>.<br/>
     *     It will always have a default dimension (col-<b>[AMOUNT]</b>).
     * </p>
     *
     * <p>
     *     But for the other dimensions, they can be nullable.
     *     The format is "col-<b>[DIMENSION]</b> [col-sm-<b>[DIMENSION]</b>]? [col-md-<b>[DIMENSION]</b>]? [col-lg-<b>[DIMENSION]</b>]? [col-xl-<b>[DIMENSION]</b>]? [col-xxl-<b>[DIMENSION]</b>]?"
     * </p>
     * @see PossibleClassDimension
     */
    public createDimensions(): string {
        const sm = this.small,
            md = this.medium,
            lg = this.large,
            xl = this.extraLarge,
            xxl = this.extraExtraLarge

        return `col-${this.default} ${sm == null ? '' : `col-sm-${sm} `}${md == null ? '' : `col-md-${md} `}${lg == null ? '' : `col-lg-${lg} `}${xl == null ? '' : `col-xl-${xl} `}${xxl == null ? '' : `col-xxl-${xxl} `}`
    }

    //endregion -------------------- Methods --------------------

}
