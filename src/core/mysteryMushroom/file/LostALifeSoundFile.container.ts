import type {PossibleFileName}                  from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {LostALifeSoundFile, SoundFileName} from 'core/mysteryMushroom/file/LostALifeSoundFile'

import {AbstractMysteryMushroomSoundFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomSoundFile'

export class LostALifeSoundFileContainer
    extends AbstractMysteryMushroomSoundFile<SoundFileName>
    implements LostALifeSoundFile {

    public constructor(file: PossibleFileName,) {
        super(file, 'down',)
    }

}
