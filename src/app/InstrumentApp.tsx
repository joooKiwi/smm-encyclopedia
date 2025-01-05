import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './InstrumentApp.scss'

import type {MutableArray, NullOr, NullOrString} from '@joookiwi/type'
import type {CollectionHolder}                   from '@joookiwi/collection'

import type {InstrumentAppProperties} from 'app/AppProperties.types'
import type {GameStyleCollection}     from 'util/collection/GameStyleCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import {InstrumentAppOption}                        from 'app/options/InstrumentAppOption'
import {InstrumentGames}                            from 'app/property/InstrumentGames'
import {InstrumentGameStyles}                       from 'app/property/Instrument.gameStyles'
import {InstrumentTimes}                            from 'app/property/InstrumentTimes'
import Table                                        from 'app/tools/table/Table'
import AppTitle                                     from 'app/util/AppTitle'
import CardList                                     from 'app/util/CardList'
import ContentBeingDisplayed                        from 'app/util/ContentBeingDisplayed'
import Description                                  from 'app/util/Description'
import List                                         from 'app/util/List'
import PageTitle                                    from 'app/util/PageTitle'
import PageViewChanger                              from 'app/util/PageViewChanger'
import SubMain                                      from 'app/util/SubMain'
import LinkButton                                   from 'app/tools/button/LinkButton'
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
import DisplayButtonGroup                           from 'display/DisplayButtonGroup'
import {ViewDisplays}                               from 'display/ViewDisplays'
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

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)

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

    return <SubMain partial-id="instrument" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('instrument.all',)}</AppTitle>
        <PageTitle value={gameContentTranslation('instrument.singular',)}/>
        <PageViewChanger>
            <GameAsideContent game={game}/>
            <GameStyleAsideContent gameStyle={gameStyle} gameStyles={gameStyles}/>
            <TimeAsideContent time={time}/>
            <DisplayButtonGroup list="everyInstrument (list)" card="everyInstrument (card)" table="everyInstrument (table)" current={viewDisplay}/>
        </PageViewChanger>
        <InstrumentDescription viewDisplay={viewDisplay} game={game}/>
        <section id="instrument-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, games, gameStyles, times,}: InstrumentAppProperties,) {
    const items = all.filter(({reference,},) =>
        games.hasAnyIn(reference,)
        && gameStyles.hasAnyIn(reference,)
        && times.hasAnyIn(reference,),)

    if (viewDisplay === LIST)
        return <InstrumentList items={items}/>
    if (viewDisplay === CARD)
        return <InstrumentCard items={items}/>
    return <InstrumentTable items={items} gameStyles={gameStyles}/>
}


interface Instrument_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Instruments>

    readonly gameStyles: GameStyleCollection

}

/** @reactComponent */
function InstrumentList({items,}: Pick<Instrument_SubContentProperties, 'items'>,) {
    return <List partial-id="instrument" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <NameComponent id="instrument-name" name={it.reference} popoverOrientation="top"/>
                <EntityInstrumentImages value={it}/>
            </div>
            <InstrumentSound value={it}/>
        </div>
    }</List>
}

/** @reactComponent */
function InstrumentCard({items,}: Pick<Instrument_SubContentProperties, 'items'>,) {
    return <CardList partial-id="instrument" items={items} default={1} small={3} medium={4} large={5} extra-large={6}>{it =>
        <>
            <NameComponent id="instrument-name" name={it.reference} popoverOrientation="left"/>
            <EntityInstrumentImages value={it}/>
            <InstrumentSound value={it}/>
        </>
    }</CardList>
}

/** @reactComponent */
function InstrumentTable({items, gameStyles,}: Instrument_SubContentProperties,) {
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

//endregion -------------------- Sub content --------------------
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

    return <Description>
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
        <ContentBeingDisplayed viewDisplay={viewDisplay} routeName="everyInstrument"/>
    </Description>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface InstrumentAsideContentProperties
    extends ReactProperties {

    readonly game: InstrumentGames
    readonly gameStyle: InstrumentGameStyles
    readonly time: NullOr<InstrumentTimes>

    readonly gameStyles: GameStyleCollection

}

/** @reactComponent */
function GameAsideContent({game,}: Pick<InstrumentAsideContentProperties, 'game'>,) {
    return <div id="instrument-gamesButton-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partial-id="smm1Game" routeName={game.smm1RouteName} color={game.smm1Color}>
            <GameImage reference={SMM1}/>
        </LinkButton>
        <LinkButton partial-id="smm3dsGame" routeName={game.smm3dsRouteName} color={game.smm3dsColor}>
            <GameImage reference={SMM3DS}/>
        </LinkButton>
        <LinkButton partial-id="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
            <GameImage reference={SMM2}/>
        </LinkButton>
    </div>
}

/** @reactComponent */
function GameStyleAsideContent({gameStyle, gameStyles,}: Pick<InstrumentAsideContentProperties, | 'gameStyle' | 'gameStyles'>,) {
    return <div id="instrument-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partial-id="allGameStyleLimit" routeName={gameStyle.allRouteName} color={gameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smbGameStyleLimit" routeName={gameStyle.smbRouteName} color={gameStyle.smbColor(gameStyles.hasSmb,)}>
                <GameStyleImage reference={SMB}/>
            </LinkButton>
            <LinkButton partial-id="smb3GameStyleLimit" routeName={gameStyle.smb3RouteName} color={gameStyle.smb3Color(gameStyles.hasSmb3,)}>
                <GameStyleImage reference={SMB3}/>
            </LinkButton>
        </div>
        <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smwGameStyleLimit" routeName={gameStyle.smwRouteName} color={gameStyle.smwColor(gameStyles.hasSmw,)}>
                <GameStyleImage reference={SMW}/>
            </LinkButton>
            <LinkButton partial-id="nsmbuGameStyleLimit" routeName={gameStyle.nsmbuRouteName} color={gameStyle.nsmbuColor(gameStyles.hasNsmbu,)}>
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
        <LinkButton partial-id="allTime" routeName={time.allRouteName} color={time.allColor}>{contentTranslation('All',)}</LinkButton>
        <div className="btn-group btn-group-sm">
            <LinkButton partial-id="dayTime" routeName={time.dayRouteName} color={time.dayColor}>
                <TimeImage reference={Times.DAY}/>
            </LinkButton>
            <LinkButton partial-id="nightTime" routeName={time.nightRouteName} color={time.nightColor}>
                <TimeImage reference={Times.NIGHT}/>
            </LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
