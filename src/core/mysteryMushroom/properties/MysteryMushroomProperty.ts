import {UnlockProperty} from './UnlockProperty';
import {SoundProperty}  from './sound/SoundProperty';

export interface MysteryMushroomProperty
    extends UnlockProperty, SoundProperty {

    get unlockPropertyContainer(): UnlockProperty

    get soundPropertyContainer(): SoundProperty

}
