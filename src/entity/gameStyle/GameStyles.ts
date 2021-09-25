import type {ClassWithAcronym}                                                                                                                                                          from '../ClassWithAcronym';
import type {ClassWithEnglishName}                                                                                                                                                      from '../ClassWithEnglishName';
import type {ClassWithReference}                                                                                                                                                        from '../ClassWithReference';
import type {Entity}                                                                                                                                                                    from '../simple/Entity';
import type {GameStyle}                                                                                                                                                                 from './GameStyle';
import type {GameStyleProperty}                                                                                                                                                         from '../properties/GameStyleProperty';
import type {GameStylesArray, GameStylesNames, GameStylesOrdinals, LargeImagePath, MediumImagePath, PossibleGameStyleAcronym, PossibleGameStyleName, SmallImagePath, StartingImagePath} from './GameStyles.types';
import type {GameStyleReferences}                                                                                                                                                       from '../properties/GameStyleReferences';
import type {PropertyGetter, PropertyReferenceGetter}                                                                                                                                   from '../PropertyGetter';

import {Enum}            from '../../util/enum/Enum';
import {GameStyleLoader} from './GameStyleLoader';

/**
 * @recursiveReferenceVia<{@link GameStyleBuilder}, {@link GameStyleLoader}>
 * @recursiveReference<{@link GameStyleLoader}>
 */
export abstract class GameStyles
    extends Enum<GameStylesOrdinals, GameStylesNames>
    implements ClassWithReference<GameStyle>,
        ClassWithAcronym<PossibleGameStyleAcronym>,
        ClassWithEnglishName<PossibleGameStyleName>,
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
    //region -------------------- Enum attributes --------------------

    static #VALUES: GameStylesArray;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    #reference?: GameStyle;
    readonly #acronym;
    readonly #englishName;
    readonly #startingImagePath: StartingImagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(acronym: PossibleGameStyleAcronym, englishName: PossibleGameStyleName,) {
        super(GameStyles);
        this.#acronym = acronym;
        this.#englishName = englishName;
        this.#startingImagePath = `/game/styles/${englishName}`;
    }

    //region -------------------- Getter methods --------------------

    public get reference(): GameStyle {
        return this.#reference ??= GameStyleLoader.get.load().get(this.englishName)!;
    }


    public get acronym(): PossibleGameStyleAcronym {
        return this.#acronym;
    }

    public get englishName(): PossibleGameStyleName {
        return this.#englishName;
    }

    public get startingImagePath(): StartingImagePath {
        return this.#startingImagePath;
    }

    public get smallImagePath(): SmallImagePath {
        return `${this.startingImagePath} - small.png`;
    }

    public get mediumImagePath(): MediumImagePath {
        return `${this.startingImagePath} - medium.png`;
    }

    public get largeImagePath(): LargeImagePath {
        return `${this.startingImagePath} - large.png`;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: GameStyleProperty,): boolean;

    public abstract getReference(referenceProperty: GameStyleReferences,): Entity;

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(nullValue: null | undefined,): null
    public static getValue<O extends GameStylesOrdinals = GameStylesOrdinals>(ordinal: O,): GameStylesArray[O]
    public static getValue<O extends number = number>(ordinal: O,): | NonNullable<GameStylesArray[O]> | null
    public static getValue(name: PossibleGameStyleName,): GameStyles
    public static getValue(name: string,): | GameStyles | null
    public static getValue<I extends GameStyles = GameStyles, >(instance: I,): I
    public static getValue(value: | GameStyles | string | number | null | undefined,): | GameStyles | null
    public static getValue(value: | GameStyles | string | number | null | undefined,): | GameStyles | null {
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

    public static get values(): GameStylesArray {
        return this.#VALUES ??= [
            this.SUPER_MARIO_BROS,
            this.SUPER_MARIO_BROS_3,
            this.SUPER_MARIO_WORLD,
            this.NEW_SUPER_MARIO_BROS_U,
            this.SUPER_MARIO_3D_WORLD,
        ];
    }


    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}
