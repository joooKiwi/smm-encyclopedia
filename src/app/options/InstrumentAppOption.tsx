import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/InstrumentAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {Instruments}         from 'core/instrument/Instruments'

import {CommonOptions} from 'app/options/CommonOptions'
import InstrumentSound from 'core/instrument/component/InstrumentSound'

export abstract class InstrumentAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<Instruments> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class InstrumentAppOption_Name extends InstrumentAppOption {

        protected override _createContentOption(enumeration: Instruments,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly SOUND = new class InstrumentAppOption_Sound extends InstrumentAppOption {

        protected override _createContentOption(enumeration: Instruments,) {
            return <InstrumentSound value={enumeration}/>
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.soundHeader
        }

    }('sound',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<InstrumentAppOption, typeof InstrumentAppOption> = class CompanionEnum_InstrumentAppOption
        extends CompanionEnum<InstrumentAppOption, typeof InstrumentAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_InstrumentAppOption

        private constructor() {
            super(InstrumentAppOption,)
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

    protected abstract _createContentOption(enumeration: Instruments,): ReactElement

    public renderContent(enumeration: Instruments,): readonly [ReactElement,] {
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
