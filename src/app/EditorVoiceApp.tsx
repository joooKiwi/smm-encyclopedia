import {AbstractCardListApp} from 'app/withInterpreter/AbstractCardListApp'

import type {EditorVoiceProperties}                                from 'app/AppProperties.types'
import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'

import {EditorVoices}            from 'core/editorVoice/EditorVoices'
import EditorVoiceSoundComponent from 'core/editorVoice/EditorVoiceSound.component'
import {gameContentTranslation}  from 'lang/components/translationMethods'
import {filterGame}              from 'util/utilitiesMethods'

export default class EditorVoiceApp
    extends AbstractCardListApp<AppInterpreterWithCardList<EditorVoices>, EditorVoiceProperties> {

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'editorVoice'
    }

    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyEditorVoice (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyEditorVoice (card)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('editor voice.all')
    }

    protected override _createAppOptionInterpreter() {
        const $this = this

        return new class EditorVoiceAppInterpreter implements AppInterpreterWithCardList<EditorVoices> {

            public get content() {
                return filterGame(EditorVoices.CompanionEnum.get.values, $this.props.games,)
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return null
            }

            public createCardListContent({englishName: name, editorVoiceSoundFileHolder,}: EditorVoices,) {
                return <div className="editorVoices-container">
                    <EditorVoiceSoundComponent editorVoiceSound={editorVoiceSoundFileHolder} name={name}/>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
