import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/EditorVoiceAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {EditorVoices}        from 'core/editorVoice/EditorVoices'

import {CommonOptions}           from 'app/options/CommonOptions'
import EditorVoiceSoundComponent from 'core/editorVoice/EditorVoiceSound.component'
import {gameContentTranslation}  from 'lang/components/translationMethods'

export abstract class EditorVoiceAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<EditorVoices> {

    //region -------------------- Enum instances --------------------

    public static readonly NAME = new class EditorVoiceAppOption_Name extends EditorVoiceAppOption {

        protected override _createContentOption(enumeration: EditorVoices,) {
            return CommonOptions.get.getNameContent(enumeration,)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly EDITOR_VOICE = new class EditorVoiceAppOption_Name extends EditorVoiceAppOption {

        protected override _createContentOption(enumeration: EditorVoices,) {
            return <EditorVoiceSoundComponent editorVoiceSound={enumeration.editorVoiceSoundFileHolder} name={enumeration.englishName}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
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

    protected abstract _createContentOption(enumeration: EditorVoices,): ReactElement

    public renderContent(enumeration: EditorVoices,): readonly [ReactElement,] {
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
