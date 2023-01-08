import type {UnlockProperty} from 'core/mysteryMushroom/properties/UnlockProperty'
import type {SoundProperty}  from 'core/mysteryMushroom/properties/sound/SoundProperty'

export interface MysteryMushroomProperty
    extends UnlockProperty, SoundProperty {

    get unlockPropertyContainer(): UnlockProperty

    get soundPropertyContainer(): SoundProperty

}
