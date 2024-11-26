import type {NullOrString} from '@joookiwi/type'

import type {PossibleEnglishName} from 'core/instrument/Instruments.types'

export type PossibleMixedInstrument =
    | 'Unchain Chomp → Piano 1\nStump → Mokugyo'
    | 'Regular → Cymbal\nSideway → Hi-hat'
    | 'Bottom → Hello\nTop → Ok'

export type PossibleInstrument = NullOrString<| PossibleEnglishName | PossibleMixedInstrument>
