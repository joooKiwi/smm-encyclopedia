import type {ClassWithEnglishName}                                                                                          from '../ClassWithEnglishName';
import type {Entity}                                                                                                        from '../simple/Entity';
import type {EnumArray, Names, Ordinals, PossibleEnglishName, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './Times.types';
import type {PropertyGetter, PropertyReferenceGetter}                                                                       from '../PropertyGetter';
import type {TimeProperty}                                                                                                  from '../properties/TimeProperty';
import type {TimeReferences}                                                                                                from '../properties/TimeReferences';

import {Enum}            from '../../util/enum/Enum';
import {StringContainer} from '../StringContainer';
import TimeComponent     from './Time.component';

export abstract class Times
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName>,
        PropertyReferenceGetter<TimeReferences>,
        PropertyGetter<TimeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly DAY =   new class Times_Day extends Times {

        public get(property: TimeProperty,): boolean {
            return property.isInDayTheme;
        }

        public getReference(referenceProperty: TimeReferences,): Entity{
            return referenceProperty.referenceInDayTheme;
        }

    }  ('Day',);
    public static readonly NIGHT = new class Times_Night extends Times {

        public get(property: TimeProperty,): boolean {
            return property.isInNightTheme === true;
        }

        public getReference(referenceProperty: TimeReferences,): Entity{
            return referenceProperty.referenceInNightTheme;
        }

    }('Night',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: EnumArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleEnglishName,) {
        super(Times);
        this.#englishName = new StringContainer(englishName);
    }

    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: TimeProperty,): boolean;

    public abstract getReference(referenceProperty: TimeReferences,): Entity;

    public get renderSingleComponent() {
        return TimeComponent.renderSingleComponent(this);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof Times[N]
    public static getValue(name: PossibleStringValue,): Times
    public static getValue(name: string,): | Times | null
    public static getValue<I extends Times = Times, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Times
    public static getValue(value: PossibleValue,): | Times | null
    public static getValue(value: PossibleValue,) {
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

    public static get values(): EnumArray {
        return this.#VALUES ??= [
            this.DAY,
            this.NIGHT,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
