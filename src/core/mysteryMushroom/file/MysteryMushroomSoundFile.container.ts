import type {PossibleFileName}                                                                  from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {MysteryMushroomSoundExtension, MysteryMushroomSoundFile, MysteryMushroomSoundPath} from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'
import type {PossibleSounds}                                                                    from 'core/mysteryMushroom/sound/Sound'

import {NonRepeatableSoundFileContainer} from 'util/sound/NonRepeatableSoundFile.container'

export class MysteryMushroomSoundFileContainer<FILE extends PossibleFileName = PossibleFileName, NAME extends PossibleSounds = PossibleSounds, >
    extends NonRepeatableSoundFileContainer<MysteryMushroomSoundPath<FILE>, NAME, MysteryMushroomSoundExtension>
    implements MysteryMushroomSoundFile<FILE, NAME> {

    public constructor(file: FILE, name: NAME,) {
        super(`sound/mystery mushroom/${file}`, name, 'wav',)
    }

}