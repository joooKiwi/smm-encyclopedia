import type {NullOr}              from '../../util/types'
import type {PossibleEnglishName} from './Instruments.types'

export type PossibleMixedInstrument =
    | 'Unchain Chomp → Piano 1\nStump → Mokugyo'
    | 'Regular → Cymbal\nSideway → Hi-hat'
    | 'Bottom → Hello\nTop → Ok'

export type PossibleInstrument = NullOr<| PossibleEnglishName | PossibleMixedInstrument>
