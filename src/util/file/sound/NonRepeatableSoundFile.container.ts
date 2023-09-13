import type {NonRepeatableSoundFile}     from 'util/file/sound/NonRepeatableSoundFile'
import type {PossibleSoundFileExtension} from 'util/file/sound/SoundFile'

import {AbstractSoundFile} from 'util/file/sound/AbstractSoundFile'
import {RepeatableTypes}   from 'util/file/sound/RepeatableTypes'

export class NonRepeatableSoundFileContainer<const out PATH extends string = string,
    const out NAME extends string = string,
    const out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends AbstractSoundFile<PATH, NAME, EXTENSION, null>
    implements NonRepeatableSoundFile<PATH, NAME, EXTENSION> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        super(path, name, extension, null,)
    }

    public override readonly repeatableType = RepeatableTypes.NONE

}
