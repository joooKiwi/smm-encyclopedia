import type {PossibleFileName}                from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {SoundFileName, TurningSoundFile} from 'core/mysteryMushroom/file/TurningSoundFile'

import {AbstractMysteryMushroomSoundFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomSoundFile'

export class TurningSoundFileContainer
    extends AbstractMysteryMushroomSoundFile<SoundFileName>
    implements TurningSoundFile {

    public constructor(file: PossibleFileName,) {
        super(file, 'slip',)
    }

}
