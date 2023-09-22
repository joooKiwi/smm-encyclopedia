import type {PossibleDimension} from 'app/withInterpreter/ListDimension.creator.types'

export interface DimensionOnList<DEFAULT extends PossibleDimension = PossibleDimension,
    SMALL extends PossibleDimension = PossibleDimension,
    MEDIUM extends PossibleDimension = PossibleDimension,
    LARGE extends PossibleDimension = PossibleDimension,
    EXTRA_LARGE extends PossibleDimension = PossibleDimension,
    EXTRA_EXTRA_LARGE extends PossibleDimension = PossibleDimension, > {

    /**
     * The default dimension for the card list (12 by default)
     *
     * @see DefaultDefaultDimension
     */
    get default(): DEFAULT

    /**
     * The dimension for a small screen (4 by default)
     *
     * @see DefaultSmallDimension
     */
    get small(): SMALL

    /**
     * The dimension for a medium screen (3 by default)
     *
     * @see DefaultMediumDimension
     */
    get medium(): MEDIUM

    /**
     * The dimension for a large screen (2 by default)
     *
     * @see DefaultLargeDimension
     */
    get large(): LARGE

    /**
     * The dimension for an extra large screen (<b>null</b> by default)
     *
     * @see DefaultExtraLargeDimension
     */
    get extraLarge(): EXTRA_LARGE

    /**
     * The dimension for an extra extra large screen (<b>null</b> by default)
     *
     * @see DefaultExtraExtraLargeDimension
     */
    get extraExtraLarge(): EXTRA_EXTRA_LARGE

}

export type PossibleDimensionOnList = NullOr<Partial<DimensionOnList>>
export type PossibleDimensionOnCardList = NullOr<| Partial<DimensionOnList> | 'list'>
