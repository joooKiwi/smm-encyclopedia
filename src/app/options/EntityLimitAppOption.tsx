import './EntityLimitAppOption.scss'

import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {Names, Ordinals}                                  from 'app/options/EntityLimitAppOption.types'
import type {AppOptionWithContent, PossibleRenderReactElement} from 'app/options/component/AppOptionWithContent'
import type {AppOptionWithTable}                               from 'app/options/component/AppOptionWithTable'
import type {SingleHeaderContent}                              from 'app/tools/table/SimpleHeader'
import type {EntityLimit}                                      from 'core/entityLimit/EntityLimit'
import type {EntityLimits}                                     from 'core/entityLimit/EntityLimits'

import {CommonOptions}                 from 'app/options/CommonOptions'
import {COURSE_THEME_IMAGE_FILE}       from 'app/options/file/themeImageFiles'
import {AppOptionWithContentComponent} from 'app/options/component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}   from 'app/options/component/AppOptionWithTable.component'
import TextComponent                   from 'app/tools/text/TextComponent'
import Image                           from 'app/tools/images/Image'
import {Games}                         from 'core/game/Games'
import {EmptyEntityLimit}              from 'core/entityLimit/EmptyEntityLimit'
import {contentTranslation}            from 'lang/components/translationMethods'
import NameComponent                   from 'lang/name/component/Name.component'

export abstract class EntityLimitAppOption
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly ACRONYM = new class EntityLimitAppOption_Acronym extends EntityLimitAppOption {

        protected override _createContentOption({reference: {acronym, alternativeAcronym,},}: EntityLimits,) {
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
            return {key: 'acronym', element: contentTranslation('Acronym(s)'),}
        }

    }()
    public static readonly NAME = new class EntityLimitAppOption_Name extends EntityLimitAppOption {

        protected override _createContentOption({reference, isEditorLimit,}: EntityLimits,) {
            const {alternativeContainer} = reference
            return alternativeContainer instanceof EmptyEntityLimit
                ? this.#createNameComponent(reference, isEditorLimit,)
                : <div className="names-container d-flex flex-column flex-md-row">
                    {this.#createNameComponent(reference, isEditorLimit,)}
                    <div className="vertical-separator vr mx-3 d-none d-md-inline-block"/>
                    <hr className="horizontal-separator my-1 d-block d-md-none"/>
                    <NameComponent id="alternativeName" name={alternativeContainer} popoverOrientation="bottom"/>
                </div>
        }

        #createNameComponent(reference: EntityLimit, isEditorLimit: boolean,): ReactElement {
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
    public static readonly AMOUNT = new class EntityLimitAppOption_Amount extends EntityLimitAppOption {

        protected override _createContentOption(enumeration: EntityLimits,) {
            return [
                EntityLimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS._createContentOption(enumeration,),
                EntityLimitAppOption.AMOUNT_IN_SMM2._createContentOption(enumeration,),
            ]
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.getLimitHeader(
                    {key: 'limit-SuperMarioMaker1And3DS', alt: Games.SUPER_MARIO_MAKER_1.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_1.imageFile.fullName,},
                    {key: 'limit-SuperMarioMaker2', alt: Games.SUPER_MARIO_MAKER_2.imageFile.fallbackName, path: Games.SUPER_MARIO_MAKER_2.imageFile.fullName,},
            )
        }

    }()
    public static readonly AMOUNT_IN_SMM1_AND_SMM3DS = new class EntityLimitAppOption_AmountInSMM1AndSMM3DS extends EntityLimitAppOption {

        public override _createContentOption({reference, englishName,}: EntityLimits,) {
            return <TextComponent key={`${englishName} - text component (amount SMM1&3DS)`} content={reference.limitAmountInSMM1AndSMM3DS} isUnknown={reference.isUnknownLimitInSMM1AndSMM3DS}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }

    }()
    public static readonly AMOUNT_IN_SMM2 = new class EntityLimitAppOption_AmountInSMM2 extends EntityLimitAppOption {

        public override _createContentOption({reference, englishName,}: EntityLimits,) {
            return <TextComponent key={`${englishName} - text component (amount SMM2)`} content={reference.limitAmountInSMM2} isUnknown={reference.isUnknownLimitInSMM2}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.limitHeader
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<EntityLimitAppOption, typeof EntityLimitAppOption> = class CompanionEnum_EntityLimitAppOption
        extends CompanionEnum<EntityLimitAppOption, typeof EntityLimitAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_EntityLimitAppOption

        private constructor() {
            super(EntityLimitAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_EntityLimitAppOption()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link EntityLimitAppOption} and get by {@link EntityLimitApp}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => EntityLimits

    #appOptionWithContent?: AppOptionWithContent
    #appOptionWithTable?: AppOptionWithTable

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

    protected abstract _createContentOption(enumeration: EntityLimits,): PossibleRenderReactElement

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(() => this._createContentOption(EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION()),)
    }

    public get renderContent(): readonly ReactElement[] {
        return this.__appOptionWithContent.renderContent
    }

    //endregion -------------------- App option - content --------------------
    //region -------------------- App option - table --------------------

    protected abstract _createTableHeaderOption(): SingleHeaderContent

    private get __appOptionWithTable(): AppOptionWithTable {
        return this.#appOptionWithTable ??= new AppOptionWithTableComponent(() => this._createTableHeaderOption(),)
    }

    public get renderTableHeader(): NullOr<SingleHeaderContent> {
        return this.__appOptionWithTable.renderTableHeader
    }

    //endregion -------------------- App option - table --------------------

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<EntityLimitAppOption>,): EntityLimitAppOption {
        return EntityLimitAppOption.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<EntityLimitAppOption> {
        return EntityLimitAppOption.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<EntityLimitAppOption> {
        yield* EntityLimitAppOption.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
