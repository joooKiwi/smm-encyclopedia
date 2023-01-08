import './EntityApp.scss'
import './options/EntityAppOption.scss'

import {lazy} from 'react'

import type {AppProperties}                                        from 'app/AppProperties.types'
import type {EntityAppStates}                                      from 'app/AppStates.types'
import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {EntityAppOption}        from 'app/options/EntityAppOption'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {Entities}               from 'core/entity/Entities'
import {gameContentTranslation} from 'lang/components/translationMethods'

//region -------------------- dynamic imports --------------------

const SimpleSoundComponent = lazy(() => import('util/file/sound/component/SimpleSound.component'))

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

    protected override _createKey() {
        return 'entity'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('Every entities')
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<Entities, EntityAppOption> {
        return new class implements AppInterpreterWithTable<Entities, EntityAppOption> {

            public get iterable() {
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

            public createCardListContent({englishNameInHtml: htmlName, reference, editorVoiceSound: {file: editorVoice1, europeanFile: editorVoice2,},}: Entities,) {
                //TODO encapsulate the voiceSound into a sound interpreter.
                const category = reference.categoryEnglish === '' ? '' : `entityCategory-${reference.categoryEnglish}`//TODO move to the parent container className.
                return <div className={`${category}`}>
                    {editorVoice1 == null ? null : <SimpleSoundComponent file={editorVoice1} title={`${htmlName} - editor voice`}/>}
                    {editorVoice2 == null ? null : <SimpleSoundComponent file={editorVoice2} title={`${htmlName} - editor voice (european)`}/>}
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
                    caption: gameContentTranslation('Every entities'),
                }
            }

            public createTableContent(option: EntityAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: EntityAppOption,) {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
