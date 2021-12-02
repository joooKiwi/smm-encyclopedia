import {UnlockProperty}          from './UnlockProperty';
import {DifferentSpriteProperty} from './DifferentSpriteProperty';
import {SoundProperty}           from './sound/SoundProperty';

export interface MysteryMushroomProperty
    extends UnlockProperty, DifferentSpriteProperty, SoundProperty {

    get unlockPropertyContainer(): UnlockProperty

    get differentSpritePropertyContainer(): DifferentSpriteProperty

    get soundPropertyContainer(): SoundProperty

}
