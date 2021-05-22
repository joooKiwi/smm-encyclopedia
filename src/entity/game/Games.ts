export type PossibleGameFullName = `Super Mario Maker${'' | ' 2'}`;

/**
 * @enum
 */
export class Games {
    public static readonly SUPER_MARIO_MAKER_1 = new Games('Super Mario Maker');
    public static readonly SUPER_MARIO_MAKER_2 = new Games('Super Mario Maker 2');

    private static __VALUES: readonly Games[];

    readonly #englishName;
    readonly #imagePath;

    private constructor(englishName: PossibleGameFullName) {
        this.#englishName = englishName;
        this.#imagePath = '/game/logos/' + englishName + '.png';
    }

    public get englishName() {
        return this.#englishName;
    }

    public get fullName() {
        return this.#englishName;//TODO change to translation name
    }

    public get imagePath() {
        return this.#imagePath;
    }


    public static getValue(value: Games | PossibleGameFullName): Games
    public static getValue(value: string): Games | null
    public static getValue(value: Games | string): Games | null
    public static getValue(value: Games | string): Games | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.fullName === value) ?? null
            : value;
    }

    public static get values(): readonly Games[] {
        return this.__VALUES ?? (this.__VALUES = [
            this.SUPER_MARIO_MAKER_1,
            this.SUPER_MARIO_MAKER_2,
        ]);
    }


}