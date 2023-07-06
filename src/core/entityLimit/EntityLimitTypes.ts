import type {CollectionHolder}                                       from '@joookiwi/collection'
import type {BasicCompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {BasicCompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleEnglishCommonText, PossibleEnglishName} from 'core/entityLimit/EntityLimitTypes.types'
import type {Nullable}                                                        from 'util/types/nullable'

export class EntityLimitTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly WHILE_PLAYING = new EntityLimitTypes('While Playing', 'While playing',)
    public static readonly EDITOR =        new EntityLimitTypes('Editor',        'In the editor',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: BasicCompanionEnumSingleton<EntityLimitTypes, typeof EntityLimitTypes> = class CompanionEnum_EntityLimitTypes
        extends BasicCompanionEnum<EntityLimitTypes, typeof EntityLimitTypes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityLimitTypes

        private constructor() {
            super(EntityLimitTypes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityLimitTypes()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName
    readonly #englishCommonText

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, englishCommonText: PossibleEnglishCommonText,) {
        super()
        this.#englishName = englishName
        this.#englishCommonText = englishCommonText
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName
    }

    public get englishCommonText(): PossibleEnglishCommonText {
        return this.#englishCommonText
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public static getValueByName(value: Nullable<| EntityLimitTypes | string>,): EntityLimitTypes {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null name.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(it => it.englishName === value
            || it.englishCommonText === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<EntityLimitTypes>,): EntityLimitTypes {
        return EntityLimitTypes.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<EntityLimitTypes> {
        return EntityLimitTypes.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<EntityLimitTypes> {
        yield* EntityLimitTypes.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}