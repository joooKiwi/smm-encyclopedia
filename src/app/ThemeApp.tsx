import './ThemeApp.scss'

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from './interpreter/AppInterpreterWithTable'
import type {AppProperties}                                        from './AppProperties.types'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from '../util/react/ReactProperties'
import type {ThemeAppStates}                                       from './AppStates.types'

import {AbstractTableApp}       from './withInterpreter/AbstractTableApp'
import {EMPTY_REACT_ELEMENT}    from '../util/emptyReactVariables'
import {gameContentTranslation} from '../lang/components/translationMethods'
import Image                    from './tools/images/Image'
import {ThemeAppOption}         from './options/ThemeAppOption'
import {Themes}                 from '../core/theme/Themes'
import {ViewDisplays}           from './withInterpreter/ViewDisplays'
import {CommonOptions}          from './options/CommonOptions'

/**
 * @reactComponent
 */
export default class ThemeApp
    extends AbstractTableApp<AppInterpreterWithTable<Themes, ThemeAppOption>, AppProperties, ThemeAppStates> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.CARD_LIST,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'theme'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every themes')
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<Themes, ThemeAppOption> {
        return new class implements AppInterpreterWithTable<Themes, ThemeAppOption> {

            public get iterable() {
                return Themes[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: 4,
                    large: 3,
                    extraLarge: 2,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumerable: Themes,) {
                const {englishName, englishNameInHtml, endlessMarioImagePath,} = enumerable

                return <div className="card-body" id={`theme-${englishNameInHtml}`}>
                    <div className="col-2">{CommonOptions.get.getGameContent(enumerable)}</div>
                    <div className="images-container col-7">
                        {enumerable.renderSingleComponent(true)}
                        {endlessMarioImagePath != null ? <Image source={endlessMarioImagePath} fallbackName={`${englishName} (Endless mario)`}/> : EMPTY_REACT_ELEMENT}
                    </div>
                    <div className="col-2">{CommonOptions.get.getThemeContent(enumerable)}</div>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => Themes,) {
                ThemeAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): ThemeAppOption[] {
                return [
                    ThemeAppOption.IMAGE,
                    ThemeAppOption.NAME,
                    ThemeAppOption.NIGHT_EFFECT,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('Every themes')
                }
            }


            public createTableContent(option: ThemeAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: ThemeAppOption,) {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
