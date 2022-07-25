import type {GameProperty}                     from '../../entity/properties/game/GameProperty';
import type {PlayerSoundEffectTriggerProperty} from './PlayerSoundEffectTriggerProperty';
import type {SoundEffectProperty}              from './SoundEffectProperty';

export class SoundEffectPropertyContainer
    implements SoundEffectProperty {

    //region -------------------- Fields --------------------

    readonly #gameContainer;
    readonly #playerSoundEffectTriggerContainer;

    //endregion -------------------- Fields --------------------

    public constructor(game: GameProperty, playerSoundEffectTrigger: PlayerSoundEffectTriggerProperty,) {
        this.#gameContainer = game;
        this.#playerSoundEffectTriggerContainer = playerSoundEffectTrigger;
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Game properties --------------------

    public get gameContainer() {
        return this.#gameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMakerFor3DS() {
        return this.gameContainer.isInSuperMarioMakerFor3DS;
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

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return this.gameContainer.toGameMap();
    }

    //endregion -------------------- Convertor methods --------------------

}
