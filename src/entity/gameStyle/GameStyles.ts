import {Entity}                      from '../simple/Entity';
import {EntityVerifierWithReference} from '../EntityVerifier';
import {GameStyle}                   from './GameStyle';
import {GameStyleLoader}             from './GameStyleLoader';

export type PossibleGameStyleName = `Super Mario ${`Bros.${'' | ' 3'}` | `${'' | '3D '}World`}` | 'New Super Mario Bros. U'

type StartingImagePath = `/game/styles/${PossibleGameStyleName}`;
export type SmallImagePath = `${StartingImagePath} - small.png`;
export type MediumImagePath = `${StartingImagePath} - medium.png`;
export type LargeImagePath = `${StartingImagePath} - large.png`;
export type PossibleImagePath = `${StartingImagePath} - ${'small' | 'medium' | 'large'}.png`;

/**
 * @enum
 */
export abstract class GameStyles
    implements EntityVerifierWithReference<PossibleGameStyleName, GameStyle> {
    public static readonly SUPER_MARIO_BROS = new class extends GameStyles {
        public isEntityOn(entity: Entity): boolean {
            return entity.isInSuperMarioBrosStyle;
        }
    }('Super Mario Bros.');
    public static readonly SUPER_MARIO_BROS_3 = new class extends GameStyles {
        public isEntityOn(entity: Entity): boolean {
            return entity.isInSuperMarioBros3Style;
        }
    }('Super Mario Bros. 3');
    public static readonly SUPER_MARIO_WORLD = new class extends GameStyles {
        public isEntityOn(entity: Entity): boolean {
            return entity.isInSuperMarioWorldStyle;
        }
    }('Super Mario World');
    public static readonly NEW_SUPER_MARIO_BROS_U = new class extends GameStyles {
        public isEntityOn(entity: Entity): boolean {
            return entity.isInNewSuperMarioBrosUStyle;
        }
    }('New Super Mario Bros. U');
    public static readonly SUPER_MARIO_3D_WORLD = new class extends GameStyles {
        public isEntityOn(entity: Entity): boolean {
            return entity.isInSuperMario3DWorldStyle === true;
        }
    }('Super Mario 3D World');

    private static __VALUES: readonly GameStyles[];

    #references?: GameStyle;
    readonly #englishName;
    readonly #startingImagePath: StartingImagePath;

    private constructor(englishName: PossibleGameStyleName) {
        this.#englishName = englishName;
        this.#startingImagePath = '/game/styles/' + englishName as StartingImagePath;
    }


    public get englishName() {
        return this.#englishName;
    }

    public abstract isEntityOn(entity: Entity): boolean;

    public get references() {
        return this.#references ?? (this.#references = GameStyleLoader.get.load().get(this.englishName)!);
    }

    public get startingImagePath(): StartingImagePath {
        return this.#startingImagePath;
    }

    public get smallImagePath(): SmallImagePath {
        return this.#startingImagePath + ' - small.png' as SmallImagePath;
    }

    public get mediumImagePath(): MediumImagePath {
        return this.#startingImagePath + ' - medium.png' as MediumImagePath;
    }

    public get largeImagePath(): LargeImagePath {
        return this.#startingImagePath + ' - large.png' as LargeImagePath;
    }


    public static getValue(value: GameStyles | PossibleGameStyleName): GameStyles
    public static getValue(value: string): GameStyles | null
    public static getValue(value: GameStyles | string): GameStyles | null
    public static getValue(value: GameStyles | string): GameStyles | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly GameStyles[] {
        return this.__VALUES ?? (this.__VALUES = [
            this.SUPER_MARIO_BROS,
            this.SUPER_MARIO_BROS_3,
            this.SUPER_MARIO_WORLD,
            this.NEW_SUPER_MARIO_BROS_U,
            this.SUPER_MARIO_3D_WORLD,
        ]);
    }

}