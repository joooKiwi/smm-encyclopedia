import type {PossibleFileName}              from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {SoundFileName, TauntSoundFile} from 'core/mysteryMushroom/file/TauntSoundFile'

import {AbstractMysteryMushroomSoundFile} from 'core/mysteryMushroom/file/AbstractMysteryMushroomSoundFile'

export class TauntSoundFileContainer
    extends AbstractMysteryMushroomSoundFile<SoundFileName>
    implements TauntSoundFile {

    public constructor(file: PossibleFileName,) {
        super(file, 'appeal',)
    }

}
