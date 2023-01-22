import './ThemeApp.scss'

import type {AppProperties}                                        from 'app/AppProperties.types'
import type {ThemeAppStates}                                       from 'app/AppStates.types'
import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {CommonOptions}          from 'app/options/CommonOptions'
import {ThemeAppOption}         from 'app/options/ThemeAppOption'
import Image                    from 'app/tools/images/Image'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {Themes}                 from 'core/theme/Themes'
import {gameContentTranslation} from 'lang/components/translationMethods'

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
        return gameContentTranslation('theme.all.all')
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
                const {englishNameInHtml, endlessMarioImageFile,} = enumerable

                return <div className="card-body" id={`theme-${englishNameInHtml}`}>
                    <div className="col-2">{CommonOptions.get.getGameContent(enumerable)}</div>
                    <div className="images-container col-7">
                        {enumerable.renderSingleComponent(true)}
                        <Image file={endlessMarioImageFile}/>
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
                    caption: gameContentTranslation('theme.all.all')
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
