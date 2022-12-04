import type {ClimbingImageFile, ClimbingImages, FallingAfterJumpImage, FallingAfterJumpImageFile, GoalPoleImageFile, GoalPoleImages, Image, JumpImageFile, JumpImages, Path, PossibleImages, PressingDownImage, PressingDownImageFile, RunningImageFile, RunningImages, SingleImage, SwimmingImageFile, SwimmingImages, TauntImage, TauntImageFile, TurningImage, TurningImageFile, WaitingImage, WaitingImageFile, WalkImageFile, WalkImages} from 'core/mysteryMushroom/image/Image'
import type {PossibleFileName}                                                                                                                                                                                                                                                                                                                                                                                                                 from 'core/mysteryMushroom/MysteryMushrooms.types'

import {BASE_PATH} from 'variables'

export class ImageContainer<FILE extends PossibleFileName = PossibleFileName, >
    implements Image<FILE> {

    //region -------------------- Fields --------------------

    readonly #path

    static readonly #WAITING_IMAGE: WaitingImageFile = 'wait.0.tiff'
    #waitingImages?: WaitingImage<FILE>

    static readonly #TAUNT_IMAGE: TauntImageFile = 'appeal.0.tiff'
    #tauntImages?: TauntImage<FILE>

    static readonly #PRESSING_DOWN_IMAGE: PressingDownImageFile = 'stoop.0.tiff'
    #pressingDownImages?: PressingDownImage<FILE>

    static readonly #WALK_IMAGE_1: WalkImageFile<0> = 'walk.0.tiff'
    static readonly #WALK_IMAGE_2: WalkImageFile<1> = 'walk.1.tiff'
    static readonly #WALK_IMAGE_3: WalkImageFile<2> = 'walk.2.tiff'
    static readonly #WALK_IMAGES = [this.#WALK_IMAGE_1, this.#WALK_IMAGE_2, this.#WALK_IMAGE_3,] as const
    #walkImages?: WalkImages<FILE>

    static readonly #RUNNING_IMAGE_1: RunningImageFile<0> = 'b_dash.0.tiff'
    static readonly #RUNNING_IMAGE_2: RunningImageFile<1> = 'b_dash.1.tiff'
    static readonly #RUNNING_IMAGE_3: RunningImageFile<2> = 'b_dash.2.tiff'
    static readonly #RUNNING_IMAGES = [this.#RUNNING_IMAGE_1, this.#RUNNING_IMAGE_2, this.#RUNNING_IMAGE_3,] as const
    #runningImages?: RunningImages<FILE>

    static readonly #SWIMMING_IMAGE_1: SwimmingImageFile<0> = 'swim.0.tiff'
    static readonly #SWIMMING_IMAGE_2: SwimmingImageFile<1> = 'swim.1.tiff'
    static readonly #SWIMMING_IMAGE_3: SwimmingImageFile<2> = 'swim.2.tiff'
    static readonly #SWIMMING_IMAGE_4: SwimmingImageFile<3> = 'swim.3.tiff'
    static readonly #SWIMMING_IMAGE_5: SwimmingImageFile<4> = 'swim.4.tiff'
    static readonly #SWIMMING_IMAGE_6: SwimmingImageFile<5> = 'swim.5.tiff'
    static readonly #SWIMMING_IMAGES = [this.#SWIMMING_IMAGE_1, this.#SWIMMING_IMAGE_2, this.#SWIMMING_IMAGE_3, this.#SWIMMING_IMAGE_4, this.#SWIMMING_IMAGE_5, this.#SWIMMING_IMAGE_6,] as const
    #swimmingImages?: SwimmingImages<FILE>

    static readonly #JUMP_IMAGE_1: JumpImageFile<0> = 'jump.0.tiff'
    static readonly #JUMP_IMAGE_2: JumpImageFile<1> = 'jump.1.tiff'
    static readonly #JUMP_IMAGE_3: JumpImageFile<2> = 'jump.2.tiff'
    static readonly #JUMP_IMAGES = [this.#JUMP_IMAGE_1, this.#JUMP_IMAGE_2, this.#JUMP_IMAGE_3,] as const
    #jumpImages?: JumpImages<FILE>
    readonly #amountOfImagesOnJump: | 1 | 3

    static readonly #FALLING_AFTER_JUMP_IMAGE: FallingAfterJumpImageFile = 'jump_fall.0.tiff'
    #fallingAfterJumpImages?: FallingAfterJumpImage<FILE>

    static readonly #TURNING_IMAGE: TurningImageFile = 'turn.0.tiff'
    #turningImages?: TurningImage<FILE>

    static readonly #CLIMBING_IMAGE_1: ClimbingImageFile<0> = 'climb.0.tiff'
    static readonly #CLIMBING_IMAGE_2: ClimbingImageFile<1> = 'climb.1.tiff'
    static readonly #CLIMBING_IMAGES = [this.#CLIMBING_IMAGE_1, this.#CLIMBING_IMAGE_2,] as const
    #climbingImages?: ClimbingImages<FILE>

    static readonly #GOAL_POLE_IMAGE_1: GoalPoleImageFile<0> = 'pole.0.tiff'
    static readonly #GOAL_POLE_IMAGE_2: GoalPoleImageFile<1> = 'pole.1.tiff'
    static readonly #GOAL_POLE_IMAGES = [this.#GOAL_POLE_IMAGE_1, this.#GOAL_POLE_IMAGE_2,] as const
    #goalPoleImages?: GoalPoleImages<FILE>

    //endregion -------------------- Fields --------------------

    public constructor(file: FILE, amountOfImagesOnJump: | 1 | 3 = 1,) {
        this.#path = `/${BASE_PATH}/entity/1 - SMB/In game/SMM1/Player Chara - ${file}` as const
        this.#amountOfImagesOnJump = amountOfImagesOnJump
    }

    //region -------------------- Getter methods --------------------

    private get __path(): Path<FILE> {
        return this.#path
    }

    private get __amountOfImagesOnJump(): | 1 | 3 {
        return this.#amountOfImagesOnJump
    }


    #getImage<I extends PossibleImages = PossibleImages, >(image: I,): SingleImage<FILE, I> {
        return `${this.__path}/${image}`
    }

    // @ts-ignore
    #getImages<I1 extends PossibleImages = PossibleImages, I2 extends PossibleImages = PossibleImages, >(images: readonly [I1, I2,],): readonly [SingleImage<FILE, I1>, SingleImage<FILE, I2>,]
    #getImages<I1 extends PossibleImages = PossibleImages, I2 extends PossibleImages = PossibleImages, I3 extends PossibleImages = PossibleImages, >(images: readonly [I1, I2, I3,],): readonly [SingleImage<FILE, I1>, SingleImage<FILE, I2>, SingleImage<FILE, I3>,]
    #getImages<I1 extends PossibleImages = PossibleImages, I2 extends PossibleImages = PossibleImages, I3 extends PossibleImages = PossibleImages, I4 extends PossibleImages = PossibleImages, I5 extends PossibleImages = PossibleImages, I6 extends PossibleImages = PossibleImages, >(images: readonly [I1, I2, I3, I4, I5, I6,],): readonly [SingleImage<FILE, I1>, SingleImage<FILE, I2>, SingleImage<FILE, I3>, SingleImage<FILE, I4>, SingleImage<FILE, I5>, SingleImage<FILE, I6>,]
    #getImages(images: readonly PossibleImages[]) {
        return images.map(image => this.#getImage(image))
    }


    public get waitingImage(): WaitingImage<FILE> {
        return this.#waitingImages ??= this.#getImage(ImageContainer.#WAITING_IMAGE)
    }

    public get tauntImage(): TauntImage<FILE> {
        return this.#tauntImages ??= this.#getImage(ImageContainer.#TAUNT_IMAGE)
    }

    public get pressingDownImage(): PressingDownImage<FILE> {
        return this.#pressingDownImages ??= this.#getImage(ImageContainer.#PRESSING_DOWN_IMAGE)
    }

    public get walkImages(): WalkImages<FILE> {
        return this.#walkImages ??= this.#getImages(ImageContainer.#WALK_IMAGES)
    }

    public get runningImages(): RunningImages<FILE> {
        return this.#runningImages ??= this.#getImages(ImageContainer.#RUNNING_IMAGES)
    }

    public get swimmingImages(): SwimmingImages<FILE> {
        return this.#swimmingImages ??= this.#getImages(ImageContainer.#SWIMMING_IMAGES)
    }

    public get jumpImages(): JumpImages<FILE> {
        return this.#jumpImages ??= this.__amountOfImagesOnJump === 1
            ? [this.#getImage(ImageContainer.#JUMP_IMAGE_1),]
            : this.#getImages(ImageContainer.#JUMP_IMAGES)
    }

    public get fallingAfterJumpImage(): FallingAfterJumpImage<FILE> {
        return this.#fallingAfterJumpImages ??= this.#getImage(ImageContainer.#FALLING_AFTER_JUMP_IMAGE)
    }

    public get turningImage(): TurningImage<FILE> {
        return this.#turningImages ??= this.#getImage(ImageContainer.#TURNING_IMAGE)
    }

    public get climbingImages(): ClimbingImages<FILE> {
        return this.#climbingImages ??= this.#getImages(ImageContainer.#CLIMBING_IMAGES)
    }

    public get goalPoleImages(): GoalPoleImages<FILE> {
        return this.#goalPoleImages ??= this.#getImages(ImageContainer.#GOAL_POLE_IMAGES)
    }


    //endregion -------------------- Getter methods --------------------

}
