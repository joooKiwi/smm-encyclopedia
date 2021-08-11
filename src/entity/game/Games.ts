import type {GameProperty}   from '../properties/GameProperty';
import type {PropertyGetter} from '../PropertyGetter';
import type {SimpleEnum}     from '../../util/enum/EnumTypes';

import {getLastOrdinalOn} from '../../util/enum/enumUtilityMethods';

//region -------------------- game texts --------------------

export type PossibleGameName = `Super Mario Maker${'' | ' 2'}`;
export type PossibleImagePath = `/game/logos/${PossibleGameName}.png`;

//endregion -------------------- game texts --------------------
//region -------------------- Enum types --------------------

export type GamesOrdinals = 0 | 1;
export type GamesNames = 'SUPER_MARIO_MAKER_1' | 'SUPER_MARIO_MAKER_2';
export type SimpleGames<T = Games, > = SimpleEnum<GamesNames, T>;
export type GamesArray<T = Games, > = readonly [
    SimpleGames<T>['SUPER_MARIO_MAKER_1'],
    SimpleGames<T>['SUPER_MARIO_MAKER_2'],
];

//endregion -------------------- Enum types --------------------

/**
 * @enum
 */
export abstract class Games
    implements PropertyGetter<PossibleGameName, GameProperty> {

    //region -------------------- enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_1 = new class Games_SuperMarioMaker1 extends Games {
        public get(property: GameProperty,): boolean {
            return property.isInSuperMarioMaker1;
        }
    }('Super Mario Maker',);
    public static readonly SUPER_MARIO_MAKER_2 = new class Games_SuperMarioMaker2 extends Games {
        public get(property: GameProperty,): boolean {
            return property.isInSuperMarioMaker2;
        }
    }('Super Mario Maker 2',);
    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: GamesArray;
    readonly #ordinal: GamesOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;
    readonly #imagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleGameName,) {
        this.#ordinal = getLastOrdinalOn(Games);
        this.#englishName = englishName;
        this.#imagePath = '/game/logos/' + englishName + '.png' as PossibleImagePath;
    }

    //region -------------------- Methods --------------------

    public get englishName(): PossibleGameName {
        return this.#englishName;
    }

    public abstract get(property: GameProperty,): boolean;

    public get imagePath(): PossibleImagePath {
        return this.#imagePath;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public get ordinal(): GamesOrdinals {
        return this.#ordinal;
    }

    public static getValue(value: | Games | PossibleGameName,): Games
    public static getValue(value: string,): | Games | null
    public static getValue(value: | Games | string,): | Games | null
    public static getValue(value: | Games | string,): | Games | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): GamesArray {
        return this.#VALUES ??= [
            this.SUPER_MARIO_MAKER_1,
            this.SUPER_MARIO_MAKER_2,
        ];
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- enum methods --------------------

}
