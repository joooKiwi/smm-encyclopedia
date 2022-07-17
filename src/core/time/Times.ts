import type {ClassWithEnglishName}                                                                                                                                                                                                                   from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                     from '../ClassWithImagePath';
import type {PossibleOtherEntities}                                                                                                                                                                                                                  from '../entity/Entity';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleSimpleImagePath, PossibleStringValue, PossibleValue} from './Times.types';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                                                                from '../PropertyGetter';
import type {StaticReference}                                                                                                                                                                                                                        from '../../util/enum/Enum.types';
import type {TimeProperty}                                                                                                                                                                                                                           from '../entity/properties/TimeProperty';
import type {TimeReferences}                                                                                                                                                                                                                         from '../entity/properties/TimeReferences';

import {BASE_PATH}       from '../../variables';
import {Enum}            from '../../util/enum/Enum';
import {StringContainer} from '../../util/StringContainer';
import TimeComponent     from './Time.component';

export abstract class Times
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath>,
        PropertyReferenceGetter<TimeReferences, PossibleOtherEntities>,
        PropertyGetter<TimeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly DAY =   new class Times_Day extends Times {

        public override get(property: TimeProperty,): boolean {
            return property.isInDayTheme;
        }

        public override getReference(referenceProperty: TimeReferences,): TimeReferences['referenceInDayTheme'] {
            return referenceProperty.referenceInDayTheme;
        }

    }('Day',   'Sun',);
    public static readonly NIGHT = new class Times_Night extends Times {

        public override get(property: TimeProperty,): boolean {
            return property.isInNightTheme === true;
        }

        public override getReference(referenceProperty: TimeReferences,): TimeReferences['referenceInNightTheme'] {
            return referenceProperty.referenceInNightTheme;
        }

    }('Night', 'Moon',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: Times;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #englishName;
    readonly #simpleImagePath: PossibleSimpleImagePath;
    #imagePath?: PossibleImagePath;

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName, imagePath: PossibleSimpleImagePath,) {
        super();
        this.#englishName = new StringContainer(englishName);
        this.#simpleImagePath = imagePath;
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/${BASE_PATH}/time/${this.#simpleImagePath}.png`;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: TimeProperty,): boolean;

    public abstract getReference(referenceProperty: TimeReferences,): PossibleOtherEntities;

    public get renderSingleComponent() {
        return TimeComponent.renderSingleComponent(this);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<Times> {
        return Times;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.englishName === value)
            ?? null;
    }

    public static getValue(nullValue: null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Times = Times, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Times
    public static getValue(value: PossibleValue,): | Times | null
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
