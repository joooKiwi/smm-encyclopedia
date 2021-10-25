import type {NameTrait}              from '../../../lang/name/NameTrait';
import type {NameTraitFromACategory} from '../../../lang/name/NameTraitFromACategory';
import type {SoundEffectCategory}    from '../category/SoundEffectCategory';
import type {SoundEffectProperty}    from './properties/SoundEffectProperty';

export interface SoundEffect
    extends NameTrait, NameTraitFromACategory<SoundEffectCategory>,
        SoundEffectProperty {

    //region -------------------- Properties --------------------

    get propertyContainer(): SoundEffectProperty

    //region -------------------- Game properties --------------------

    get gameContainer(): this['propertyContainer']['gameContainer']

    get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1']

    get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2']

    //endregion -------------------- Game properties --------------------
    //region -------------------- Player sound effect trigger properties --------------------

    get playerSoundEffectTriggerContainer(): this['propertyContainer']['playerSoundEffectTriggerContainer']

    //region -------------------- Movement triggers --------------------

    get doesTriggerOnPlayerWhenJumpingAfterLanding(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenJumpingAfterLanding']

    get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed']

    get doesTriggerOnPlayerWhenCrouching(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenCrouching']

    get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly']

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    get doesTriggerOnPlayerWhenCollectingAPowerUp(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenCollectingAPowerUp']

    get doesTriggerOnPlayerWhenGettingIntoAEntity(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenGettingIntoAEntity']

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    get doesTriggerOnPlayerAtSpawn(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerAtSpawn']

    get doesTriggerOnPlayerWhenTakingDamage(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenTakingDamage']

    get doesTriggerOnPlayerWhenLosingALife(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenLosingALife']

    //endregion -------------------- Environment triggers --------------------

    //endregion -------------------- Player sound effect trigger properties --------------------

    //endregion -------------------- Properties --------------------

}
