import type {ClassWithEnglishName}                                                                                                                                      from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                        from '../ClassWithImagePath';
import type {PossibleOtherEntities}                                                                                                                                     from '../entity/Entity';
import type {EnumArray, Names, Ordinals, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleSimpleImagePath, PossibleStringValue, PossibleValue} from './Times.types';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                   from '../PropertyGetter';
import type {StaticReference}                                                                                                                                           from '../../util/enum/Enum.types';
import type {TimeProperty}                                                                                                                                              from '../entity/properties/TimeProperty';
import type {TimeReferences}                                                                                                                                            from '../entity/properties/TimeReferences';

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

        public get(property: TimeProperty,): boolean {
            return property.isInDayTheme;
        }

        public getReference(referenceProperty: TimeReferences,): TimeReferences['referenceInDayTheme'] {
            return referenceProperty.referenceInDayTheme;
        }

    }  ('Day',   'Sun',);
    public static readonly NIGHT = new class Times_Night extends Times {

        public get(property: TimeProperty,): boolean {
            return property.isInNightTheme === true;
        }

        public getReference(referenceProperty: TimeReferences,): TimeReferences['referenceInNightTheme'] {
            return referenceProperty.referenceInNightTheme;
        }

    }('Night', 'Moon',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    readonly #englishName;
    readonly #simpleImagePath: PossibleSimpleImagePath;
    #imagePath?: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

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
        return this.#imagePath ??= `/game/times/${this.#simpleImagePath}.png`;
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

    protected get _static(): StaticReference<Times> {
        return Times;
    }

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
        return Enum.getValuesOn(this);
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
