import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'
import {lazy}                                                                    from 'react'

import type {AppOptionWithContent, PossibleRenderReactElement} from './component/AppOptionWithContent'
import type {AppOptionWithTable}                               from './component/AppOptionWithTable'
import type {Names, Ordinals}                                  from './GameStyleAppOption.types'
import type {NullOr}                                           from '../../util/types'
import type {GameStyles}                                       from '../../core/gameStyle/GameStyles'
import type {ReactElement}                                     from '../../util/react/ReactProperties'
import type {SingleHeaderContent}                              from '../tools/table/SimpleHeader'

import {AppOptionWithContentComponent}              from './component/AppOptionWithContent.component'
import {AppOptionWithTableComponent}                from './component/AppOptionWithTable.component'
import {CommonOptions}                              from './CommonOptions'
import {contentTranslation, gameContentTranslation} from '../../lang/components/translationMethods'
import {ProjectLanguages}                           from '../../lang/ProjectLanguages'
import {Themes}                                     from '../../core/theme/Themes'
import {Times}                                      from '../../core/time/Times'

//region -------------------- dynamic imports --------------------

const NightEffectComponent =       lazy(() => import( '../../core/nightEffect/NightEffect.component'))
const YesOrNoResultTextComponent = lazy(() => import( '../tools/text/YesOrNoResultTextComponent'))

//endregion -------------------- dynamic imports --------------------

export abstract class GameStyleAppOption
    extends Enum<Ordinals, Names>
    implements AppOptionWithContent, AppOptionWithTable {

    //region -------------------- Enum instances --------------------

    public static readonly IMAGE =             new class GameStyleAppOption_Images extends GameStyleAppOption {

        protected override _createContentOption(enumeration: GameStyles,): PossibleRenderReactElement {
            return enumeration.renderSingleComponent
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {key: 'image', element: contentTranslation('Image'),}
        }

    }()
    public static readonly NAME =              new class GameStyleAppOption_Name extends GameStyleAppOption {

        protected override _createContentOption(enumeration: GameStyles,): PossibleRenderReactElement {
            return CommonOptions.get.getNameContent(enumeration)
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.nameHeader
        }

    }()
    public static readonly GAME =              new class GameStyleAppOption_Game extends GameStyleAppOption {

        protected override _createContentOption({reference,}: GameStyles,): PossibleRenderReactElement {
            return [
                <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMaker1}/>,
                <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMakerFor3DS}/>,
                <YesOrNoResultTextComponent boolean={reference.isInSuperMarioMaker2}/>,
            ]
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return CommonOptions.get.gameHeaderWithAllGames
        }

    }()
    public static readonly NIGHT_DESERT_WIND = new class GameStyleAppOption_NightDesertWind extends GameStyleAppOption {

        protected override _createContentOption({reference,}: GameStyles,): PossibleRenderReactElement {
            return <NightEffectComponent gameStyle={reference}/>
        }

        protected override _createTableHeaderOption(): SingleHeaderContent {
            return {
                key: 'nightDesertWind',
                element: <div className="night-desert-wind-effect-container">{Themes.DESERT.renderSingleComponent(false)}{Times.NIGHT.renderSingleComponent}</div>,
                tooltip: gameContentTranslation('Wind effect (night desert)', {
                    night: '--night--',//TODO add night reference
                    desert: ProjectLanguages.currentLanguage.get(Themes.DESERT.reference)!.toLowerCase(),
                },),
            }
        }

    }()

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: GameStyleAppOption

    //endregion -------------------- Enum fields --------------------
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

    private constructor() {
        super()
    }

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

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return GameStyleAppOption
    }

    public static getValue(value: PossibleValueByEnumerable<GameStyleAppOption>,): GameStyleAppOption {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<GameStyleAppOption> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
