import type {DimensionOnList}            from '../interpreter/DimensionOnList'
import type {NullOr}                     from '../../util/types'
import type {PossibleBootstrapDimension} from '../../bootstrap/Bootstrap.types'

export type DefaultDefaultDimension = 12
export type DefaultSmallDimension = 4
export type DefaultMediumDimension = 3
export type DefaultLargeDimension = 2
export type DefaultExtraLargeDimension = null
export type DefaultExtraExtraLargeDimension = null
export type DefaultDimensionOnCardList = DimensionOnList<DefaultDefaultDimension, DefaultSmallDimension, DefaultMediumDimension, DefaultLargeDimension, DefaultExtraLargeDimension, DefaultExtraExtraLargeDimension>

export type PossibleClassDimension<DEFAULT extends PossibleDimension = PossibleDimension, SMALL extends PossibleDimension = PossibleDimension, MEDIUM extends PossibleDimension = PossibleDimension, LARGE extends PossibleDimension = PossibleDimension, EXTRA_LARGE extends PossibleDimension = PossibleDimension, EXTRA_EXTRA_LARGE extends PossibleDimension = PossibleDimension, > =
    `${ClassDimension<DEFAULT>}${ClassDimension<SMALL>}${ClassDimension<MEDIUM>}${ClassDimension<LARGE>}${ClassDimension<EXTRA_LARGE>}${ClassDimension<EXTRA_EXTRA_LARGE>}`

type ClassDimension<T extends PossibleDimension = PossibleDimension, > = T extends null ? '' : `col${T} `

export type PossibleDimension = NullOr<| PossibleBootstrapDimension | 'auto'>
