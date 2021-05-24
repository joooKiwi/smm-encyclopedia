import {Entity}         from '../simple/Entity';
import {EntityVerifier} from '../EntityVerifier';

export type PossibleGameName = `Super Mario Maker${'' | ' 2'}`;
export type PossibleImagePath = `/game/logos/${PossibleGameName}.png`;

/**
 * @enum
 */
export abstract class Games
    implements EntityVerifier<PossibleGameName> {
    public static readonly SUPER_MARIO_MAKER_1 = new class extends Games {
        public isEntityOn(entity: Entity): boolean {
            return entity.isInSuperMarioMaker1;
        }
    }('Super Mario Maker');
    public static readonly SUPER_MARIO_MAKER_2 = new class extends Games {
        public isEntityOn(entity: Entity): boolean {
            return entity.isInSuperMarioMaker2;
        }
    }('Super Mario Maker 2');

    private static __VALUES: readonly Games[];

    readonly #englishName;
    readonly #imagePath;

    private constructor(englishName: PossibleGameName) {
        this.#englishName = englishName;
        this.#imagePath = '/game/logos/' + englishName + '.png' as PossibleImagePath;
    }

    public get englishName(): PossibleGameName {
        return this.#englishName;
    }

    public abstract isEntityOn(entity: Entity): boolean;

    public get imagePath(): PossibleImagePath {
        return this.#imagePath;
    }


    public static getValue(value: Games | PossibleGameName): Games
    public static getValue(value: string): Games | null
    public static getValue(value: Games | string): Games | null
    public static getValue(value: Games | string): Games | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly Games[] {
        return this.__VALUES ?? (this.__VALUES = [
            this.SUPER_MARIO_MAKER_1,
            this.SUPER_MARIO_MAKER_2,
        ]);
    }

}
