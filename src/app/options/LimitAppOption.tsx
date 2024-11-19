import './LimitAppOption.scss'

import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}         from '@joookiwi/enumerable'

import type {AppOption}           from 'app/options/AppOption'
import type {Names, Ordinals}     from 'app/options/LimitAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {Limit}               from 'core/limit/Limit'
import type {Limits}              from 'core/limit/Limits'

import {CommonOptions}                              from 'app/options/CommonOptions'
import LimitWithPossibleTooltipOnNote               from 'app/options/LimitWithPossibleTooltipOnNote'
import {COURSE_THEME_IMAGE_FILE}                    from 'app/options/file/themeImageFiles'
import TextComponent                                from 'app/tools/text/TextComponent'
import Image                                        from 'app/tools/images/Image'
import {EmptyAlternativeLimit}                      from 'core/limit/EmptyAlternativeLimit'
import {ProjectLanguages}                           from 'lang/ProjectLanguages'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'

export abstract class LimitAppOption
    extends Enum<Ordinals, Names>
    implements AppOption<Limits> {

    //region -------------------- Enum instances --------------------

    public static readonly ACRONYM = new class LimitAppOption_Acronym extends LimitAppOption {

        protected override _createContentOption({reference: {acronym, alternativeAcronym,},}: Limits,) {
            if (alternativeAcronym == null) {
                if (acronym == null)
                    return null
                return <TextComponent content={acronym}/>
            }
            return <div className="acronyms-container d-flex flex-column flex-md-row">
                <TextComponent content={acronym}/>
                <div className="vertical-separator vr mx-2 d-none d-md-inline-block"/>
                <hr className="horizontal-separator my-1 d-block d-md-none"/>
                <TextComponent content={alternativeAcronym}/>
            </div>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'acronym', element: contentTranslation('Acronym(s)',),}
        }

    }('acronym',)
    public static readonly NAME = new class LimitAppOption_Name extends LimitAppOption {

        protected override _createContentOption({reference, isEditorLimit,}: Limits,) {
            const alternativeContainer = reference.alternativeContainer
            if (alternativeContainer instanceof EmptyAlternativeLimit)
                return this.#createNameComponent(reference, isEditorLimit,)
            return <div className="names-container d-flex flex-column flex-md-row">
                {this.#createNameComponent(reference, isEditorLimit,)}
                <div className="vertical-separator vr mx-3 d-none d-md-inline-block"/>
                <hr className="horizontal-separator my-1 d-block d-md-none"/>
                <NameComponent id="alternativeName" name={alternativeContainer} popoverOrientation="bottom"/>
            </div>
        }

        #createNameComponent(reference: Limit, isEditorLimit: boolean,): ReactElement {
            if (isEditorLimit)
                return <div className="nameWithImage-container d-flex position-relative">
                    <Image file={COURSE_THEME_IMAGE_FILE} className="course-theme-image badge bg-transparent position-absolute top-0 start-0"/>
                    <NameComponent id="name" name={reference} popoverOrientation="bottom"/>
                </div>
            return <NameComponent id="name" name={reference} popoverOrientation="bottom"/>
        }


        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly DESCRIPTION = new class LimitAppOption_Description extends LimitAppOption {

        protected override _createContentOption({reference: {description,}, descriptionForTranslation,}: Limits,) {
            return <TextComponent content={gameContentTranslation(`limit.description.${description}`, descriptionForTranslation,)}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'description', element: contentTranslation('Description',),}
        }

    }('description',)
    public static readonly AMOUNT_IN_ALL_GAMES = new class LimitAppOption_Amount extends LimitAppOption {

        protected override _createContentOption(enumeration: Limits,) {
            const reference = enumeration.reference
            const amountInSMM2 = reference.limitAmountInSMM2
            const {englishName,} = enumeration
            if (reference.limitAmountInSMM1AndSMM3DS === amountInSMM2)
                return <LimitWithPossibleTooltipOnNote value={enumeration} key={`${englishName} - limit amount in all games, but displayed as the same value`}>
                    <TextComponent content={amountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>
                </LimitWithPossibleTooltipOnNote>
            return <LimitWithPossibleTooltipOnNote value={enumeration} key={`${englishName} - limit amount in all games`}>
                <TextComponent content={reference.limitAmountInSMM1AndSMM3DS} isUnknown={reference.isUnknownLimitInSMM1AndSMM3DS}/>
                <span className="space-pre">{ProjectLanguages.current.space}{ProjectLanguages.current.slash}{ProjectLanguages.current.space}</span>
                <TextComponent content={reference.limitAmountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>
            </LimitWithPossibleTooltipOnNote>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }
    }('allGame-amount',)
    public static readonly AMOUNT_IN_SMM1_AND_SMM3DS = new class LimitAppOption_AmountInSMM1AndSMM3DS extends LimitAppOption {

        protected override _createContentOption(enumeration: Limits,) {
            const reference = enumeration.reference
            return <LimitWithPossibleTooltipOnNote value={enumeration} key={`${enumeration.englishName} - limit amount in only SMM1 & SMM3DS`}>
                <TextComponent content={reference.limitAmountInSMM1AndSMM3DS} isUnknown={reference.isUnknownLimitInSMM1AndSMM3DS}/>
            </LimitWithPossibleTooltipOnNote>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }

    }('smm1-amount',)
    public static readonly AMOUNT_IN_SMM2 = new class LimitAppOption_AmountInSMM2 extends LimitAppOption {

        protected override _createContentOption(enumeration: Limits,) {
            const reference = enumeration.reference
            return <LimitWithPossibleTooltipOnNote value={enumeration} key={`${enumeration.englishName} - limit amount in only SMM2`}>
                <TextComponent content={reference.limitAmountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>
            </LimitWithPossibleTooltipOnNote>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }

    }('smm2-amount',)

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
