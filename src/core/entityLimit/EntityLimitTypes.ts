import {Enum} from '@joookiwi/enumerable'

import type {Names, Ordinals, PossibleEnglishCommonText, PossibleEnglishName} from 'core/entityLimit/EntityLimitTypes.types'
import type {CompanionEnumByNameSingleton}                                    from 'util/enumerable/Singleton.types'

import {ClassWithEnglishName} from 'core/ClassWithEnglishName'
import {StringContainer}      from 'util/StringContainer'
import {CompanionEnumByName}  from 'util/enumerable/companion/CompanionEnumByName'

export class EntityLimitTypes
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<PossibleEnglishName> {

    //region -------------------- Enum instances --------------------

    public static readonly WHILE_PLAYING = new EntityLimitTypes('While Playing', 'While playing',)
    public static readonly EDITOR =        new EntityLimitTypes('Editor',        'In the editor',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumByNameSingleton<EntityLimitTypes, typeof EntityLimitTypes> = class CompanionEnum_EntityLimitTypes
        extends CompanionEnumByName<EntityLimitTypes, typeof EntityLimitTypes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityLimitTypes

        private constructor() {
            super(EntityLimitTypes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityLimitTypes()
        }

        //endregion -------------------- Singleton usage --------------------

        public override getValueByName(value: Nullable<| EntityLimitTypes | string>,): EntityLimitTypes {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null name.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.find(it =>
                it.englishName === value
                || it.englishCommonText === value,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by this value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName
    readonly #englishCommonText

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: PossibleEnglishName, englishCommonText: PossibleEnglishCommonText,) {
        super()
        this.#englishName = new StringContainer(englishName,)
        this.#englishCommonText = englishCommonText
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): PossibleEnglishName {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get englishCommonText(): PossibleEnglishCommonText {
        return this.#englishCommonText
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}