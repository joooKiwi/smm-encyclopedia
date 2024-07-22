import type {PossibleFileName}    from 'core/instrument/Instruments.types'
import type {InstrumentSoundFile} from 'core/instrument/file/InstrumentSoundFile'

import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

/**
 * Create a simple {@link InstrumentSoundFile} from a {@link name} provided
 *
 * @param name The image name
 */
export function instrumentSound<const NAME extends PossibleFileName, >(name: NAME,): InstrumentSoundFile<NAME> {
    return new NonRepeatableSoundFileContainer('instrument', name, 'wav',)
}
