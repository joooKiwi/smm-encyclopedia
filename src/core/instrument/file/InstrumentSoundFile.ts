import type {PossibleFileName}       from 'core/instrument/Instruments.types'
import type {NonRepeatableSoundFile} from 'util/file/sound/NonRepeatableSoundFile'

/** A {@link NonRepeatableSoundFile} made to be related to an {@link Instruments} */
export type InstrumentSoundFile<NAME extends PossibleFileName = PossibleFileName, > = NonRepeatableSoundFile<'instrument', NAME, 'wav'>
