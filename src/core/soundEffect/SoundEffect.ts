import type {GameProperty}                     from 'core/entity/properties/game/GameProperty'
import type {SoundEffectCategory}              from 'core/soundEffectCategory/SoundEffectCategory'
import type {NameTrait}                        from 'lang/name/NameTrait'
import type {NameTraitFromACategory}           from 'lang/name/NameTraitFromACategory'
import type {PlayerSoundEffectTriggerProperty} from 'core/soundEffect/property/PlayerSoundEffectTrigger.property'
import type {PlayerSoundEffectTriggers}        from 'core/soundEffect/property/PlayerSoundEffectTriggers'

export interface SoundEffect
    extends NameTrait<string>,
        NameTraitFromACategory<string, SoundEffectCategory>,
        GameProperty, PlayerSoundEffectTriggerProperty {

    readonly playerSoundEffectTrigger: PlayerSoundEffectTriggers

}
