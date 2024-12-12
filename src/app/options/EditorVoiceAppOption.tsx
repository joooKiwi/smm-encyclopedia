import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}     from 'app/options/EditorVoiceAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {EditorVoices}        from 'core/editorVoice/EditorVoices'

import {CommonOptions}           from 'app/options/CommonOptions'
import {TableOption}             from 'app/tools/table/TableOption'
import EditorVoiceSound          from 'core/editorVoice/component/EditorVoiceSound'
import {gameContentTranslation}  from 'lang/components/translationMethods'

export abstract class EditorVoiceAppOption
    extends TableOption<EditorVoices, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class EditorVoiceAppOption_Name extends EditorVoiceAppOption {

        public override renderContent(enumeration: EditorVoices,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        public override renderHeader() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly EDITOR_VOICE = new class EditorVoiceAppOption_Name extends EditorVoiceAppOption {

        public override renderContent(enumeration: EditorVoices,) {
            return <EditorVoiceSound editorVoice={enumeration}/>
        }

        public override renderHeader(): SingleHeaderContent {
            return {key: 'editor-voice', element: gameContentTranslation('editor voice.singular',),}
        }

    }('editor-voice',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<EditorVoiceAppOption, typeof EditorVoiceAppOption> = class CompanionEnum_EditorVoiceAppOption
        extends CompanionEnum<EditorVoiceAppOption, typeof EditorVoiceAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EditorVoiceAppOption

        private constructor() {
            super(EditorVoiceAppOption,)
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
