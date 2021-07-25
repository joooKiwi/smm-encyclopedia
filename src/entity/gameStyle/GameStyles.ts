import type {PropertyGetterWithReference} from '../PropertyGetter';
import type {GameStyle}                   from './GameStyle';
import type {GameStyleProperty}           from '../properties/GameStyleProperty';
import type {SimpleEnum}                  from '../../util/enum/EnumTypes';

import {GameStyleLoader} from './GameStyleLoader';

//region -------------------- game style texts --------------------

export type PossibleGameStyleName = `Super Mario ${`Bros.${'' | ' 3'}` | `${'' | '3D '}World`}` | 'New Super Mario Bros. U'

type StartingImagePath = `/game/styles/${PossibleGameStyleName}`;
export type SmallImagePath = `${StartingImagePath} - small.png`;
export type MediumImagePath = `${StartingImagePath} - medium.png`;
export type LargeImagePath = `${StartingImagePath} - large.png`;
export type PossibleImagePath = `${StartingImagePath} - ${'small' | 'medium' | 'large'}.png`;

//endregion -------------------- game style texts --------------------
//region -------------------- Enum types --------------------

export type GameStylesOrdinals = | 0 | 1 | 2 | 3 | 4;
export type GameStylesNames = | 'SUPER_MARIO_BROS' | 'SUPER_MARIO_BROS_3' | 'SUPER_MARIO_WORLD' | 'NEW_SUPER_MARIO_BROS_U' | 'SUPER_MARIO_3D_WORLD';
export type SimpleGameStyles<T = GameStyles, > = SimpleEnum<GameStylesNames, T>;
export type GameStylesArray<T = GameStyles, > = readonly [
    SimpleGameStyles<T>['SUPER_MARIO_BROS'],
    SimpleGameStyles<T>['SUPER_MARIO_BROS_3'],
    SimpleGameStyles<T>['SUPER_MARIO_WORLD'],
    SimpleGameStyles<T>['NEW_SUPER_MARIO_BROS_U'],
    SimpleGameStyles<T>['SUPER_MARIO_3D_WORLD'],
];

//endregion -------------------- Enum types --------------------

/**
 * @enum
 */
export abstract class GameStyles
    implements PropertyGetterWithReference<PossibleGameStyleName, GameStyleProperty, GameStyle> {

    //region -------------------- enum instances --------------------

    public static readonly SUPER_MARIO_BROS =       new class GameStyles_SuperMarioBros extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioBrosStyle;
        }

    }    ('Super Mario Bros.',);
    public static readonly SUPER_MARIO_BROS_3 =     new class GameStyles_SuperMarioBros3 extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioBros3Style;
        }

    }   ('Super Mario Bros. 3',);
    public static readonly SUPER_MARIO_WORLD =      new class GameStyles_SuperMarioWorld extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMarioWorldStyle;
        }

    }   ('Super Mario World',);
    public static readonly NEW_SUPER_MARIO_BROS_U = new class GameStyles_NewSuperMarioBrosU extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInNewSuperMarioBrosUStyle;
        }

    }('New Super Mario Bros. U',);
    public static readonly SUPER_MARIO_3D_WORLD =   new class GameStyles_SuperMario3DWorld extends GameStyles {

        public get(property: GameStyleProperty,): boolean {
            return property.isInSuperMario3DWorldStyle === true;
        }

    } ('Super Mario 3D World',);

    //endregion -------------------- enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static #VALUES: GameStylesArray;
    static #LAST_ORDINAL: GameStylesOrdinals = 0;
    readonly #ordinal: GameStylesOrdinals;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    #references?: GameStyle;
    readonly #englishName;
    readonly #startingImagePath: StartingImagePath;

    //endregion -------------------- Attributes --------------------

    private constructor(englishName: PossibleGameStyleName,) {
        this.#ordinal = GameStyles.#LAST_ORDINAL++ as GameStylesOrdinals;
        this.#englishName = englishName;
        this.#startingImagePath = `/game/styles/${englishName}`;
    }

    //region -------------------- Methods --------------------

    public get englishName() {
        return this.#englishName;
    }

    public abstract get(property: GameStyleProperty,): boolean;

    public get references() {
        return this.#references ??= GameStyleLoader.get.load().get(this.englishName)!;
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

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

    public static getValue(value: | GameStyles | PossibleGameStyleName,): GameStyles
    public static getValue(value: string,): | GameStyles | null
    public static getValue(value: | GameStyles | string,): | GameStyles | null
    public static getValue(value: | GameStyles | string,): | GameStyles | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
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

    //endregion -------------------- enum methods --------------------

}
