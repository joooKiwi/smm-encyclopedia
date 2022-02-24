import type {Name}                from '../../lang/name/Name';
import type {SoundEffect}         from './SoundEffect';
import type {SoundEffectCategory} from '../soundEffectCategory/SoundEffectCategory';
import type {SoundEffectProperty} from './properties/SoundEffectProperty';

import {ClassContainingANameAndACategory} from '../../lang/name/ClassContainingANameAndACategory';

export class SoundEffectContainer
    extends ClassContainingANameAndACategory<string, string, SoundEffectCategory>
    implements SoundEffect {

    //region -------------------- Attributes --------------------

    readonly #propertyContainer;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name<string>, category: SoundEffectCategory, property: SoundEffectProperty,) {
        super(name, category,);
        this.#propertyContainer = property;
    }

    //region -------------------- Properties --------------------

    public get propertyContainer(): SoundEffectProperty {
        return this.#propertyContainer;
    }

    //region -------------------- Game properties --------------------

    public get gameContainer(): this['propertyContainer']['gameContainer'] {
        return this.propertyContainer.gameContainer;
    }

    public get isInSuperMarioMaker1(): this['gameContainer']['isInSuperMarioMaker1'] {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2(): this['gameContainer']['isInSuperMarioMaker2'] {
        return this.gameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- Player sound effect trigger properties --------------------

    public get playerSoundEffectTriggerContainer(): this['propertyContainer']['playerSoundEffectTriggerContainer'] {
        return this.propertyContainer.playerSoundEffectTriggerContainer;
    }

    public get translationKey(): this['playerSoundEffectTriggerContainer']['translationKey'] {
        return this.playerSoundEffectTriggerContainer.translationKey;
    }

    //region -------------------- Movement triggers --------------------

    public get doesTriggerOnPlayerWhenJumpingAfterLanding(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenJumpingAfterLanding'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenJumpingAfterLanding;
    }

    public get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed;
    }

    public get doesTriggerOnPlayerWhenCrouching(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenCrouching'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenCrouching;
    }

    public get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly;
    }

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    public get doesTriggerOnPlayerWhenCollectingAPowerUp(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenCollectingAPowerUp'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenCollectingAPowerUp;
    }

    public get doesTriggerOnPlayerWhenGettingIntoAEntity(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenGettingIntoAEntity'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenGettingIntoAEntity;
    }

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    public get doesTriggerOnPlayerAtSpawn(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerAtSpawn'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerAtSpawn;
    }

    public get doesTriggerOnPlayerWhenTakingDamage(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenTakingDamage'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenTakingDamage;
    }

    public get doesTriggerOnPlayerWhenLosingALife(): this['playerSoundEffectTriggerContainer']['doesTriggerOnPlayerWhenLosingALife'] {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenLosingALife;
    }

    //endregion -------------------- Environment triggers --------------------

    //endregion -------------------- Player sound effect trigger properties --------------------

    //endregion -------------------- Properties --------------------

}
