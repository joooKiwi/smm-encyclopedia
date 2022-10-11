import type {InstrumentSoundExtension, InstrumentSoundFile, InstrumentSoundPath} from './InstrumentSoundFile'
import type {PossibleFileName}                                                   from '../Instruments.types'

import {NonRepeatableSoundFileContainer} from '../../../util/sound/NonRepeatableSoundFile.container'

export class InstrumentSoundFileContainer<NAME extends PossibleFileName = PossibleFileName, >
    extends NonRepeatableSoundFileContainer<InstrumentSoundPath, NAME, InstrumentSoundExtension>
    implements InstrumentSoundFile<NAME> {

    public constructor(name: NAME,) {
        super('instrument', name, 'wav',)
    }

}