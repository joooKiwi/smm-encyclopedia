import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                                     from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                                                                                       from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                                                                                                       from '../ClassWithReference';
import type {CourseAndWorldTheme, EnumArray, EnumArray_OnlyCourseTheme, EnumArray_OnlyWorldTheme, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue, SimpleImagePath} from './Themes.types';
import type {CourseTheme}                                                                                                                                                                                                                                                                                              from './CourseTheme';
import type {PossibleOtherEntities}                                                                                                                                                                                                                                                                                    from '../entity/Entity';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                                                                                                                                  from '../PropertyGetter';
import type {StaticReference}                                                                                                                                                                                                                                                                                          from '../../util/enum/Enum.types';
import type {ThemeProperty}                                                                                                                                                                                                                                                                                            from '../entity/properties/ThemeProperty';
import type {ThemeReferences}                                                                                                                                                                                                                                                                                          from '../entity/properties/ThemeReferences';
import type {WorldTheme}                                                                                                                                                                                                                                                                                               from './WorldTheme';

import {Enum}            from '../../util/enum/Enum';
import {ThemeLoader}     from './Theme.loader';
import {EmptyEntity}     from '../entity/EmptyEntity';
import {StringContainer} from '../../util/StringContainer';
import {ThemeComponent}  from './Theme.component';

/**
 * @recursiveReferenceVia<{@link ThemeBuilder}, {@link ThemeLoader}>
 * @recursiveReference<{@link ThemeLoader}>
 */
export class Themes
    extends Enum<Ordinals, Names>
    implements ClassWithReference<CourseAndWorldTheme>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath>,
        PropertyReferenceGetter<ThemeReferences, PossibleOtherEntities>,
        PropertyGetter<ThemeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly GROUND =      new class Themes_Ground extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInGroundTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInGroundTheme'] {
            return referenceProperty.referenceInGroundTheme;
        }

    }     ('Ground',);
    public static readonly UNDERGROUND = new class Themes_Underground extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInUndergroundTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInUndergroundTheme'] {
            return referenceProperty.referenceInUndergroundTheme;
        }

    }('Underground',);
    public static readonly UNDERWATER =  new class Themes_Underwater extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInUnderwaterTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInUnderwaterTheme'] {
            return referenceProperty.referenceInUnderwaterTheme;
        }

    } ('Underwater',);
    public static readonly DESERT =      new class Themes_Desert extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInDesertTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInDesertTheme'] {
            return referenceProperty.referenceInDesertTheme;
        }

    }     ('Desert',);
    public static readonly SNOW =        new class Themes_Snow extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInSnowTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInSnowTheme'] {
            return referenceProperty.referenceInSnowTheme;
        }

    }       ('Snow',);
    public static readonly SKY =         new class Themes_Sky extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInSkyTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInSkyTheme'] {
            return referenceProperty.referenceInSkyTheme;
        }

    }        ('Sky',);
    public static readonly FOREST =      new class Themes_Forest extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInForestTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInForestTheme'] {
            return referenceProperty.referenceInForestTheme;
        }

    }     ('Forest',);
    public static readonly GHOST_HOUSE = new class Themes_GhostHouse extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInGhostHouseTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInGhostHouseTheme'] {
            return referenceProperty.referenceInGhostHouseTheme;
        }

    } ('Ghost House',);
    public static readonly AIRSHIP =     new class Themes_Airship extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInAirshipTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInAirshipTheme'] {
            return referenceProperty.referenceInAirshipTheme;
        }

    }    ('Airship',);
    public static readonly CASTLE =      new class Themes_Castle extends Themes {

        protected _get(property: ThemeProperty,): | boolean | null {
            return property.isInCastleTheme;
        }

        public getReference(referenceProperty: ThemeReferences,): ThemeReferences['referenceInCastleTheme'] {
            return referenceProperty.referenceInCastleTheme;
        }

    }     ('Castle', 'Castle - Volcano',);

    public static readonly VOLCANO =     new Themes                                       ('Volcano', 'Castle - Volcano',);
    public static readonly SPACE =       new class Themes_Space extends Themes {

        public get longImagePath() {
            //FIXME a temporary fix to still get the image until the png image can be retrieved.
            return `${this.imagePath} (large).jpg`;
        }

    }       ('Space',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    static #COURSES: EnumArray_OnlyCourseTheme;
    static #WORLDS: EnumArray_OnlyWorldTheme;

    #reference?: CourseAndWorldTheme;
    #courseTheme?: CourseTheme;
    #worldTheme?: WorldTheme;
    readonly #englishName: StringContainer<PossibleEnglishName>;
    readonly #imagePath: PossibleImagePath;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: Themes,)
    private constructor(englishNameAndImagePath: PossibleEnglishName,)
    private constructor(englishName: PossibleEnglishName, basicImagePath: SimpleImagePath,)
    private constructor(englishName_or_enumeration: | PossibleEnglishName | Themes, basicImagePath: | SimpleImagePath | PossibleEnglishName = englishName_or_enumeration as PossibleEnglishName,) {
        super();
        if (englishName_or_enumeration instanceof Themes) {
            this.#englishName = englishName_or_enumeration.#englishName;
            this.#imagePath = englishName_or_enumeration.#imagePath;
        } else {
            this.#englishName = new StringContainer(englishName_or_enumeration);
            this.#imagePath = `/game/themes/${basicImagePath}` as PossibleImagePath;
        }
    }

    //region -------------------- Getter methods --------------------

    public get reference(): CourseAndWorldTheme {
        return this.#reference ??= ThemeLoader.get.load().get(this.englishName)!;
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
    }

    public get courseTheme(): CourseTheme {
        return this.#courseTheme ??= this.reference[0];
    }

    public get worldTheme(): WorldTheme {
        return this.#worldTheme ??= this.reference[1];
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath;
    }

    public get smallImagePath() {
        return `${this.imagePath} (small).png`;
    }

    public get longImagePath() {
        return `${this.imagePath} (large).png`;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    protected _get(property: ThemeProperty,): | boolean | null {
        return false;
    }

    public get(property: ThemeProperty,): boolean {
        return this._get(property) ?? false;
    }

    public getReference(referenceProperty: ThemeReferences,): PossibleOtherEntities {
        return [EmptyEntity.get];
    }

    public renderSingleComponent(isSmallPath: boolean,) {
        return ThemeComponent.renderSingleComponent(this, isSmallPath,);
    }


    public static get courseThemes(): EnumArray_OnlyCourseTheme {
        return this.#COURSES ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.UNDERWATER,
            this.DESERT,
            this.SNOW,
            this.SKY,
            this.FOREST,
            this.GHOST_HOUSE,
            this.AIRSHIP,
            this.CASTLE,
        ];
    }

    public static get worldThemes(): EnumArray_OnlyWorldTheme {
        return this.#WORLDS ??= [
            this.GROUND,
            this.UNDERGROUND,
            this.DESERT,
            this.SNOW,
            this.SKY,
            this.FOREST,
            this.VOLCANO,
            this.SPACE,
        ];
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<Themes> {
        return Themes;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends Themes = Themes, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): Themes
    public static getValue(value: PossibleValue,): | Themes | null
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
