import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'routes/everyRoutes.types'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {AbstractCardListApp}     from 'app/withInterpreter/AbstractCardListApp'
import {CharacterNames}          from 'core/characterName/CharacterNames'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import EditorVoiceSoundComponent from 'core/editorVoice/EditorVoiceSound.component'

export default class CharacterNameApp
    extends AbstractCardListApp<AppInterpreterWithCardList<CharacterNames>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'characterName'
    }

    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyCharacterNames (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyCharacterNames (card)'
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

    protected override _createAppOptionInterpreter(): AppInterpreterWithCardList<CharacterNames> {
        return new class implements AppInterpreterWithCardList<CharacterNames> {

            public get iterable() {
                return CharacterNames[Symbol.iterator]()
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

            public createCardListContent({reference: characterName, uniqueEnglishName: name, editorVoiceSound,}: CharacterNames,) {
                return <div className="card-body">
                    <EditorVoiceSoundComponent editorVoiceSound={editorVoiceSound} name={name}/>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------


}