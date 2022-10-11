import type {DefaultDefaultDimension, DefaultDimensionOnCardList, DefaultExtraExtraLargeDimension, DefaultExtraLargeDimension, DefaultLargeDimension, DefaultMediumDimension, DefaultSmallDimension, PossibleDimension} from './ListDimension.creator.types'
import type {ObjectHolder}                                                                                                                                                                                              from '../../util/holder/ObjectHolder'

import {ObjectHolderContainer} from '../../util/holder/ObjectHolder.container'
import {DimensionOnList}       from '../interpreter/DimensionOnList'

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
    #smallHolder: ObjectHolder<| SMALL | DefaultSmallDimension>
    #mediumHolder: ObjectHolder<| MEDIUM | DefaultMediumDimension>
    #largeHolder: ObjectHolder<| LARGE | DefaultLargeDimension>
    #extraLargeHolder: ObjectHolder<| EXTRA_LARGE | DefaultExtraLargeDimension>
    #extraExtraLargeHolder: ObjectHolder<| EXTRA_EXTRA_LARGE | DefaultExtraExtraLargeDimension>

    //endregion -------------------- Fields --------------------

    public constructor(dimension: | Partial<DimensionOnList<DEFAULT, SMALL, MEDIUM, LARGE, EXTRA_LARGE, EXTRA_EXTRA_LARGE>> | null,) {
        this.#dimension = dimension
        this.#smallHolder = new ObjectHolderContainer(() => {
            const value = this.dimensionOrDefault.small
            return value === undefined ? this.defaultSmall : value
        })
        this.#mediumHolder = new ObjectHolderContainer(() => {
            const value = this.dimensionOrDefault.medium
            return value === undefined ? ListDimensionCreator.defaultMedium : value
        })
        this.#largeHolder = new ObjectHolderContainer(() => {
            const value = this.dimensionOrDefault.large
            return value === undefined ? this.defaultLarge : value
        })
        this.#extraLargeHolder = new ObjectHolderContainer(() => {
            const value = this.dimensionOrDefault.extraLarge
            return value === undefined ? this.defaultExtraLarge : value
        })
        this.#extraExtraLargeHolder = new ObjectHolderContainer(() => {
            const value = this.dimensionOrDefault.extraExtraLarge
            return value === undefined ? this.defaultExtraExtraLarge : value
        })
    }

    //region -------------------- Getter methods --------------------

    /** The dimension to interpret */
    public get dimension(): | Partial<DimensionOnList<DEFAULT, SMALL, MEDIUM, LARGE, EXTRA_LARGE>> | null {
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
        return this.#smallHolder.get
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
        return this.#mediumHolder.get
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
        return this.#largeHolder.get
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
        return this.#extraLargeHolder.get
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
        return this.#extraExtraLargeHolder.get
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
