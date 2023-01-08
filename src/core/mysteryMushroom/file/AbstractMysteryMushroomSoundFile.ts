import type {PossibleFileName}                                                                                         from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {MysteryMushroomSoundExtension, MysteryMushroomSoundFile, MysteryMushroomSoundPath, PossibleSoundFileName} from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'

import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

export abstract class AbstractMysteryMushroomSoundFile<NAME extends PossibleSoundFileName = PossibleSoundFileName, >
    extends NonRepeatableSoundFileContainer<MysteryMushroomSoundPath, NAME, MysteryMushroomSoundExtension>
    implements MysteryMushroomSoundFile<NAME> {

    protected constructor(file: PossibleFileName, name: NAME,) {
        super(`sound/mystery mushroom/${file}`, name, 'wav',)
    }

}