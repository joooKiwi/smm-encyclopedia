import type {GameProperty}                     from '../../entity/properties/game/GameProperty'
import type {PlayerSoundEffectTriggerProperty} from './PlayerSoundEffectTriggerProperty'
import type {PlayerSoundEffectTriggers}        from './PlayerSoundEffectTriggers'

export interface SoundEffectProperty
    extends GameProperty, PlayerSoundEffectTriggerProperty {

    get gameContainer(): GameProperty

    get playerSoundEffectTriggerContainer(): PlayerSoundEffectTriggers

}
