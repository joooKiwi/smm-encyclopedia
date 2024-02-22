import 'core/game/GameAsideContent.scss'

import type {EditorVoiceProperties}      from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}             from 'util/collection/GameCollection'
import type {ReactProperties}            from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {EditorVoiceGames}                           from 'app/property/EditorVoiceGames'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import LinkButton                                   from 'app/tools/button/LinkButton'
import {EditorVoices}                               from 'core/editorVoice/EditorVoices'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import {Games}                                      from 'core/game/Games'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {assert, filterGame}                         from 'util/utilitiesMethods'

class EditorVoiceAppInterpreter
    implements AppInterpreterWithCardList<EditorVoices> {

    //region -------------------- Fields --------------------

    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection,) {
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return filterGame(EditorVoices.CompanionEnum.get.values, this.#games,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 3,
            medium: 4,
            large: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumerable: EditorVoices,) {
        return <div className="editorVoices-container">
            <EditorVoiceSoundComponent editorVoiceSound={enumerable.editorVoiceSoundFileHolder} name={enumerable.englishName}/>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEditorVoice (list)',],
    [ViewDisplays.CARD_LIST, 'everyEditorVoice (card)',],
] as const satisfies readonly ViewAndRouteName[]
const titleContent = gameContentTranslation('editor voice.all',)

/** @reactComponent */
export default function EditorVoiceApp({viewDisplay, games,}: EditorVoiceProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The EditorVoiceApp only handle the "simple list" or "card list" as a possible view display.',)
    const appInterpreter = new EditorVoiceAppInterpreter(games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="editorVoice" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<EditorVoiceAsideContent viewDisplay={viewDisplay}/>}>
            <SimpleList reactKey="editorVoice" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="editorVoice" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             asideContent={<EditorVoiceAsideContent viewDisplay={viewDisplay}/>}>
        <CardList reactKey="editorVoice" interpreter={appInterpreter}/>
    </SubMainContainer>
}

//region -------------------- Aside content --------------------

interface EditorVoiceAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

}

const GamePossibilities = Games.Possibilities.get
const allGames = GamePossibilities.ALL_GAMES
const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

function EditorVoiceAsideContent({viewDisplay,}: EditorVoiceAsideContentProperties,) {
    const editorVoiceGame = allGames.reduce((isSelected, it) => isSelected && it.isSelected, true,)
        ? EditorVoiceGames.ALL_GAMES
        : smm2.isSelected
            ? EditorVoiceGames.SUPER_MARIO_MAKER_2
            : smm1.isSelected
                ? EditorVoiceGames.SUPER_MARIO_MAKER
                : EditorVoiceGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <div id="editorVoice-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={editorVoiceGame.getAllRouteName(viewDisplay,)} color={editorVoiceGame.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="editorVoice-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={editorVoiceGame.getSmm1RouteName(viewDisplay,)} color={editorVoiceGame.smm1Color}>{smm1.renderSingleComponent}</LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={editorVoiceGame.getSmm3dsRouteName(viewDisplay,)} color={editorVoiceGame.smm3dsColor}>{smm3ds.renderSingleComponent}</LinkButton>
            <LinkButton partialId="smm2Game" routeName={editorVoiceGame.getSmm2RouteName(viewDisplay,)} color={editorVoiceGame.smm2Color}>{smm2.renderSingleComponent}</LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
