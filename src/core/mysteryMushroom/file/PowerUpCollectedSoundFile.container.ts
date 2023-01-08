import type {PossibleFileName}                         from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {PowerUpCollectedSoundFile, SoundFileName} from 'core/mysteryMushroom/file/PowerUpCollectedSoundFile'

import {AbstractMysteryMushroomSoundFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomSoundFile'

export class PowerUpCollectedSoundFileContainer
    extends AbstractMysteryMushroomSoundFile<SoundFileName>
    implements PowerUpCollectedSoundFile {

    public constructor(file: PossibleFileName,) {
        super(file, 'powerup',)
    }

}
