import type {ClassWithAcronym}                                                                                                                                                                                                                                  from '../ClassWithAcronym';
import type {ClassWithEnglishName}                                                                                                                                                                                                                              from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                                from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                                                from '../ClassWithReference';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue, StartingImagePath} from './GameStyles.types';
import type {GameStyle}                                                                                                                                                                                                                                         from './GameStyle';
import type {GameStyleProperty}                                                                                                                                                                                                                                 from '../entity/properties/GameStyleProperty';
import type {GameStyleReferences}                                                                                                                                                                                                                               from '../entity/properties/GameStyleReferences';
import type {PossibleOtherEntities}                                                                                                                                                                                                                             from '../entity/Entity';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                                                                           from '../PropertyGetter';
import type {StaticReference}                                                                                                                                                                                                                                   from '../../util/enum/Enum.types';

import {Enum}             from '../../util/enum/Enum';
import {GameStyleLoader}  from './GameStyle.loader';
import GameStyleComponent from './GameStyle.component';
import {StringContainer}  from '../../util/StringContainer';

/**
 * @recursiveReferenceVia<{@link GameStyleBuilder}, {@link GameStyleLoader}>
 * @recursiveReference<{@link GameStyleLoader}>
 */
export abstract class GameStyles
    extends Enum<Ordinals, Names>
    implements ClassWithReference<GameStyle>,
        ClassWithAcronym<PossibleAcronym>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath>,
        PropertyReferenceGetter<GameStyleReferences, PossibleOtherEntities>,
        PropertyGetter<GameStyleProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new class GameStyles_SuperMarioBros extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioBrosStyle;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInSuperMarioBrosStyle'] {
            return referenceProperty.referenceInSuperMarioBrosStyle;
        }

    }    ('SMB',   'Super Mario Bros.',      );
    public static readonly SUPER_MARIO_BROS_3 =     new class GameStyles_SuperMarioBros3 extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioBros3Style;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInSuperMarioBros3Style'] {
            return referenceProperty.referenceInSuperMarioBros3Style;
        }

    }   ('SMB3',  'Super Mario Bros. 3',    );
    public static readonly SUPER_MARIO_WORLD =      new class GameStyles_SuperMarioWorld extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioWorldStyle;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInSuperMarioWorldStyle'] {
            return referenceProperty.referenceInSuperMarioWorldStyle;
        }

    }   ('SMW',   'Super Mario World',      );
    public static readonly NEW_SUPER_MARIO_BROS_U = new class GameStyles_NewSuperMarioBrosU extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInNewSuperMarioBrosUStyle;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInNewSuperMarioBrosUStyle'] {
            return referenceProperty.referenceInNewSuperMarioBrosUStyle;
        }

    }('NSMBU', 'New Super Mario Bros. U',);
    public static readonly SUPER_MARIO_3D_WORLD =   new class GameStyles_SuperMario3DWorld extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMario3DWorldStyle === true;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInSuperMario3DWorldStyle'] {
            return referenceProperty.referenceInSuperMario3DWorldStyle;
        }

    } ('SM3DW', 'Super Mario 3D World',   );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    #reference?: GameStyle;
    readonly #acronym;
    readonly #englishNameContainer: StringContainer<PossibleEnglishName>;
    readonly #startingImagePath: StartingImagePath;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: GameStyles,)
    private constructor(acronym: PossibleAcronym, englishName: PossibleEnglishName,)
    private constructor(acronym_or_enumeration: | PossibleAcronym | GameStyles, englishName?: PossibleEnglishName,) {
        super();
        if (acronym_or_enumeration instanceof GameStyles) {
            this.#acronym = acronym_or_enumeration.acronym;
            this.#englishNameContainer = acronym_or_enumeration.#englishNameContainer;
            this.#startingImagePath = this.startingImagePath;
        } else {
            this.#acronym = acronym_or_enumeration;
            this.#englishNameContainer = new StringContainer(englishName!);
            this.#startingImagePath = `/game/styles/${englishName!}`;
        }
    }

    //region -------------------- Getter methods --------------------

    public get reference(): GameStyle {
        return this.#reference ??= GameStyleLoader.get.load().get(this.englishName)!;
    }


    public get acronym(): PossibleAcronym {
        return this.#acronym;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml;
    }

    public get startingImagePath(): StartingImagePath {
        return this.#startingImagePath;
    }

    public get imagePath(): PossibleImagePath {
        return `${this.startingImagePath}.png`;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameStyleProperty,): boolean;

    public abstract getReference(referenceProperty: GameStyleReferences,): PossibleOtherEntities;

    public get renderSingleComponent() {
        return GameStyleComponent.renderSingleComponent(this);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<GameStyles> {
        return GameStyles;
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends GameStyles = GameStyles, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): GameStyles
    public static getValue(value: PossibleValue,): | GameStyles | null
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
