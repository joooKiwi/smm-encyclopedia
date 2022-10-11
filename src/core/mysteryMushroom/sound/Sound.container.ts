import type {PossibleFileName}                                                                                                                                                                                                                                                                         from '../MysteryMushrooms.types'
import type {GoalPoleSound, GoalPoleSoundFile, JumpSoundFile, JumpSounds, LostALifeSound, LostALifeSoundFile, OnGroundAfterJumpSound, OnGroundAfterJumpSoundFile, PossibleSounds, PowerUpCollectedSound, PowerUpCollectedSoundFile, Sound, TauntSound, TauntSoundFile, TurningSound, TurningSoundFile} from './Sound'
import type {MysteryMushroomSoundFile}                                                                                                                                                                                                                                                                 from '../file/MysteryMushroomSoundFile'
import type {SoundProperty}                                                                                                                                                                                                                                                                            from '../properties/sound/SoundProperty'

import {DelayedObjectHolderContainer}                   from '../../../util/holder/DelayedObjectHolder.container'
import {EMPTY_ARRAY}                                    from '../../../util/emptyVariables'
import {MysteryMushroomSoundFileContainer as SoundFile} from '../file/MysteryMushroomSoundFile.container'

export class SoundContainer<FILE extends PossibleFileName = PossibleFileName, >
    implements Sound {

    //region -------------------- Fields --------------------

    readonly #file

    static readonly #POWER_UP_SOUND: PowerUpCollectedSoundFile = 'powerup'
    #powerUpGotSounds?: PowerUpCollectedSound<FILE>

    static readonly #TAUNT_SOUND: TauntSoundFile = 'appeal'
    #tauntSounds?: TauntSound<FILE>

    static readonly #JUMP_SOUND_1: JumpSoundFile<''> = 'jump'
    static readonly #JUMP_SOUND_2: JumpSoundFile<2> = 'jump2'
    #jumpSounds?: JumpSounds<FILE>

    static readonly #ON_GROUND_AFTER_JUMP_SOUND: OnGroundAfterJumpSoundFile = 'ground'
    #onGroundAfterJumpSounds?: OnGroundAfterJumpSound<FILE>

    static readonly #TURNING_SOUND: TurningSoundFile = 'slip'
    #turningSounds?: TurningSound<FILE>

    static readonly #GOAL_POLE_SOUND: GoalPoleSoundFile = 'goal'
    #goalPoleSounds?: GoalPoleSound<FILE>

    static readonly #LOST_A_LIFE_SOUND: LostALifeSoundFile = 'down'
    #lostALifeSounds?: LostALifeSound<FILE>

    readonly #property

    //endregion -------------------- Fields --------------------

    public constructor(file: FILE, property: () => SoundProperty,) {
        this.#file = file
        this.#property = new DelayedObjectHolderContainer(property)
    }

    //region -------------------- Getter methods --------------------

    private get __file(): FILE {
        return this.#file
    }

    private get __property(): SoundProperty {
        return this.#property.get
    }


    #createSound<SOUND_PATH extends PossibleSounds = PossibleSounds, >(sound: SOUND_PATH,): MysteryMushroomSoundFile<FILE, SOUND_PATH> {
        return new SoundFile(this.__file, sound,)
    }


    public get powerUpCollectedSound(): PowerUpCollectedSound<FILE> {
        return this.#powerUpGotSounds ??= this.#createSound(SoundContainer.#POWER_UP_SOUND)
    }

    public get tauntSound(): TauntSound<FILE> {
        return this.#tauntSounds ??= this.#createSound(SoundContainer.#TAUNT_SOUND)
    }

    public get jumpSounds(): JumpSounds<FILE> {
        if (this.#jumpSounds == null) {
            switch (this.__property.amountOnSoundEffectOnJump) {
                case null:
                    throw new TypeError('The "amount of sound effect on jump" cannot determine the jump sounds if it is null.')
                case 0:
                    return EMPTY_ARRAY
                case 1:
                    return this.#jumpSounds = [this.#createSound(SoundContainer.#JUMP_SOUND_1),]
                case 2:
                    return this.#jumpSounds = [this.#createSound(SoundContainer.#JUMP_SOUND_1), this.#createSound(SoundContainer.#JUMP_SOUND_2),]
            }
        }
        return this.#jumpSounds
    }

    public get onGroundAfterJumpSound(): OnGroundAfterJumpSound<FILE> {
        return this.#onGroundAfterJumpSounds ??= this.#createSound(SoundContainer.#ON_GROUND_AFTER_JUMP_SOUND)
    }

    public get turningSound(): TurningSound<FILE> {
        return this.#turningSounds ??= this.#createSound(SoundContainer.#TURNING_SOUND)
    }

    public get goalPoleSound(): GoalPoleSound<FILE> {
        return this.#goalPoleSounds ??= this.#createSound(SoundContainer.#GOAL_POLE_SOUND)
    }

    public get lostALifeSound(): LostALifeSound<FILE> {
        return this.#lostALifeSounds ??= this.#createSound(SoundContainer.#LOST_A_LIFE_SOUND)
    }

    //endregion -------------------- Getter methods --------------------

}