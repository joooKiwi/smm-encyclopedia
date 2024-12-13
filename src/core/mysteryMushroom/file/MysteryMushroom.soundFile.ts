import type {NonRepeatableSoundFile} from 'util/file/sound/NonRepeatableSoundFile'

/** A {@link NonRepeatableSoundFile} made to be related to a {@link MysteryMushrooms} */
export type MysteryMushroomSoundFile<FILE_NAME extends string = string, >
    = | PowerUpCollectedSoundFile<FILE_NAME>
      | TauntSoundFile<FILE_NAME>
      | FirstJumpSoundFile<FILE_NAME> | SecondJumpSoundFile<FILE_NAME> | OnGroundAfterAJumpSoundFile<FILE_NAME>
      | TurningSoundFile<FILE_NAME>
      | GoalPoleSoundFile<FILE_NAME>
      | LostALifeSoundFile<FILE_NAME>


export type PowerUpCollectedSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${FILE_NAME}`, 'powerup', 'wav'>

export type TauntSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${FILE_NAME}`, 'appeal', 'wav'>

export type FirstJumpSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${FILE_NAME}`, 'jump', 'wav'>

export type SecondJumpSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${FILE_NAME}`, 'jump2', 'wav'>

export type OnGroundAfterAJumpSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${FILE_NAME}`, 'ground', 'wav'>

export type TurningSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${FILE_NAME}`, 'slip', 'wav'>

export type GoalPoleSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${FILE_NAME}`, 'goal', 'wav'>

export type LostALifeSoundFile<FILE_NAME extends string = string, >
    = NonRepeatableSoundFile<`sound/mystery mushroom/${FILE_NAME}`, 'down', 'wav'>
