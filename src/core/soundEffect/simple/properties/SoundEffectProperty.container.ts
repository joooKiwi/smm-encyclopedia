import type {PlayerSoundEffectTriggerProperty} from './PlayerSoundEffectTriggerProperty';
import type {SoundEffectProperty}              from './SoundEffectProperty';

import {GamePropertyContainer}                     from '../../../entity/properties/GameProperty.container';
import {PlayerSoundEffectTriggerPropertyContainer} from './PlayerSoundEffectTriggerProperty.container';

export class SoundEffectPropertyContainer
    implements SoundEffectProperty {

    //region -------------------- Attributes --------------------

    readonly #gameContainer;
    readonly #playerSoundEffectTriggerContainer;

    //endregion -------------------- Attributes --------------------

    public constructor(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,
                       onJumpAfterLanding: boolean, onTurnAroundAfterBeingAtFullSpeed: boolean, onCrouch: boolean, after3SecondsOfNonMovementRepeatedly: boolean,
                       onPowerUpCollected: boolean, whenGettingIntoAEntity: boolean,
                       atSpawn: boolean, onDamageTaken: boolean, whenLosingALife: boolean,) {
        this.#gameContainer = GamePropertyContainer.get(isInSuperMarioMaker1, isInSuperMarioMaker2,);
        this.#playerSoundEffectTriggerContainer = PlayerSoundEffectTriggerPropertyContainer.get(onJumpAfterLanding, onTurnAroundAfterBeingAtFullSpeed, onCrouch, after3SecondsOfNonMovementRepeatedly, onPowerUpCollected, whenGettingIntoAEntity, atSpawn, onDamageTaken, whenLosingALife,);
    }

    //region -------------------- Game properties --------------------

    public get gameContainer() {
        return this.#gameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.gameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- Player sound effect trigger properties --------------------

    public get playerSoundEffectTriggerContainer(): PlayerSoundEffectTriggerProperty {
        return this.#playerSoundEffectTriggerContainer;
    }

    public get translationKey() {
        return this.playerSoundEffectTriggerContainer.translationKey;
    }

    //region -------------------- Movement triggers --------------------

    public get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenJumpingAfterLanding;
    }

    public get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed;
    }

    public get doesTriggerOnPlayerWhenCrouching(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenCrouching;
    }

    public get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly;
    }

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    public get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenCollectingAPowerUp;
    }

    public get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenGettingIntoAEntity;
    }

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    public get doesTriggerOnPlayerAtSpawn(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerAtSpawn;
    }

    public get doesTriggerOnPlayerWhenTakingDamage(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenTakingDamage;
    }

    public get doesTriggerOnPlayerWhenLosingALife(): boolean {
        return this.playerSoundEffectTriggerContainer.doesTriggerOnPlayerWhenLosingALife;
    }

    //endregion -------------------- Environment triggers --------------------

    //endregion -------------------- Player sound effect trigger properties --------------------

}
