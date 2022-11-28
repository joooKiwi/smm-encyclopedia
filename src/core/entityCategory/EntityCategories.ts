import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                            from '../ClassWithEnglishName'
import type {ClassWithImagePath}                                                                              from '../ClassWithImagePath'
import type {ClassWithReference}                                                                              from '../ClassWithReference'
import type {EntityCategory}                                                                                  from './EntityCategory'
import type {Names, Ordinals, PossibleEnglishName, PossibleImageName, PossibleImageNumber, PossibleImagePath} from './EntityCategories.types'
import type {Nullable}                                                                                        from '../../util/types'

import {BASE_PATH}             from '../../variables'
import {getValueByEnglishName} from '../../util/utilitiesMethods'
import {Import}                from '../../util/DynamicImporter'
import {StringContainer}       from '../../util/StringContainer'

/**
 * @recursiveReference {@link EntityCategoryLoader}
 * @classWithDynamicImport {@link EntityCategoryLoader}
 */
export class EntityCategories
    extends Enum<Ordinals, Names>
    implements ClassWithReference<EntityCategory>,
        ClassWithEnglishName<PossibleEnglishName>,
        ClassWithImagePath<PossibleImagePath> {

    //region -------------------- Enum instances --------------------

    public static readonly TERRAIN = new EntityCategories('Terrain', 0,)
    public static readonly ITEM =    new EntityCategories('Item',    1,)
    public static readonly ENEMY =   new EntityCategories('Enemy',   2,)
    public static readonly GIZMO =   new EntityCategories('Gizmo',   3,)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityCategories

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    static #REFERENCE_MAP?: ReadonlyMap<PossibleEnglishName, EntityCategory>

    #reference?: EntityCategory
    readonly #englishName
    readonly #imageName: PossibleImageName
    #imagePath?: PossibleImagePath

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName, imageNumber: PossibleImageNumber,) {
        super()
        this.#englishName = new StringContainer<PossibleEnglishName, Lowercase<PossibleEnglishName>>(englishName)
        this.#imageName = `CategoryIcon_0${imageNumber}`
    }

    //region -------------------- Getter methods --------------------

    public static get REFERENCE_MAP(): ReadonlyMap<PossibleEnglishName, EntityCategory> {
        return this.#REFERENCE_MAP ??= Import.EntityCategoryLoader.get.load()
    }

    /**
     * {@inheritDoc}
     * @semiAsynchronously
     */
    public get reference(): EntityCategory {
        return this.#reference ??= EntityCategories.REFERENCE_MAP.get(this.englishName)!
    }


    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): Lowercase<PossibleEnglishName> {
        return this.#englishName.getInHtml
    }

    public get imageName(): PossibleImageName {
        return this.#imageName
    }

    public get imagePath(): PossibleImagePath {
        return this.#imagePath ??= `/${BASE_PATH}/category/${this.imageName}^s.tiff`
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static get everyEnglishNames(): readonly PossibleEnglishName[] {
        return this.values.map(it => it.englishName).toArray()
    }

    public static getValueByName(value: Nullable<| EntityCategories | string>,): EntityCategories {
        return getValueByEnglishName(value, this,)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EntityCategories
    }

    public static getValue(value: PossibleValueByEnumerable<EntityCategories>,): EntityCategories {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EntityCategories> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}