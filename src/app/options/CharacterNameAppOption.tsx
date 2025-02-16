import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}   from 'app/options/CharacterNameAppOption.types'
import type {SimpleReactHeader} from 'app/tools/table/SimpleHeader'
import type {CharacterNames}    from 'core/characterName/CharacterNames'

import {CommonOptions}          from 'app/options/CommonOptions'
import {TableOption}            from 'app/tools/table/TableOption'
import EditorVoiceSound         from 'core/editorVoice/component/EditorVoiceSound'
import {gameContentTranslation} from 'lang/components/translationMethods'

export abstract class CharacterNameAppOption
    extends TableOption<CharacterNames, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class CharacterNameAppOption_Name extends CharacterNameAppOption {

        public override renderContent(enumeration: CharacterNames,): ReactJSXElement {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader(): SimpleReactHeader {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly EDITOR_VOICE = new class CharacterNameAppOption_Name extends CharacterNameAppOption {

        public override renderContent(enumeration: CharacterNames,): ReactJSXElement {
            return <EditorVoiceSound editorVoice={enumeration.editorVoice} name={enumeration.uniqueEnglishName}/>
        }

        public override renderHeader(): SimpleReactHeader {
            return {key: 'editorSound', element: gameContentTranslation('editor voice.singular',),}
        }

    }('editorVoice',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<CharacterNameAppOption, typeof CharacterNameAppOption> = class CompanionEnum_CharacterNameAppOption
        extends CompanionEnum<CharacterNameAppOption, typeof CharacterNameAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_CharacterNameAppOption

        private constructor() {
            super(CharacterNameAppOption,)
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
