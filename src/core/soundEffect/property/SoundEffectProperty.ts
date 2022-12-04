import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {PlayerSoundEffectTriggerProperty} from 'core/soundEffect/property/PlayerSoundEffectTriggerProperty'
import type {PlayerSoundEffectTriggers}        from 'core/soundEffect/property/PlayerSoundEffectTriggers'

export interface SoundEffectProperty
    extends GameProperty, PlayerSoundEffectTriggerProperty {

    get gameContainer(): GameProperty

    get playerSoundEffectTriggerContainer(): PlayerSoundEffectTriggers

}
