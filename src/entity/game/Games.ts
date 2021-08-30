import type {ClassWithEnglishName, PropertyGetter}                                       from '../PropertyGetter';
import type {GameProperty}                                                               from '../properties/GameProperty';
import type {GamesArray, GamesNames, GamesOrdinals, PossibleGameName, PossibleImagePath} from './Games.types';

import {Enum} from '../../util/enum/Enum';

export abstract class Games
    extends Enum<GamesOrdinals, GamesNames>
    implements ClassWithEnglishName<PossibleGameName>,
        PropertyGetter<GameProperty> {

    //region -------------------- Enum instances --------------------

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

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: GamesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName: PossibleGameName;
    readonly #imagePath: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleGameName,) {
        super(Games);
        this.#englishName = englishName;
        this.#imagePath = `/game/logos/${englishName}.png`;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleGameName {
        return this.#englishName;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameProperty,): boolean;

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends GamesOrdinals = GamesOrdinals, >(ordinal: O,): GamesArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<GamesArray[O]> | null
    public static getValue(name: string,): | Games | null
    public static getValue(name: PossibleGameName,): Games
    public static getValue<I extends Games = Games, >(instance: I,): I
    public static getValue(value: | Games | string | number,): | Games | null
    public static getValue(value: | Games | string | number | null | undefined,): | Games | null {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(theme => theme.englishName === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
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

    //endregion -------------------- Enum methods --------------------

}
