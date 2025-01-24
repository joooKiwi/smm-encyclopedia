import type {CompanionEnumSingleton} from '@joookiwi/enumerable'
import {CompanionEnum}               from '@joookiwi/enumerable'

import type {Names, Ordinals}     from 'app/options/LimitAppOption.types'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'
import type {Limit}               from 'core/limit/Limit'
import type {Limits}              from 'core/limit/Limits'

import {CommonOptions}                              from 'app/options/CommonOptions'
import {COURSE_THEME_IMAGE_FILE}                    from 'app/options/file/themeImageFiles'
import {TableOption}                                from 'app/tools/table/TableOption'
import TextComponent                                from 'app/tools/text/TextComponent'
import Image                                        from 'app/tools/images/Image'
import {EmptyAlternativeLimit}                      from 'core/limit/EmptyAlternativeLimit'
import LimitWithPossibleTooltipOnNote               from 'core/limit/component/LimitWithPossibleTooltipOnNote'
import {ProjectLanguages}                           from 'lang/ProjectLanguages'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'

import LanguageCompanion = ProjectLanguages.Companion

export abstract class LimitAppOption
    extends TableOption<Limits, Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ACRONYM = new class LimitAppOption_Acronym extends LimitAppOption {

        public override renderContent({acronym, alternativeAcronym,}: Limits,) {
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

        public override renderHeader(): SingleHeaderContent {
            return {key: 'acronym', element: contentTranslation('Acronym(s)',),}
        }

    }('acronym',)
    public static readonly NAME = new class LimitAppOption_Name extends LimitAppOption {

        public override renderContent({reference, isEditorLimit,}: Limits,) {
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


        public override renderHeader(): SingleHeaderContent {
            return CommonOptions.get.nameHeader
        }

    }('name',)
    public static readonly DESCRIPTION = new class LimitAppOption_Description extends LimitAppOption {

        public override renderContent({reference: {description,}, descriptionForTranslation,}: Limits,) {
            return <TextComponent content={gameContentTranslation(`limit.description.${description}`, descriptionForTranslation,)}/>
        }

        public override renderHeader(): SingleHeaderContent {
            return {key: 'description', element: contentTranslation('Description',),}
        }

    }('description',)
    public static readonly AMOUNT_IN_ALL_GAMES = new class LimitAppOption_Amount extends LimitAppOption {

        public override renderContent(enumeration: Limits,) {
            const reference = enumeration.reference
            const amountInSMM2 = reference.limitAmountInSMM2
            const {englishName,} = enumeration
            if (reference.limitAmountInSMM1AndSMM3DS === amountInSMM2)
                return <LimitWithPossibleTooltipOnNote value={enumeration} key={`${englishName} - limit amount in all games, but displayed as the same value`}>
                    <TextComponent content={amountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>
                </LimitWithPossibleTooltipOnNote>

            const currentLanguage = LanguageCompanion.current
            return <LimitWithPossibleTooltipOnNote value={enumeration} key={`${englishName} - limit amount in all games`}>
                <TextComponent content={reference.limitAmountInSMM1AndSMM3DS} isUnknown={reference.isUnknownLimitInSMM1AndSMM3DS}/>
                <span className="space-pre">{currentLanguage.space}{currentLanguage.slash}{currentLanguage.space}</span>
                <TextComponent content={reference.limitAmountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>
            </LimitWithPossibleTooltipOnNote>
        }

        public override renderHeader(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }

    }('allGame-amount',)
    public static readonly AMOUNT_IN_SMM1_AND_SMM3DS = new class LimitAppOption_AmountInSMM1AndSMM3DS extends LimitAppOption {

        public override renderContent(enumeration: Limits,) {
            const reference = enumeration.reference
            return <LimitWithPossibleTooltipOnNote value={enumeration} key={`${enumeration.englishName} - limit amount in only SMM1 & SMM3DS`}>
                <TextComponent content={reference.limitAmountInSMM1AndSMM3DS} isUnknown={reference.isUnknownLimitInSMM1AndSMM3DS}/>
            </LimitWithPossibleTooltipOnNote>
        }

        public override renderHeader(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }

    }('smm1-amount',)
    public static readonly AMOUNT_IN_SMM2 = new class LimitAppOption_AmountInSMM2 extends LimitAppOption {

        public override renderContent(enumeration: Limits,) {
            const reference = enumeration.reference
            return <LimitWithPossibleTooltipOnNote value={enumeration} key={`${enumeration.englishName} - limit amount in only SMM2`}>
                <TextComponent content={reference.limitAmountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>
            </LimitWithPossibleTooltipOnNote>
        }

        public override renderHeader(): SingleHeaderContent {
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
