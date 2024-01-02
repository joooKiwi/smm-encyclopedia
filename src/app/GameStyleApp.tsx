import './GameStyleApp.scss'

import type {GameStyleProperties}     from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import {GameStyleAppOption}     from 'app/options/GameStyleAppOption'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {GameStyles}             from 'core/gameStyle/GameStyles'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame}             from 'util/utilitiesMethods'

export default class GameStyleApp
    extends AbstractTableApp<GameStyles, AppInterpreterWithTable<GameStyles, GameStyleAppOption>, GameStyleProperties> {

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'gameStyle'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everyGameStyle (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
        return 'everyGameStyle (card)'
    }

    protected override _createTableRouteName(): PossibleRouteName {
        return 'everyGameStyle (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('game style.all')
    }

    protected override _createAppOptionInterpreter() {
        const $this = this

        return new class GameStyleAppInterpreter implements AppInterpreterWithTable<GameStyles, GameStyleAppOption> {

            public get content() {
                return filterGame(GameStyles.CompanionEnum.get.values, $this.props.games,)
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): DimensionOnList {
                return {
                    default: 1,
                    small: 2,
                    medium: 3,
                    extraLarge: 5,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension() {
                return this.createListDimension()
            }

            public createCardListContent(enumerable: GameStyles,) {
                return <div className="card-body" id={`gameStyle-${enumerable.englishNameInHtml}`}>
                    {enumerable.renderSingleComponent}
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
            public readonly tableColor = 'primary' satisfies BootstrapThemeColor
            public readonly tableCaption = gameContentTranslation('game style.all') satisfies ReactElementOrString

            public get tableOptions(): readonly GameStyleAppOption[] {
                return [
                    GameStyleAppOption.ICON,
                    GameStyleAppOption.NAME,
                    GameStyleAppOption.NIGHT_DESERT_WIND,
                ]
            }

            public createNewTableContent(content: GameStyles, option: GameStyleAppOption,) {
                return option.renderContent(content,)
            }

            public createTableHeader(option: GameStyleAppOption,) {
                return option.renderTableHeader()
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
