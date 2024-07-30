import type {RepeatableAtTheEndSoundFile} from 'util/file/sound/RepeatableAtTheEndSoundFile'
import type {PossibleSoundFileExtension}  from 'util/file/sound/SoundFile'

import {RepeatableTypes}           from 'util/file/sound/RepeatableTypes'
import {AbstractExternalSoundFile} from 'util/file/sound/AbstractExternalSoundFile'

export class RepeatableAtTheEndExternalSoundFileContainer<const out PATH extends string = string,
    const out NAME extends string = string,
    const out EXTENSION extends PossibleSoundFileExtension = PossibleSoundFileExtension, >
    extends AbstractExternalSoundFile<PATH, NAME, EXTENSION, null>
    implements RepeatableAtTheEndSoundFile<PATH, NAME, EXTENSION> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        super(path, name, extension, null,)
    }

    public override readonly repeatableType = RepeatableTypes.AT_THE_END

}
