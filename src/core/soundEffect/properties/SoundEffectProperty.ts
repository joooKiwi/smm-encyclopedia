import type {GameProperty}                     from '../../entity/properties/GameProperty';
import type {PlayerSoundEffectTriggerProperty} from './PlayerSoundEffectTriggerProperty';

export interface SoundEffectProperty
    extends GameProperty, PlayerSoundEffectTriggerProperty {

    get gameContainer(): GameProperty

    get playerSoundEffectTriggerContainer(): PlayerSoundEffectTriggerProperty

}
