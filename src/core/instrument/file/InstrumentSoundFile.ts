import type {NonRepeatableSoundFile} from '../../../util/sound/NonRepeatableSoundFile';
import type {PossibleFileName}       from '../Instruments.types';

export interface InstrumentSoundFile<NAME extends PossibleFileName = PossibleFileName, >
    extends NonRepeatableSoundFile<InstrumentSoundPath, NAME, InstrumentSoundExtension> {

}

export type InstrumentSoundPath = 'instrument';
export type InstrumentSoundExtension = 'wav';
