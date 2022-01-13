import type {ClassWithAcronym}                                                                                                                                                                                                                                                                            from '../ClassWithAcronym';
import type {ClassWithEnglishName}                                                                                                                                                                                                                                                                        from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                                                                                                                                          from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                                                                                                                                          from '../ClassWithReference';
import type {EnumArray, EnumArray_SMM1, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleGameAcronym, PossibleImagePath, PossibleNonNullableValue, PossibleShortImagePath, PossibleStringValue, PossibleValue} from './GameStyles.types';
import type {GameStyle}                                                                                                                                                                                                                                                                                   from './GameStyle';
import type {GameStyleProperty}                                                                                                                                                                                                                                                                           from '../entity/properties/GameStyleProperty';
import type {GameStyleReferences}                                                                                                                                                                                                                                                                         from '../entity/properties/GameStyleReferences';
import type {PossibleOtherEntities}                                                                                                                                                                                                                                                                       from '../entity/Entity';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                                                                                                                                     from '../PropertyGetter';
import type {StaticReference}                                                                                                                                                                                                                                                                             from '../../util/enum/Enum.types';

import {Enum}             from '../../util/enum/Enum';
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

    }    ('SMB',   'M1', 'Super Mario Bros.',      );
    public static readonly SUPER_MARIO_BROS_3 =     new class GameStyles_SuperMarioBros3 extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioBros3Style;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInSuperMarioBros3Style'] {
            return referenceProperty.referenceInSuperMarioBros3Style;
        }

    }   ('SMB3',  'M3', 'Super Mario Bros. 3',    );
    public static readonly SUPER_MARIO_WORLD =      new class GameStyles_SuperMarioWorld extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioWorldStyle;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInSuperMarioWorldStyle'] {
            return referenceProperty.referenceInSuperMarioWorldStyle;
        }

    }   ('SMW',   'MW', 'Super Mario World',      );
    public static readonly NEW_SUPER_MARIO_BROS_U = new class GameStyles_NewSuperMarioBrosU extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInNewSuperMarioBrosUStyle;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInNewSuperMarioBrosUStyle'] {
            return referenceProperty.referenceInNewSuperMarioBrosUStyle;
        }

    }('NSMBU', 'WU', 'New Super Mario Bros. U',);
    public static readonly SUPER_MARIO_3D_WORLD =   new class GameStyles_SuperMario3DWorld extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMario3DWorldStyle === true;
        }

        public getReference(referenceProperty: GameStyleReferences,): GameStyleReferences['referenceInSuperMario3DWorldStyle'] {
            return referenceProperty.referenceInSuperMario3DWorldStyle;
        }

    } ('SM3DW', '3W', 'Super Mario 3D World',   );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: GameStyles;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    static #map?: ReadonlyMap<PossibleEnglishName, GameStyle>;
    static #GAME_STYLES_SMM1?: EnumArray_SMM1;

    #reference?: GameStyle;
    readonly #acronym;
    readonly #gameAcronym;
    readonly #englishNameContainer: StringContainer<PossibleEnglishName>;
    #imagePath?: PossibleImagePath;
    #shortImagePath?: PossibleShortImagePath;

    //endregion -------------------- Attributes --------------------

    // @ts-ignore
    protected constructor(enumeration: GameStyles,)
    private constructor(acronym: PossibleAcronym, gameAcronym: PossibleGameAcronym, englishName: PossibleEnglishName,)
    private constructor(acronym_or_enumeration: | PossibleAcronym | GameStyles, gameAcronym: PossibleGameAcronym, englishName: PossibleEnglishName,) {
        super();
        if (acronym_or_enumeration instanceof GameStyles) {
            this.#acronym = acronym_or_enumeration.acronym;
            this.#gameAcronym = acronym_or_enumeration.gameAcronym;
            this.#englishNameContainer = acronym_or_enumeration.#englishNameContainer;
        } else {
            this.#acronym = acronym_or_enumeration;
            this.#gameAcronym = gameAcronym;
            this.#englishNameContainer = new StringContainer(englishName);
        }
    }

    //region -------------------- Getter methods --------------------

    private static get __map() {
        return this.#map ??= require('./GameStyle.loader').GameStyleLoader.get.load();
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): GameStyle {
        return this.#reference ??= GameStyles.__map.get(this.englishName)!;
    }


    public get acronym(): PossibleAcronym {
        return this.#acronym;
    }

    public get gameAcronym(): PossibleGameAcronym {
        return this.#gameAcronym;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishNameContainer.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishNameContainer.getInHtml;
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/game style/${this.gameAcronym}_Lyt_Logo_00.tiff`;
    }

    public get shortImagePath(): PossibleShortImagePath {
        return this.#shortImagePath ??= `${this.ordinal + 1} - ${this.acronym}` as PossibleShortImagePath;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameStyleProperty,): boolean;

    public abstract getReference(referenceProperty: GameStyleReferences,): PossibleOtherEntities;

    public get renderSingleComponent() {
        return GameStyleComponent.renderSingleComponent(this);
    }


    public static get everyAcronyms(): readonly PossibleAcronym[] {
        return this.values.map(limit => limit.acronym);
    }

    public static get gameStyles_smm1(): EnumArray_SMM1 {
        return this.#GAME_STYLES_SMM1 ??= [this.SUPER_MARIO_BROS, this.SUPER_MARIO_BROS_3, this.SUPER_MARIO_WORLD, this.NEW_SUPER_MARIO_BROS_U,];
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
