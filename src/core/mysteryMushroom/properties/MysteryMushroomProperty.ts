import {UnlockProperty} from 'core/mysteryMushroom/properties/UnlockProperty'
import {SoundProperty}  from 'core/mysteryMushroom/properties/sound/SoundProperty'

export interface MysteryMushroomProperty
    extends UnlockProperty, SoundProperty {

    get unlockPropertyContainer(): UnlockProperty

    get soundPropertyContainer(): SoundProperty

}
