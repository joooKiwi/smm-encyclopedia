import {PossibleTheme}        from '../theme/Themes';
import {EntityCategory}       from './EntityCategory';
import {EntityCategoryLoader} from './EntityCategoryLoader';

export type PossibleEntityCategories = 'Terrain' | 'Item' | 'Enemy' | 'Gizmo';

export class EntityCategories {
    public static readonly TERRAIN = new EntityCategories('Terrain');
    public static readonly ITEM = new EntityCategories('Item');
    public static readonly ENEMY = new EntityCategories('Enemy');
    public static readonly GIZMO = new EntityCategories('Gizmo');

    private static __VALUES: readonly EntityCategories[];

    #reference?: EntityCategory;
    readonly #englishName;
    // readonly #imagePath;

    // private constructor(englishNameAndImagePath: PossibleEntityCategories)
    // private constructor(englishName: PossibleEntityCategories, basicImagePath: string)
    private constructor(englishName: PossibleEntityCategories/*, basicImagePath: string = englishName*/) {
        this.#englishName = englishName;
        // this.#imagePath = '/game/themes/' + basicImagePath;
    }


    public get englishName() {
        return this.#englishName;
    }

    public get reference() {
        return this.#reference ?? (this.#reference = this.#reference = EntityCategoryLoader.get.load().get(this.englishName)!);
    }

    // public get imagePath() {
    //     return this.#imagePath;
    // }


    public static getValue(value: EntityCategories | PossibleTheme): EntityCategories
    public static getValue(value: string): EntityCategories | null
    public static getValue(value: EntityCategories | string): EntityCategories | null
    public static getValue(value: EntityCategories | string): EntityCategories | null {
        return typeof value === 'string'
            ? this.values.find(theme => theme.englishName === value) ?? null
            : value;
    }

    public static get values(): readonly EntityCategories[] {
        return this.__VALUES ?? (this.__VALUES = [
            this.TERRAIN,
            this.ITEM,
            this.ENEMY,
            this.GIZMO,
        ]);
    }

}