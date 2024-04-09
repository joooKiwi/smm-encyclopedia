import 'app/_GameAsideContent.scss'
import './InstrumentApp.scss'

import type {InstrumentAppProperties}    from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}             from 'util/collection/GameCollection'
import type {ReactProperties}            from 'util/react/ReactProperties'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'

import SubMainContainer                             from 'app/_SubMainContainer'
import {InstrumentGames}                            from 'app/property/InstrumentGames'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import LinkButton                                   from 'app/tools/button/LinkButton'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import {Instruments}                                from 'core/instrument/Instruments'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import SimpleSoundComponent                         from 'util/file/sound/component/SimpleSound.component'
import {assert, filterGame}                         from 'util/utilitiesMethods'

class InstrumentAppInterpreter
    implements AppInterpreterWithCardList<Instruments> {

    //region -------------------- Fields --------------------

    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection,) {
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return filterGame(Instruments.CompanionEnum.get.values.toArray(), this.#games,)
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
        const name = enumerable.name
        const englishName = enumerable.englishName

        return <div className="instrument-sounds">{enumerable.sounds.map((sound, index,) =>
            <SimpleSoundComponent key={`instrument sounds #${index} (${englishName})`} file={sound} title={`${name} (instrument #${index})`}/>
        )}</div>
    }

    //endregion -------------------- Card list interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyInstrument (list)',],
    [ViewDisplays.CARD_LIST, 'everyInstrument (card)',],
] as const satisfies readonly ViewAndRouteName[]

const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

/** @reactComponent */
export default function InstrumentApp({viewDisplay, games,}: InstrumentAppProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The InstrumentApp only handle the "simple list" or "card list" as a possible view display.',)

    const titleContent = gameContentTranslation('instrument.all',)
    const appInterpreter = new InstrumentAppInterpreter(games,)

    const game = games.hasSMM2
        ? InstrumentGames.SUPER_MARIO_MAKER_2
        : games.hasSMM1
            ? InstrumentGames.SUPER_MARIO_MAKER
            : InstrumentGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="instrument" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 description={<InstrumentDescription viewDisplay={viewDisplay} game={game}/>}
                                 asideContent={<InstrumentAsideContent viewDisplay={viewDisplay} game={game}/>}>
            <SimpleList reactKey="instrument" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="instrument" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             description={<InstrumentDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<InstrumentAsideContent viewDisplay={viewDisplay} game={game}/>}>
        <CardList reactKey="instrument" interpreter={appInterpreter}/>
    </SubMainContainer>
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

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyInstrument (list)' as const satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyInstrument (card)' as const satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation('instrument.description.intro page', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Link}><GameImage reference={smm1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm3dsLink}><GameImage reference={smm3ds}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={smm2}/></TextOrLink>,
            },)}
            {gameContentTranslation('instrument.description.intro variants', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-variant-description" routeName={smm1Link}><GameImage reference={smm1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-variant-description" routeName={smm3dsLink}><GameImage reference={smm3ds}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-variant-description" routeName={smm2Link}><GameImage reference={smm2}/></TextOrLink>,
            },)}
        </p>
        <p>{gameContentTranslation('instrument.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
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
            <GameImage reference={smm1}/>
        </LinkButton>
        <LinkButton partialId="smm3dsGame" routeName={game.getSmm3dsRouteName(viewDisplay,)} color={game.smm3dsColor}>
            <GameImage reference={smm3ds}/>
        </LinkButton>
        <LinkButton partialId="smm2Game" routeName={game.getSmm2RouteName(viewDisplay,)} color={game.smm2Color}>
            <GameImage reference={smm2}/>
        </LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
