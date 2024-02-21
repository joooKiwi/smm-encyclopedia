import './LimitAppOption.scss'

import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/LimitAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {Limit}               from 'core/limit/Limit'
import type {Limits}              from 'core/limit/Limits'

import {CommonOptions}           from 'app/options/CommonOptions'
import {COURSE_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import TextComponent             from 'app/tools/text/TextComponent'
import Image                     from 'app/tools/images/Image'
import {EmptyLimit}              from 'core/limit/EmptyLimit'
import {ProjectLanguages}        from 'lang/ProjectLanguages'
import {contentTranslation}      from 'lang/components/translationMethods'
import NameComponent             from 'lang/name/component/Name.component'

export abstract class LimitAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<Limits> {

    //region -------------------- Enum instances --------------------

    public static readonly ACRONYM = new class LimitAppOption_Acronym extends LimitAppOption {

        protected override _createContentOption({reference: {acronym, alternativeAcronym,},}: Limits,) {
            return alternativeAcronym == null
                ? acronym == null
                    ? null
                    : <TextComponent content={acronym}/>
                : <div className="acronyms-container d-flex flex-column flex-md-row">
                    <TextComponent content={acronym}/>
                    <div className="vertical-separator vr mx-2 d-none d-md-inline-block"/>
                    <hr className="horizontal-separator my-1 d-block d-md-none"/>
                    <TextComponent content={alternativeAcronym}/>
                </div>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'acronym', element: contentTranslation('Acronym(s)',),}
        }

    }()
    public static readonly NAME = new class LimitAppOption_Name extends LimitAppOption {

        protected override _createContentOption({reference, isEditorLimit,}: Limits,) {
            const {alternativeContainer} = reference
            return alternativeContainer instanceof EmptyLimit
                ? this.#createNameComponent(reference, isEditorLimit,)
                : <div className="names-container d-flex flex-column flex-md-row">
                    {this.#createNameComponent(reference, isEditorLimit,)}
                    <div className="vertical-separator vr mx-3 d-none d-md-inline-block"/>
                    <hr className="horizontal-separator my-1 d-block d-md-none"/>
                    <NameComponent id="alternativeName" name={alternativeContainer} popoverOrientation="bottom"/>
                </div>
        }

        #createNameComponent(reference: Limit, isEditorLimit: boolean,): ReactElement {
            return isEditorLimit
                ? <div className="nameWithImage-container d-flex position-relative">
                    <Image file={COURSE_THEME_IMAGE_FILE} className="course-theme-image badge bg-transparent position-absolute top-0 start-0"/>
                    <NameComponent id="name" name={reference} popoverOrientation="bottom"/>
                </div>
                : <NameComponent id="name" name={reference} popoverOrientation="bottom"/>
        }


        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader
        }

    }()
    public static readonly AMOUNT_IN_ALL_GAMES = new class LimitAppOption_Amount extends LimitAppOption {

        protected override _createContentOption(enumeration: Limits,) {
            const {reference: {limitAmountInSMM1AndSMM3DS, limitAmountInSMM2, isUnknownLimitInSMM2,}, englishName,} = enumeration
            if (limitAmountInSMM1AndSMM3DS === limitAmountInSMM2)
                return <TextComponent key={`${englishName} - text component`} content={limitAmountInSMM2} isUnknown={isUnknownLimitInSMM2}/>

            return <span key={`Amount in all games (${englishName})`} className="space-pre">
                {LimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS.renderContent(enumeration,)}
                {ProjectLanguages.current.space}{ProjectLanguages.current.slash}{ProjectLanguages.current.space}
                {LimitAppOption.AMOUNT_IN_SMM2.renderContent(enumeration,)}
            </span>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }
    }()
    public static readonly AMOUNT_IN_SMM1_AND_SMM3DS = new class LimitAppOption_AmountInSMM1AndSMM3DS extends LimitAppOption {

        protected override _createContentOption({reference, englishName,}: Limits,) {
            return <TextComponent key={`${englishName} - text component (amount SMM1&3DS)`} content={reference.limitAmountInSMM1AndSMM3DS} isUnknown={reference.isUnknownLimitInSMM1AndSMM3DS}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }

    }()
    public static readonly AMOUNT_IN_SMM2 = new class LimitAppOption_AmountInSMM2 extends LimitAppOption {

        protected override _createContentOption({reference, englishName,}: Limits,) {
            return <TextComponent key={`${englishName} - text component (amount SMM2)`} content={reference.limitAmountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<LimitAppOption, typeof LimitAppOption> = class CompanionEnum_LimitAppOption
        extends CompanionEnum<LimitAppOption, typeof LimitAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_LimitAppOption

        private constructor() {
            super(LimitAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_LimitAppOption()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------
    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor() {
        super()
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------
    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- App option - content --------------------

    protected abstract _createContentOption(enumeration: Limits,): ReactElement

    public renderContent(enumeration: Limits,): readonly [ReactElement,] {
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
