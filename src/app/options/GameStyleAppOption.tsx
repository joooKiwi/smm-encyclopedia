import type {CollectionHolder}                                                    from '@joookiwi/collection'
import type {BasicCompanionEnumDeclaration, PossibleEnumerableValueBy, Singleton} from '@joookiwi/enumerable'
import {BasicCompanionEnum, Enum}                                                 from '@joookiwi/enumerable'

import type {Names, Ordinals}                                  from 'app/options/GameStyleAppOption.types'
import type {AppOptionWithContent, PossibleRenderReactElement} from 'app/options/component/AppOptionWithContent'
import type {AppOptionWithTable}                               from 'app/options/component/AppOptionWithTable'
import type {SingleHeaderContent}                              from 'app/tools/table/SimpleHeader'
import type {GameStyles}                                       from 'core/gameStyle/GameStyles'
import type {ReactElement}                                     from 'util/react/ReactProperties'
import type {NullOr}                                           from 'util/types/nullable'

import {CommonOptions}                              from 'app/options/CommonOptions'
import {AppOptionWithContentComponent}              from 'app/options/component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}                from 'app/options/component/AppOptionWithTable.component'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import NightEffectComponent                         from 'core/nightEffect/NightEffect.component'
import {Themes}                                     from 'core/theme/Themes'
import {Times}                                      from 'core/time/Times'
import {ProjectLanguages}                           from 'lang/ProjectLanguages'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

export abstract class GameStyleAppOption
    extends Enum<Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =             new class GameStyleAppOption_Images extends GameStyleAppOption {

        protected override _createContentOption(enumeration: GameStyles,) {
            return enumeration.renderSingleComponent
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'image', element: contentTranslation('Image'),}
        }

    }()
    public static readonly NAME =              new class GameStyleAppOption_Name extends GameStyleAppOption {

        protected override _createContentOption(enumeration: GameStyles,) {
            return CommonOptions.get.getNameContent(enumeration)
        }

        protected override _createTableHeaderOption() {
            return CommonOptions.get.nameHeader
        }

    }()
    public static readonly NIGHT_DESERT_WIND = new class GameStyleAppOption_NightDesertWind extends GameStyleAppOption {

        protected override _createContentOption({reference,}: GameStyles,) {
            return <NightEffectComponent gameStyle={reference}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'nightDesertWind',
                element: <div className="night-desert-wind-effect-container">{Themes.DESERT.renderSingleComponent(false)}{Times.NIGHT.renderSingleComponent}</div>,
                tooltip: gameContentTranslation('Wind effect (night desert)', {
                    night: unfinishedText('night'),//TODO add night reference
                    desert: ProjectLanguages.current.get(Themes.DESERT.reference)!.toLowerCase(),
                },),
            }
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<BasicCompanionEnumDeclaration<GameStyleAppOption, typeof GameStyleAppOption>> = class CompanionEnum_GameStyleAppOption
        extends BasicCompanionEnum<GameStyleAppOption, typeof GameStyleAppOption> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_GameStyleAppOption

        private constructor() {
            super(GameStyleAppOption,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_GameStyleAppOption()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    /**
     * The callback to get the enumeration based for each option.
     *
     * @note It should only be set by {@link GameStyleAppOption} and get by {@link EntityAppOption}.
     */
    public static CALLBACK_TO_GET_ENUMERATION: () => GameStyles

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

    protected abstract _createContentOption(enumeration: GameStyles,): PossibleRenderReactElement

    private get __appOptionWithContent(): AppOptionWithContent {
        return this.#appOptionWithContent ??= new AppOptionWithContentComponent(() => this._createContentOption(GameStyleAppOption.CALLBACK_TO_GET_ENUMERATION()),)
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

    public static getValue(value: PossibleEnumerableValueBy<GameStyleAppOption>,): GameStyleAppOption {
        return GameStyleAppOption.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<GameStyleAppOption> {
        return GameStyleAppOption.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<GameStyleAppOption> {
        yield* GameStyleAppOption.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
