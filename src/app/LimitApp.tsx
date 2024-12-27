import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import './LimitApp.scss'

import type {CollectionHolder}           from '@joookiwi/collection'
import type {MutableArray, NullOrString} from '@joookiwi/type'

import type {LimitAppProperties}  from 'app/AppProperties.types'
import type {LimitTypes}          from 'app/property/LimitTypes'
import type {Limits}              from 'core/limit/Limits'
import type {PossibleRouteName}   from 'route/EveryRoutes.types'
import type {GameCollection}      from 'util/collection/GameCollection'
import type {GameStyleCollection} from 'util/collection/GameStyleCollection'
import type {ReactProperties}     from 'util/react/ReactProperties'

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
import CardList                                     from 'app/util/CardList'
import ContentBeingDisplayed                        from 'app/util/ContentBeingDisplayed'
import Description                                  from 'app/util/Description'
import AppTitle                                     from 'app/util/PageTitle'
import PageViewChanger                              from 'app/util/PageViewChanger'
import SubMain                                      from 'app/util/SubMain'
import List                                         from 'app/util/List'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import DisplayButtonGroup                           from 'display/DisplayButtonGroup'
import {ViewDisplays}                               from 'display/ViewDisplays'
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

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

/** @reactComponent */
export default function LimitApp({viewDisplay, type, games, gameStyles,}: LimitAppProperties,) {
    const routeName = type.routeName

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

    return <SubMain partial-id="limit" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation(`limit.${type.type}.all`,)}</AppTitle>
        <PageViewChanger>
            <TypeAsideContent type={type}/>
            <GameAsideContent type={type} game={game}/>
            <GameStyleAsideContent type={type} gameStyle={gameStyle} games={games} gameStyles={gameStyles}/>
            <DisplayButtonGroup list={`${routeName} (list)`} card={`${routeName} (card)`} table={`${routeName} (table)`} current={viewDisplay}/>
        </PageViewChanger>
        <LimitDescription viewDisplay={viewDisplay} type={type} game={game}/>
        <section id="limit-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay} type={type} games={games}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, type, games,}: Omit<LimitAppProperties, | 'gameStyles' | 'times'>,) {
    const items = type.content.filter(it =>
        games.hasAnyIn(it.reference,),)

    const amountOption = games.hasAllGames
        ? LimitAppOption.AMOUNT_IN_ALL_GAMES
        : games.hasSmm1Or3ds
            ? LimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS
            : LimitAppOption.AMOUNT_IN_SMM2

    if (viewDisplay === LIST)
        return <LimitList items={items} amountOption={amountOption}/>
    if (viewDisplay === CARD)
        return <LimitCardList items={items} amountOption={amountOption}/>
    return <LimitTable items={items} type={type} games={games}/>
}


interface Limit_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Limits>

    readonly amountOption: LimitAppOption

    readonly type: LimitTypes

    readonly games: GameCollection

}

/** @reactComponent */
function LimitList({items, amountOption,}: Pick<Limit_ListProperties, | 'items' | 'amountOption'>,) {
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

/** @reactComponent */
function LimitCardList({items, amountOption,}: Pick<Limit_ListProperties, | 'items' | 'amountOption'>,) {
    return <CardList partial-id="limit" items={items} default={1} small={2} medium={4} large={5} extra-large={6}>{it => {
        const reference = it.reference
        const hasAlternative = it.alternativeAcronym != null
        const isEditor = it.isEditorLimit

        return <div className={`d-inline${isEditor ? ' asEditorLimit' : EMPTY_STRING}`}>
            {isEditor ? <Image file={COURSE_THEME_IMAGE_FILE} className="course-theme-image position-absolute start-0 opacity-25"/> : null}
            <NameComponent id="limit-name" name={reference} popoverOrientation="top"/>
            {hasAlternative ? <NameComponent id="limit-alternativeName" name={reference.alternativeContainer} popoverOrientation="top"/> : null}
            {amountOption.renderContent(it,)}
            <div className="w-100"/>
            <TextComponent content={it.acronym} className="text-body text-opacity-50 fst-italic me-1"/>
            {hasAlternative ? <div className="vr mx-2"/> : null}
            {hasAlternative ? <TextComponent content={it.alternativeAcronym} className="text-body text-opacity-50 fst-italic me-1"/> : null}
        </div>
    }}</CardList>
}

/** @reactComponent */
function LimitTable({items, type, games,}: Omit<Limit_ListProperties, 'amountOption'>,) {
    return <Table id="limit-table" items={items} options={getOptions(games,)} caption={gameContentTranslation(`limit.${type.type}.all`,)} headersColor="info"/>
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

//endregion -------------------- Sub content --------------------
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

    return <Description>
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
        <ContentBeingDisplayed viewDisplay={viewDisplay} routeName={type.routeName}/>
    </Description>
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
            </div>
            <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
                <LinkButton partialId="nsmbuGameStyleLimit" routeName={gameStyle.getSmwOrNsmbuRouteName(type,)} color={gameStyle.smwOrNsmbuColor(gameStyles.hasNsmbu,)}>
                    <GameStyleImage reference={SMW} className="me-1"/>
                    <GameStyleImage reference={NSMBU}/>
                </LinkButton>
            </div>
            <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
                <LinkButton partialId="sm3dwGameStyleLimit" routeName={gameStyle.getSm3dwRouteName(type,)} color={gameStyle.sm3dwColor(gameStyles.hasSm3dw,)}>
                    <GameStyleImage reference={SM3DW}/>
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
