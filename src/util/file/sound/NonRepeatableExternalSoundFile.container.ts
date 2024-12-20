import type {NonRepeatableSoundFile}     from 'util/file/sound/NonRepeatableSoundFile'
import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'

import {AbstractExternalSoundFile} from 'util/file/sound/AbstractExternalSoundFile'
import {RepeatableTypes}           from 'util/file/sound/RepeatableTypes'

export class NonRepeatableExternalSoundFileContainer<const PATH extends string = string,
    const NAME extends string = string,
    const EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends AbstractExternalSoundFile<PATH, NAME, EXTENSION, null>
    implements NonRepeatableSoundFile<PATH, NAME, EXTENSION> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        super(path, name, extension, null,)
    }

    public override readonly repeatableType = RepeatableTypes.NONE

}
