import {GameProperty}   from '../properties/GameProperty';
import {PropertyGetter} from '../PropertyGetter';

//region -------------------- game texts --------------------

export type PossibleGameName = `Super Mario Maker${'' | ' 2'}`;
export type PossibleImagePath = `/game/logos/${PossibleGameName}.png`;

//endregion -------------------- game texts --------------------

/**
 * @enum
 */
export abstract class Games
    implements PropertyGetter<PossibleGameName, GameProperty> {

    //region -------------------- enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_1 = new class extends Games {
        public get(property: GameProperty): boolean {
            return property.isInSuperMarioMaker1;
        }
    }('Super Mario Maker');
    public static readonly SUPER_MARIO_MAKER_2 = new class extends Games {
        public get(property: GameProperty): boolean {
            return property.isInSuperMarioMaker2;
        }
    }('Super Mario Maker 2');
    //endregion -------------------- enum instances --------------------

    static #VALUES: readonly Games[];
    //region -------------------- Attributes --------------------

    readonly #englishName;
    readonly #imagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleGameName) {
        this.#englishName = englishName;
        this.#imagePath = '/game/logos/' + englishName + '.png' as PossibleImagePath;
    }


    //region -------------------- Methods --------------------

    public get englishName(): PossibleGameName {
        return this.#englishName;
    }

    public abstract get(property: GameProperty): boolean;

    public get imagePath(): PossibleImagePath {
        return this.#imagePath;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public static getValue(value: Games | PossibleGameName): Games
    public static getValue(value: string): Games | null
    public static getValue(value: Games | string): Games | null
    public static getValue(value: Games | string): Games | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly Games[] {
        return this.#VALUES ?? (this.#VALUES = [
            this.SUPER_MARIO_MAKER_1,
            this.SUPER_MARIO_MAKER_2,
        ]);
    }

    public static* [Symbol.iterator]() {
        for (const value of this.values)
            yield value;
    }

    //endregion -------------------- enum methods --------------------

}
