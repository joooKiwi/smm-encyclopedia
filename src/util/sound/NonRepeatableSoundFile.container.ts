import type {NonRepeatableSoundFile} from 'util/sound/NonRepeatableSoundFile'
import type {PossibleExtension}      from 'util/sound/SoundFile'

import {AbstractSoundFile} from 'util/sound/AbstractSoundFile'
import {RepeatableTypes}   from 'util/sound/RepeatableTypes'

export class NonRepeatableSoundFileContainer<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, >
    extends AbstractSoundFile<PATH, NAME, EXTENSION, null>
    implements NonRepeatableSoundFile<PATH, NAME, EXTENSION> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        super(path, name, extension, null,)
    }

    public override readonly repeatableType = RepeatableTypes.NONE

}
