import 'app/_GameAsideContent.scss'
import './InstrumentApp.scss'

import type {Array}    from '@joookiwi/type'
import {filterByArray} from '@joookiwi/collection'

import type {InstrumentAppProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {TimeCollection}          from 'util/collection/TimeCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import SubMainContainer                             from 'app/_SubMainContainer'
import {InstrumentGames}                            from 'app/property/InstrumentGames'
import Table                                        from 'app/tools/table/Table'
import {InstrumentAppOption}                        from 'app/options/InstrumentAppOption'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import LinkButton                                   from 'app/tools/button/LinkButton'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import {Instruments}                                from 'core/instrument/Instruments'
import EntityInstrumentImages                       from 'core/instrument/component/EntityInstrumentImages'
import InstrumentSound                              from 'core/instrument/component/InstrumentSound'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

import ALL =    Instruments.ALL
import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

class InstrumentAppInterpreter
    implements AppInterpreterWithTable<Instruments, InstrumentAppOption> {

    //region -------------------- Fields --------------------

    readonly #games
    readonly #times

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection, times: TimeCollection,) {
        this.#games = games
        this.#times = times
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        const games = this.#games
        const times = this.#times
        return filterByArray(ALL, ({reference,},) =>
            games.hasAnyIn(reference,)
            && times.hasAnyIn(reference,),)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 3,
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

    public createCardListContent(enumerable: Instruments,) {
        return <div className="instrument-sounds">
            <EntityInstrumentImages value={enumerable}/>
            <InstrumentSound value={enumerable}/>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('instrument.all',) satisfies ReactElementOrString

    public get tableOptions(): Array<InstrumentAppOption> {
        return [InstrumentAppOption.NAME, InstrumentAppOption.SOUND,]
    }


    public getAdditionalClass(option: InstrumentAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: Instruments, option: InstrumentAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: InstrumentAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyInstrument (list)',],
    [ViewDisplays.CARD_LIST, 'everyInstrument (card)',],
    [ViewDisplays.TABLE, 'everyInstrument (table)',],
] as const satisfies Array<ViewAndRouteName>

/** @reactComponent */
export default function InstrumentApp({viewDisplay, games, times,}: InstrumentAppProperties,) {
    const game = games.hasSMM2
        ? InstrumentGames.SUPER_MARIO_MAKER_2
        : games.hasSMM1
            ? InstrumentGames.SUPER_MARIO_MAKER
            : InstrumentGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <SubMainContainer reactKey="instrument" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('instrument.all',)}
                             description={<InstrumentDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<InstrumentAsideContent viewDisplay={viewDisplay} game={game}/>}>
        <SubContent viewDisplay={viewDisplay} games={games} times={times}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games, times,}: InstrumentAppProperties,) {
    const appInterpreter = new InstrumentAppInterpreter(games, times,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="instrument" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="instrument" interpreter={appInterpreter}/>
    return <Table id="instrument-table" interpreter={appInterpreter}/>
}

//region -------------------- Description content --------------------

interface InstrumentDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: InstrumentGames

}

/** @reactComponent */
function InstrumentDescription({viewDisplay, game,}: InstrumentDescriptionProperties,) {
    const smm1Link = game.getSmm1RouteName(viewDisplay,)
    const smm3dsLink = game.getSmm3dsRouteName(viewDisplay,)
    const smm2Link = game.getSmm2RouteName(viewDisplay,)

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

    readonly viewDisplay: ViewDisplays

    readonly game: InstrumentGames

}

/** @reactComponent */
function InstrumentAsideContent({viewDisplay, game,}: InstrumentAsideContentProperties,) {
    return <div id="instrument-gamesButton-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partialId="smm1Game" routeName={game.getSmm1RouteName(viewDisplay,)} color={game.smm1Color}>
            <GameImage reference={SMM1}/>
        </LinkButton>
        <LinkButton partialId="smm3dsGame" routeName={game.getSmm3dsRouteName(viewDisplay,)} color={game.smm3dsColor}>
            <GameImage reference={SMM3DS}/>
        </LinkButton>
        <LinkButton partialId="smm2Game" routeName={game.getSmm2RouteName(viewDisplay,)} color={game.smm2Color}>
            <GameImage reference={SMM2}/>
        </LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
