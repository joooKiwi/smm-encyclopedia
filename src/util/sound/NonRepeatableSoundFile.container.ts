import type {NonRepeatableSoundFile} from './NonRepeatableSoundFile'
import type {PossibleExtension}      from './SoundFile'

import {AbstractSoundFile} from './AbstractSoundFile'
import {RepeatableTypes}   from './RepeatableTypes'

export class NonRepeatableSoundFileContainer<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, >
    extends AbstractSoundFile<PATH, NAME, EXTENSION, null>
    implements NonRepeatableSoundFile<PATH, NAME, EXTENSION> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        super(path, name, extension, null,)
    }

    public override readonly repeatableType = RepeatableTypes.NONE

}
