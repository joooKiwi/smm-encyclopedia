import 'app/_GameAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './CharacterNameApp.scss'

import type {Array, NullOr, NullOrString} from '@joookiwi/type'
import {filterByArray}                    from '@joookiwi/collection'

import type {CharacterNameProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {TimeCollection}          from 'util/collection/TimeCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {CharacterNameAppOption}                     from 'app/options/CharacterNameAppOption'
import {CharacterNameGames}                         from 'app/property/CharacterNameGames'
import {CharacterNameTimes}                         from 'app/property/CharacterNameTimes'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import {CharacterNames}                             from 'core/characterName/CharacterNames'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import TimeImage                                    from 'core/time/TimeImage'
import {Times}                                      from 'core/time/Times'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

import ALL =    CharacterNames.ALL
import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

class CharacterNameAppInterpreter
    implements AppInterpreterWithTable<CharacterNames, CharacterNameAppOption> {

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
            && (times.hasAllTimes || times.hasAnyIn(reference,)),)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 4,
            large: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent({uniqueEnglishName: name, editorVoiceSoundFileHolder,}: CharacterNames,) {
        return <div className="card-body">
            <EditorVoiceSoundComponent editorVoiceSound={editorVoiceSoundFileHolder} name={name}/>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('character name.all',) satisfies ReactElementOrString

    public get tableOptions(): Array<CharacterNameAppOption> {
        return [CharacterNameAppOption.NAME,]
    }


    public getAdditionalClass(option: CharacterNameAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: CharacterNames, option: CharacterNameAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: CharacterNameAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyCharacterName (list)',],
    [ViewDisplays.CARD_LIST, 'everyCharacterName (card)',],
    [ViewDisplays.TABLE, 'everyCharacterName (table)',],
] as const satisfies Array<ViewAndRouteName>
const keyRetriever: (characterName: CharacterNames,) => string = it => it.uniqueEnglishName

/** @reactComponent */
export default function CharacterNameApp({viewDisplay, games, times,}: CharacterNameProperties,) {
    const game = games.hasAllGames
        ? CharacterNameGames.ALL_GAMES
        : games.hasSMM2
            ? CharacterNameGames.SUPER_MARIO_MAKER_2
            : games.hasSMM1
                ? CharacterNameGames.SUPER_MARIO_MAKER
                : CharacterNameGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
    const time = games.hasNotSMM2AndSMM1Or3DS
        ? null
        : times.hasAllTimes
            ? CharacterNameTimes.ALL_TIMES
            : times.hasDay
                ? CharacterNameTimes.DAY
                : CharacterNameTimes.NIGHT

    return <SubMainContainer reactKey="characterName" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('character name.all',)}
                             description={<CharacterNameDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<CharacterNameAsideContent game={times.hasOnlyNight ? null : game} time={time}/>}>
        <SubContent viewDisplay={viewDisplay} games={games} times={times}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games, times,}: Omit<CharacterNameProperties, 'gameStyles'>,) {
    const appInterpreter = new CharacterNameAppInterpreter(games, times,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="characterName" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="characterName" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
    return <Table id="characterName-table" interpreter={appInterpreter}/>
}

//region -------------------- Description content --------------------

interface CharacterNameDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays,

    readonly game: CharacterNameGames

}

/** @reactComponent */
function CharacterNameDescription({viewDisplay, game,}: CharacterNameDescriptionProperties,) {
    const smm1Link = game.smm1RouteName satisfies NullOrString<PossibleRouteName>
    const smm3dsLink = game.smm3dsRouteName satisfies NullOrString<PossibleRouteName>
    const smm2Link = game.smm2RouteName satisfies NullOrString<PossibleRouteName>

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyCharacterName (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyCharacterName (card)' satisfies PossibleRouteName

    const mysteryMushroom = OtherWordInTheGames.MYSTERY_MUSHROOM.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.singularEnglishName,)
    const mysteryMushroomAsLowerCase = OtherWordInTheGames.MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.singularEnglishName,)

    return <>
        <p>
            {gameContentTranslation('character name.description.intro page', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Link}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('character name.description.intro references', {
                //TODO: Add a editor "character name" link
                StoryMode: <em key="StoryMode">{OtherWordInTheGames.STORY_MODE.singularNameOnReference}</em>,//TODO: Add a mystery mushroom "character name" link
                mysteryMushroom: <em key="mysteryMushroom (lowercase)" className="mystery-mushroom-image">{mysteryMushroomAsLowerCase}</em>,
                MysteryMushroom: <em key="mysteryMushroom" className="mystery-mushroom-image">{mysteryMushroom}</em>,
                smm1Link: <span key="smm1Link" id="smm1Game-mysteryMushroom-description"><GameImage reference={SMM1}/></span>,
                smm2Link: <span key="smm2Link" id="smm2Game-storyMode-description"><GameImage reference={SMM2}/></span>,
            },)}
        </p>
        <p>{gameContentTranslation('character name.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface CharacterNameAsideContentProperties
    extends ReactProperties {

    readonly game: NullOr<CharacterNameGames>
    readonly time: NullOr<CharacterNameTimes>

}

/** @reactComponent */
function CharacterNameAsideContent({game, time,}: CharacterNameAsideContentProperties,) {
    return <div id="characterName-asideContent-container">
        <GameAsideContent game={game}/>
        {time == null ? null : <div className="d-inline mx-1"/>}
        <TimeAsideContent time={time}/>
    </div>
}

/** @reactComponent */
function GameAsideContent({game,}: Pick<CharacterNameAsideContentProperties, 'game'>,) {
    if (game == null)
        return null
    return <div id="characterName-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="characterName-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={game.smm1RouteName} color={game.smm1Color}><GameImage reference={SMM1}/></LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={game.smm3dsRouteName} color={game.smm3dsColor}><GameImage reference={SMM3DS}/></LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}><GameImage reference={SMM2}/></LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function TimeAsideContent({time,}: Pick<CharacterNameAsideContentProperties, 'time'>,) {
    if (time == null)
        return null
    return <div id="characterName-timesButton-container" className="timeAsideContent-container btn-group-vertical btn-group-sm">
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
