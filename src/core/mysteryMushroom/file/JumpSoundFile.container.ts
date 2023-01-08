import type {PossibleFileName}                              from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {JumpSoundFile, SoundFileName, SoundFileNumber} from 'core/mysteryMushroom/file/JumpSoundFile'

import {AbstractMysteryMushroomSoundFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomSoundFile'

export class JumpSoundFileContainer
    extends AbstractMysteryMushroomSoundFile<SoundFileName>
    implements JumpSoundFile {

    public constructor(file: PossibleFileName, number: SoundFileNumber = '',) {
        super(file, `jump${number}`,)
    }

}
