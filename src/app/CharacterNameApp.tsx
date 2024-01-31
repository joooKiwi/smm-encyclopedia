import type {CharacterNameProperties}    from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}             from 'util/collection/GameCollection'

import SubMainContainer          from 'app/_SubMainContainer'
import CardList                  from 'app/withInterpreter/CardList'
import SimpleList                from 'app/withInterpreter/SimpleList'
import {ViewDisplays}            from 'app/withInterpreter/ViewDisplays'
import {CharacterNames}          from 'core/characterName/CharacterNames'
import EditorVoiceSoundComponent from 'core/editorVoice/EditorVoiceSound.component'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import {assert, filterGame}      from 'util/utilitiesMethods'

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
        return <SubMainContainer reactKey="characterName" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
            <SimpleList reactKey="characterName" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="characterName" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
        <CardList reactKey="characterName" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
    </SubMainContainer>
}
