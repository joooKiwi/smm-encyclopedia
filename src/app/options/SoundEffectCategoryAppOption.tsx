import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}             from 'app/options/AppOption'
import type {Names, Ordinals}       from 'app/options/SoundEffectCategoryAppOption.types'
import type {SingleHeaderContent}   from 'app/tools/table/SimpleHeader'
import type {SoundEffectCategories} from 'core/soundEffectCategory/SoundEffectCategories'

import {CommonOptions} from 'app/options/CommonOptions'
import Image           from 'app/tools/images/Image'

export abstract class SoundEffectCategoryAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<SoundEffectCategories> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON = new class SoundEffectCategoryAppOption_Icon extends SoundEffectCategoryAppOption {

        protected override _createContentOption(enumeration: SoundEffectCategories,) {
            return <Image file={enumeration.imageFile}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME = new class SoundEffectCategoryAppOption_Name extends SoundEffectCategoryAppOption {

        protected override _createContentOption(enumeration: SoundEffectCategories,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<SoundEffectCategoryAppOption, typeof SoundEffectCategoryAppOption> = class CompanionEnum_SoundEffectCategoryAppOption
        extends CompanionEnum<SoundEffectCategoryAppOption, typeof SoundEffectCategoryAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_SoundEffectCategoryAppOption

        private constructor() {
            super(SoundEffectCategoryAppOption,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #associatedClass
    readonly #additionalClasses

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super()
        this.#additionalClasses = [this.#associatedClass = associatedClass,] as const
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get associatedClass(): string {
        return this.#associatedClass
    }

    public get additionalClasses(): readonly [string,] {
        return this.#additionalClasses
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: SoundEffectCategories,): ReactElement

    public renderContent(enumeration: SoundEffectCategories,): readonly [ReactElement,] {
        return [this._createContentOption(enumeration,),]
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent

    public renderTableHeader(): SingleHeaderContent {
        return this._createTableHeaderOption()
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------

}
