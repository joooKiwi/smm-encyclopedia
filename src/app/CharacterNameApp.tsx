import 'app/_GameAsideContent.scss'
import './CharacterNameApp.scss'

import type {CharacterNameProperties}    from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'
import type {GameCollection}             from 'util/collection/GameCollection'
import type {ReactProperties}            from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {CharacterNameGames}                         from 'app/property/CharacterNameGames'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import LinkButton                                   from 'app/tools/button/LinkButton'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import {CharacterNames}                             from 'core/characterName/CharacterNames'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {assert, filterGame, intersect}              from 'util/utilitiesMethods'

class CharacterNameAppInterpreter
    implements AppInterpreterWithCardList<CharacterNames> {

    //region -------------------- Fields --------------------

    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection,) {
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return filterGame(CharacterNames.CompanionEnum.get.values, this.#games,)
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

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyCharacterName (list)',],
    [ViewDisplays.CARD_LIST, 'everyCharacterName (card)',],
] as const satisfies readonly ViewAndRouteName[]
const keyRetriever: (characterName: CharacterNames,) => string = it => it.uniqueEnglishName

const GamePossibilities = Games.Possibilities.get
const allGames = GamePossibilities.ALL_GAMES
const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

/** @reactComponent */
export default function CharacterNameApp({viewDisplay, games,}: CharacterNameProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The CharacterNameApp only handle the "simple list" or "card list" as a possible view display.',)
    const game = intersect(allGames, games,).length === 3
        ? CharacterNameGames.ALL_GAMES
        : games.hasSMM2
            ? CharacterNameGames.SUPER_MARIO_MAKER_2
            : games.hasSMM1
                ? CharacterNameGames.SUPER_MARIO_MAKER
                : CharacterNameGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <SubMainContainer reactKey="characterName" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('character name.all',)}
                             description={<CharacterNameDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<CharacterNameAsideContent viewDisplay={viewDisplay} game={game}/>}>
        <SubContent viewDisplay={viewDisplay} games={games}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games,}: CharacterNameProperties,){
    const appInterpreter = new CharacterNameAppInterpreter(games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="characterName" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
    return <CardList reactKey="characterName" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
}

//region -------------------- Description content --------------------

interface CharacterNameDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays,

    readonly game: CharacterNameGames

}

/** @reactComponent */
function CharacterNameDescription({viewDisplay, game,}: CharacterNameDescriptionProperties,) {
    const smm1Link = game.getSmm1RouteName(viewDisplay,)
    const smm3dsLink = game.getSmm3dsRouteName(viewDisplay,)
    const smm2Link = game.getSmm2RouteName(viewDisplay,)

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyCharacterName (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyCharacterName (card)' satisfies PossibleRouteName

    const mysteryMushroom = OtherWordInTheGames.MYSTERY_MUSHROOM.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.singularEnglishName,)
    const mysteryMushroomAsLowerCase = OtherWordInTheGames.MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.singularEnglishName,)

    return <>
        <p>
            {gameContentTranslation('character name.description.intro page', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Link}><GameImage reference={smm1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm3dsLink}><GameImage reference={smm3ds}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={smm2}/></TextOrLink>,
            },)}
            {gameContentTranslation('character name.description.intro references', {
                //TODO: Add a editor "character name" link
                StoryMode: <em key="StoryMode">{OtherWordInTheGames.STORY_MODE.singularNameOnReference}</em>,//TODO: Add a mystery mushroom "character name" link
                mysteryMushroom: <em key="mysteryMushroom (lowercase)" className="mystery-mushroom-image">{mysteryMushroomAsLowerCase}</em>,
                MysteryMushroom: <em key="mysteryMushroom" className="mystery-mushroom-image">{mysteryMushroom}</em>,
                smm1Link: <span key="smm1Link" id="smm1Game-mysteryMushroom-description"><GameImage reference={smm1}/></span>,
                smm2Link: <span key="smm2Link" id="smm2Game-storyMode-description"><GameImage reference={smm2}/></span>,
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

    readonly viewDisplay: ViewDisplays

    readonly game: CharacterNameGames

}

/** @reactComponent */
function CharacterNameAsideContent({viewDisplay, game,}: CharacterNameAsideContentProperties,) {
    return <div id="characterName-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={game.getAllRouteName(viewDisplay,)} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="characterName-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={game.getSmm1RouteName(viewDisplay,)} color={game.smm1Color}><GameImage reference={smm1}/></LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={game.getSmm3dsRouteName(viewDisplay,)} color={game.smm3dsColor}><GameImage reference={smm3ds}/></LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.getSmm2RouteName(viewDisplay,)} color={game.smm2Color}><GameImage reference={smm2}/></LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
