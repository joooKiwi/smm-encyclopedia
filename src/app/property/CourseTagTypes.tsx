import {Link} from 'react-router-dom';

import type {BootstrapColor}                                                                                                                                                                               from '../../bootstrap/Bootstrap.types';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleCourseTagType, PossibleNonNullableValue, PossibleStringValue, PossibleValue} from './CourseTagType.types';
import type {EveryPossibleRouteNames}                                                                                                                                                                      from '../../routes/everyRoutes.types';
import type {StaticReference}                                                                                                                                                                              from '../../util/enum/Enum.types';
import type {ReactElement, ReactElementOrString}                                                                                                                                                           from '../../util/react/ReactProperties';

import ContentTranslationComponent from '../../lang/components/ContentTranslationComponent';
import {CourseTags}                from '../../core/courseTag/CourseTags';
import {Enum}                      from '../../util/enum/Enum';
import {route}                     from '../../routes/route';

export abstract class CourseTagTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ALL =              new class CourseTagTypes_All extends CourseTagTypes {

        public override get iterator(): IterableIterator<CourseTags> {
            return CourseTags[Symbol.iterator]();
        }


        protected override _createAllLinkButtonProperties(): LinkProperties {
            return CourseTagTypes.#FINAL_PATH;
        }

        protected override _createOfficialLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_OFFICIAL, 'success',];
        }

        protected override _createUnofficialLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_UNOFFICIAL, 'success',];
        }

        protected override _createMakerCentralLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_MAKER_CENTRAL, 'success',];
        }

    }('all',);
    public static readonly OFFICIAL =         new class CourseTagTypes_Official extends CourseTagTypes {

        public override get iterator(): IterableIterator<CourseTags> {
            return CourseTags.officialCourseTags[Symbol.iterator]();
        }


        protected override _createAllLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_ALL, 'warning',];
        }

        protected override _createOfficialLinkButtonProperties(): LinkProperties {
            return CourseTagTypes.#FINAL_PATH;
        }

        protected override _createUnofficialLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_UNOFFICIAL, 'danger',];
        }

        protected override _createMakerCentralLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_MAKER_CENTRAL, 'warning',];
        }

    }('official',);
    public static readonly UNOFFICIAL =       new class CourseTagTypes_Unofficial extends CourseTagTypes {

        public override get iterator(): IterableIterator<CourseTags> {
            return CourseTags.unofficialCourseTags[Symbol.iterator]();
        }


        protected override _createAllLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_ALL, 'warning',];
        }

        protected override _createOfficialLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_OFFICIAL, 'danger',];
        }

        protected override _createUnofficialLinkButtonProperties(): LinkProperties {
            return CourseTagTypes.#FINAL_PATH;
        }

        protected override _createMakerCentralLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_MAKER_CENTRAL, 'warning',];
        }

    }('unofficial',);
    public static readonly MAKER_CENTRAL =    new class CourseTagTypes_MakerCentral extends CourseTagTypes {

        public override get iterator(): IterableIterator<CourseTags> {
            return CourseTags.makerCentralCourseTags[Symbol.iterator]();
        }


        protected override _createAllLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_ALL, 'warning',];
        }

        protected override _createOfficialLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_OFFICIAL, 'warning',];
        }

        protected override _createUnofficialLinkButtonProperties(): LinkProperties {
            return [CourseTagTypes.#ROUTE_UNOFFICIAL, 'warning',];
        }

        protected override _createMakerCentralLinkButtonProperties(): LinkProperties {
            return CourseTagTypes.#FINAL_PATH;
        }

    }('makerCentral',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: CourseTagTypes;

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static readonly #ROUTE_ALL: PossibleRouteName = 'everyCourseTags';
    static readonly #ROUTE_OFFICIAL: PossibleRouteName = 'officialCourseTags';
    static readonly #ROUTE_UNOFFICIAL: PossibleRouteName = 'unofficialCourseTags';
    static readonly #ROUTE_MAKER_CENTRAL: PossibleRouteName = 'makerCentralCourseTags';

    static readonly #FINAL_PATH: LinkProperties = [null, 'success',];

    readonly #type;

    //endregion -------------------- Fields --------------------

    private constructor(type: PossibleCourseTagType,) {
        super();
        this.#type = type;
    }

    //region -------------------- Getter methods --------------------

    public get type(): PossibleCourseTagType {
        return this.#type;
    }

    public abstract get iterator(): IterableIterator<CourseTags>;

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- Link button methods --------------------

    protected abstract _createAllLinkButtonProperties(): LinkProperties;

    public createAllLinkButton(): ReactElement {
        return this.#createLinkButton('all', this._createAllLinkButtonProperties(), <ContentTranslationComponent translationKey="All"/>,);
    }


    protected abstract _createOfficialLinkButtonProperties(): LinkProperties;

    public createOfficialLinkButton(): ReactElement {
        return this.#createLinkButton('official', this._createOfficialLinkButtonProperties(), <ContentTranslationComponent translationKey="Official.Yes"/>,);
    }


    protected abstract _createUnofficialLinkButtonProperties(): LinkProperties;

    public createUnofficialLinkButton(): ReactElement {
        return this.#createLinkButton('unofficial', this._createUnofficialLinkButtonProperties(), <ContentTranslationComponent translationKey="Official.No"/>,);
    }


    protected abstract _createMakerCentralLinkButtonProperties(): LinkProperties;

    public createMakerCentralLinkButton(): ReactElement {
        return this.#createLinkButton('makerCentral', this._createMakerCentralLinkButtonProperties(), 'Maker Central',);
    }


    #createLinkButton(partialId: PossibleCourseTagType, [routeName, color,]: LinkProperties, value: ReactElementOrString,): ReactElement {
        const id = `${partialId}CourseTag-button`,
            className = `btn btn-${color}`;

        return routeName == null
            ? <button type="button" id={id} className={className} disabled>{value}</button>
            : <Link type="button" id={id} className={className} to={route(routeName)}>{value}</Link>;
    }

    //endregion -------------------- Link button methods --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<CourseTagTypes> {
        return CourseTagTypes;
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.type === value)
            ?? null;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends CourseTagTypes = CourseTagTypes, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): CourseTagTypes
    public static getValue(value: PossibleValue,): | CourseTagTypes | null
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

type PossibleRouteName = Extract<EveryPossibleRouteNames, `${| 'every' | Exclude<PossibleCourseTagType, 'every'> | `${'official' | 'unofficial'}${| 'And' | 'Excluding'}MakerCentral`}CourseTags`>;
type LinkProperties = readonly [
    routeName: | PossibleRouteName | null,
    color: Extract<BootstrapColor, | 'success' | 'warning' | 'danger'>,
];
