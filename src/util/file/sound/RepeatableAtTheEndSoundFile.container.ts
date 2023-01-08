import type {RepeatableAtTheEndSoundFile} from 'util/file/sound/RepeatableAtTheEndSoundFile'
import type {PossibleSoundFileExtension}  from 'util/file/sound/SoundFile'

import {AbstractRepeatableSoundFile} from 'util/file/sound/AbstractRepeatableSoundFile'
import {RepeatableTypes}             from 'util/file/sound/RepeatableTypes'

export class RepeatableAtTheEndSoundFileContainer<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends AbstractRepeatableSoundFile<PATH, NAME, EXTENSION, null>
    implements RepeatableAtTheEndSoundFile<PATH, NAME, EXTENSION> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        super(path, name, extension, null,)
    }

    public override readonly repeatableType = RepeatableTypes.AT_THE_END

}
