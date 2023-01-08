import type {PossibleFileName}                 from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {GoalPoleSoundFile, SoundFileName} from 'core/mysteryMushroom/file/GoalPoleSoundFile'

import {AbstractMysteryMushroomSoundFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomSoundFile'

export class GoalPoleSoundFileContainer
    extends AbstractMysteryMushroomSoundFile<SoundFileName>
    implements GoalPoleSoundFile {

    public constructor(file: PossibleFileName,) {
        super(file, 'goal',)
    }

}
