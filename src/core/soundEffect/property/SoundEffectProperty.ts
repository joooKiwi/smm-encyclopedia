import type {GameProperty}                     from '../../entity/properties/game/GameProperty';
import type {PlayerSoundEffectTriggerProperty} from './PlayerSoundEffectTriggerProperty';

export interface SoundEffectProperty
    extends GameProperty, PlayerSoundEffectTriggerProperty {

    get gameContainer(): GameProperty

    get playerSoundEffectTriggerContainer(): PlayerSoundEffectTriggerProperty

}
