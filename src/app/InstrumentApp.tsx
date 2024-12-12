import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './InstrumentApp.scss'

import type {Array, MutableArray, NullOr, NullOrString} from '@joookiwi/type'
import type {CollectionHolder}                          from '@joookiwi/collection'

import type {InstrumentAppProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {GameStyleCollection}     from 'util/collection/GameStyleCollection'
import type {TimeCollection}          from 'util/collection/TimeCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import SubMainContainer                             from 'app/_SubMainContainer'
import {InstrumentAppOption}                        from 'app/options/InstrumentAppOption'
import {InstrumentGames}                            from 'app/property/InstrumentGames'
import {InstrumentGameStyles}                       from 'app/property/Instrument.gameStyles'
import {InstrumentTimes}                            from 'app/property/InstrumentTimes'
import Table                                        from 'app/tools/table/Table'
import CardList                                     from 'app/withInterpreter/CardList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import List                                         from 'app/util/List'
import LinkButton                                   from 'app/tools/button/LinkButton'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import {Instruments}                                from 'core/instrument/Instruments'
import EntityInstrumentImages                       from 'core/instrument/component/EntityInstrumentImages'
import InstrumentSound                              from 'core/instrument/component/InstrumentSound'
import {Times}                                      from 'core/time/Times'
import TimeImage                                    from 'core/time/component/TimeImage'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {intersect}                                  from 'util/utilitiesMethods'
import {ArrayAsCollection}                          from 'util/collection/ArrayAsCollection'

import ALL =             Instruments.ALL
import ALL_GAME_STYLES = GameStyles.ALL
import NSMBU =           GameStyles.NSMBU
import SMB =             GameStyles.SMB
import SMB3 =            GameStyles.SMB3
import SMM1 =            Games.SMM1
import SMM2 =            Games.SMM2
import SMM3DS =          Games.SMM3DS
import SMW =             GameStyles.SMW

class InstrumentAppInterpreter
    implements AppInterpreterWithTable<Instruments, InstrumentAppOption> {

    //region -------------------- Fields --------------------

    readonly #games
    readonly #gameStyles
    readonly #times

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection, gameStyles: GameStyleCollection, times: TimeCollection,) {
        this.#games = games
        this.#gameStyles = gameStyles
        this.#times = times
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        const games = this.#games
        const gameStyles = this.#gameStyles
        const times = this.#times
        return new ArrayAsCollection(ALL,).filter(({reference,},) =>
            games.hasAnyIn(reference,)
            && gameStyles.hasAnyIn(reference,)
            && times.hasAnyIn(reference,),)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 3,
            medium: 4,
            large: 5,
            extraLarge: 6,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: Instruments,) {
        return <div className="instrument-sounds">
            <EntityInstrumentImages value={enumerable}/>
            <InstrumentSound value={enumerable}/>
        </div>
    }

    //endregion -------------------- Card --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyInstrument (list)',],
    [ViewDisplays.CARD_LIST, 'everyInstrument (card)',],
    [ViewDisplays.TABLE, 'everyInstrument (table)',],
] as const satisfies Array<ViewAndRouteName>

/** @reactComponent */
export default function InstrumentApp({viewDisplay, games, gameStyles, times,}: InstrumentAppProperties,) {

    //region -------------------- Game selection --------------------

    const game = games.hasSmm2
        ? InstrumentGames.SUPER_MARIO_MAKER_2
        : games.hasSmm1
            ? InstrumentGames.SUPER_MARIO_MAKER
            : InstrumentGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    //endregion -------------------- Game selection --------------------
    //region -------------------- Game style selection --------------------

    const amountOfSelectedGameStyles = intersect(ALL_GAME_STYLES, gameStyles,).length
    const gameStyle = amountOfSelectedGameStyles === 5 || amountOfSelectedGameStyles === 4
            ? InstrumentGameStyles.ALL_GAME_STYLES
            : amountOfSelectedGameStyles !== 1
                ? InstrumentGameStyles.MIXED_GAME_STYLE
                : gameStyles.hasSmb
                    ? InstrumentGameStyles.SMB
                    : gameStyles.hasSmb3
                        ? InstrumentGameStyles.SMB3
                        : gameStyles.hasSmw
                            ? InstrumentGameStyles.SMW
                            : InstrumentGameStyles.NSMBU

    //endregion -------------------- Game style selection --------------------
    //region -------------------- Time selection --------------------

    const time = games.hasNotSmm2AndSmm1Or3ds
        ? null
        : times.hasAllTimes
            ? InstrumentTimes.ALL_TIMES
            : times.hasDay
                ? InstrumentTimes.DAY
                : InstrumentTimes.NIGHT

    //endregion -------------------- Time selection --------------------

    return <SubMainContainer reactKey="instrument" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('instrument.all',)}
                             description={<InstrumentDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<InstrumentAsideContent game={times.hasOnlyNight ? null : game} gameStyle={gameStyle} time={time} gameStyles={gameStyles}/>}>
        <SubContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games, gameStyles, times,}: InstrumentAppProperties,) {
    const appInterpreter = new InstrumentAppInterpreter(games, gameStyles, times,)
    const items = appInterpreter.content

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <InstrumentList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="instrument" interpreter={appInterpreter}/>
    return <Table id="instrument-table" items={items} options={getOptions(gameStyles,)} caption={gameContentTranslation('instrument.all',)} headersColor="info"/>
}

function getOptions(gameStyles: GameStyleCollection,): CollectionHolder<InstrumentAppOption> {
    const options: MutableArray<InstrumentAppOption> = [InstrumentAppOption.NAME,]
    if (gameStyles.hasSmb)
        options.push(InstrumentAppOption.REFERENCE_SMB,)
    if (gameStyles.hasSmb3)
        options.push(InstrumentAppOption.REFERENCE_SMB3,)
    if (gameStyles.hasSmw)
        options.push(InstrumentAppOption.REFERENCE_SMW,)
    if (gameStyles.hasNsmbu)
        options.push(InstrumentAppOption.REFERENCE_NSMBU,)
    options.push(InstrumentAppOption.SOUND,)
    return new ArrayAsCollection(options,)
}

//region -------------------- List --------------------

interface Instrument_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Instruments>

}

/** @reactComponent */
function InstrumentList({items,}: Instrument_ListProperties,) {
    return <List partialId="instrument" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <NameComponent id="entity-name" name={it.reference} popoverOrientation="top"/>
                <EntityInstrumentImages value={it}/>
            </div>
            <InstrumentSound value={it}/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------
//region -------------------- Description content --------------------

interface InstrumentDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: InstrumentGames

}

/** @reactComponent */
function InstrumentDescription({viewDisplay, game,}: InstrumentDescriptionProperties,) {
    const smm1Link = game.smm1RouteName satisfies NullOrString<PossibleRouteName>
    const smm3dsLink = game.smm3dsRouteName satisfies NullOrString<PossibleRouteName>
    const smm2Link = game.smm2RouteName satisfies NullOrString<PossibleRouteName>

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyInstrument (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyInstrument (card)' satisfies PossibleRouteName
    const tableLink = viewDisplay === ViewDisplays.TABLE ? null : 'everyInstrument (table)' satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation('instrument.description.intro page', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Link}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('instrument.description.intro variants', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-variant-description" routeName={smm1Link}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-variant-description" routeName={smm3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-variant-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
        </p>
        <p>{gameContentTranslation('instrument.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
            tableLink: <LinkText key="tableLink" partialId="tableLink" routeName={tableLink} color="primary">{contentTranslation('view type.table.singular',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface InstrumentAsideContentProperties
    extends ReactProperties {

    readonly game: NullOr<InstrumentGames>
    readonly gameStyle: InstrumentGameStyles
    readonly time: NullOr<InstrumentTimes>

    readonly gameStyles: GameStyleCollection

}

/** @reactComponent */
function InstrumentAsideContent({game, gameStyle, time, gameStyles,}: InstrumentAsideContentProperties,) {
    return <div id="instrument-asideContent-container">
        <GameAsideContent game={game}/>
        {game == null ? null : <div className="d-inline mx-1"/>}
        <GameStyleAsideContent gameStyle={gameStyle} gameStyles={gameStyles}/>
        {time == null ? null : <div className="d-inline mx-1"/>}
        <TimeAsideContent time={time}/>
    </div>
}

/** @reactComponent */
function GameAsideContent({game,}: Pick<InstrumentAsideContentProperties, 'game'>,) {
    if (game == null)
        return null
    return <div id="instrument-gamesButton-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partialId="smm1Game" routeName={game.smm1RouteName} color={game.smm1Color}>
            <GameImage reference={SMM1}/>
        </LinkButton>
        <LinkButton partialId="smm3dsGame" routeName={game.smm3dsRouteName} color={game.smm3dsColor}>
            <GameImage reference={SMM3DS}/>
        </LinkButton>
        <LinkButton partialId="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
            <GameImage reference={SMM2}/>
        </LinkButton>
    </div>
}

/** @reactComponent */
function GameStyleAsideContent({gameStyle, gameStyles,}: Pick<InstrumentAsideContentProperties, | 'gameStyle' | 'gameStyles'>,) {
    return <div id="instrument-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameStyleLimit" routeName={gameStyle.allRouteName} color={gameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smbGameStyleLimit" routeName={gameStyle.smbRouteName} color={gameStyle.smbColor(gameStyles.hasSmb,)}>
                <GameStyleImage reference={SMB}/>
            </LinkButton>
            <LinkButton partialId="smb3GameStyleLimit" routeName={gameStyle.smb3RouteName} color={gameStyle.smb3Color(gameStyles.hasSmb3,)}>
                <GameStyleImage reference={SMB3}/>
            </LinkButton>
        </div>
        <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smwGameStyleLimit" routeName={gameStyle.smwRouteName} color={gameStyle.smwColor(gameStyles.hasSmw,)}>
                <GameStyleImage reference={SMW}/>
            </LinkButton>
            <LinkButton partialId="nsmbuGameStyleLimit" routeName={gameStyle.nsmbuRouteName} color={gameStyle.nsmbuColor(gameStyles.hasNsmbu,)}>
                <GameStyleImage reference={NSMBU}/>
            </LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function TimeAsideContent({time,}: Pick<InstrumentAsideContentProperties, 'time'>,) {
    if (time == null)
        return null
    return <div id="instrument-timesButton-container" className="timeAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allTime" routeName={time.allRouteName} color={time.allColor}>{contentTranslation('All',)}</LinkButton>
        <div className="btn-group btn-group-sm">
            <LinkButton partialId="dayTime" routeName={time.dayRouteName} color={time.dayColor}>
                <TimeImage reference={Times.DAY}/>
            </LinkButton>
            <LinkButton partialId="nightTime" routeName={time.nightRouteName} color={time.nightColor}>
                <TimeImage reference={Times.NIGHT}/>
            </LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
