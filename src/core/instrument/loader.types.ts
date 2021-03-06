import type {PossibleEnglishName} from './Instruments.types';

export type PossibleMixedInstrument =
    | 'Unchain Chomp → Piano 1\nStump → Mokugyo'
    | 'Regular → Cymbal\nSideway → Hi-Hat'
    | 'Bottom → Hello\nTop → Ok'

export type PossibleInstrument = | PossibleEnglishName | PossibleMixedInstrument | null;
