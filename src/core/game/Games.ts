import type {ClassWithAcronym}                                                                                                                                  from '../ClassWithAcronym';
import type {ClassWithEnglishName}                                                                                                                              from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                from '../ClassWithImagePath';
import type {EnumArray, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Games.types';
import type {GameProperty}                                                                                                                                      from '../entity/properties/GameProperty';
import type {PropertyGetter}                                                                                                                                    from '../PropertyGetter';
import type {StaticReference}                                                                                                                                   from '../../util/enum/Enum.types';

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

    public static readonly SUPER_MARIO_MAKER_1 = new class Games_SuperMarioMaker1 extends Games {
        public get(property: GameProperty,): boolean {
            return property.isInSuperMarioMaker1;
        }
    }('SMM',  'Super Mario Maker',);
    public static readonly SUPER_MARIO_MAKER_2 = new class Games_SuperMarioMaker2 extends Games {
        public get(property: GameProperty,): boolean {
            return property.isInSuperMarioMaker2;
        }
    }('SMM2', 'Super Mario Maker 2',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    readonly #acronym;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #imagePath: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(acronym: PossibleAcronym, englishName: PossibleEnglishName,) {
        super();
        this.#acronym = acronym;
        this.#englishName = new StringContainer(englishName);
        this.#imagePath = `/game/logos/${englishName}.svg`;
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

    protected get _static(): StaticReference<Games> {
        return Games;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof Games[N]
    public static getValue(name: PossibleStringValue,): Games
    public static getValue(name: string,): | Games | null
    public static getValue<I extends Games = Games, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Games
    public static getValue(value: PossibleValue,): | Games | null
    public static getValue(value: PossibleValue,) {
        return value == null
            ? null
            : typeof value === 'string'
                ? Reflect.get(this, value.toUpperCase(),)
                    ?? this.values.find(theme => theme.englishName === value || theme.acronym === value)
                    ?? null
                : typeof value === 'number'
                    ? this.values[value] ?? null
                    : value;
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
