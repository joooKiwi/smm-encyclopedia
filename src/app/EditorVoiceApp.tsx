import 'app/_GameAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './EditorVoiceApp.scss'

import type {Array, NullOr, NullOrString} from '@joookiwi/type'
import type {CollectionHolder}            from '@joookiwi/collection'

import type {EditorVoiceProperties}   from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/ViewDisplays.types'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {TimeCollection}          from 'util/collection/TimeCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import SubMainContainer                             from 'app/_SubMainContainer'
import {EditorVoiceAppOption}                       from 'app/options/EditorVoiceAppOption'
import {EditorVoiceGames}                           from 'app/property/EditorVoiceGames'
import {EditorVoiceTimes}                           from 'app/property/EditorVoiceTimes'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import List                                         from 'app/util/List'
import CardList                                     from 'app/withInterpreter/CardList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import {EditorVoices}                               from 'core/editorVoice/EditorVoices'
import EditorVoiceSound                             from 'core/editorVoice/component/EditorVoiceSound'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {Times}                                      from 'core/time/Times'
import TimeImage                                    from 'core/time/component/TimeImage'
import {Themes}                                     from 'core/theme/Themes'
import ThemeImage                                   from 'core/theme/component/ThemeImage'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {ArrayAsCollection}                          from 'util/collection/ArrayAsCollection'

import ALL =    EditorVoices.ALL
import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

class EditorVoiceAppInterpreter
    implements AppInterpreterWithTable<EditorVoices, EditorVoiceAppOption> {

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
        return new ArrayAsCollection(ALL,).filter(({reference,},) =>
            games.hasAnyIn(reference,)
            && (times.hasAllTimes || times.hasAnyIn(reference,)),)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 3,
            medium: 4,
            large: 6,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: EditorVoices,) {
        return <div className="editorVoices-container">
            <EditorVoiceSound editorVoice={enumerable}/>
        </div>
    }

    //endregion -------------------- Card --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEditorVoice (list)',],
    [ViewDisplays.CARD_LIST, 'everyEditorVoice (card)',],
    [ViewDisplays.TABLE, 'everyEditorVoice (table)',],
] as const satisfies Array<ViewAndRouteName>
const options = EditorVoiceAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function EditorVoiceApp({viewDisplay, games, times,}: EditorVoiceProperties,) {
    const game = games.hasAllGames
        ? EditorVoiceGames.ALL_GAMES
        : games.hasSmm2
            ? EditorVoiceGames.SUPER_MARIO_MAKER_2
            : games.hasSmm1
                ? EditorVoiceGames.SUPER_MARIO_MAKER
                : EditorVoiceGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
    const time = games.hasNotSmm2AndSmm1Or3ds
        ? null
        : times.hasAllTimes
            ? EditorVoiceTimes.ALL_TIMES
            : times.hasDay
                ? EditorVoiceTimes.DAY
                : EditorVoiceTimes.NIGHT

    return <SubMainContainer reactKey="editorVoice" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('editor voice.all',)}
                             description={<EditorVoiceDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<EditorVoiceAsideContent game={times.hasOnlyNight ? null : game} time={time}/>}>
        <SubContent viewDisplay={viewDisplay} games={games} times={times}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games, times,}: Omit<EditorVoiceProperties, 'gameStyles'>,) {
    const appInterpreter = new EditorVoiceAppInterpreter(games, times,)
    const items = appInterpreter.content

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <EditorVoiceList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="editorVoice" interpreter={appInterpreter}/>
    return <Table id="editorVoice-table" items={items} options={options} caption={gameContentTranslation('editor voice.all',)} headersColor="info"/>
}

//region -------------------- List --------------------

interface EditorVoice_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<EditorVoices>

}

/** @reactComponent */
function EditorVoiceList({items,}: EditorVoice_ListProperties,) {
    return <List partialId="editorVoice" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="editorVoice-name" name={it.reference} popoverOrientation="top"/>
            <EditorVoiceSound editorVoice={it}/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------
//region -------------------- Description content --------------------

interface EditorVoiceDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: EditorVoiceGames

}

/** @reactComponent */
function EditorVoiceDescription({viewDisplay, game,}: EditorVoiceDescriptionProperties,) {
    const entity = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName.toLowerCase(),)

    const smm1Link = game.smm1RouteName satisfies NullOrString<PossibleRouteName>
    const smm3dsLink = game.smm3dsRouteName satisfies NullOrString<PossibleRouteName>
    const smm2Link = game.smm2RouteName satisfies NullOrString<PossibleRouteName>

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyEditorVoice (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyEditorVoice (card)' satisfies PossibleRouteName
    const tableLink = viewDisplay === ViewDisplays.TABLE ? null : 'everyEditorVoice (table)' satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation('editor voice.description.intro page',)}
            {gameContentTranslation('editor voice.description.intro games', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Link}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('editor voice.description.intro smm1', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-references-description" routeName={smm1Link}><GameImage reference={SMM1}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-references-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('editor voice.description.intro characters',)}
            {gameContentTranslation('editor voice.description.intro variants', {
                //TODO change the underwater link to a different link
                //TODO change the european link to a different link
                entityLink: <LinkText key="entityLink" partialId="entityLink" routeName="everyEntity" color="primary">{entity}</LinkText>,
                underwaterLink: <LinkText key="underwaterLink" partialId="underwaterEntityLink" routeName="everyEntity" color="primary"><ThemeImage reference={Themes.UNDERWATER}
                                                                                                                                                    isSmallPath/></LinkText>,
                europeanVariantLink: <LinkText key="europeanVariantLink" partialId="europeanEntityLink" routeName="everyEntity" color="primary">{contentTranslation('variant.European',)}</LinkText>,
            },)}
        </p>
        <p>{gameContentTranslation('editor voice.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
            tableLink: <LinkText key="tableLink" partialId="tableLink" routeName={tableLink} color="primary">{contentTranslation('view type.table.singular',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface EditorVoiceAsideContentProperties
    extends ReactProperties {

    readonly game: NullOr<EditorVoiceGames>
    readonly time: NullOr<EditorVoiceTimes>

}

/** @reactComponent */
function EditorVoiceAsideContent({game, time,}: EditorVoiceAsideContentProperties,) {
    return <div id="editorVoice-asideContent-container">
        <GameAsideContent game={game}/>
        {time == null ? null : <div className="d-inline mx-1"/>}
        <TimeAsideContent time={time}/>
    </div>
}

/** @reactComponent */
function GameAsideContent({game,}: Pick<EditorVoiceAsideContentProperties, 'game'>,) {
    if (game == null)
        return null
    return <div id="editorVoice-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="editorVoice-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={game.smm1RouteName} color={game.smm1Color}><GameImage reference={SMM1}/></LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={game.smm3dsRouteName} color={game.smm3dsColor}><GameImage reference={SMM3DS}/></LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}><GameImage reference={SMM2}/></LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function TimeAsideContent({time,}: Pick<EditorVoiceAsideContentProperties, 'time'>,) {
    if (time == null)
        return null
    return <div id="editorVoice-timesButton-container" className="timeAsideContent-container btn-group-vertical btn-group-sm">
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
