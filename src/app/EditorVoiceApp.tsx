import type {EditorVoiceProperties}      from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}             from 'util/collection/GameCollection'

import SubMainContainer          from 'app/_SubMainContainer'
import CardList                  from 'app/withInterpreter/CardList'
import SimpleList                from 'app/withInterpreter/SimpleList'
import {ViewDisplays}            from 'app/withInterpreter/ViewDisplays'
import {EditorVoices}            from 'core/editorVoice/EditorVoices'
import EditorVoiceSoundComponent from 'core/editorVoice/EditorVoiceSound.component'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import {assert, filterGame}      from 'util/utilitiesMethods'

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
        return <SubMainContainer reactKey="editorVoice" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
            <SimpleList reactKey="editorVoice" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="editorVoice" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
        <CardList reactKey="editorVoice" interpreter={appInterpreter}/>
    </SubMainContainer>
}
