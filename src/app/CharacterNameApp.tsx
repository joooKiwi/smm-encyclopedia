import 'core/game/GameAsideContent.scss'

import type {CharacterNameProperties}    from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}             from 'util/collection/GameCollection'
import type {ReactProperties}            from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {CharacterNameGames}                         from 'app/property/CharacterNameGames'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import LinkButton                                   from 'app/tools/button/LinkButton'
import {CharacterNames}                             from 'core/characterName/CharacterNames'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import {Games}                                      from 'core/game/Games'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {assert, filterGame}                         from 'util/utilitiesMethods'

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
const titleContent = gameContentTranslation('character name.all',)
const keyRetriever: (characterName: CharacterNames,) => string = it => it.uniqueEnglishName

/** @reactComponent */
export default function CharacterNameApp({viewDisplay, games,}: CharacterNameProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The CharacterNameApp only handle the "simple list" or "card list" as a possible view display.',)
    const appInterpreter = new CharacterNameAppInterpreter(games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="characterName" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<CharacterNameAsideContent viewDisplay={viewDisplay}/>}>
            <SimpleList reactKey="characterName" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="characterName" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             asideContent={<CharacterNameAsideContent viewDisplay={viewDisplay}/>}>
        <CardList reactKey="characterName" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
    </SubMainContainer>
}

//region -------------------- Aside content --------------------

interface CharacterNameAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

}

const GamePossibilities = Games.Possibilities.get
const allGames = GamePossibilities.ALL_GAMES
const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

function CharacterNameAsideContent({viewDisplay,}: CharacterNameAsideContentProperties,) {
    const characterNameGame = allGames.reduce((isSelected, it) => isSelected && it.isSelected, true,)
        ? CharacterNameGames.ALL_GAMES
        : smm2.isSelected
            ? CharacterNameGames.SUPER_MARIO_MAKER_2
            : smm1.isSelected
                ? CharacterNameGames.SUPER_MARIO_MAKER
                : CharacterNameGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <div id="characterName-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={characterNameGame.getAllRouteName(viewDisplay,)} color={characterNameGame.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="characterName-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={characterNameGame.getSmm1RouteName(viewDisplay,)} color={characterNameGame.smm1Color}>{smm1.renderSingleComponent}</LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={characterNameGame.getSmm3dsRouteName(viewDisplay,)} color={characterNameGame.smm3dsColor}>{smm3ds.renderSingleComponent}</LinkButton>
            <LinkButton partialId="smm2Game" routeName={characterNameGame.getSmm2RouteName(viewDisplay,)} color={characterNameGame.smm2Color}>{smm2.renderSingleComponent}</LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
