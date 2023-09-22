import type {CharacterNameProperties}                              from 'app/AppProperties.types'
import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'

import {AbstractCardListApp}     from 'app/withInterpreter/AbstractCardListApp'
import {CharacterNames}          from 'core/characterName/CharacterNames'
import EditorVoiceSoundComponent from 'core/editorVoice/EditorVoiceSound.component'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import {filterGame}              from 'util/utilitiesMethods'

export default class CharacterNameApp
    extends AbstractCardListApp<AppInterpreterWithCardList<CharacterNames>, CharacterNameProperties> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'characterName'
    }

    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyCharacterName (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyCharacterName (card)'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('character name.all',)
    }

    protected override _createUniqueNameOnSimpleList(enumerable: CharacterNames,): string {
        return enumerable.uniqueEnglishName
    }

    protected override _createUniqueNameOnCardList(enumerable: CharacterNames,): string {
        return enumerable.uniqueEnglishName
    }

    protected override _createAppOptionInterpreter() {
        const $this = this

        return new class CharacterNameAppInterpreter implements AppInterpreterWithCardList<CharacterNames> {

            public get content() {
                return filterGame(CharacterNames.values, $this.props.games,)
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent({uniqueEnglishName: name, editorVoiceSoundFileHolder,}: CharacterNames,) {
                return <div className="card-body">
                    <EditorVoiceSoundComponent editorVoiceSound={editorVoiceSoundFileHolder} name={name}/>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------


}