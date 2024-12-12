import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import './LimitApp.scss'

import type {Array, MutableArray, NullOrString} from '@joookiwi/type'
import type {CollectionHolder}                  from '@joookiwi/collection'

import type {LimitAppProperties}      from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {LimitTypes}              from 'app/property/LimitTypes'
import type {ViewAndRouteName}        from 'app/withInterpreter/ViewDisplays.types'
import type {Limits}                  from 'core/limit/Limits'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {GameStyleCollection}     from 'util/collection/GameStyleCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {LimitAppOption}                             from 'app/options/LimitAppOption'
import {COURSE_THEME_IMAGE_FILE}                    from 'app/options/file/themeImageFiles'
import {LimitGames}                                 from 'app/property/LimitGames'
import {LimitGameStyles}                            from 'app/property/Limit.gameStyles'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Image                                        from 'app/tools/images/Image'
import Table                                        from 'app/tools/table/Table'
import TextComponent                                from 'app/tools/text/TextComponent'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import List                                         from 'app/util/List'
import CardList                                     from 'app/withInterpreter/CardList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {Empty}                                      from 'util/emptyVariables'
import {intersect}                                  from 'util/utilitiesMethods'
import {ArrayAsCollection}                          from 'util/collection/ArrayAsCollection'

import ALL_GAME_STYLES = GameStyles.ALL
import EMPTY_STRING =    Empty.EMPTY_STRING
import NSMBU =           GameStyles.NSMBU
import SMB =             GameStyles.SMB
import SMB3 =            GameStyles.SMB3
import SMM1 =            Games.SMM1
import SMM2 =            Games.SMM2
import SMM3DS =          Games.SMM3DS
import SMW =             GameStyles.SMW
import SM3DW =           GameStyles.SM3DW

class LimitAppInterpreter
    implements AppInterpreterWithTable<Limits, LimitAppOption> {

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

    public get content() {
        const games = this.#games
        return this.#type.content.filter(it =>
            games.hasAnyIn(it.reference,),)
    }

    //region -------------------- Card  --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            medium: 4,
            large: 5,
            extraLarge: 6,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumeration: Limits,) {
        const games = this.#games
        const amountOption = games.hasAllGames
            ? LimitAppOption.AMOUNT_IN_ALL_GAMES
            : games.hasSmm1Or3ds
                ? LimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS
                : LimitAppOption.AMOUNT_IN_SMM2

        const hasAlternativeAcronym = enumeration.alternativeAcronym != null
        const hasAlternativeName = enumeration.alternativeEnglishName != null
        const isEditor = enumeration.isEditorLimit

        return <div id={`limit-${enumeration.englishNameInHtml}`} className={`card-body ${isEditor ? 'card-bodyWithEditor' : EMPTY_STRING} text-center`}>
            {isEditor ? <Image file={COURSE_THEME_IMAGE_FILE} className="course-theme-image position-absolute start-0 top-0"/> : null}
            {hasAlternativeName ? <NameComponent id="limit-alternativeName" name={enumeration.reference.alternativeContainer} className="alternativeName"/> : null}
            {amountOption.renderContent(enumeration,)}
            <div className="acronyms-container d-flex align-content-center text-body text-opacity-50 fst-italic">
                <TextComponent content={enumeration.acronym}/>
                {hasAlternativeAcronym ? <div className="vr mx-2"/> : null}
                <TextComponent content={enumeration.alternativeAcronym}/>
            </div>
        </div>
    }

    //endregion -------------------- Card --------------------

}

/** @reactComponent */
export default function LimitApp({viewDisplay, type, games, gameStyles,}: LimitAppProperties,) {
    const routeName = type.routeName
    const viewDisplayAndRouteName = [
        [ViewDisplays.SIMPLE_LIST, `${routeName} (list)`,],
        [ViewDisplays.CARD_LIST, `${routeName} (card)`,],
        [ViewDisplays.TABLE, `${routeName} (table)`,],
    ] as const satisfies Array<ViewAndRouteName>

    //region -------------------- Game selection --------------------

    const game = games.hasAllGames
        ? LimitGames.ALL_GAMES
        : games.hasSmm2
            ? LimitGames.SUPER_MARIO_MAKER_2
            : LimitGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    //endregion -------------------- Game selection --------------------
    //region -------------------- Game style selection --------------------

    const amountOfSelectedGameStyles = intersect(ALL_GAME_STYLES, gameStyles,).length
    const gameStyle = games.hasSmm2
        ? amountOfSelectedGameStyles === 5
            ? LimitGameStyles.ALL_GAME_STYLES
            : amountOfSelectedGameStyles !== 1
                ? LimitGameStyles.MIXED_GAME_STYLE
                : gameStyles.hasSmb
                    ? LimitGameStyles.SMB
                    : gameStyles.hasSmb3
                        ? LimitGameStyles.SMB3
                        : gameStyles.hasSmwOrNsmbu
                            ? LimitGameStyles.SMW_OR_NSMBU
                            : LimitGameStyles.SM3DW
        : amountOfSelectedGameStyles === 5 || amountOfSelectedGameStyles === 4
            ? LimitGameStyles.ALL_GAME_STYLES
            : amountOfSelectedGameStyles !== 1
                ? LimitGameStyles.MIXED_GAME_STYLE
                : gameStyles.hasSmb
                    ? LimitGameStyles.SMB
                    : gameStyles.hasSmb3
                        ? LimitGameStyles.SMB3
                        : LimitGameStyles.SMW_OR_NSMBU

    //endregion -------------------- Game style selection --------------------

    return <SubMainContainer reactKey="limit" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation(`limit.${type.type}.all`,)}
                             description={<LimitDescription viewDisplay={viewDisplay} type={type} game={game}/>}
                             asideContent={<LimitAsideContent type={type} game={game} gameStyle={gameStyle} games={games} gameStyles={gameStyles}/>}>
        <SubContent viewDisplay={viewDisplay} type={type} games={games}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, type, games,}: Omit<LimitAppProperties, | 'gameStyles' | 'times'>,){
    const appInterpreter = new LimitAppInterpreter(type, games,)
    const items = appInterpreter.content

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
           return <LimitList items={items} games={games}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
            return <CardList reactKey="limit" interpreter={appInterpreter}/>
    return<Table id="limit-table" items={items} options={getOptions(games,)} caption={gameContentTranslation(`limit.${type.type}.all`,)} headersColor="info"/>
}

function getOptions(games: GameCollection,): CollectionHolder<LimitAppOption> {
    const options: MutableArray<LimitAppOption> = [
        LimitAppOption.ACRONYM,
        LimitAppOption.NAME,
        LimitAppOption.DESCRIPTION,
    ]
    if (games.hasAllGames)
        options.push(LimitAppOption.AMOUNT_IN_ALL_GAMES,)
    else {
        if (games.hasSmm1Or3ds)
            options.push(LimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS,)
        if (games.hasSmm2)
            options.push(LimitAppOption.AMOUNT_IN_SMM2,)
    }
    return new ArrayAsCollection(options,)
}

//region -------------------- List --------------------

interface Limit_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Limits>

    readonly games: GameCollection

}

/** @reactComponent */
function LimitList({items, games,}: Limit_ListProperties,) {
    const amountOption = games.hasAllGames
        ? LimitAppOption.AMOUNT_IN_ALL_GAMES
        : games.hasSmm1Or3ds
            ? LimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS
            : LimitAppOption.AMOUNT_IN_SMM2
    return <List partialId="limit" items={items} withSeparator>{it => {
        const reference = it.reference
        const hasAlternative = it.alternativeAcronym != null
        return <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
                <div className="d-flex">
                    <TextComponent content={it.acronym} className="text-body text-opacity-50 fst-italic me-1"/>
                    <NameComponent id="limit-name" name={reference} popoverOrientation="top"/>
                </div>
                {hasAlternative ? <div className="d-flex">
                    <TextComponent content={it.alternativeAcronym} className="text-body text-opacity-50 fst-italic me-1"/>
                    <NameComponent id="limit-alternativeName" name={reference.alternativeContainer} popoverOrientation="top"/>
                </div> : null}
            </div>
            {amountOption.renderContent(it,)}
        </div>
    }}</List>
}

//endregion -------------------- List --------------------
//region -------------------- Description content --------------------

interface LimitDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly type: LimitTypes

    readonly game: LimitGames

}

/** @reactComponent */
function LimitDescription({viewDisplay, type, game,}: LimitDescriptionProperties,) {
    const smm1Or3dsLink = game.getSmm1Or3dsRouteName(type,) satisfies NullOrString<PossibleRouteName>
    const smm2Link = game.getSmm2RouteName(type,) satisfies NullOrString<PossibleRouteName>

    const playLink = type.playRouteName satisfies NullOrString<PossibleRouteName>
    const editorLink = type.editorRouteName satisfies NullOrString<PossibleRouteName>

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyLimit (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyLimit (card)' satisfies PossibleRouteName
    const tableLink = viewDisplay === ViewDisplays.TABLE ? null : 'everyLimit (table)' satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation(`limit.page description.intro page (${type.type})`, {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Or3dsLink}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm1Or3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('limit.page description.intro game changes', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-gameChanges-description" routeName={smm1Or3dsLink}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-gameChanges-description" routeName={smm1Or3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-gameChanges-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('limit.page description.intro other entities',)}
            {gameContentTranslation('limit.page description.intro references', {
                playLink: <LinkText key="playLink" partialId="playLink" routeName={playLink} color="primary">{gameContentTranslation('limit.play.simplified',).toLowerCase()}</LinkText>,
                editorLink: <LinkText key="editorLink" partialId="editorLink" routeName={editorLink} color="primary">{gameContentTranslation('limit.editor.simplified',).toLowerCase()}</LinkText>,
            },)}
        </p>
        <p>{gameContentTranslation('limit.page description.viewable', {
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

    readonly type: LimitTypes
    readonly game: LimitGames
    readonly gameStyle: LimitGameStyles

    readonly games: GameCollection
    readonly gameStyles: GameStyleCollection

}

/** @reactComponent */
function LimitAsideContent({type, game, gameStyle, games, gameStyles,}: LimitAsideContentProperties,) {
    return <div id="limit-asideContent-container">
        <TypeAsideContent type={type}/>
        <div className="d-inline mx-1"/>
        <GameAsideContent type={type} game={game}/>
        <div className="d-inline mx-1"/>
        <GameStyleAsideContent type={type} gameStyle={gameStyle} games={games} gameStyles={gameStyles}/>
    </div>
}

/** @reactComponent */
function TypeAsideContent({type,}: Pick<LimitAsideContentProperties, 'type'>,) {
    return <div id="limit-linkButton-container" className="btn-group-vertical btn-group-sm">
        <LinkButton partialId="allLimit" routeName={type.allRouteName} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="limit-linkButton-playAndEditor-container" className="btn-group btn-group-sm">
            <LinkButton partialId="playLimit" routeName={type.playRouteName} color={type.playColor}>{gameContentTranslation('limit.play.simple',)}</LinkButton>
            <LinkButton partialId="editorLimit" routeName={type.editorRouteName} color={type.editorColor}>{gameContentTranslation('limit.editor.simple',)}</LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function GameStyleAsideContent({type, gameStyle, games, gameStyles,}: Pick<LimitAsideContentProperties, | 'type' | 'gameStyle' | 'games' | 'gameStyles'>,) {
    if (games.hasSmm2)
        //The game styles are in SMM2
        return <div id="limit-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
            <LinkButton partialId="allGameStyleLimit" routeName={gameStyle.getAllRouteName(type,)} color={gameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
            <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
                <LinkButton partialId="smbGameStyleLimit" routeName={gameStyle.getSmbRouteName(type,)} color={gameStyle.smbColor(gameStyles.hasSmb,)}>
                    <GameStyleImage reference={SMB}/>
                </LinkButton>
                <LinkButton partialId="smb3GameStyleLimit" routeName={gameStyle.getSmb3RouteName(type,)} color={gameStyle.smb3Color(gameStyles.hasSmb3,)}>
                    <GameStyleImage reference={SMB3}/>
                </LinkButton>
                <LinkButton partialId="sm3dwGameStyleLimit" routeName={gameStyle.getSm3dwRouteName(type,)} color={gameStyle.sm3dwColor(gameStyles.hasSm3dw,)}>
                    <GameStyleImage reference={SM3DW}/>
                </LinkButton>
            </div>
            <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
                <LinkButton partialId="nsmbuGameStyleLimit" routeName={gameStyle.getSmwOrNsmbuRouteName(type,)} color={gameStyle.smwOrNsmbuColor(gameStyles.hasNsmbu,)}>
                    <GameStyleImage reference={SMW} className="me-1"/>
                    <GameStyleImage reference={NSMBU}/>
                </LinkButton>
            </div>
        </div>
    //The game styles are in SMM1 / SMM3DS
    return <div id="limit-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameStyleLimit" routeName={gameStyle.getAllRouteName(type,)} color={gameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smbGameStyleLimit" routeName={gameStyle.getSmbRouteName(type,)} color={gameStyle.smbColor(gameStyles.hasSmb,)}>
                <GameStyleImage reference={SMB}/>
            </LinkButton>
            <LinkButton partialId="smb3GameStyleLimit" routeName={gameStyle.getSmb3RouteName(type,)} color={gameStyle.smb3Color(gameStyles.hasSmb3,)}>
                <GameStyleImage reference={SMB3}/>
            </LinkButton>
        </div>
        <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smwGameStyleLimit" routeName={gameStyle.getSmwOrNsmbuRouteName(type,)} color={gameStyle.smwOrNsmbuColor(gameStyles.hasSmw,)}>
                <GameStyleImage reference={SMW} className="me-1"/>
                <GameStyleImage reference={NSMBU}/>
            </LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function GameAsideContent({type, game,}: Pick<LimitAsideContentProperties, | 'type' | 'game'>,) {
    return <div id="limit-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={game.getAllRouteName(type,)} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="limit-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Or3dsGame" routeName={game.getSmm1Or3dsRouteName(type,)} color={game.smm1Or3dsColor}>
                <GameImage reference={SMM1}/>
                <GameImage reference={SMM3DS}/>
            </LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.getSmm2RouteName(type,)} color={game.smm2Color}>
                <GameImage reference={SMM2}/>
            </LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
