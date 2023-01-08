import type {PossibleFileName}                                                   from 'core/instrument/Instruments.types'
import type {InstrumentSoundExtension, InstrumentSoundFile, InstrumentSoundPath} from 'core/instrument/file/InstrumentSoundFile'

import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

export class InstrumentSoundFileContainer<NAME extends PossibleFileName = PossibleFileName, >
    extends NonRepeatableSoundFileContainer<InstrumentSoundPath, NAME, InstrumentSoundExtension>
    implements InstrumentSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('instrument', name, 'wav',)
    }

}