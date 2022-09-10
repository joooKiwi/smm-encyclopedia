import type {GoalPoleSound, GoalPoleSoundFile, JumpSoundFile, JumpSounds, LostALifeSound, LostALifeSoundFile, OnGroundAfterJumpSound, OnGroundAfterJumpSoundFile, Path, PossibleSounds, PowerUpCollectedSound, PowerUpCollectedSoundFile, SingleSound, Sound, TauntSound, TauntSoundFile, TurningSound, TurningSoundFile} from './Sound';
import type {SoundProperty}                                                                                                                                                                                                                                                                                               from '../properties/sound/SoundProperty';
import type {EnglishNameOnFile}                                                                                                                                                                                                                                                                                           from '../MysteryMushrooms.types';

import {BASE_PATH}                    from '../../../variables';
import {DelayedObjectHolderContainer} from '../../../util/holder/DelayedObjectHolder.container';
import {EMPTY_ARRAY}                  from '../../../util/emptyVariables';

export class SoundContainer<FILE extends EnglishNameOnFile = EnglishNameOnFile, >
    implements Sound {

    //region -------------------- Fields --------------------

    readonly #path;

    static readonly #POWER_UP_SOUND: PowerUpCollectedSoundFile = 'powerup.wav';
    #powerUpGotSounds?: PowerUpCollectedSound<FILE>;

    static readonly #TAUNT_SOUND: TauntSoundFile = 'appeal.wav';
    #tauntSounds?: TauntSound<FILE>;

    static readonly #JUMP_SOUND_1: JumpSoundFile<''> = 'jump.wav';
    static readonly #JUMP_SOUND_2: JumpSoundFile<2> = 'jump2.wav';
    #jumpSounds?: JumpSounds<FILE>;

    static readonly #ON_GROUND_AFTER_JUMP_SOUND: OnGroundAfterJumpSoundFile = 'ground.wav';
    #onGroundAfterJumpSounds?: OnGroundAfterJumpSound<FILE>;

    static readonly #TURNING_SOUND: TurningSoundFile = 'slip.wav';
    #turningSounds?: TurningSound<FILE>;

    static readonly #GOAL_POLE_SOUND: GoalPoleSoundFile = 'goal.wav';
    #goalPoleSounds?: GoalPoleSound<FILE>;

    static readonly #LOST_A_LIFE_SOUND: LostALifeSoundFile = 'down.wav';
    #lostALifeSounds?: LostALifeSound<FILE>;

    readonly #property;

    //endregion -------------------- Fields --------------------

    public constructor(file: FILE, property: () => SoundProperty,) {
        this.#path = `/${BASE_PATH}/sound/mystery mushroom/${file}` as const;
        this.#property = new DelayedObjectHolderContainer(property);
    }

    //region -------------------- Getter methods --------------------

    private get __path(): Path<FILE> {
        return this.#path;
    }

    private get __property(): SoundProperty {
        return this.#property.get;
    }


    #getSound<SOUND_PATH extends PossibleSounds = PossibleSounds, >(sound: SOUND_PATH,): SingleSound<FILE, SOUND_PATH> {
        return `${this.__path}/${sound}`;
    }


    public get powerUpCollectedSound(): PowerUpCollectedSound<FILE> {
        return this.#powerUpGotSounds ??= this.#getSound(SoundContainer.#POWER_UP_SOUND);
    }

    public get tauntSound(): TauntSound<FILE> {
        return this.#tauntSounds ??= this.#getSound(SoundContainer.#TAUNT_SOUND);
    }

    public get jumpSounds(): JumpSounds<FILE> {
        if (this.#jumpSounds == null) {
            switch (this.__property.amountOnSoundEffectOnJump!) {
                case 0:
                    return EMPTY_ARRAY;
                case 1:
                    return this.#jumpSounds = [this.#getSound(SoundContainer.#JUMP_SOUND_1),];
                case 2:
                    return this.#jumpSounds = [this.#getSound(SoundContainer.#JUMP_SOUND_1), this.#getSound(SoundContainer.#JUMP_SOUND_2),];
            }
        }
        return this.#jumpSounds;
    }

    public get onGroundAfterJumpSound(): OnGroundAfterJumpSound<FILE> {
        return this.#onGroundAfterJumpSounds ??= this.#getSound(SoundContainer.#ON_GROUND_AFTER_JUMP_SOUND);
    }

    public get turningSound(): TurningSound<FILE> {
        return this.#turningSounds ??= this.#getSound(SoundContainer.#TURNING_SOUND);
    }

    public get goalPoleSound(): GoalPoleSound<FILE> {
        return this.#goalPoleSounds ??= this.#getSound(SoundContainer.#GOAL_POLE_SOUND);
    }

    public get lostALifeSound(): LostALifeSound<FILE> {
        return this.#lostALifeSounds ??= this.#getSound(SoundContainer.#LOST_A_LIFE_SOUND);
    }

    //endregion -------------------- Getter methods --------------------

}