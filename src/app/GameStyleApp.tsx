import './GameStyleApp.scss'

import type {GameStyleProperties}                                  from 'app/AppProperties.types'
import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {GameStyleAppOption}     from 'app/options/GameStyleAppOption'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {GameStyles}             from 'core/gameStyle/GameStyles'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {newIterableIterator}    from 'util/utilitiesMethods'

export default class GameStyleApp
    extends AbstractTableApp<AppInterpreterWithTable<GameStyles, GameStyleAppOption>, GameStyleProperties> {

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'gameStyle'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyGameStyle (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyGameStyle (card)'
    }

    protected override _createTableRouteName(): EveryPossibleRouteNames {
        return 'everyGameStyle (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('game style.all')
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<GameStyles, GameStyleAppOption> {
        const $this = this

        return new class implements AppInterpreterWithTable<GameStyles, GameStyleAppOption> {

            public get iterable() {
                return newIterableIterator($this.props.games, GameStyles[Symbol.iterator](),)
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: 4,
                    large: null,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumerable: GameStyles,) {
                return <div className="card-body" id={`gameStyle-${enumerable.englishNameInHtml}`}>
                    {enumerable.renderSingleComponent}
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------

            public set callbackToGetEnumerable(value: () => GameStyles,) {
                GameStyleAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): readonly GameStyleAppOption[] {
                return [
                    GameStyleAppOption.IMAGE,
                    GameStyleAppOption.NAME,
                    GameStyleAppOption.NIGHT_DESERT_WIND,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('game style.all'),
                }
            }


            public createTableContent(option: GameStyleAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: GameStyleAppOption,) {
                return option.renderTableHeader
            }

        }()
    }

    //endregion -------------------- Create methods --------------------

}
