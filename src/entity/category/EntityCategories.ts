import {PossibleTheme}        from '../theme/Themes';
import {EntityCategory}       from './EntityCategory';
import {EntityCategoryLoader} from './EntityCategoryLoader';

//region -------------------- category texts --------------------

export type PossibleEntityCategories = 'Terrain' | 'Item' | 'Enemy' | 'Gizmo';

//endregion -------------------- category texts --------------------

/**
 * @enum
 */
export class EntityCategories {

    //region -------------------- enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain');
    public static readonly ITEM = new EntityCategories('Item');
    public static readonly ENEMY = new EntityCategories('Enemy');
    public static readonly GIZMO = new EntityCategories('Gizmo');

    //endregion -------------------- enum instances --------------------

    private static __VALUES: readonly EntityCategories[];
    //region -------------------- Attributes --------------------

    #reference?: EntityCategory;
    readonly #englishName;
    // readonly #imagePath;

    //endregion -------------------- Attributes --------------------

    // private constructor(englishNameAndImagePath: PossibleEntityCategories)
    // private constructor(englishName: PossibleEntityCategories, basicImagePath: string)
    private constructor(englishName: PossibleEntityCategories/*, basicImagePath: string = englishName*/) {
        this.#englishName = englishName;
        // this.#imagePath = '/game/themes/' + basicImagePath;
    }


    //region -------------------- Methods --------------------

    public get englishName() {
        return this.#englishName;
    }

    public get reference() {
        return this.#reference ?? (this.#reference = this.#reference = EntityCategoryLoader.get.load().get(this.englishName)!);
    }

    // public get imagePath() {
    //     return this.#imagePath;
    // }

    //endregion -------------------- Methods --------------------
    //region -------------------- enum methods --------------------

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

    public static* [Symbol.iterator]() {
        for (const value of this.values)
            yield value;
    }

    //endregion -------------------- enum methods --------------------

}