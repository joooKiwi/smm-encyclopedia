import {Enum}                                                                    from '@joookiwi/enumerable'
import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'

import type {Names, Ordinals, PossibleEnglishCommonText, PossibleEnglishName} from 'core/entityLimit/EntityLimitTypes.types'
import type {Nullable}                                                        from 'util/types/nullable'

export class EntityLimitTypes
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly WHILE_PLAYING = new EntityLimitTypes('While Playing', 'While playing',)
    public static readonly EDITOR =        new EntityLimitTypes('Editor',        'In the editor',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: EntityLimitTypes

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #englishName
    readonly #englishCommonText

    //endregion -------------------- Fields --------------------

    private constructor(englishName: PossibleEnglishName, englishCommonText: PossibleEnglishCommonText,) {
        super()
        this.#englishName = englishName
        this.#englishCommonText = englishCommonText
    }

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

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return EntityLimitTypes
    }

    public static getValue(value: PossibleValueByEnumerable<EntityLimitTypes>,): EntityLimitTypes {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<EntityLimitTypes> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}