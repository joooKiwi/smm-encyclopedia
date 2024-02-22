import './GameStyleApp.scss'
import 'core/game/GameAsideContent.scss'

import type {GameStyleProperties}     from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer         from 'app/_SubMainContainer'
import {GameStyleAppOption}     from 'app/options/GameStyleAppOption'
import {GameStyleGames}         from 'app/property/GameStyleGames'
import LinkButton               from 'app/tools/button/LinkButton'
import Table                    from 'app/tools/table/Table'
import CardList                 from 'app/withInterpreter/CardList'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {Games}                  from 'core/game/Games'
import {GameStyles}             from 'core/gameStyle/GameStyles'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame}             from 'util/utilitiesMethods'

class GameStyleAppInterpreter
    implements AppInterpreterWithTable<GameStyles, GameStyleAppOption> {

    //region -------------------- Fields --------------------

    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection,) {
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return filterGame(GameStyles.CompanionEnum.get.values, this.#games,)
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
    public readonly tableCaption = gameContentTranslation('game style.all',) satisfies ReactElementOrString

    public get tableOptions(): readonly GameStyleAppOption[] {
        return [
            GameStyleAppOption.ICON,
            GameStyleAppOption.NAME,
            GameStyleAppOption.NIGHT_DESERT_WIND,
        ]
    }

    public createTableContent(content: GameStyles, option: GameStyleAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: GameStyleAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyGameStyle (list)',],
    [ViewDisplays.CARD_LIST, 'everyGameStyle (card)',],
    [ViewDisplays.TABLE, 'everyGameStyle (table)',],
] as const satisfies readonly ViewAndRouteName[]
const titleContent = gameContentTranslation('game style.all',)

/** @reactComponent */
export default function GameStyleApp({viewDisplay, games,}: GameStyleProperties,) {
    const appInterpreter = new GameStyleAppInterpreter(games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="gameStyle" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<GameStyleAsideContent viewDisplay={viewDisplay}/>}>
            <SimpleList reactKey="gameStyle" interpreter={appInterpreter}/>
        </SubMainContainer>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SubMainContainer reactKey="gameStyle" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<GameStyleAsideContent viewDisplay={viewDisplay}/>}>
            <CardList reactKey="gameStyle" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="gameStyle" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             asideContent={<GameStyleAsideContent viewDisplay={viewDisplay}/>}>
        <Table id="gameStyle-table" interpreter={appInterpreter}/>
    </SubMainContainer>
}

//region -------------------- Aside content --------------------

interface GameStyleAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

}

const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

function GameStyleAsideContent({viewDisplay,}: GameStyleAsideContentProperties,) {
    const gameStyleGame = smm2.isSelected
        ? GameStyleGames.SUPER_MARIO_MAKER_2
        : GameStyleGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <div id="gameStyle-gamesButton-singularGame-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partialId="smm1Or3dsGame" routeName={gameStyleGame.getSmm1Or3dsRouteName(viewDisplay,)} color={gameStyleGame.smm1Or3dsColor}>{smm1.renderSingleComponent}{smm3ds.renderSingleComponent}</LinkButton>
        <LinkButton partialId="smm2Game" routeName={gameStyleGame.getSmm2RouteName(viewDisplay,)} color={gameStyleGame.smm2Color}>{smm2.renderSingleComponent}</LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
