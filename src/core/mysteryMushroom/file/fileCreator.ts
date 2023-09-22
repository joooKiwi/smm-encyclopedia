import type {PossibleEnglishName, PossibleFileName}                                                                                                                                                                          from 'core/mysteryMushroom/MysteryMushrooms.types'
import type {ClimbingImageFile, FallingAfterAJumpImageFile, GoalPoleImageFile, JumpImageFile, PressingDownImageFile, RunningImageFile, SwimmingImageFile, TauntImageFile, TurningImageFile, WaitingImageFile, WalkImageFile} from 'core/mysteryMushroom/file/MysteryMushroomImageFile'
import type {GoalPoleSoundFile, JumpSoundFile, LostALifeSoundFile, OnGroundAfterAJumpSoundFile, PowerUpCollectedSoundFile, TauntSoundFile, TurningSoundFile}                                                                 from 'core/mysteryMushroom/file/MysteryMushroomSoundFile'

import {SimpleImageFile}                 from 'util/file/image/SimpleImageFile'
import {NonRepeatableSoundFileContainer} from 'util/file/sound/NonRepeatableSoundFile.container'

//region -------------------- Power-up collected --------------------

export function powerUpCollectedSound(name: PossibleFileName,): PowerUpCollectedSoundFile {
    return new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, 'powerup', 'wav',)
}

//endregion -------------------- Power-up collected --------------------
//region -------------------- Waiting --------------------

export function waitingImage(englishName: PossibleEnglishName, name: PossibleFileName,): WaitingImageFile {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'wait.0', 'tiff', `${englishName} (waiting image)`,)
}

//endregion -------------------- Waiting --------------------
//region -------------------- Taunt --------------------

export function tauntSound(name: PossibleFileName,): TauntSoundFile {
    return new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, 'appeal', 'wav',)
}

export function tauntImage(englishName: PossibleEnglishName, name: PossibleFileName,): TauntImageFile {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'appeal.0', 'tiff', `${englishName} (taunt image)`,)
}

//endregion -------------------- Taunt --------------------
//region -------------------- Pressing ↓ --------------------

export function pressingDownImage(englishName: PossibleEnglishName, name: PossibleFileName,): PressingDownImageFile {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'stoop.0', 'tiff', `${englishName} (pressing ↓ image)`,)
}

//endregion -------------------- Pressing ↓ --------------------
//region -------------------- Walk --------------------

export function walkImages(englishName: PossibleEnglishName, name: PossibleFileName,): readonly [WalkImageFile, WalkImageFile, WalkImageFile,] {
    return [
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `walk.0`, 'tiff', `${englishName} (walk image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `walk.1`, 'tiff', `${englishName} (walk image #2)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `walk.2`, 'tiff', `${englishName} (walk image #3)`,),
    ] as const
}

//endregion -------------------- Walk --------------------
//region -------------------- Running --------------------

export function runningImages(englishName: PossibleEnglishName, name: PossibleFileName,): readonly [RunningImageFile, RunningImageFile, RunningImageFile,] {
    return [
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `b_dash.0`, 'tiff', `${englishName} (running image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `b_dash.1`, 'tiff', `${englishName} (running image #2)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `b_dash.2`, 'tiff', `${englishName} (running image #3)`,),
    ] as const
}

//endregion -------------------- Running --------------------
//region -------------------- Swimming --------------------

export function swimmingImages(englishName: PossibleEnglishName, name: PossibleFileName,): readonly [SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile, SwimmingImageFile,] {
    return [
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.0`, 'tiff', `${englishName} (swimming image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.1`, 'tiff', `${englishName} (swimming image #2)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.2`, 'tiff', `${englishName} (swimming image #3)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.3`, 'tiff', `${englishName} (swimming image #4)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.4`, 'tiff', `${englishName} (swimming image #5)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `swim.5`, 'tiff', `${englishName} (swimming image #6)`,),
    ] as const
}

//endregion -------------------- Swimming --------------------
//region -------------------- Jumping --------------------

export function singleJumpSounds(name: PossibleFileName,): readonly [JumpSoundFile,] {
    return [new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, `jump`, 'wav',),]
}

export function dualJumpSounds(name: PossibleFileName,): readonly [JumpSoundFile, JumpSoundFile,] {
    return [
        new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, `jump`, 'wav',),
        new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, `jump2`, 'wav',),
    ]
}


export function singleJumpImages(englishName: PossibleEnglishName, name: PossibleFileName,): readonly [JumpImageFile,] {
    return [new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `jump.0`, 'tiff', `${englishName} (jump image #1)`,),]
}

export function tripleJumpImages(englishName: PossibleEnglishName, name: PossibleFileName,): readonly [JumpImageFile, JumpImageFile, JumpImageFile,] {
    return [
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `jump.0`, 'tiff', `${englishName} (jump image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `jump.1`, 'tiff', `${englishName} (jump image #2)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `jump.2`, 'tiff', `${englishName} (jump image #3)`,),
    ]
}


export function fallingAfterAJumpImage(englishName: PossibleEnglishName, name: PossibleFileName,): FallingAfterAJumpImageFile {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'jump_fall.0', 'tiff', `${englishName} (falling after a jump image)`,)
}


export function onGroundAfterAJumpSound(name: PossibleFileName,): OnGroundAfterAJumpSoundFile {
    return new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, 'ground', 'wav',)
}

//endregion -------------------- Jumping --------------------
//region -------------------- Turning --------------------

export function turningImage(englishName: PossibleEnglishName, name: PossibleFileName,): TurningImageFile {
    return new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'turn.0', 'tiff', `${englishName} (turning image)`,)
}

export function turningSound(name: PossibleFileName,): TurningSoundFile {
    return new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, 'slip', 'wav',)
}

//endregion -------------------- Turning --------------------
//region -------------------- Climbing --------------------

export function climbingImages(englishName: PossibleEnglishName, name: PossibleFileName,): readonly [ClimbingImageFile, ClimbingImageFile,] {
    return [
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'climb.0', 'tiff', `${englishName} (climbing image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, 'climb.1', 'tiff', `${englishName} (climbing image #2)`,),
    ] as const
}

//endregion -------------------- Climbing --------------------
//region -------------------- Goal pole --------------------

export function goalPoleImages(englishName: PossibleEnglishName, name: PossibleFileName,): readonly [GoalPoleImageFile, GoalPoleImageFile,] {
    return [
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `pole.0`, 'tiff', `${englishName} (goal pole image #1)`,),
        new SimpleImageFile(`entity/in game/M1 Player Chara - ${name}`, `pole.1`, 'tiff', `${englishName} (goal pole image #2)`,),
    ] as const
}


export function goalPoleSound(name: PossibleFileName,): GoalPoleSoundFile {
    return new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, 'goal', 'wav',)
}

//endregion -------------------- Goal pole --------------------
//region -------------------- Lost a life --------------------

export function lostALifeSound(name: PossibleFileName,): LostALifeSoundFile {
    return new NonRepeatableSoundFileContainer(`sound/mystery mushroom/${name}`, 'down', 'wav',)
}

//endregion -------------------- Lost a life --------------------
