import type {PossibleExtension}           from './SoundFile';
import type {RepeatableAtTheEndSoundFile} from './RepeatableAtTheEndSoundFile';

import {AbstractRepeatableSoundFile} from './AbstractRepeatableSoundFile';
import {RepeatableTypes}             from './RepeatableTypes';

export class RepeatableAtTheEndSoundFileContainer<PATH extends string = string, NAME extends string = string, EXTENSION extends PossibleExtension = PossibleExtension, >
    extends AbstractRepeatableSoundFile<PATH, NAME, EXTENSION, null>
    implements RepeatableAtTheEndSoundFile<PATH, NAME, EXTENSION> {

    public constructor(path: PATH, name: NAME, extension: EXTENSION,) {
        super(path, name, extension, null,);
    }

    public override readonly repeatableType = RepeatableTypes.AT_THE_END;

}
