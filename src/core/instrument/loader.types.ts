import type {PossibleEnglishName} from 'core/instrument/Instruments.types'
import type {NullOr}              from 'util/types/nullable'

export type PossibleMixedInstrument =
    | 'Unchain Chomp → Piano 1\nStump → Mokugyo'
    | 'Regular → Cymbal\nSideway → Hi-hat'
    | 'Bottom → Hello\nTop → Ok'

export type PossibleInstrument = NullOr<| PossibleEnglishName | PossibleMixedInstrument>
