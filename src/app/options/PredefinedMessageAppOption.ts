import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}    from 'app/options/PredefinedMessageAppOption.types'
import type {SimpleReactHeader}  from 'app/tools/table/SimpleHeader'
import type {PredefinedMessages} from 'core/predefinedMessage/PredefinedMessages'

import {CommonOptions} from 'app/options/CommonOptions'
import {TableOption}   from 'app/tools/table/TableOption'

export abstract class PredefinedMessageAppOption
    extends TableOption<PredefinedMessages, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class PredefinedMessageAppOption_Name extends PredefinedMessageAppOption {

        public override renderContent(enumeration: PredefinedMessages,): ReactJSXElement {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader(): SimpleReactHeader {
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
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(associatedClass: string,) {
        super(associatedClass,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}
