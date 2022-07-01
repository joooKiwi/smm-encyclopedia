import type {ClimbingImage, DownImage, FallingAfterJumpImage, GoalPoleImage, JumpImage, PossibleImages, PossiblePath, RunningImage, SwimmingImage, TauntImage, TurningImage, WaitingImage, WalkImage}           from '../path/ClassWithPath';
import type {ClimbingImages, DownImages, FallingAfterJumpImages, GoalPoleImages, Image, JumpImages, PossibleImages_Array, RunningImages, SwimmingImages, TauntImages, TurningImages, WaitingImages, WalkImages} from './Image';

import {BASE_PATH}              from '../../../variables';
import {ClassWithPathContainer} from '../path/ClassWithPath.container';
import {EMPTY_ARRAY}            from '../../../util/emptyVariables';

export abstract class AbstractImage<PATH extends PossiblePath,
    BASIC_PATH extends | string | null,
    JAPANESE_PATH extends string | null,
    LEFT_VARIATION_PATH extends string | null,
    UNDERWATER_VARIATION_PATH extends string | null, >
    extends ClassWithPathContainer<PATH, BASIC_PATH, JAPANESE_PATH, LEFT_VARIATION_PATH, UNDERWATER_VARIATION_PATH>
    implements Image<PATH> {

    //region -------------------- Attributes --------------------

    static readonly #WAITING_IMAGE: WaitingImage = 'wait.0.png';
    #waitingImages?: WaitingImages<PATH>;

    static readonly #TAUNT_IMAGE: TauntImage = 'appeal.0.png';
    #tauntImages?: TauntImages<PATH>;

    static readonly #DOWN_IMAGE: DownImage = 'stoop.0.png';
    #downImages?: DownImages<PATH>;

    static readonly #WALK_IMAGE_1: WalkImage<0> = 'walk.0.png';
    static readonly #WALK_IMAGE_2: WalkImage<1> = 'walk.1.png';
    static readonly #WALK_IMAGE_3: WalkImage<2> = 'walk.2.png';
    static readonly #WALK_IMAGES = [this.#WALK_IMAGE_1, this.#WALK_IMAGE_2, this.#WALK_IMAGE_3,] as const;
    #walkImages?: WalkImages<PATH>;

    static readonly #RUNNING_IMAGE_1: RunningImage<0> = '/b_dash.0.png';
    static readonly #RUNNING_IMAGE_2: RunningImage<1> = '/b_dash.1.png';
    static readonly #RUNNING_IMAGE_3: RunningImage<2> = '/b_dash.2.png';
    static readonly #RUNNING_IMAGES = [this.#RUNNING_IMAGE_1, this.#RUNNING_IMAGE_2, this.#RUNNING_IMAGE_3,] as const;
    #runningImages?: RunningImages<PATH>;

    static readonly #SWIMMING_IMAGE_1: SwimmingImage<0> = 'swim.0.png';
    static readonly #SWIMMING_IMAGE_2: SwimmingImage<1> = 'swim.1.png';
    static readonly #SWIMMING_IMAGE_3: SwimmingImage<2> = 'swim.2.png';
    static readonly #SWIMMING_IMAGE_4: SwimmingImage<3> = 'swim.3.png';
    static readonly #SWIMMING_IMAGE_5: SwimmingImage<4> = 'swim.4.png';
    static readonly #SWIMMING_IMAGE_6: SwimmingImage<5> = 'swim.5.png';
    static readonly #SWIMMING_IMAGES = [this.#SWIMMING_IMAGE_1, this.#SWIMMING_IMAGE_2, this.#SWIMMING_IMAGE_3, this.#SWIMMING_IMAGE_4, this.#SWIMMING_IMAGE_5, this.#SWIMMING_IMAGE_6,] as const;
    #swimmingImages?: SwimmingImages<PATH>;

    static readonly #JUMP_IMAGE_1: JumpImage<0> = 'jump.0.png';
    static readonly #JUMP_IMAGE_2: JumpImage<1> = 'jump.1.png';
    static readonly #JUMP_IMAGE_3: JumpImage<2> = 'jump.2.png';
    static readonly #JUMP_IMAGES = [this.#JUMP_IMAGE_1, this.#JUMP_IMAGE_2, this.#JUMP_IMAGE_3,] as const;
    #jumpImages?: JumpImages<PATH>;
    readonly #amountOfImagesOnJump: | 1 | 3;

    static readonly #FALLING_AFTER_JUMP_IMAGE: FallingAfterJumpImage = 'jump_fall.0.png';
    #fallingAfterJumpImages?: FallingAfterJumpImages<PATH>;

    static readonly #TURNING_IMAGE: TurningImage = 'turn.0.png';
    #turningImages?: TurningImages<PATH>;

    static readonly #CLIMBING_IMAGE_1: ClimbingImage<0> = 'climb.0.png';
    static readonly #CLIMBING_IMAGE_2: ClimbingImage<1> = 'climb.1.png';
    static readonly #CLIMBING_IMAGES = [this.#CLIMBING_IMAGE_1, this.#CLIMBING_IMAGE_2,] as const;
    #climbingImages?: ClimbingImages<PATH>;

    static readonly #GOAL_POLE_IMAGE_1: GoalPoleImage<0> = 'pole.0.png';
    static readonly #GOAL_POLE_IMAGE_2: GoalPoleImage<1> = 'pole.1.png';
    static readonly #GOAL_POLE_IMAGES = [this.#GOAL_POLE_IMAGE_1, this.#GOAL_POLE_IMAGE_2,] as const;
    #goalPoleImages?: GoalPoleImages<PATH>;

    //endregion -------------------- Attributes --------------------

    protected constructor(basicPath: BASIC_PATH, japanesePath: JAPANESE_PATH, leftVariationPath: LEFT_VARIATION_PATH, underwaterVariationPath: UNDERWATER_VARIATION_PATH, amountOfImagesOnJump: | 1 | 3 = 1,) {
        super(basicPath, japanesePath, leftVariationPath, underwaterVariationPath,);
        this.#amountOfImagesOnJump = amountOfImagesOnJump;
    }

    //region -------------------- Getter methods --------------------

    // @ts-ignore
    private __getImages<I extends PossibleImages = PossibleImages, >(image: I,): PossibleImages_Array<I, PATH>
    private __getImages<I1 extends PossibleImages = PossibleImages, I2 extends PossibleImages = PossibleImages, >(images: readonly [I1, I2,],): readonly [PossibleImages_Array<I1, PATH>, PossibleImages_Array<I2, PATH>,]
    private __getImages<I1 extends PossibleImages = PossibleImages, I2 extends PossibleImages = PossibleImages, I3 extends PossibleImages = PossibleImages, >(images: readonly [I1, I2, I3,],): readonly [PossibleImages_Array<I1, PATH>, PossibleImages_Array<I2, PATH>, PossibleImages_Array<I3, PATH>,]
    private __getImages<I1 extends PossibleImages = PossibleImages, I2 extends PossibleImages = PossibleImages, I3 extends PossibleImages = PossibleImages, I4 extends PossibleImages = PossibleImages, I5 extends PossibleImages = PossibleImages, I6 extends PossibleImages = PossibleImages, >(images: readonly [I1, I2, I3, I4, I5, I6,],): readonly [PossibleImages_Array<I1, PATH>, PossibleImages_Array<I2, PATH>, PossibleImages_Array<I3, PATH>, PossibleImages_Array<I4, PATH>, PossibleImages_Array<I5, PATH>, PossibleImages_Array<I6, PATH>,]
    private __getImages(images: PossibleImages | readonly PossibleImages[],) {
        if (images instanceof Array)
            return images.map(image => this.__getImages(image));
        return this._paths.map(path => `/${BASE_PATH}${path}/${images}`) as unknown as PossibleImages_Array<PossibleImages, PATH>;
    }

    public get waitingImages(): WaitingImages<PATH> {
        return this.#waitingImages ??= this.__getImages(AbstractImage.#WAITING_IMAGE);
    }

    public get tauntImages(): TauntImages<PATH> {
        return this.#tauntImages ??= this.__getImages(AbstractImage.#TAUNT_IMAGE);
    }

    public get downImages(): DownImages<PATH> {
        return this.#downImages ??= this.__getImages(AbstractImage.#DOWN_IMAGE);
    }

    public get walkImages(): WalkImages<PATH> {
        return this.#walkImages ??= this.__getImages(AbstractImage.#WALK_IMAGES);
    }

    public get runningImages(): RunningImages<PATH> {
        return this.#runningImages ??= this.__getImages(AbstractImage.#RUNNING_IMAGES);
    }

    public get swimmingImages(): SwimmingImages<PATH> {
        return this.#swimmingImages ??= this.__getImages(AbstractImage.#SWIMMING_IMAGES);
    }

    public get jumpImages(): JumpImages<PATH> {
        return this.#jumpImages ??= this.#amountOfImagesOnJump === 1
            ? [this.__getImages(AbstractImage.#JUMP_IMAGE_1), EMPTY_ARRAY, EMPTY_ARRAY,]
            : this.__getImages(AbstractImage.#JUMP_IMAGES);
    }

    public get fallingAfterJumpImages(): FallingAfterJumpImages<PATH> {
        return this.#fallingAfterJumpImages ??= this.__getImages(AbstractImage.#FALLING_AFTER_JUMP_IMAGE);
    }

    public get turningImages(): TurningImages<PATH> {
        return this.#turningImages ??= this.__getImages(AbstractImage.#TURNING_IMAGE);
    }

    public get climbingImages(): ClimbingImages<PATH> {
        return this.#climbingImages ??= this.__getImages(AbstractImage.#CLIMBING_IMAGES);
    }

    public get goalPoleImages(): GoalPoleImages<PATH> {
        return this.#goalPoleImages ??= this.__getImages(AbstractImage.#GOAL_POLE_IMAGES);
    }


    //endregion -------------------- Getter methods --------------------

}
