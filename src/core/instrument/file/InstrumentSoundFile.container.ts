import type {PossibleFileName} from '../Instruments.types';

import {NonRepeatableSoundFileContainer} from '../../../util/sound/NonRepeatableSoundFile.container';

export class InstrumentSoundFile<NAME extends PossibleFileName = PossibleFileName, >
    extends NonRepeatableSoundFileContainer<'instrument', NAME, 'wav'> {

    public constructor(name: NAME,) {
        super('instrument', name, 'wav',);
    }

}