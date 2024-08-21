import 'app/_GameAsideContent.scss'
import './LimitApp.scss'

import type {LimitAppProperties}      from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {LimitTypes}              from 'app/property/LimitTypes'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ClassWithType}           from 'core/ClassWithType'
import type {Limits}                  from 'core/limit/Limits'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {LimitAppOption}                             from 'app/options/LimitAppOption'
import {COURSE_THEME_IMAGE_FILE}                    from 'app/options/file/themeImageFiles'
import {LimitGames}                                 from 'app/property/LimitGames'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Image                                        from 'app/tools/images/Image'
import Table                                        from 'app/tools/table/Table'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame, intersect}                      from 'util/utilitiesMethods'

class LimitAppInterpreter
    implements AppInterpreterWithTable<Limits, LimitAppOption>,
        ClassWithType<LimitTypes> {

    //region -------------------- Fields --------------------

    readonly #type
    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(type: LimitTypes, games: GameCollection,) {
        this.#type = type
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get type(): LimitTypes {
        return this.#type
    }

    public get content() {
        return filterGame(this.type.content, this.#games,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 4,
            large: 5,
            extraLarge: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumeration: Limits,) {
        const games = this.#games
        const option = games.hasAllGames
            ? LimitAppOption.AMOUNT_IN_ALL_GAMES
            : games.hasSMM1Or3DS
                ? LimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS
                : games.hasSMM2
                    ? LimitAppOption.AMOUNT_IN_SMM2
                    : null

        if (enumeration.isEditorLimit)
            return <div className="card-bodyWithEditor-container">
                <Image file={COURSE_THEME_IMAGE_FILE} className="course-theme-image position-absolute start-0 bottom-0"/>
                <div className="card-body" id={`limit-${enumeration.englishNameInHtml}`}>
                    {option?.renderContent(enumeration,)}
                </div>
            </div>
        return <div className="card-body" id={`limit-${enumeration.englishNameInHtml}`}>
            {option?.renderContent(enumeration,)}
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor

    public get tableCaption() {
        return gameContentTranslation(`limit.${this.type.type}.all`,) satisfies ReactElementOrString
    }

    public get tableOptions(): readonly LimitAppOption[] {
        const games = this.#games

        const options: LimitAppOption[] = [
            LimitAppOption.ACRONYM,
            LimitAppOption.NAME,
        ]
        if (games.hasAllGames)
            options.push(LimitAppOption.AMOUNT_IN_ALL_GAMES,)
        else {
            if (games.hasSMM1Or3DS)
                options.push(LimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS,)
            if (games.hasSMM2)
                options.push(LimitAppOption.AMOUNT_IN_SMM2,)
        }
        return options
    }


    public createTableContent(content: Limits, option: LimitAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: LimitAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const GamePossibilities = Games.Possibilities.get
const allGames = GamePossibilities.ALL_GAMES
const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

/** @reactComponent */
export default function LimitApp({viewDisplay, type, games,}: LimitAppProperties,) {
    const routeName = type.routeName
    const viewDisplayAndRouteName = [
        [ViewDisplays.SIMPLE_LIST, `${routeName} (list)`,],
        [ViewDisplays.CARD_LIST, `${routeName} (card)`,],
        [ViewDisplays.TABLE, `${routeName} (table)`,],
    ] as const satisfies readonly ViewAndRouteName[]

    const game = intersect(allGames, games,).length === 3
        ? LimitGames.ALL_GAMES
        : games.hasSMM2
            ? LimitGames.SUPER_MARIO_MAKER_2
            : LimitGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <SubMainContainer reactKey="limit" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation(`limit.${type.type}.all`,)}
                             description={<LimitDescription viewDisplay={viewDisplay} type={type} game={game}/>}
                             asideContent={<LimitAsideContent viewDisplay={viewDisplay} type={type} game={game}/>}>
        <SubContent viewDisplay={viewDisplay} type={type} games={games}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, type, games,}: LimitAppProperties,){
    const appInterpreter = new LimitAppInterpreter(type, games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
           return <SimpleList reactKey="limit" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
            return<CardList reactKey="limit" interpreter={appInterpreter}/>
    return<Table id="limit-table" interpreter={appInterpreter}/>
}

//region -------------------- Description content --------------------

interface LimitDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly type: LimitTypes

    readonly game: LimitGames

}

function LimitDescription({viewDisplay, type, game,}: LimitDescriptionProperties,) {
    const smm1Or3dsLink = game.getSmm1Or3dsRouteName(type, viewDisplay,)
    const smm2Link = game.getSmm2RouteName(type, viewDisplay,)

    const playLink = viewDisplay.getRoutePath(type.playRouteName,)
    const editorLink = viewDisplay.getRoutePath(type.editorRouteName,)

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyLimit (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyLimit (card)' satisfies PossibleRouteName
    const tableLink = viewDisplay === ViewDisplays.TABLE ? null : 'everyLimit (table)' satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation(`limit.description.intro page (${type.type})`, {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Or3dsLink}><GameImage reference={smm1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm1Or3dsLink}><GameImage reference={smm3ds}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={smm2}/></TextOrLink>,
            },)}
            {gameContentTranslation('limit.description.intro game changes', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-gameChanges-description" routeName={smm1Or3dsLink}><GameImage reference={smm1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-gameChanges-description" routeName={smm1Or3dsLink}><GameImage reference={smm3ds}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-gameChanges-description" routeName={smm2Link}><GameImage reference={smm2}/></TextOrLink>,
            },)}
            {gameContentTranslation('limit.description.intro other entities',)}
            {gameContentTranslation('limit.description.intro references', {
                playLink: <LinkText key="playLink" partialId="playLink" routeName={playLink} color="primary">{gameContentTranslation('limit.play.simplified',).toLowerCase()}</LinkText>,
                editorLink: <LinkText key="editorLink" partialId="editorLink" routeName={editorLink} color="primary">{gameContentTranslation('limit.editor.simplified',).toLowerCase()}</LinkText>,
            },)}
        </p>
        <p>{gameContentTranslation('limit.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
            tableLink: <LinkText key="tableLink" partialId="tableLink" routeName={tableLink} color="primary">{contentTranslation('view type.table.singular',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface LimitAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly type: LimitTypes

    readonly game: LimitGames

}

/** @reactComponent */
function LimitAsideContent({viewDisplay, type, game,}: LimitAsideContentProperties,) {
    return <div id="limit-asideContent-container">
        <TypeAsideContent viewDisplay={viewDisplay} type={type}/>
        <div className="d-inline mx-1"/>
        <GameAsideContent viewDisplay={viewDisplay} type={type} game={game}/>
    </div>
}

interface LimitTypeAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly type: LimitTypes

}

/** @reactComponent */
function TypeAsideContent({viewDisplay, type,}: LimitTypeAsideContentProperties,) {
    return <div id="limit-linkButton-container" className="btn-group-vertical btn-group-sm">
        <LinkButton partialId="allLimit" routeName={viewDisplay.getRoutePath(type.allRouteName,)} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="limit-linkButton-playAndEditor-container" className="btn-group btn-group-sm">
            <LinkButton partialId="playLimit" routeName={viewDisplay.getRoutePath(type.playRouteName,)} color={type.playColor}>{gameContentTranslation('limit.play.simple',)}</LinkButton>
            <LinkButton partialId="editorLimit" routeName={viewDisplay.getRoutePath(type.editorRouteName,)} color={type.editorColor}>{gameContentTranslation('limit.editor.simple',)}</LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function GameAsideContent({viewDisplay, type, game,}: LimitAsideContentProperties,) {
    return <div id="limit-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={game.getAllRouteName(type, viewDisplay,)} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="limit-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Or3dsGame" routeName={game.getSmm1Or3dsRouteName(type, viewDisplay,)} color={game.smm1Or3dsColor}>
                <GameImage reference={smm1}/>
                <GameImage reference={smm3ds}/>
            </LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.getSmm2RouteName(type, viewDisplay,)} color={game.smm2Color}>
                <GameImage reference={smm2}/>
            </LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
