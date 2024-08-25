import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {Medals}              from 'core/medal/Medals'
import type {Names, Ordinals}     from 'app/options/MedalAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {AppOption}           from 'app/options/AppOption'

import {CommonOptions} from 'app/options/CommonOptions'
import Image           from 'app/tools/images/Image'

export abstract class MedalAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<Medals> {

    //region -------------------- Enum instances --------------------

    public static readonly ICON = new class MedalAppOption_Icon extends MedalAppOption {

        protected override _createContentOption(enumeration: Medals,) {
            return <Image file={enumeration.imageFile}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.iconHeader
        }

    }('icon',)
    public static readonly NAME = new class MedalAppOption_Name extends MedalAppOption {

        protected override _createContentOption(enumeration: Medals,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    //TODO add the 2 other properties of a Medal (max # of level to upload / # of star to unlock it)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<MedalAppOption, typeof MedalAppOption> = class CompanionEnum_MedalAppOption
        extends CompanionEnum<MedalAppOption, typeof MedalAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_MedalAppOption

        private constructor() {
            super(MedalAppOption,)
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

    protected abstract _createContentOption(enumeration: Medals,): ReactElement

    public renderContent(enumeration: Medals,): readonly [ReactElement,] {
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
