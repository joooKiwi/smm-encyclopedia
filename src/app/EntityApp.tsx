import './EntityApp.scss'
import './options/EntityAppOption.scss'

import {lazy} from 'react'

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from './interpreter/AppInterpreterWithTable'
import type {AppProperties}                                        from './AppProperties.types'
import type {EntityAppStates}                                      from './AppStates.types'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList'
import type {SingleHeaderContent}                                  from './tools/table/SimpleHeader'
import type {ReactElement, ReactElementOrString}                   from '../util/react/ReactProperties'

import {AbstractTableApp}              from './withInterpreter/AbstractTableApp'
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables'
import {Entities}                      from '../core/entity/Entities'
import {EntityAppOption}               from './options/EntityAppOption'
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent'
import {ViewDisplays}                  from './withInterpreter/ViewDisplays'

//region -------------------- dynamic imports --------------------

const SimpleSoundComponent = lazy(() => import('../util/sound/component/SimpleSound.component'))

//endregion -------------------- dynamic imports --------------------

/**
 * @reactComponent
 */
export default class EntityApp
    extends AbstractTableApp<AppInterpreterWithTable<Entities, EntityAppOption>, AppProperties, EntityAppStates> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'entity'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent translationKey="Every entities"/>
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<Entities, EntityAppOption> {
        return new class implements AppInterpreterWithTable<Entities, EntityAppOption> {

            public get iterable(): IterableIterator<Entities> {
                return Entities[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: 4,
                    large: 3,
                    extraLarge: 2,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent({englishNameInHtml: htmlName, reference, editorVoiceSound: {file: editorVoice1, europeanFile: editorVoice2,},}: Entities,): ReactElement {
                //TODO encapsulate the voiceSound into a sound interpreter.
                const category = reference.categoryEnglish === '' ? '' : `entityCategory-${reference.categoryEnglish}`//TODO move to the parent container className.
                return <div className={`${category}`}>
                    {editorVoice1 == null ? EMPTY_REACT_ELEMENT : <SimpleSoundComponent file={editorVoice1} title={`${htmlName} - editor voice`}/>}
                    {editorVoice2 == null ? EMPTY_REACT_ELEMENT : <SimpleSoundComponent file={editorVoice2} title={`${htmlName} - editor voice (european)`}/>}
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => Entities,) {
                EntityAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): readonly EntityAppOption[] {
                return [EntityAppOption.IMAGES,
                    EntityAppOption.NAME,
                    // EntityAppOption.GAME,
                    // EntityAppOption.GAME_STYLE,
                    // EntityAppOption.COURSE_THEME,
                    // EntityAppOption.TIME,
                    EntityAppOption.CATEGORY,
                    EntityAppOption.LIMIT,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: <GameContentTranslationComponent translationKey="Every entities"/>,
                }
            }

            public createTableContent(option: EntityAppOption,): readonly ReactElement[] {
                return option.renderContent
            }

            public createTableHeader(option: EntityAppOption,): | SingleHeaderContent | null {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}