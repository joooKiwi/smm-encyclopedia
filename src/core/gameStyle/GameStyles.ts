import type {ClassWithAcronym}                                                                                                                                                     from '../ClassWithAcronym';
import type {ClassWithEnglishName}                                                                                                                                                 from '../ClassWithEnglishName';
import type {ClassWithImagePath}                                                                                                                                                   from '../ClassWithImagePath';
import type {ClassWithReference}                                                                                                                                                   from '../ClassWithReference';
import type {Entity}                                                                                                                                                               from '../simple/Entity';
import type {EnumArray, Names, Ordinals, PossibleAcronym, PossibleEnglishName, PossibleImagePath, PossibleNonNullableValue, PossibleStringValue, PossibleValue, StartingImagePath} from './GameStyles.types';
import type {GameStyle}                                                                                                                                                            from './GameStyle';
import type {GameStyleProperty}                                                                                                                                                    from '../properties/GameStyleProperty';
import type {GameStyleReferences}                                                                                                                                                  from '../properties/GameStyleReferences';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                              from '../PropertyGetter';
import type {StaticReference}                                                                                                                                                      from '../../util/enum/Enum.types';

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
        PropertyReferenceGetter<GameStyleReferences>,
        PropertyGetter<GameStyleProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new class GameStyles_SuperMarioBros extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioBrosStyle;
        }

        public getReference(referenceProperty: GameStyleReferences,): Entity {
            return referenceProperty.referenceInSuperMarioBrosStyle;
        }

    }    ('SMB',   'Super Mario Bros.',      );
    public static readonly SUPER_MARIO_BROS_3 =     new class GameStyles_SuperMarioBros3 extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioBros3Style;
        }

        public getReference(referenceProperty: GameStyleReferences,): Entity {
            return referenceProperty.referenceInSuperMarioBros3Style;
        }

    }   ('SMB3',  'Super Mario Bros. 3',    );
    public static readonly SUPER_MARIO_WORLD =      new class GameStyles_SuperMarioWorld extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioWorldStyle;
        }

        public getReference(referenceProperty: GameStyleReferences,): Entity {
            return referenceProperty.referenceInSuperMarioWorldStyle;
        }

    }   ('SMW',   'Super Mario World',      );
    public static readonly NEW_SUPER_MARIO_BROS_U = new class GameStyles_NewSuperMarioBrosU extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInNewSuperMarioBrosUStyle;
        }

        public getReference(referenceProperty: GameStyleReferences,): Entity {
            return referenceProperty.referenceInNewSuperMarioBrosUStyle;
        }

    }('NSMBU', 'New Super Mario Bros. U',);
    public static readonly SUPER_MARIO_3D_WORLD =   new class GameStyles_SuperMario3DWorld extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMario3DWorldStyle === true;
        }

        public getReference(referenceProperty: GameStyleReferences,): Entity {
            return referenceProperty.referenceInSuperMario3DWorldStyle;
        }

    } ('SM3DW', 'Super Mario 3D World',   );

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Attributes --------------------

    #reference?: GameStyle;
    readonly #acronym;
    readonly #englishName;
    readonly #startingImagePath: StartingImagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(acronym: PossibleAcronym, englishName: PossibleEnglishName,) {
        super();
        this.#acronym = acronym;
        this.#englishName = new StringContainer(englishName);
        this.#startingImagePath = `/game/styles/${englishName}`;
    }

    //region -------------------- Getter methods --------------------

    public get reference(): GameStyle {
        return this.#reference ??= GameStyleLoader.get.load().get(this.englishName)!;
    }


    public get acronym(): PossibleAcronym {
        return this.#acronym;
    }

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get;
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml;
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

    public abstract getReference(referenceProperty: GameStyleReferences,): Entity;

    public get renderSingleComponent() {
        return GameStyleComponent.renderSingleComponent(this);
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected get _static(): StaticReference<GameStyles> {
        return GameStyles;
    }

    public static getValue(nullValue: null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumArray[O]
    public static getValue<O extends number = number, >(ordinal: O,): | NonNullable<EnumArray[O]> | null
    public static getValue<N extends Names = Names, >(name: N,): typeof GameStyles[N]
    public static getValue(name: PossibleStringValue,): GameStyles
    public static getValue(name: string,): | GameStyles | null
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
