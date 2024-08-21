import 'app/_GameAsideContent.scss'
import './GameStyleApp.scss'

import type {GameStyleProperties}     from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import SubMainContainer                             from 'app/_SubMainContainer'
import {GameStyleAppOption}                         from 'app/options/GameStyleAppOption'
import {GameStyleGames}                             from 'app/property/GameStyleGames'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import GameStyleImage                               from 'core/gameStyle/GameStyleImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame}                                 from 'util/utilitiesMethods'

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
            <GameStyleImage reference={enumerable}/>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
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

const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

/** @reactComponent */
export default function GameStyleApp({viewDisplay, games,}: GameStyleProperties,) {
    const game = games.hasSMM2
        ? GameStyleGames.SUPER_MARIO_MAKER_2
        : GameStyleGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <SubMainContainer reactKey="gameStyle" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('game style.all',)}
                             description={<GameStyleDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<GameStyleAsideContent viewDisplay={viewDisplay} game={game}/>}>
        <SubContent viewDisplay={viewDisplay} games={games}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games,}: GameStyleProperties,) {
    const appInterpreter = new GameStyleAppInterpreter(games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="gameStyle" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="gameStyle" interpreter={appInterpreter}/>
    return <Table id="gameStyle-table" interpreter={appInterpreter}/>
}

//region -------------------- Description content --------------------

interface GameStyleDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: GameStyleGames

}

/** @reactComponent */
function GameStyleDescription({viewDisplay, game,}: GameStyleDescriptionProperties,) {
    const entity = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName.toLowerCase(),)
    const entities = OtherWordInTheGames.ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.pluralEnglishName.toLowerCase(),)

    const smm1OrSmm3dsLink = game.getSmm1Or3dsRouteName(viewDisplay,)
    const smm2Link = game.getSmm2RouteName(viewDisplay,)

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyGameStyle (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyGameStyle (card)' satisfies PossibleRouteName
    const tableLink = viewDisplay === ViewDisplays.TABLE ? null : 'everyGameStyle (table)' satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation('game style.description.intro page', {
                gameStyles: <em key="gameStyles">{gameContentTranslation('game style.plural',).toLowerCase()}</em>,
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1OrSmm3dsLink}><GameImage reference={smm1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm1OrSmm3dsLink}><GameImage reference={smm3ds}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={smm2}/></TextOrLink>,
            },)}
            {gameContentTranslation('game style.description.intro sm3dw', {
                sm3dwLink: <LinkText key="sm3dwLink" partialId="sm3dwLink" routeName="everyEntity (card GameStyle=3DW)" color="primary"><GameStyleImage reference={GameStyles.SUPER_MARIO_3D_WORLD}/></LinkText>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-sm3dw-description" routeName={smm2Link}><GameImage reference={smm2}/></TextOrLink>,
            },)}
            {gameContentTranslation('game style.description.intro entity', {
                entityLink: <LinkText key="entityLink"  partialId="entityLink" routeName="everyEntity" color="primary">{entity}</LinkText>,
                entitiesLink: <LinkText key="entitiesLink" partialId="entityLink" routeName="everyEntity" color="primary">{entities}</LinkText>,
                smbLink: <LinkText key="smbLink" partialId="smbLink" routeName="everyEntity (card GameStyle=1)" color="primary"><GameStyleImage reference={GameStyles.SUPER_MARIO_BROS}/></LinkText>,
                smb3Link: <LinkText key="smb3Link" partialId="smb3Link" routeName="everyEntity (card GameStyle=3)" color="primary"><GameStyleImage reference={GameStyles.SUPER_MARIO_BROS_3}/></LinkText>,
                smwLink: <LinkText key="smwLink" partialId="smwLink" routeName="everyEntity (card GameStyle=W)" color="primary"><GameStyleImage reference={GameStyles.SUPER_MARIO_WORLD}/></LinkText>,
                nsmbuLink: <LinkText key="nsmbuLink" partialId="nsmbuLink" routeName="everyEntity (card GameStyle=U)" color="primary"><GameStyleImage reference={GameStyles.NEW_SUPER_MARIO_BROS_U}/></LinkText>,
                sm3dwLink: <LinkText key="sm3dwLink" partialId="sm3dwLink" routeName="everyEntity (card GameStyle=3DW)" color="primary"><GameStyleImage reference={GameStyles.SUPER_MARIO_3D_WORLD}/></LinkText>,
            },)}
        </p>
        <p>{gameContentTranslation('game style.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
            tableLink: <LinkText key="tableLink" partialId="tableLink" routeName={tableLink} color="primary">{contentTranslation('view type.table.singular',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface GameStyleAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: GameStyleGames

}

/** @reactComponent */
function GameStyleAsideContent({viewDisplay, game,}: GameStyleAsideContentProperties,) {
    return <div id="gameStyle-gamesButton-singularGame-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partialId="smm1Or3dsGame" routeName={game.getSmm1Or3dsRouteName(viewDisplay,)} color={game.smm1Or3dsColor}>
            <GameImage reference={smm1}/>
            <GameImage reference={smm3ds}/>
        </LinkButton>
        <LinkButton partialId="smm2Game" routeName={game.getSmm2RouteName(viewDisplay,)} color={game.smm2Color}>
            <GameImage reference={smm2}/>
        </LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
