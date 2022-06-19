import type {GoalPoleSound, JumpSound, LostALifeSound, OnGroundAfterJumpSound, PossibleBasicPath, PossiblePath, PossibleSounds, PowerUpCollectedSound, TauntSound, TurningSound} from '../path/ClassWithPath';
import type {GoalPoleSounds, JumpSounds, LostALifeSounds, OnGroundAfterJumpSounds, PossibleSounds_Array, PowerUpCollectedSounds, Sound, TauntSounds, TurningSounds}              from './Sound';
import type {SoundProperty}                                                                                                                                                      from '../properties/sound/SoundProperty';

import {ClassWithPathContainer} from '../path/ClassWithPath.container';
import {EMPTY_ARRAY}            from '../../../util/emptyVariables';

export class SoundContainer<PATH extends PossiblePath, >
    extends ClassWithPathContainer<PATH, PossibleBasicPath<PATH>, null, null, null>
    implements Sound {

    //region -------------------- Attributes --------------------

    static readonly #POWER_UP_SOUND: PowerUpCollectedSound = 'powerup.wav';
    #powerUpGotSounds?: PowerUpCollectedSounds<PATH>;

    static readonly #TAUNT_SOUND: TauntSound = 'appeal.wav';
    #tauntSounds?: TauntSounds<PATH>;

    static readonly #JUMP_SOUND_1: JumpSound<''> = 'jump.wav';
    static readonly #JUMP_SOUND_2: JumpSound<2> = 'jump2.wav';
    static readonly #JUMP_SOUNDS = [this.#JUMP_SOUND_1, this.#JUMP_SOUND_2,] as const;
    #jumpSounds?: JumpSounds<PATH>;

    static readonly #ON_GROUND_AFTER_JUMP_SOUND: OnGroundAfterJumpSound = 'ground.wav';
    #onGroundAfterJumpSounds?: OnGroundAfterJumpSounds<PATH>;

    static readonly #TURNING_SOUND: TurningSound = 'slip.wav';
    #turningSounds?: TurningSounds<PATH>;

    static readonly #GOAL_POLE_SOUND: GoalPoleSound = 'goal.wav';
    #goalPoleSounds?: GoalPoleSounds<PATH>;

    static readonly #LOST_A_LIFE_SOUND: LostALifeSound = 'down.wav';
    #lostALifeSounds?: LostALifeSounds<PATH>;

    readonly #property: SoundProperty;

    //endregion -------------------- Attributes --------------------

    public constructor(path: PATH, property: SoundProperty,) {
        super(`${SoundContainer.BASIC_STARTING_PATH}${path}`, null, null, null,);
        this.#property = property;
    }

    //region -------------------- Getter methods --------------------

    protected override _createPaths() {
        return [this._basicPath] as const;
    }

    protected get _property(): SoundProperty {
        return this.#property;
    }

    // @ts-ignore
    private __getSounds<S extends PossibleSounds = PossibleSounds, >(sound: S,): PossibleSounds_Array<S, PATH>
    private __getSounds<S1 extends PossibleSounds = PossibleSounds, S2 extends PossibleSounds = PossibleSounds, >(sounds: readonly [S1, S2,],): readonly [PossibleSounds_Array<S1, PATH>, PossibleSounds_Array<S2, PATH>,]
    private __getSounds(sounds: PossibleSounds | readonly PossibleSounds[],) {
        if (sounds instanceof Array)
            return sounds.map(image => this.__getSounds(image));
        return this._paths.map(path => `${path}/${sounds}`) as unknown as PossibleSounds_Array<PossibleSounds, PATH>;
    }


    public get powerUpCollectedSounds(): PowerUpCollectedSounds<PATH> {
        return this.#powerUpGotSounds ??= this._property.haveASoundEffectWhenCollected ? this.__getSounds(SoundContainer.#POWER_UP_SOUND) : EMPTY_ARRAY;
    }

    public get tauntSounds(): TauntSounds<PATH> {
        return this.#tauntSounds ??= this._property.haveASoundEffectOnTaunt ? this.__getSounds(SoundContainer.#TAUNT_SOUND) : EMPTY_ARRAY;
    }

    public get jumpSounds(): JumpSounds<PATH> {
        if (this.#jumpSounds == null) {
            switch (this._property.amountOnSoundEffectOnJump!) {
                case 0:
                    return this.#jumpSounds = EMPTY_ARRAY;
                case 1:
                    return this.#jumpSounds = this.__getSounds(SoundContainer.#JUMP_SOUND_1);
                case 2:
                    return this.#jumpSounds = this.__getSounds(SoundContainer.#JUMP_SOUNDS).flat() as unknown as JumpSounds<PATH>;
            }
        }
        return this.#jumpSounds;
    }

    public get onGroundAfterJumpSounds(): OnGroundAfterJumpSounds<PATH> {
        return this.#onGroundAfterJumpSounds ??= this._property.haveASoundEffectOnGroundAfterJump ? this.__getSounds(SoundContainer.#ON_GROUND_AFTER_JUMP_SOUND) : EMPTY_ARRAY;
    }

    public get turningSounds(): TurningSounds<PATH> {
        return this.#turningSounds ??= this._property.haveASoundEffectOnTurnAfterRun ? this.__getSounds(SoundContainer.#TURNING_SOUND) : EMPTY_ARRAY;
    }

    public get goalPoleSounds(): GoalPoleSounds<PATH> {
        return this.#goalPoleSounds ??= this._property.haveASoundEffectOnGoalPole ? this.__getSounds(SoundContainer.#GOAL_POLE_SOUND) : EMPTY_ARRAY;
    }

    public get lostALifeSounds(): LostALifeSounds<PATH> {
        return this.#lostALifeSounds ??= this._property.haveASoundEffectOnDeath ? this.__getSounds(SoundContainer.#LOST_A_LIFE_SOUND) : EMPTY_ARRAY;
    }

    //endregion -------------------- Getter methods --------------------

}