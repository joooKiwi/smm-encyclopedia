import type {RepeatableAtTheEndSoundFile} from 'util/file/sound/RepeatableAtTheEndSoundFile'
import type {PossibleSoundFileExtension}  from 'util/file/sound/SoundFile'

import {AbstractInternalSoundFile} from 'util/file/sound/AbstractInternalSoundFile'
import {RepeatableTypes}           from 'util/file/sound/RepeatableTypes'

export class RepeatableAtTheEndInternalSoundFileContainer<const out PATH extends string = string,
    const out NAME extends string = string,
    const out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends AbstractInternalSoundFile<PATH, NAME, EXTENSION, null>
    implements RepeatableAtTheEndSoundFile<PATH, NAME, EXTENSION> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        super(path, name, extension, null,)
    }

    public override readonly repeatableType = RepeatableTypes.AT_THE_END

}
