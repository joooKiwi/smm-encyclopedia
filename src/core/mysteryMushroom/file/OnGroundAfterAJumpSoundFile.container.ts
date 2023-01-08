import type {PossibleFileName}                           from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {OnGroundAfterAJumpSoundFile, SoundFileName} from 'core/mysteryMushroom/file/OnGroundAfterAJumpSoundFile'

import {AbstractMysteryMushroomSoundFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomSoundFile'

export class OnGroundAfterAJumpSoundFileContainer
    extends AbstractMysteryMushroomSoundFile<SoundFileName>
    implements OnGroundAfterAJumpSoundFile {

    public constructor(file: PossibleFileName,) {
        super(file, 'ground',)
    }

}
