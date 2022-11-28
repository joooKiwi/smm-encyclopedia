import './GameStyleApp.scss'

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from './interpreter/AppInterpreterWithTable'
import type {AppProperties}                                        from './AppProperties.types'
import type {GameStyleAppStates}                                   from './AppStates.types'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from '../util/react/ReactProperties'

import {AbstractTableApp}       from './withInterpreter/AbstractTableApp'
import {gameContentTranslation} from '../lang/components/translationMethods'
import {GameStyleAppOption}     from './options/GameStyleAppOption'
import {GameStyles}             from '../core/gameStyle/GameStyles'
import {ViewDisplays}           from './withInterpreter/ViewDisplays'

/**
 * @reactComponent
 */
export default class GameStyleApp
    extends AbstractTableApp<AppInterpreterWithTable<GameStyles, GameStyleAppOption>, AppProperties, GameStyleAppStates> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'gameStyle'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every game styles')
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<GameStyles, GameStyleAppOption> {
        return new class implements AppInterpreterWithTable<GameStyles, GameStyleAppOption> {

            public get iterable() {
                return GameStyles[Symbol.iterator]()
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
                    GameStyleAppOption.GAME,
                    GameStyleAppOption.NIGHT_DESERT_WIND,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('Every game styles'),
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
