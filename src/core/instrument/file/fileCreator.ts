import type {PossibleFileName}    from 'core/instrument/Instruments.types'
import type {InstrumentSoundFile} from 'core/instrument/file/InstrumentSoundFile'

import {NonRepeatableInternalSoundFileContainer} from 'util/file/sound/NonRepeatableInternalSoundFile.container'

/**
 * Create a simple {@link InstrumentSoundFile} from a {@link name} provided
 *
 * @param name The image name
 */
export function instrumentSound<const NAME extends PossibleFileName, >(name: NAME,): InstrumentSoundFile<NAME> {
    return new NonRepeatableInternalSoundFileContainer('instrument', name, 'wav',)
}
