import type {CharacterNameProperties}    from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'

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

    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everyCharacterName (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
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
                return filterGame(CharacterNames.CompanionEnum.get.values, $this.props.games,)
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): DimensionOnList {
                return {
                    default:1,
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

        }()
    }

    //endregion -------------------- Create methods --------------------


}
