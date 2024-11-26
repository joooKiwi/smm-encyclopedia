import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/CharacterNameAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {PredefinedMessages}  from 'core/predefinedMessage/PredefinedMessages'

import {CommonOptions} from 'app/options/CommonOptions'

export abstract class PredefinedMessageAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<PredefinedMessages> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class PredefinedMessageAppOption_Name extends PredefinedMessageAppOption {

        protected override _createContentOption(enumeration: PredefinedMessages,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<PredefinedMessageAppOption, typeof PredefinedMessageAppOption> = class CompanionEnum_PredefinedMessageAppOption
        extends CompanionEnum<PredefinedMessageAppOption, typeof PredefinedMessageAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_PredefinedMessageAppOption

        private constructor() {
            super(PredefinedMessageAppOption,)
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

    protected abstract _createContentOption(enumeration: PredefinedMessages,): ReactElement

    public renderContent(enumeration: PredefinedMessages,): readonly [ReactElement,] {
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
