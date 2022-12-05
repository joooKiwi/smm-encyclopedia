import type {PossibleFileName}       from 'core/instrument/Instruments.types'
import type {NonRepeatableSoundFile} from 'util/sound/NonRepeatableSoundFile'

export interface InstrumentSoundFile<NAME extends PossibleFileName = PossibleFileName, >
    extends NonRepeatableSoundFile<InstrumentSoundPath, NAME, InstrumentSoundExtension> {

}

export type InstrumentSoundPath = 'instrument'
export type InstrumentSoundExtension = 'wav'
