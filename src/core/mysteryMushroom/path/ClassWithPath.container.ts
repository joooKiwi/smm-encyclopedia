import type {BasicStartingPath, ClassWithPath, JapanesePath, LeftVariationPath, PossiblePath, PossiblePaths_Array, UnderwaterVariationPath} from './ClassWithPath';

export abstract class ClassWithPathContainer<PATH extends PossiblePath,
    BASIC_PATH extends | string | null,
    JAPANESE_PATH extends string | null,
    LEFT_VARIATION_PATH extends string | null,
    UNDERWATER_VARIATION_PATH extends string | null, >
    implements ClassWithPath {

    //region -------------------- Attributes --------------------

    protected static readonly BASIC_STARTING_PATH: BasicStartingPath = '/mystery mushroom/';
    protected static readonly JAPANESE_PATH: JapanesePath = '/Japanese';
    protected static readonly LEFT_VARIATION_PATH: LeftVariationPath = '/Left variation';
    protected static readonly UNDERWATER_VARIATION_PATH: UnderwaterVariationPath = '/Underwater variation';

    #paths?: PossiblePaths_Array<PATH>;

    readonly #basicPath;
    readonly #japanesePath;
    readonly #leftVariationPath;
    readonly #underwaterVariationPath;

    //endregion -------------------- Attributes --------------------

    protected constructor(basicPath: BASIC_PATH, japanesePath: JAPANESE_PATH, leftVariationPath: LEFT_VARIATION_PATH, underwaterVariationPath: UNDERWATER_VARIATION_PATH,) {
        this.#basicPath = basicPath;
        this.#japanesePath = japanesePath;
        this.#leftVariationPath = leftVariationPath;
        this.#underwaterVariationPath = underwaterVariationPath;
    }

    //region -------------------- Getter methods --------------------

    protected get _paths(): PossiblePaths_Array<PATH> {
        return this.#paths ??= this._createPaths();
    }

    protected abstract _createPaths(): PossiblePaths_Array<PATH>;


    protected get _basicPath(): BASIC_PATH {
        return this.#basicPath;
    }

    protected get _japanesePath(): JAPANESE_PATH {
        return this.#japanesePath;
    }

    protected get _leftVariationPath(): LEFT_VARIATION_PATH {
        return this.#leftVariationPath;
    }

    protected get _underwaterVariationPath(): UNDERWATER_VARIATION_PATH {
        return this.#underwaterVariationPath;
    }

    //endregion -------------------- Getter methods --------------------

}
