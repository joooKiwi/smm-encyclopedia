import type {ClassWithAcronym}                                                                                                                                                                                                                                    from '../ClassWithAcronym';
import type {ClassWithEnglishName}                                                                                                                                                                                                                                from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                                  from '../ClassWithImagePath';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleSimpleValue, PossibleStringValue, PossibleValue} from './Games.types';
import type {GameProperty}                                                                                                                                                                                                                                        from '../entity/properties/game/GameProperty';
import type {PropertyGetter}                                                                                                                                                                                                                                      from '../PropertyGetter';
import type {StaticReference}                                                                                                                                                                                                                                     from '../../util/enum/Enum.types';

import {BASE_PATH}       from '../../variables';
import {Enum}            from '../../util/enum/Enum';
import GameComponent     from './Game.component';
import {StringContainer} from '../../util/StringContainer';

export abstract class Games
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithImagePath<PossibleImagePath>,
        PropertyGetter<GameProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_MAKER_1 =                new class Games_SuperMarioMaker1 extends Games {

        public override get(property: GameProperty,): boolean {
            return property.isInSuperMarioMaker1;
        }

    }('SMM', '1', 'Super Mario Maker',);
    public static readonly SUPER_MARIO_MAKER_FOR_NINTENDO_3DS = new class Games_SuperMarioMakerForNintendo3DS extends Games {

        public override get(property: GameProperty,): boolean {
            return property.isInSuperMarioMakerFor3DS;
        }

    }('SMM3DS', '3DS', 'Super Mario Maker for Nintendo 3DS',);
    public static readonly SUPER_MARIO_MAKER_2 =                new class Games_SuperMarioMaker2 extends Games {

        public override get(property: GameProperty,): boolean {
            return property.isInSuperMarioMaker2;
        }

    }('SMM2', '2', 'Super Mario Maker 2',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Games;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #acronym: PossibleAcronym;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #simpleValue: PossibleSimpleValue;
    readonly #imagePath: PossibleImagePath;

    //endregion -------------------- Fields --------------------

    private constructor(enumeration_or_acronym: PossibleAcronym, simpleValue: PossibleSimpleValue, englishName: PossibleEnglishName,) {
        super();
        this.#acronym = enumeration_or_acronym;
        this.#englishName = new StringContainer(englishName);
        this.#simpleValue = simpleValue;
        this.#imagePath = `/${BASE_PATH}/game/${englishName}.svg`;
    }

    //region -------------------- Getter methods --------------------

    public get acronym(): PossibleAcronym {
        return this.#acronym;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get simpleValue(): PossibleSimpleValue {
        return this.#simpleValue;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameProperty,): boolean;

    public get renderSingleComponent() {
        return GameComponent.renderSingleComponent(this);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<Games> {
        return Games;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value
                || enumerable.acronym === value
                || enumerable.simpleValue === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Games = Games, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Games
    public static getValue(value: PossibleValue,): | Games | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
